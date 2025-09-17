<script lang="ts">
	import { isFilled, type Content } from '@prismicio/client';
	import { PrismicImage } from '@prismicio/svelte';

	import PrismicRichText from '$lib/components/PrismicRichText.svelte';

	interface Props {
		card: Content.ImageCardsSliceDefaultPrimaryCardsItem;
	}

	let { card }: Props = $props();
</script>

<li class="grid w-full gap-8 font-body drop-shadow-2xl md:flex">
	{#if isFilled.image(card.image)}
		<div class="">
			<PrismicImage class="rounded-xl drop-shadow-2xl" field={card.image} sizes="" />
		</div>
	{/if}
	<div class="grid h-full w-full grid-cols-2 text-pretty">
		<div class="justify-items-start bg-gradient-to-br from-primary-500 to-tertiary-400 box-decoration-clone bg-clip-text text-transparent">
			<PrismicRichText field={card.title} />
		</div>
		<div class="grid justify-items-end text-lg">
			<div class="price-display">
				<PrismicRichText field={card.price} />
			</div>
		</div>
		<div class="col-span-2 w-full">
			<div class="">
				<PrismicRichText field={card.text} />
			</div>
			<div class="justify-items-center p-4 text-center">
				<PrismicRichText field={card.notes} />
			</div>
		</div>
	</div>
</li>
