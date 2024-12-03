<script lang="ts">
	import { isFilled, type Content } from '@prismicio/client';
	import { PrismicImage, PrismicLink } from '@prismicio/svelte';

	import PrismicRichText from '$lib/components/PrismicRichText.svelte';
	import Bounded from '$lib/components/Bounded.svelte';

	export let card: Content.GridSelectSliceDefaultPrimaryGridgroupItem;
</script>

<li class="relative">
	{#if isFilled.link(card.gridlink)}
		<PrismicLink field={card.gridlink}>
			{#if isFilled.image(card.gridimage)}
				<PrismicImage
					field={card.gridimage}
					class="absolute inset-0 h-full w-full rounded-xl border-tertiary-500 object-cover opacity-60 shadow-2xl hover:border-2"
				/>
			{/if}
		</PrismicLink>
	{/if}
	<Bounded tag="div" yPadding="lg" class="z-10 grid justify-center">
		<div
			class="variant-glass-tertiary h-min w-min rounded-xl px-6 py-4 text-center drop-shadow-2xl md:text-nowrap"
		>
			{#if isFilled.link(card.gridlink)}
				<PrismicLink field={card.gridlink}>
					<PrismicRichText field={card.image_text} />
				</PrismicLink>
			{/if}
		</div>
	</Bounded>
</li>
