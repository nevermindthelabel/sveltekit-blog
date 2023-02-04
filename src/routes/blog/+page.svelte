<script lang="ts">
	import type { PageData } from './$types';
	import Card from '$lib/components/Card/Card.svelte';
	export let data: PageData;
</script>

{#each data.thePosts as post}
	<Card>
		<h2>{post.title}</h2>
		<p>{post.excerpt}</p>
	</Card>
{/each}

<style lang="postcss">
</style>
