<script lang="ts">
	import type { Content } from '@prismicio/client';

	import PrismicRichText from '$lib/components/PrismicRichText.svelte';


	import Bounded from '$lib/components/Bounded.svelte';
	import SearchBar from '$lib/components/SearchBar.svelte';




	export let slice: Content.SearchSlice;
</script>


<Bounded tag="div" yPadding="sm" class="relative">
<div data-slice-type={slice.slice_type} data-slice-variation={slice.variation} class="">
<!--	Placeholder component for {slice.slice_type} (variation: {slice.variation}) Slices-->
	<PrismicRichText field={slice.primary.search} />
	<!--<SearchBar />-->

<SearchBar />

</div>
</Bounded>

