<script lang="ts">
	import { isFilled, type Content } from '@prismicio/client';
	import { PrismicImage, PrismicLink } from '@prismicio/svelte';

	import PrismicRichText from '$lib/components/PrismicRichText.svelte';
	import Bounded from '$lib/components/Bounded.svelte';

	export let card: Content.GridSelectSliceDefaultPrimaryGridgroupItem;
</script>

<li class="relative border-tertiary-500 hover:border-2">
	{#if isFilled.link(card.gridlink)}
		<PrismicLink field={card.gridlink}>
			{#if isFilled.image(card.gridimage)}
				<PrismicImage
					field={card.gridimage}
					class="absolute inset-0 h-full w-full rounded-xl object-cover opacity-60 shadow-2xl"
				/>
			{/if}
		</PrismicLink>
	{/if}
	<Bounded tag="div" yPadding="lg" class="z-10 grid justify-center">
		{#if isFilled.link(card.gridlink)}
			<PrismicLink field={card.gridlink}>
				<div
					class="variant-glass-tertiary h-min w-min rounded-xl px-6 py-4 text-center drop-shadow-2xl md:text-nowrap"
				>
					<PrismicRichText field={card.image_text} />
				</div>
			</PrismicLink>
		{/if}
	</Bounded>
</li>
