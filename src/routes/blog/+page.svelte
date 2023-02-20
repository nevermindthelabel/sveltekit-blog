<script lang="ts">
	import type { PageData } from './$types';
	import Card from '$lib/components/Card/Card.svelte';
	export let data: PageData;
</script>

<div class="content">
	{#each data.thePosts as post}
		<Card>
			<a href="/blog/{post.slug}">
				<h2>{post.title}</h2>
				<p>{post.excerpt}</p>
			</a>
		</Card>
	{/each}
</div>

<style lang="postcss">
</style>
