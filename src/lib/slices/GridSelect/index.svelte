<script lang="ts">
	import { type Content } from '@prismicio/client';
	import GridSelect from '$lib/slices/GridSelect/GridSelect.svelte';





	export let slice: Content.GridSelectSlice;
</script>

<div class="">
	<ul class="grid grid-cols-2 gap-8 px-8">
		{#each slice.primary.gridgroup as card}
			<GridSelect {card} />
		{/each}
	</ul>
</div>
