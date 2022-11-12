<script lang="ts">
	import { onMount } from 'svelte';
	export let href: string = '';
	$: activePage = $page.data?.url;
	onMount(() => {});
	import { page } from '$app/stores';
</script>

<a {href} class:active={activePage === href} aria-current={activePage === href ? 'page' : false}>
	<slot />
</a>

<style lang="postcss">
	a:not(.active) {
		color: var(--text-color);
	}
	.active {
		/* font-weight: bold; */
		font-style: italic;
		font-weight: 400;
		color: var(--main-highlight-color);
	}
</style>
