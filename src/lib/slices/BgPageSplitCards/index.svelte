<script lang="ts">
	import { isFilled, type Content } from '@prismicio/client';
	import BgCards from '$lib/slices/BgPageSplitCards/BgCards.svelte';
	import PrismicRichText from '$lib/components/PrismicRichText.svelte';
	import { PrismicImage } from '@prismicio/svelte';
	interface Props {
		slice: Content.BgPageSplitCardsSlice;
	}
	let { slice }: Props = $props();
</script>

<div class="relative px-12 pb-12 text-3xl md:text-lg">
	<div class="">
		{#if isFilled.image(slice.primary.background)}
			<PrismicImage
				field={slice.primary.background}
				alt=""
				class="absolute inset-0 left-1/2 h-full w-full -translate-x-1/2 select-none rounded-2xl object-cover px-6 opacity-40 shadow-2xl md:px-10"
			/>
		{/if}
	</div>
	<div class="flex justify-center pb-6">
		<PrismicRichText field={slice.primary.title} />
	</div>
	<ul class="flex w-full flex-col gap-6 md:flex-row">
		{#each slice.primary.card as card}
			<BgCards {card} />
		{/each}
	</ul>
</div>
