import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Treat .md files as components so Markdown content compiles via mdsvex.
	extensions: ['.svelte', '.md'],
	preprocess: [vitePreprocess(), mdsvex({ extensions: ['.md'] })],
	kit: {
		// Full static site generation for GitHub Pages.
		// fallback renders a 404.html so client-side routing still resolves unknown paths.
		adapter: adapter({ fallback: '404.html', strict: true }),
		// infinidata-lab.github.io is an org page served at the domain root, so base stays ''.
		alias: {
			$content: 'src/content',
			$components: 'src/lib/components'
		}
	}
};

export default config;
