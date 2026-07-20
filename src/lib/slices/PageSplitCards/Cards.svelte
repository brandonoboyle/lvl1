<script lang="ts">
	import { isFilled, type Content } from '@prismicio/client';
	import { PrismicImage, PrismicLink } from '@prismicio/svelte';

	import PrismicRichText from '$lib/components/PrismicRichText.svelte';

	interface Props {
		card: Content.PageSplitCardsSliceDefaultPrimaryCardsItem;
	}

	let { card }: Props = $props();
</script>

<!--Affects photo size-->
<li class="relative w-full py-11 md:py-16">
	<PrismicLink field={card.cardlink}>
		{#if isFilled.image(card.cardimage)}
			<PrismicImage
				field={card.cardimage}
				class="absolute inset-0 h-full w-full rounded-xl object-cover opacity-40 shadow-2xl"
			/>
		{/if}

		<!--				Inner text box-->

		<div class="rounded-xl bg-ink/60 px-8 py-12 text-xl drop-shadow-2xl">
			<span class="text-center text-chalk"><PrismicRichText field={card.cardtitle} /></span>
			<span class="text-center text-chalk"><PrismicRichText field={card.cardcontent} /></span>
		</div>
	</PrismicLink>
</li>
