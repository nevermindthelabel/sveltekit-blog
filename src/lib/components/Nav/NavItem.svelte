<script lang="ts">
	export let href: string = '';
	$: activePage = $page.data?.url;
	import { page } from '$app/stores';
</script>

<a
	data-sveltekit-prefetch
	{href}
	class:active={activePage === href}
	aria-current={activePage === href ? 'page' : false}
	on:click
>
	<slot />
</a>

<style lang="postcss">
	a:not(.active) {
		color: var(--text-color);
	}
	a:hover,
	a:focus {
		color: hsl(var(--h), var(--s), var(--l));
	}
	.active {
		font-style: italic;
		font-weight: 600;
		color: hsl(var(--h), var(--s), var(--l));
	}
</style>
