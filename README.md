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
| Events         | `src/content/events/`        | starts empty; `keynote` is just a `type`         |

Images go in `static/uploads/` (keep them small). Videos → YouTube, code → GitHub, datasets →
HuggingFace; store only the links.

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

> Not yet wired up — these are the remaining steps (they need repo access + a free Cloudflare
> account for the GitHub login).

1. **Pages workflow.** Add `.github/workflows/deploy.yml` (build SvelteKit → `actions/upload-pages-artifact`
   → `actions/deploy-pages`). Set repo **Settings → Pages → Source = GitHub Actions**. This is an org
   page served at the domain root, so no base path is needed.
2. **CMS login.** Register a GitHub OAuth app, deploy the [`sveltia/sveltia-cms-auth`](https://github.com/sveltia/sveltia-cms-auth)
   Cloudflare Worker, and add `backend.base_url: <worker-url>` to `static/admin/config.yml`. Editors
   then visit `/admin/`, “Sign in with GitHub”, and publish — commits trigger a rebuild.

Because content commits land on `main`, every CMS publish redeploys the site automatically.
