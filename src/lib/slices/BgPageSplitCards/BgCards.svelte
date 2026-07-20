<script lang="ts">
	import { isFilled, type Content } from '@prismicio/client';
	import { PrismicImage, PrismicLink } from '@prismicio/svelte';

	import PrismicRichText from '$lib/components/PrismicRichText.svelte';

	interface Props {
		card: Content.BgPageSplitCardsSliceDefaultPrimaryCardItem;
	}

	let { card }: Props = $props();
</script>

<!--Affects photo size-->
<li class="relative max-w-sm lg:flex-1 lg:max-w-none min-w-80 px-6 py-8 md:px-12 md:py-16">
	<PrismicLink field={card.card_link}>
		<!--				Inner text box-->

		<div class="flex flex-col items-center justify-center rounded-xl bg-ink-noise min-h-64 px-8 py-8 text-xl md:px-12 md:py-12 transition-shadow duration-300 ease-in-out [@media(hover:hover)]:hover:shadow-lg [@media(hover:hover)]:hover:shadow-red/40">
			<span class="text-center text-chalk"><PrismicRichText field={card.card_title} /></span>
			<span class="text-center text-chalk"><PrismicRichText field={card.card_content} /></span>
		</div>
	</PrismicLink>
</li>
