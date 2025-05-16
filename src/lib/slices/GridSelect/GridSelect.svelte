<script lang="ts">
	import { isFilled, type Content } from '@prismicio/client';
	import { PrismicImage, PrismicLink } from '@prismicio/svelte';

	import PrismicRichText from '$lib/components/PrismicRichText.svelte';
	import Bounded from '$lib/components/Bounded.svelte';

	interface Props {
		card: Content.GridSelectSliceDefaultPrimaryGridgroupItem;
	}

	let { card }: Props = $props();
</script>

<!--Affects photo size-->
<li class="relative py-11 hover:variant-glass-secondary rounded-xl md:py-16">
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
	<Bounded tag="div" yPadding="base" class="z-10 grid justify-center">
		{#if isFilled.link(card.gridlink)}
			<PrismicLink field={card.gridlink}>
				<!--				Inner text box-->
				<div
					class="variant-glass-tertiary h-min w-min rounded-xl px-6 py-4 text-center drop-shadow-2xl md:text-nowrap"
				>
					<PrismicRichText field={card.image_text} />
				</div>
			</PrismicLink>
		{/if}
	</Bounded>
</li>
