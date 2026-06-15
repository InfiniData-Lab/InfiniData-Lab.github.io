import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, type Plugin } from 'vite';

// In `vite dev`, serve the static Sveltia CMS when the bare /admin/ path is requested.
// GitHub Pages resolves the directory index to index.html automatically in production;
// the dev server does not, so we rewrite the request here.
function adminIndexFallback(): Plugin {
	return {
		name: 'admin-index-fallback',
		configureServer(server) {
			server.middlewares.use((req, _res, next) => {
				if (req.url === '/admin' || req.url === '/admin/') {
					req.url = '/admin/index.html';
				}
				next();
			});
		}
	};
}

export default defineConfig({
	plugins: [adminIndexFallback(), sveltekit()]
});
