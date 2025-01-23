<script lang="ts">
	import { type Content, isFilled } from '@prismicio/client';
	import Heading from '$lib/slices/Hero/Heading.svelte';
	import { PrismicImage } from '@prismicio/svelte';
	import PrismicRichText from '$lib/components/PrismicRichText.svelte';
	import Bounded from '$lib/components/Bounded.svelte';
	//import { PrismicText } from '@prismicio/svelte';

	let currentIndex = $state(0);

	interface Props {
		slice: Content.CarouselSlice;
	}

	let { slice }: Props = $props();
</script>

<div class="relative w-full overflow-hidden drop-shadow-2xl">
	<div class="carousel-track flex" style="transform: translateX(-{currentIndex * 100}%)">
		{#each slice.primary.carousel_items as card}
			<div class="w-full flex-shrink-0">
				<div>
					<section class="relative drop-shadow-2xl">
						{#if isFilled.image(card.background)}
							<PrismicImage
								field={card.background}
								alt=""
								class="pointer-events-none absolute inset-0 h-full scale-75 select-none rounded-2xl object-cover opacity-50 shadow-2xl"
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
			</div>
		{/each}
	</div>

	<button
		class="absolute left-44 top-1/2 -translate-y-1/2 transform rounded-full text-7xl bg-surface-800 p-2 text-white opacity-75 transition"
		onclick={() =>
			(currentIndex =
				(currentIndex - 1 + slice.primary.carousel_items.length) %
				slice.primary.carousel_items.length)}
	>
		‹
	</button>
	<button
		class="absolute right-44 top-1/2 -translate-y-1/2 transform rounded-full text-7xl bg-surface-800 p-2 text-white opacity-75 transition"
		onclick={() =>
			(currentIndex =
				(currentIndex + 1) %
				slice.primary.carousel_items.length)}
	>
		›
	</button>
</div>

<style>
	.carousel-track {
		transition: transform 0.5s ease-in-out;
	}
</style>
