import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';
// import preprocess from 'svelte-preprocess';
import {vitePreprocess} from '@sveltejs/kit/vite'
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Ensures both .svelte and .md files are treated as components (can be imported and used anywhere, or used as pages)
	extensions: ['.svelte', '.md'],

	preprocess: [
		// preprocess({ postcss: true }),
		vitePreprocess({ postcss: true }),
		mdsvex({
			extensions: ['.md'],
			rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings]
		})
	],

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
