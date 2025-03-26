<script lang="ts">
	import type { Content } from '@prismicio/client';

	import PrismicRichText from '$lib/components/PrismicRichText.svelte';


	import Bounded from '$lib/components/Bounded.svelte';
	import SearchBar from '$lib/components/SearchBar.svelte';




	interface Props {
		slice: Content.SearchSlice;
	}

	let { slice } = $props<Props>();
</script>


<div class="flex justify-center">
	<div data-slice-type={slice.slice_type} data-slice-variation={slice.variation} class="w-4/5">
		{#if slice.primary?.search}
			<PrismicRichText field={slice.primary.search} />
		{/if}
		<SearchBar />
	</div>
</div>