import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import ts from 'typescript';

// Exercise the actual TypeScript helper without adding a test runner dependency.
const source = readFileSync(new URL('../src/lib/content/publication-stats.ts', import.meta.url), 'utf8');
const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext } }).outputText;
const { conferencePublications } = await import(`data:text/javascript;base64,${Buffer.from(compiled).toString('base64')}`);
const paper = (title, extra = {}) => ({ meta: { title, authors: ['Rihan Hai'], year: 2025, venue: 'SIGMOD', type: 'conference', ...extra } });

test('counts eligible conference outputs, including PVLDB, within the lab period', () => {
  const eligible = [paper('Research'), paper('Demo', { type: 'demo' }), paper('PVLDB', { venue: 'PVLDB', type: 'journal' })];
  const excluded = [
    paper('Preprint', { type: 'preprint' }),
    paper('Workshop', { venue: 'SIGMOD Workshop', type: 'workshop' }),
    paper('PVLDB preprint', { venue: 'PVLDB', type: 'preprint' }),
    paper('Standalone journal', { type: 'journal', venue: 'IEEE TKDE' }),
    paper('Before lab period', { year: 2022 }),
    paper('Future conference', { year: 2027 })
  ];
  assert.deepEqual(conferencePublications([...eligible, ...excluded], 2023, 2026), eligible);
});

test('deduplicates DOI formats, punctuation in titles, and arXiv versions', () => {
  const entries = [
    paper('First', { links: { doi: 'https://doi.org/10.1145/123' } }),
    paper('Renamed first', { links: { doi: ' DOI:10.1145/123 ' } }),
    paper('TranSQL+: Serving LLMs'),
    paper('TranSQL +: serving LLMs.'),
    paper('Third', { links: { arxiv: 'https://arxiv.org/abs/2501.12345v1' } }),
    paper('Third, revised title', { links: { arxiv: 'https://arxiv.org/pdf/2501.12345v3.pdf' } })
  ];
  assert.deepEqual(conferencePublications(entries, 2023, 2026), [entries[0], entries[2], entries[4]]);
});

test('keeps distinct research and demo papers; preprints do not suppress published versions', () => {
  const preprint = paper('TranSQL+', { type: 'preprint', links: { arxiv: 'https://arxiv.org/abs/2501.12345' } });
  const research = paper('TranSQL+', { links: { arxiv: 'https://arxiv.org/abs/2501.12345v2' } });
  const demo = paper('Database as Runtime', { type: 'demo' });
  assert.deepEqual(conferencePublications([preprint, research, demo], 2023, 2026), [research, demo]);
});
