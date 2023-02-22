import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import { imagetools } from '@zerodevx/svelte-img/vite';

const config: UserConfig = {
	plugins: [sveltekit(), imagetools()],
	server: {
		fs: {
			allow: ['.']
		}
	}
};

export default config;
