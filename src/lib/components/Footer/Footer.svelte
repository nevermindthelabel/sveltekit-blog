<script lang="ts">
	import Img from '@zerodevx/svelte-img';
	import image from '$lib/images/downtown_3024.jpg?run';
</script>

<footer>
	<Img class="background" src={image} alt="downtown phx" loading="lazy" />
</footer>

<style lang="postcss">
	footer {
		width: 100vw;
	}
	@media (min-width: 640px) {
	}
	@media (min-width: 768px) {
	}
	@media (min-width: 1024px) {
		/* :global(.background) {
			object-fit: cover;
			object-position: 73% 50%;
		} */
	}
	@media (min-width: 1280px) {
	}
	@media (min-width: 1536px) {
	}
</style>
