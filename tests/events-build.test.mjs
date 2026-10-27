import assert from 'node:assert/strict';
import { execFile } from 'node:child_process';
import { cp, mkdtemp, readFile, rm, symlink, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { promisify } from 'node:util';
import test from 'node:test';

const run = promisify(execFile);
const root = fileURLToPath(new URL('../', import.meta.url));

test('CMS event creation preserves the build and generates linked detail pages', { timeout: 180_000 }, async () => {
  // Build an isolated copy so test events never enter the real CMS collection or site output.
  const workspace = await mkdtemp(join(tmpdir(), 'infinidata-events-'));
  const build = async () => {
    try {
      await run(process.execPath, [join(root, 'node_modules/vite/bin/vite.js'), 'build'], {
        cwd: workspace,
        env: { ...process.env, TZ: 'America/Los_Angeles' },
        maxBuffer: 10 * 1024 * 1024,
        timeout: 90_000
      });
    } catch (error) {
      assert.fail(`Building with CMS events failed:\n${error.stderr || error.message}`);
    }
  };
  try {
    for (const path of ['src', 'static', 'package.json', 'svelte.config.js', 'vite.config.ts', 'tsconfig.json']) {
      await cp(join(root, path), join(workspace, path), { recursive: true });
    }
    await symlink(join(root, 'node_modules'), join(workspace, 'node_modules'), 'dir');
    // Also cover the existing collection, which may be empty after events are deleted.
    await build();
    await writeFile(join(workspace, 'src/content/events/cms-empty-event.md'), `---
title: CMS event with empty optional fields
type: talk
startDate: 2000-09-15
endDate: 2000-09-15
people: []
links: null
featured: false
---
`);
    await writeFile(join(workspace, 'src/content/events/cms-workshop.md'), `---
title: CMS workshop with resources
type: workshop
startDate: 2099-09-15
endDate: 2099-09-16
location: Lecture Hall Ampere TU Delft
people:
  - Guest speaker
links:
  slides: https://example.com/slides
  video: https://example.com/video
  recording: https://example.com/recording
  external: https://example.com/workshop
---

## Workshop programme

A **detailed description** from the CMS.
`);
    await writeFile(join(workspace, 'src/content/events/cms-minimal-event.md'), `---
title: CMS event with required fields only
startDate: 2000-10-01
---
`);

    await build();

    const index = await readFile(join(workspace, 'build/events.html'), 'utf8');
    for (const slug of ['cms-empty-event', 'cms-workshop', 'cms-minimal-event']) {
      assert.ok(index.includes(`href="/events/${slug}"`), `${slug} is linked from the events list`);
      const page = await readFile(join(workspace, `build/events/${slug}.html`), 'utf8');
      assert.ok(page.includes('href="/events"'), `${slug} links back to the events list`);
      assert.ok(!page.includes('Invalid Date'));
    }
    const workshop = await readFile(join(workspace, 'build/events/cms-workshop.html'), 'utf8');
    for (const text of ['CMS workshop with resources', '15 September 2099', '16 September 2099',
      'Lecture Hall Ampere TU Delft', 'Guest speaker', 'Workshop programme', '<strong>detailed description</strong>']) {
      assert.ok(workshop.includes(text), `Event detail includes ${text}`);
    }
    for (const resource of ['slides', 'video', 'recording', 'workshop']) {
      assert.ok(workshop.includes(`href="https://example.com/${resource}"`));
    }
    const empty = await readFile(join(workspace, 'build/events/cms-empty-event.html'), 'utf8');
    assert.equal((empty.match(/<time\b/g) ?? []).length, 1, 'A same-day event shows its date once');
    assert.ok(empty.includes('15 September 2000'));
  } finally {
    await rm(workspace, { recursive: true, force: true });
  }
});
