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


<Bounded tag="div" yPadding="sm" class="relative p-4">
	<div data-slice-type={slice.slice_type} data-slice-variation={slice.variation} class="">
		{#if slice.primary?.search}
			<PrismicRichText field={slice.primary.search} />
		{/if}
		<SearchBar />
	</div>
</Bounded>