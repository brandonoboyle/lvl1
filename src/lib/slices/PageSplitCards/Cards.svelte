<script lang="ts">
	import { isFilled, type Content } from '@prismicio/client';
	import { PrismicImage, PrismicLink } from '@prismicio/svelte';

	import PrismicRichText from '$lib/components/PrismicRichText.svelte';
	import Bounded from '$lib/components/Bounded.svelte';

	interface Props {
		card: Content.PageSplitCardsSliceDefaultPrimaryCardsItem;
	}

	let { card }: Props = $props();
</script>

<!--Affects photo size-->
<li class="relative py-11 md:py-1">
	<PrismicLink field={card.cardlink}>
		{#if isFilled.image(card.cardimage)}
			<PrismicImage
				field={card.cardimage}
				class="absolute inset-0 h-full w-full rounded-xl object-cover opacity-50 shadow-2xl"
			/>
		{/if}

		<Bounded tag="div" yPadding="sm" class="z-10 grid justify-center">
			<!--				Inner text box-->

			<div class="grid w-96 max-w-md gap-4 rounded-xl px-6 py-4 drop-shadow-2xl">
				<span class="text-error-300"><PrismicRichText field={card.cardtitle} /></span>
				<PrismicRichText field={card.cardcontent} />
			</div>
		</Bounded>
	</PrismicLink>
</li>
