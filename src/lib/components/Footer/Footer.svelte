<script lang="ts">
	import Img from '@zerodevx/svelte-img';
	import image from '$lib/images/downtown_3024.jpg?run';
</script>

<footer>
	<Img src={image} alt="downtown phx" />
</footer>

<style lang="postcss">
	footer {
		width: 100vw;
	}
</style>
