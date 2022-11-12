<script type="ts">
	import ThemeToggle from '../ThemeToggle/ThemeToggle.svelte';
	import NavItem from './NavItem.svelte';
	import Icons from '../Icons/Icons.svelte';
	const allFiles = import.meta.glob('/src/routes/**/*+page.svelte');
	const pages = Object.keys(allFiles)
		.filter(pages => pages.split('/').at(-2) !== 'routes')
		.map(f => {
			const idealPage = f.split('/').at(-2);
			return { href: `/${idealPage}`, page: idealPage };
		});
	let toggled = false;
</script>

<nav>
	<button class="toggle" on:click={() => (toggled = !toggled)}
		>{#if !toggled}
			<Icons name="hamburger" fill="currentcolor" height="30" width="30" />
		{:else}
			<Icons name="fries" fill="currentcolor" height="30" width="30" />
		{/if}</button
	>
	<ul class="flex">
		<span class="home">
			<NavItem href="/">
				<li>Matt Kilcup</li>
			</NavItem>
		</span>
		{#each pages as { href, page }}
			<NavItem {href}>
				<li class="item {toggled ? 'expanded' : ''} ">{page}</li>
			</NavItem>
		{/each}
	</ul>
	<span class="theme">
		<ThemeToggle />
	</span>
</nav>

<style lang="postcss">
	ul {
		margin: auto;
		display: flex;
		flex-direction: column;
		gap: var(--size-4);
		padding: 0 var(--size-5);
		justify-content: center;
		align-items: center;
	}
	.toggle {
		display: inline-flex;
		width: 30px;
		height: 40px;
		border: none;
		background-color: transparent;
	}
	.item {
		display: none;
	}
	.item.expanded {
		display: flex;
	}
	nav {
		display: grid;
		padding: var(--size-4);
		width: 100vw;
		grid-template-columns: 1fr 10fr 0.5fr;
		align-items: baseline;
	}
	.home {
		margin-right: auto;
	}
	li {
		list-style-type: none;
		font-size: var(--font-size-fluid-2);
	}
	@media (min-width: 640px) {
	}
	@media (min-width: 768px) {
	}
	@media (min-width: 1024px) {
		.toggle {
			display: none;
		}
		nav {
			grid-template-columns: 10fr 0.5fr;
			align-items: center;
			/* align-items: flex-start; */
			/* justify-items: left; */
		}
		ul {
			flex-direction: row;
			align-items: center;
			justify-content: flex-start;
		}
		.item {
			display: flex;
		}
	}
	@media (min-width: 1280px) {
	}
	@media (min-width: 1536px) {
	}
</style>
