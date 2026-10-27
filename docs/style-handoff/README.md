# Infinidata Lab subpage styles

Give your colleague **infinidata.css**. It is a standalone stylesheet extracted from
the website, including its fonts, light/dark colors, typography, responsive layouts,
page headers, cards, buttons, badges, navigation, footer, and article formatting.
The fonts and their licenses are embedded in this one file; no Svelte, npm, CDN,
or separate font downloads are needed to use it.

## Start a page

Copy `infinidata.css` next to your HTML file and add this in `<head>`:

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="infinidata.css">
```

Open **example.html** in a browser for a complete editable starter, including the
brand, responsive navigation, theme button, page content, and footer. It also works
when opened directly from disk. Replace the sample text, links, and page title.

For a minimal content area:

```html
<main>
  <header class="page-head">
    <div class="container">
      <span class="eyebrow">Infinidata Lab</span>
      <h1>Your page title</h1>
      <p>A short introduction to your page.</p>
    </div>
  </header>
  <section class="section">
    <div class="container">
      <div class="prose">
        <h2>About this work</h2>
        <p>Your content, with <a href="#details">a link</a>.</p>
      </div>
    </div>
  </section>
</main>
```

## Reusable classes

| Class | Purpose |
| --- | --- |
| `.container` | Centered content, 1140px maximum outer width, 28px side padding |
| `.page-head` | Page introduction with background glow; use a nested `.container` |
| `.eyebrow`, `.grad-text`, `.muted` | Small section label, gradient text, secondary text |
| `.section`, `.section-head` | Section spacing and a heading/intro row |
| `.grid.grid-2`, `.grid.grid-3` | Responsive two/three-column layout, collapsing on small screens |
| `.card` | Bordered panel; supports `h3`, `p`, `.ic`, `.tagline`, `.card-links` |
| `.btn.btn-primary`, `.btn.btn-ghost` | Primary and secondary link/button styles |
| `.btn-sm`, `.icon-btn` | Compact button and square icon button |
| `.tags`, `.tag`, `.tag.venue`, `.tag.award` | Badge group and badge variants |
| `.prose` | Article text with paragraph, heading, list, link, code, and quote styles |
| `.cta-band` | Highlighted call-to-action panel |
| `.nav`, `.brand`, `.footer` | Page shell; follow the markup in `example.html` |

The stylesheet applies a page-wide reset and base typography. Load your own CSS
**after** it for page-specific layouts. Use `.prose` around long-form content: the
base reset removes paragraph spacing and link underlines, and `.prose` restores
the website's article formatting. The CSS does not supply HTML, icons, images,
page-specific components, or interaction code; the starter includes the small
scripts needed for its navigation and theme controls.

## Theme and browser support

The default theme follows the visitor's operating system. To force a theme, use
`<html data-theme="light">` or `<html data-theme="dark">`. The starter remembers
manual changes using the same `theme` browser-storage key as the main website;
storage is shared only when pages are hosted on the same origin.

Use a modern browser with support for CSS `light-dark()`, `color-mix()`, variable
fonts, and `backdrop-filter`. If your hosting policy restricts font sources,
allow `data:` in its `font-src` policy for the embedded fonts.

## Refresh the export (website maintainers)

From the website repository, after installing its dependencies, run:

```sh
npm run export:styles
```

This regenerates `infinidata.css` from `src/app.css` and the `Brand`, `Nav`,
`Footer`, and `Prose` components. It includes every normal font subset referenced
by the site's three Fontsource imports. Component-local selectors are qualified
where needed so, for example, footer heading styles do not affect other headings.

The stylesheet is a snapshot of the source at export time. The existing website
continues to use its original sources; it does not import this exported file.
