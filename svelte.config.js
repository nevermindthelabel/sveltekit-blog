import mdsvexConfig from './mdsvex.config.js';
import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],

	// Ensures both .svelte and .md files are treated as components (can be imported and used anywhere, or used as pages)
	preprocess: [vitePreprocess({ postcss: true }), mdsvex(mdsvexConfig)],

	kit: {
		adapter: adapter(),
		prerender: {
			entries: [
				'*',
				'/api/posts/category/*',
				'/api/posts/page/*',
				'/blog/category/*/page',
				'/blog/category/*/page/*',
				'/blog/category/page/*',
				'/blog/page/*'
			]
		}
	}
};

export default config;
