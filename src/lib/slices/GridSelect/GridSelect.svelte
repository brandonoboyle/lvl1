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
<li class="relative rounded-xl py-11 md:py-16 [@media(hover:hover)]:hover:shadow-lg [@media(hover:hover)]:hover:shadow-tertiary-600">
	{#if isFilled.link(card.gridlink)}
		<PrismicLink field={card.gridlink}>
			{#if isFilled.image(card.gridimage)}
				<PrismicImage
					field={card.gridimage}
					class="absolute inset-0 h-full w-full rounded-xl object-cover opacity-80 shadow-2xl"
				/>
				<div
					class="absolute inset-0 left-1/2 h-full w-full -translate-x-1/2 rounded-xl bg-gradient-to-br from-surface-700/30 via-tertiary-800/30 to-surface-700/30 mix-blend-overlay"
				></div>
			{/if}
		</PrismicLink>
	{/if}
	<Bounded tag="div" yPadding="base" class="z-10 grid justify-center">
		{#if isFilled.link(card.gridlink)}
			<PrismicLink field={card.gridlink}>
				<!--				Inner text box-->
				<div
					class="h-min w-min rounded-xl bg-gradient-to-br from-tertiary-600 to-secondary-600 px-6 py-4 text-center drop-shadow-2xl md:text-nowrap"
				>
					<PrismicRichText field={card.image_text} />
				</div>
			</PrismicLink>
		{/if}
	</Bounded>
</li>