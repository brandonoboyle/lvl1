<script lang="ts">
	import type { Content } from '@prismicio/client';

	import PrismicRichText from '$lib/components/PrismicRichText.svelte';

	import BgSearch from '$lib/components/bgsearch.svelte';

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
		<BgSearch />
	</div>
</div>