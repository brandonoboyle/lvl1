<script lang="ts">
	import { type Content, isFilled } from '@prismicio/client';
	import Heading from '$lib/slices/Hero/Heading.svelte';
	import { PrismicImage } from '@prismicio/svelte';
	import PrismicRichText from '$lib/components/PrismicRichText.svelte';
	import Bounded from '$lib/components/Bounded.svelte';

	let touchStartX = 0;
	let touchEndX = 0;
	const swipeThreshold = 50; // minimum distance for a swipe

	const AUTO_SLIDE_INTERVAL = 4000; // 4 seconds between slides
	let autoSlideTimer: number;
	let isPaused = false;

	// Function to advance to next slide
	function nextSlide() {
		currentIndex = (currentIndex + 1) % slice.primary.large_carousel.length;
	}

	// Start the auto-sliding
	function startAutoSlide() {
		stopAutoSlide(); // Clear any existing timer
		if (!isPaused) {
			autoSlideTimer = setInterval(nextSlide, AUTO_SLIDE_INTERVAL);
		}
	}
	// Stop the auto-sliding
	function stopAutoSlide() {
		if (autoSlideTimer) {
			clearInterval(autoSlideTimer);
		}
	}

	// Pause auto-sliding on user interaction
	function handleInteractionStart() {
		isPaused = true;
		stopAutoSlide();
	}

	// Resume auto-sliding after user interaction
	function handleInteractionEnd() {
		isPaused = false;
		startAutoSlide();
	}

	function handleTouchStart(event: TouchEvent) {
		touchStartX = event.touches[0].clientX;
	}

	function handleTouchEnd(event: TouchEvent) {
		touchEndX = event.changedTouches[0].clientX;
		const swipeDistance = touchEndX - touchStartX;

		if (Math.abs(swipeDistance) > swipeThreshold) {
			if (swipeDistance > 0) {
				// Swipe right - go to previous
				currentIndex =
					(currentIndex - 1 + slice.primary.large_carousel.length) %
					slice.primary.large_carousel.length;
			} else {
				// Swipe left - go to next
				currentIndex = (currentIndex + 1) % slice.primary.large_carousel.length;
			}
		}
	}

	let currentIndex = $state(0);

	interface Props {
		slice: Content.LargeCarouselSlice;
	}

	let { slice }: Props = $props();
</script>

<div class="flex w-full flex-row py-6">
	<PrismicImage
		field={slice.primary.background}
		alt=""
		class="absolute inset-0 left-1/2 h-1/2 -translate-x-1/2 translate-y-1/4 select-none rounded-2xl border-2 object-cover py-2 opacity-50"
	/>

	<div
		class="relative grid w-full overflow-hidden pb-8"
		role="region"
		aria-label="Image carousel"
		ontouchstart={handleTouchStart}
		ontouchend={handleTouchEnd}
		onmouseenter={handleInteractionStart}
		onmouseleave={handleInteractionEnd}
	>
		<div class="carousel-track flex w-full" style="transform: translateX(-{currentIndex * 100}%)">
			{#each slice.primary.large_carousel as card}
				<div class="w-full flex-shrink-0 lg:px-10">
					<div class="flex h-full justify-center">
						<div
							class="min-h-44 w-5/6 content-center justify-items-center bg-surface-800 text-center"
						>
							<PrismicRichText
								field={card.content}
								components={{
									heading1: Heading
								}}
							/>
						</div>
					</div>
				</div>
			{/each}
		</div>

		<div class="absolute bottom-0 left-1/2 flex -translate-x-1/2 gap-4 pb-1">
			{#each slice.primary.large_carousel as _, index}
				<button
					class="h-5 w-5 rounded-full transition-colors duration-300 {index === currentIndex
						? 'bg-surface-100'
						: 'bg-surface-500-'}"
					onclick={() => (currentIndex = index)}
					aria-label="Go to slide {index + 1}"
				></button>
			{/each}
		</div>
	</div>
	<!-- <div class="flex w-1/2 items-center justify-center pr-6 text-center text-lg md:text-4xl">
		<PrismicRichText field={slice.primary.text} />
	</div> -->
</div>

<style>
	.carousel-track {
		transition: transform 0.5s ease-in-out;
	}
</style>
