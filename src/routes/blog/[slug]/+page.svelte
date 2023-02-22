<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	console.log(data);
	type C = $$Generic<typeof SvelteComponentTyped<any, any, any>>;
	$: component = data.component as unknown as C;
</script>

<div class="content">
	<h1>thing</h1>
	<svelte:component this={component} />
</div>
