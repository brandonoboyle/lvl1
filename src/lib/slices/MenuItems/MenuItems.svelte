<script lang="ts">
	import { isFilled, type Content } from '@prismicio/client';
	import { PrismicImage } from '@prismicio/svelte';

	import PrismicRichText from '$lib/components/PrismicRichText.svelte';

	interface Props {
		card: Content.ImageCardsSliceDefaultPrimaryCardsItem;
		unavailable?: boolean;
		isNew?: boolean;
	}

	let { card, unavailable = false, isNew = false }: Props = $props();
</script>

<li class="grid w-full gap-8 font-body drop-shadow-2xl md:flex">
	{#if isFilled.image(card.image)}
		<div class="relative overflow-hidden rounded-xl">
			<PrismicImage
				class="rounded-xl drop-shadow-2xl {unavailable ? 'opacity-50 grayscale' : ''}"
				field={card.image}
				sizes="(min-width: 768px) 240px, 100vw"
			/>
			{#if unavailable}
				<!-- Decorative: the text label below carries the meaning for screen readers. -->
				<div
					class="pointer-events-none absolute inset-0 grid place-items-center"
					aria-hidden="true"
				>
					<span
						class="w-[160%] -rotate-[18deg] bg-red-bright py-1 text-center font-body text-xs font-black uppercase tracking-[0.2em] text-chalk"
					>
						Unavailable
					</span>
				</div>
			{/if}
		</div>
	{/if}
	<div class="grid h-full w-full grid-cols-2 text-pretty text-chalk">
		<div class="justify-items-start font-heading">
			<PrismicRichText field={card.title} />
			{#if isNew}
				<span
					class="mr-2 mt-2 inline-flex rounded-full bg-ivory px-3 py-1 font-body text-xs font-black uppercase tracking-[0.12em] text-ink"
					>New</span
				>
			{/if}
			{#if unavailable}
				<span
					class="mt-2 inline-flex rounded-full bg-red-bright px-3 py-1 font-body text-xs font-black uppercase tracking-[0.12em] text-chalk"
					>Temporarily unavailable</span
				>
			{/if}
		</div>
		<div class="grid justify-items-end text-lg">
			<div class="price-display">
				<PrismicRichText field={card.price} />
			</div>
		</div>
		<div class="col-span-2 w-full">
			<div class="text-chalk/75">
				<PrismicRichText field={card.text} />
			</div>
			<div class="text-chalk/75 justify-items-center p-4 text-center">
				<PrismicRichText field={card.notes} />
			</div>
		</div>
	</div>
</li>
