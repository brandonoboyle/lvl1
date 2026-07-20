<script lang="ts">
	import { type Content } from '@prismicio/client';
	import GridSelect from '$lib/slices/GridSelect/GridSelect.svelte';

	interface Props {
		slice: Content.GridSelectSlice;
	}

	let { slice }: Props = $props();
</script>

<div class="bg-ink-noise">
	<!-- <ul class="grid grid-cols-2 gap-6 p-4 px-6 md:px-10"> -->
	<ul class="grid grid-cols-2 gap-6 p-4 z-10 px-6 md:px-10">
		{#each slice.primary.gridgroup as card}
			<GridSelect {card} />
		{/each}
	</ul>
	
</div>
