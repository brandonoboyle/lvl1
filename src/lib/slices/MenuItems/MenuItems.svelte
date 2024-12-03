<script lang="ts">
	import { isFilled, type Content } from '@prismicio/client';
	import { PrismicImage, PrismicLink } from '@prismicio/svelte';

	import PrismicRichText from '$lib/components/PrismicRichText.svelte';

	export let card: Content.ImageCardsSliceDefaultPrimaryCardsItem;
</script>

<li class="grid md:flex gap-10">
	{#if isFilled.image(card.image)}
		<div class="">
			{#if isFilled.link(card.buttonLink)}

				<PrismicLink field={card.buttonLink} tabindex={-1}>
					<div class="drop-shadow-2xl rounded-xl">
					<PrismicImage field={card.image} sizes="100vw" />
					</div>
				</PrismicLink>

			{:else}
				<div class="drop-shadow-2xl rounded-xl">
				<PrismicImage class="rounded-xl" field={card.image} sizes="100vw" />
				</div>
			{/if}
		</div>
	{/if}
	<div class="leading-relaxed w-full">
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
