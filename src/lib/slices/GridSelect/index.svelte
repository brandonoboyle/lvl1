<script lang="ts">
	import { type Content } from '@prismicio/client';
	import GridSelect from '$lib/slices/GridSelect/GridSelect.svelte';
	import Bounded from '$lib/components/Bounded.svelte';

	interface Props {
		slice: Content.GridSelectSlice;
	}

	let { slice }: Props = $props();
</script>

<div class="bg-ink-noise px-6 md:px-10">
	<Bounded tag="div" yPadding="sm">
		<ul class="grid grid-cols-2 gap-6">
			{#each slice.primary.gridgroup as card}
				<GridSelect {card} />
			{/each}
		</ul>
	</Bounded>
</div>
