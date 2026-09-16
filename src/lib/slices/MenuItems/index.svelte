<script lang="ts">
	import { isFilled, asText, type Content } from '@prismicio/client';
	import { PrismicText } from '@prismicio/svelte';

	import MenuItems from './MenuItems.svelte';
	import Heading from '$lib/components/Heading.svelte';
	import { websiteMenuKey } from '$lib/menuStock';
	import { menuStock, startMenuStockPolling } from '$lib/menuStock.svelte';

	interface Props {
		slice: Content.ImageCardsSlice;
	}

	let { slice }: Props = $props();

	startMenuStockPolling();

	// ponytail: an 86'd card with no image, price, text or notes is a Prismic
	// placeholder ("Currently Unavailable. Sorry!"), not a real menu item.
	// Matching on emptiness instead of on the title survives a copy edit.
	const isPlaceholder = (card: Content.ImageCardsSliceDefaultPrimaryCardsItem) =>
		card.remove_items === true &&
		!isFilled.image(card.image) &&
		!isFilled.richText(card.price) &&
		!isFilled.richText(card.text) &&
		!isFilled.richText(card.notes);

	const visibleCards = $derived(slice.primary.cards.filter((card) => !isPlaceholder(card)));

	const sectionId = isFilled.richText(slice.primary.heading)
		? asText(slice.primary.heading)
				.toLowerCase()
				.replace(/[^a-z0-9]+/g, '-')
				.replace(/(^-|-$)/g, '')
		: undefined;
</script>

<div class="bg-ink-noise relative grid scroll-mt-40 gap-12 p-4" id={sectionId}>
	{#if isFilled.richText(slice.primary.heading)}
		<Heading
			tag="h2"
			class="flex flex-col items-center justify-center rounded-xl py-2 text-center font-display font-black text-chalk drop-shadow-2xl"
		>
			<PrismicText field={slice.primary.heading} />
		</Heading>
	{/if}
	<ul class="grid gap-12 rounded-xl p-8 drop-shadow-2xl lg:grid-cols-2">
		{#each visibleCards as card, index}
			{@const stock = menuStock.byKey[websiteMenuKey(asText(card.title))]}
			<MenuItems
				{card}
				unavailable={card.remove_items === true ||
					stock?.unavailable === true ||
					(menuStock.preview && index === 0)}
				isNew={stock?.isNew === true || (menuStock.preview && index <= 1)}
			/>
		{/each}
	</ul>
</div>
