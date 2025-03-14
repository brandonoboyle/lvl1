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
<li class="relative w-full px-12 py-11 md:py-16">
	<PrismicLink field={card.card_link}>
		<!--				Inner text box-->

		<div class="rounded-xl px-8 py-16 text-xl drop-shadow-2xl bg-surface-800">
			<span class="text-center text-error-100"><PrismicRichText field={card.card_title} /></span>
			<span class="text-center"><PrismicRichText field={card.card_content} /></span>
		</div>
	</PrismicLink>
</li>
