<script lang="ts">
	import { isFilled, type Content } from '@prismicio/client';
	import { PrismicImage, PrismicLink } from '@prismicio/svelte';

	import PrismicRichText from '$lib/components/PrismicRichText.svelte';

	interface Props {
		card: Content.ImageCardsSliceDefaultPrimaryCardsItem;
	}

	let { card }: Props = $props();
</script>

<li class="grid w-full gap-10 drop-shadow-2xl md:flex">
	{#if isFilled.image(card.image)}
		<div class="">
			{#if isFilled.link(card.buttonLink)}
				<PrismicLink field={card.buttonLink} tabindex={-1}>
					<PrismicImage class="" field={card.image} sizes="" />
				</PrismicLink>
			{:else}
				<PrismicImage class="rounded-xl drop-shadow-2xl" field={card.image} sizes="" />
			{/if}
		</div>
	{/if}
	<div class="w-full leading-relaxed">
		<PrismicRichText field={card.text} />
	</div>
	{#if isFilled.link(card.buttonLink)}
		<div>
			<PrismicLink field={card.buttonLink} class="font-semibold">
				{card.buttonText || 'More Info'}
			</PrismicLink>
		</div>
	{/if}
</li>
