<script lang="ts">
	import { theme } from '$lib/stores';
</script>

<div class="card" data-theme={$theme.mode}>
	<slot />
</div>

<style lang="postcss">
	/* .card[data-theme='dark'] {
		box-shadow: 0 2px 4px -1px hsl(var(--h), var(--s), var(--l)),
			0 4px 5px 0 hsl(var(--h), var(--s), var(--l)), 0 1px 10px 0 hsl(var(--h), var(--s), var(--l));
	} */
	.card {
		/* background-color: hsl(calc(var(--h) / 1), calc(var(--s) * 0.25), calc(var(--l) / 1)); */
		border-radius: var(--radius-3);
		padding: var(--size-fluid-3);
		margin: 1em 0;
	}

	/* .card[data-theme='dark']:hover {
		--shadow-color: 17 87% 81%;
		--shadow-strength: 1%;
		box-shadow: var(--shadow-4);
	}
	.card[data-theme='light']:hover {
		box-shadow: var(--shadow-3);
	} */
</style>
