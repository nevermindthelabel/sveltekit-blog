<script type="ts">
	import { onMount } from 'svelte';
	import Icon from '$lib/components/Icons/Icons.svelte';
	import ThemeToggle from '../ThemeToggle/ThemeToggle.svelte';
	import NavItem from './NavItem.svelte';
	import Icons from '../Icons/Icons.svelte';
	const allFiles = import.meta.glob('/src/routes/**/*+page.svelte');
	const pages = Object.keys(allFiles)
		.filter(pages => pages.split('/').at(-2) !== 'routes')
		.map(f => {
			const idealPage = f.split('/').at(-2);
			if (idealPage === 'routes') {
				return { href: '/', page: 'home' };
			} else {
				return { href: `/${idealPage}`, page: idealPage };
			}
		});
	// let initialColor = '';
	onMount(() => {
		// initialColor = getComputedStyle(document.documentElement).getPropertyValue('--text-1');
		// console.log(initialColor);
	});
	// $: console.log(document?.querySelector('.color')?.value);
	// afterNavigate((p) => console.log(p));
	// const colorPickerChange = e => {
	// 	// console.log(e.target.value);
	// 	// console.log(getComputedStyle(document.body));
	// 	const styles = getComputedStyle(document.body).getPropertyValue('--text-1');
	// 	// console.log(styles);
	// 	document.documentElement.style.setProperty('--text-1', e.currentTarget?.value);
	// };
</script>

<nav>
	<a href="/" class="home">
		<span> Matt Kilcup </span>
	</a>
	<button class="toggle"
		><Icons name="hamburger" fill="currentcolor" height="30" width="30" /></button
	>
	{#each pages as { href, page }}
		<NavItem {href}>
			<li class={href}>{page}</li>
		</NavItem>
	{/each}
	<ThemeToggle />
	<!-- <input type="color" class="color" on:input={colorPickerChange} bind:value={initialColor} /> -->
</nav>

<style lang="postcss">
	nav {
		padding: var(--size-4);
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: var(--size-4);
		justify-content: flex-end;
		width: 100vw;
	}
	.home {
		margin-right: auto;
	}
	li {
		list-style-type: none;
	}
	button {
		cursor: pointer;
	}
	@media (min-width: 640px) {
	}
	@media (min-width: 768px) {
		.toggle {
			display: none;
		}
	}
	@media (min-width: 1024px) {
	}
	@media (min-width: 1280px) {
	}
	@media (min-width: 1536px) {
	}
</style>
