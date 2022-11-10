import { writable } from 'svelte/store';

//eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createWritableStore = (key: string, initialValue: any): any => {
	const { set, subscribe } = writable(initialValue);

	return {
		subscribe,
		set,
		useLocalStorage: () => {
			const json = localStorage.getItem(key);
			if (json) {
				set(JSON.parse(json));
			}

			subscribe(currentVal => {
				localStorage.setItem(key, JSON.stringify(currentVal));
			});
		}
	};
};

export const theme = createWritableStore('theme', { mode: 'dark', color: 'svelteOrange' });
export const currentPage = writable('');
export const isMenuOpen = writable(false);
