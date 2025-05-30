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
<li class="relative w-full px-6 py-8 md:px-12 md:py-16">
	<PrismicLink field={card.card_link}>
		<!--				Inner text box-->

		<div class="flex flex-col items-center justify-center rounded-xl bg-surface-800 min-h-64 min-w-[280px] max-w-[400px] px-8 py-8 text-xl md:px-12 md:py-12 transition-shadow duration-300 ease-in-out [@media(hover:hover)]:hover:shadow-lg [@media(hover:hover)]:hover:shadow-tertiary-600">
			<span class="text-center bg-gradient-to-br from-primary-500 to-tertiary-400 box-decoration-clone bg-clip-text text-transparent"><PrismicRichText field={card.card_title} /></span>
			<span class="text-center"><PrismicRichText field={card.card_content} /></span>
		</div>
	</PrismicLink>
</li>
