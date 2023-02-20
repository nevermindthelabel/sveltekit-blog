<script lang="ts">
	import '../app.postcss';
	import '../app.postcss';
	import '../base.css';
	import Nav from '$lib/components/Nav/Nav.svelte';
	import Footer from '$lib/components/Footer/Footer.svelte';
	import { theme, currentPage } from '$lib/stores';
	import { onMount } from 'svelte';
	let localTheme;
	onMount(() => {
		if (!('theme' in localStorage)) {
			theme.useLocalStorage();
			if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
				localTheme = 'dark';
				document.documentElement.dataset.theme = 'dark';
				theme.set({ ...$theme, mode: 'dark' });
			} else {
				document.documentElement.dataset.theme = 'light';
				theme.set({ ...$theme, mode: 'light' });
			}
		} else {
			theme.useLocalStorage();
		}
	});
</script>

<svelte:head>
	<script>
		if (!('theme' in localStorage)) {
			if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
				document.documentElement.dataset.theme = 'dark';
				document.cookie = 'theme=dark;path=/;expires=Fri, 31 Dec 9999 23:59:59 GMT;';
			} else {
				document.documentElement.dataset.theme = 'dark';
				document.cookie = 'theme=light;path=/;expires=Fri, 31 Dec 9999 23:59:59 GMT;';
			}
		} else {
			let data = localStorage.getItem('theme');
			if (data) {
				data = JSON.parse(data);
				document.documentElement.dataset.theme = data.mode;
			}
		}
	</script>
</svelte:head>

<Nav />

<main>
	<slot />
</main>
<Footer />

<style lang="postcss">
	main {
		display: flex;
		justify-content: center;
	}
</style>
