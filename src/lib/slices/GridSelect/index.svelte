<script lang="ts">
	import { type Content } from '@prismicio/client';
	import GridSelect from '$lib/slices/GridSelect/GridSelect.svelte';

	interface Props {
		slice: Content.GridSelectSlice;
	}

	let { slice }: Props = $props();
</script>

<div class="">
	<ul class="grid grid-cols-2 gap-4 p-4">
		{#each slice.primary.gridgroup as card}
			<GridSelect {card} />
		{/each}
	</ul>
</div>
