<script lang="ts">
	import type { Content } from '@prismicio/client';
	import Cards from '$lib/slices/PageSplitCards/Cards.svelte';
	import PrismicRichText from '$lib/components/PrismicRichText.svelte';

	interface Props {
		slice: Content.PageSplitCardsSlice;
	}

	let { slice }: Props = $props();
</script>

<div class="flex w-full flex-col px-6 pb-12 text-3xl md:text-lg">
	<div class="flex justify-center pb-6">
		<PrismicRichText field={slice.primary.title} />
	</div>
	<ul class="flex flex-col justify-center gap-12 md:flex-row">
		{#each slice.primary.cards as card}
			<Cards {card} />
		{/each}
	</ul>
</div>
