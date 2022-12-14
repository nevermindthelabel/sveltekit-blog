// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function toggleTheme(theme: any, $theme: any): void {
	if ($theme.mode === 'light') {
		theme.set({ ...$theme, mode: 'dark' });
		updateDocument('theme', 'dark', 'light');
	} else {
		theme.set({ ...$theme, mode: 'light' });
		updateDocument('theme', 'light', 'dark');
	}
}

function updateDocument(name: string, klass: string, other: string) {
	document.cookie = `${name}=${klass};path=/;expires=Fri, 31 Dec 9999 23:59:59 GMT`;

	const currentTheme = document.documentElement.dataset.theme;
	document.documentElement.dataset.theme = currentTheme === 'dark' ? 'light' : 'dark';
}
