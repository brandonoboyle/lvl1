<script lang="ts">
	import { isFilled, type Content } from '@prismicio/client';
	import { PrismicImage, PrismicLink } from '@prismicio/svelte';

	import PrismicRichText from '$lib/components/PrismicRichText.svelte';
	import Heading from '$lib/slices/Hero/Heading.svelte';

	import Bounded from '$lib/components/Bounded.svelte';

	interface Props {
		card: Content.CarouselSliceDefaultPrimaryCarouselItemsItem;
	}

	let { card }: Props = $props();
</script>

<!--This should be the creation of the card to be used in carousel-->
<div>
<section class="relative drop-shadow-2xl">
	{#if isFilled.image(card.background)}
		<PrismicImage
			field={card.background}
			alt=""
			class="scale-75 rounded-2xl pointer-events-none absolute inset-0 h-full select-none object-cover opacity-50 shadow-2xl"
		/>
	{/if}
	<Bounded tag="div" yPadding="lg" class="relative">
		<div class="grid justify-items-center gap-8">
			<div class="max-w-2xl space-y-16 py-6 text-center">
				<PrismicRichText
					field={card.content}
					components={{
						heading1: Heading
					}}
				/>
			</div>
		</div>
	</Bounded>
</section>
</div>