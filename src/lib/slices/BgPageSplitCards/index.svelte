<script lang="ts">
	import { isFilled, type Content } from '@prismicio/client';
	import BgCards from '$lib/slices/BgPageSplitCards/BgCards.svelte';
	import { PrismicImage } from '@prismicio/svelte';
	import PrismicRichText from '$lib/components/PrismicRichText.svelte';
	interface Props {
		slice: Content.BgPageSplitCardsSlice;
	}
	let { slice }: Props = $props();
</script>

<div class="pb-12 px-10">
	<div class="relative w-full px-12 text-3xl md:text-lg">
		<div class="">
			{#if isFilled.image(slice.primary.background)}
				<PrismicImage
					field={slice.primary.background}
					alt=""
					class="absolute -z-10 inset-0 left-1/2 h-full w-full -translate-x-1/2 select-none rounded-xl object-cover opacity-40"
				/>
				<div
					class="absolute inset-0 left-1/2 h-full w-full -translate-x-1/2 bg-gradient-to-br from-tertiary-400/30 to-secondary-400/30 via-surface-400/30 mix-blend-overlay rounded-xl"
				></div>
			{/if}
		</div>
		<ul class="flex w-full flex-col lg:flex-row md:gap-6">
			{#each slice.primary.card as card}
				<BgCards {card} />
			{/each}
		</ul>
		<div class="flex justify-end text-sm">
			<PrismicRichText field={slice.primary.title} />
		</div>
	</div>
</div>
