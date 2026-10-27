# Infinidata Lab — website

The website for the [Infinidata Lab](https://infinidata-lab.github.io/) at TU Delft, led by
Dr. Rihan Hai. Built as a static **SvelteKit** site with a no-code **Sveltia CMS** admin, deployed
free on **GitHub Pages**.

- **Framework:** SvelteKit (Svelte 5) + `@sveltejs/adapter-static` — fully prerendered.
- **Content:** Markdown + YAML frontmatter in `src/content/`, rendered with `mdsvex`.
- **Admin:** Sveltia CMS at `/admin` — add people, projects, publications, blog posts, and events
  without touching code.
- **Fonts/icons:** self-hosted (Fontsource + `@tabler/icons-svelte`) — no external CDNs at runtime.
- **Theme:** light/dark, follows the visitor's OS by default, with a manual toggle.

## Develop

```sh
npm install
npm run dev          # http://localhost:5173
npm run build        # static output → build/
npm run preview      # serve the production build
npm run check        # type-check
```

## Editing content

### Sharing the website styles

The [standalone style handoff](docs/style-handoff/README.md) contains a single CSS
file with embedded fonts and an editable HTML starter for matching subpages.
Run `npm run export:styles` to refresh the CSS from the website's source styles.

### Locally (no accounts, no credentials)

1. `npm run dev`
2. Open <http://localhost:5173/admin/> in a Chromium-based browser.
3. Click **“Work with Local Repository”** and select this project's folder.
4. Add or edit entries — Sveltia writes Markdown straight into `src/content/**`. The dev server
   hot-reloads.

You can also edit the Markdown files by hand; the frontmatter fields are documented in
`static/admin/config.yml`.

### Content model

| Collection     | Folder                       | Notes                                            |
| -------------- | ---------------------------- | ------------------------------------------------ |
| People         | `src/content/people/`        | `role` groups them on `/people` (PI shows large) |
| Projects       | `src/content/projects/`      | `featured` ones appear on the homepage           |
| Publications   | `src/content/publications/`  | filterable by type & research pillar             |
| Blog posts     | `src/content/blog/`          | sorted by `date`                                 |
| News           | `src/content/news/`          | three newest featured items appear on the homepage |
| Events         | `src/content/events/`        | starts empty; `keynote` is just a `type`         |

Images go in `static/uploads/` (keep them small). Videos → YouTube, code → GitHub, datasets →
HuggingFace; store only the links.

### Homepage news and project publications

- In **News & announcements**, add a dated summary and choose News, Publication, Event, or Award.
  An optional link can point to a project, publication, blog post, or external event page.
  **Show on homepage** selects entries for “Fresh from the lab”; the three newest appear.
  Announcements are editorial selections, so adding a publication or event alone does not create news.
- In **Projects → Related publications**, select up to five directly associated papers. These are
  stored as publication slugs in the project's Markdown, so titles and links stay in sync with the
  Publications collection. An empty selection hides the related-publications section.
- Publication `year` follows the conference edition for conference papers; TranSQL+ and WaveStitch
  are SIGMOD 2026 papers whose PACMMOD records were published in 2025. Keep one entry per paper,
  using the published DOI or PDF under Links. Include an arXiv link only while no published
  version is available, and remove it once a published version is confirmed.
- **Site settings → Homepage** controls the news headings and publication-statistic wording.
  The count is calculated from unique conference records since the configured year. See the
  [publication audit](docs/publication-audit.md) for the 20 counted papers, the narrower
  SIGMOD/VLDB/ICDE subtotal, exclusions, and sources.

## Project structure

```
src/
  content/<collection>/*.md   content (edited via the CMS)
  lib/
    content/                  loaders (import.meta.glob) + types
    components/               Nav, Footer, cards, Prose, ...
    config.ts                 site metadata, nav, internal author names
  routes/                     pages (+ [slug] detail routes)
  app.css                     design tokens + base styles
static/
  admin/                      Sveltia CMS (index.html + config.yml)
  uploads/                    CMS-uploaded images
design-mockups/               static HTML design reference (not part of the build)
```

## Deploying to GitHub Pages

Every push to `main` triggers the [deployment workflow](.github/workflows/deploy.yaml).
It installs Node.js 20 and the npm dependencies, builds the static site into `build/`,
and publishes that output with GitHub Pages. The repository's Pages source is **GitHub Actions**.
This is an organisation site served at the domain root, so no base path is needed.

CMS authentication is configured in `static/admin/config.yml`. Editors visit `/admin/`,
sign in with GitHub, and publish. Content commits land on `main` and trigger the same
deployment workflow. Check the repository's Actions tab for build and deployment status.
