<script lang="ts">
	import type { Content } from '@prismicio/client';
	import Cards from '$lib/slices/PageSplitCards/Cards.svelte';
	import PrismicRichText from '$lib/components/PrismicRichText.svelte';

	interface Props {
		slice: Content.PageSplitCardsSlice;
	}

	let { slice }: Props = $props();
</script>

<div class="w-full bg-ink-noise px-10 pb-12 text-3xl text-chalk md:text-lg">
	<div class="flex justify-center pb-6">
		<PrismicRichText field={slice.primary.title} />
	</div>
	<ul class="flex w-full flex-col gap-6 md:flex-row">
		{#each slice.primary.cards as card}
			<Cards {card} />
		{/each}
	</ul>
</div>
