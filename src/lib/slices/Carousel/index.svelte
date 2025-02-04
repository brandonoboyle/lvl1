<script lang="ts">
	import { onMount } from 'svelte';
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
        currentIndex = (currentIndex + 1) % slice.primary.carousel_items.length;
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
					(currentIndex - 1 + slice.primary.carousel_items.length) %
					slice.primary.carousel_items.length;
			} else {
				// Swipe left - go to next
				currentIndex = (currentIndex + 1) % slice.primary.carousel_items.length;
			}
		}
	}

	let currentIndex = $state(0);

	interface Props {
		slice: Content.CarouselSlice;
	}

	let { slice }: Props = $props();

	// Start auto-sliding when component mounts
    onMount(() => {
        startAutoSlide();
        return () => stopAutoSlide(); // Cleanup on unmount
    });
</script>

<div
	class="relative grid w-full overflow-hidden drop-shadow-2xl"
	role="region"
	aria-label="Image carousel"
	ontouchstart={handleTouchStart}
	ontouchend={handleTouchEnd}
	onmouseenter={handleInteractionStart}
    onmouseleave={handleInteractionEnd}
>
	<div class="carousel-track flex w-full" style="transform: translateX(-{currentIndex * 100}%)">
		{#each slice.primary.carousel_items as card}
			<div class="w-full flex-shrink-0 px-4">
				<section class="relative drop-shadow-2xl">
					{#if isFilled.image(card.background)}
						<PrismicImage
							field={card.background}
							alt=""
							class="absolute inset-0 h-full w-full left-1/2 -translate-x-1/2 select-none rounded-2xl object-cover opacity-40 shadow-2xl"
						/>
					{/if}
					<Bounded tag="div" yPadding="sm" class="relative">
						<div class="grid h-full justify-items-center">
							<div class="min-h-32 max-w-xl md:max-w-2xl justify-items-center content-center text-center">
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
		{/each}
	</div>

	<div class="absolute bottom-0 left-1/2 flex -translate-x-1/2 gap-5">
		{#each slice.primary.carousel_items as _, index}
			<button
				class="h-5 w-5 rounded-full transition-colors duration-300 {index === currentIndex
					? 'bg-surface-100'
					: 'bg-surface-500'}"
				onclick={() => (currentIndex = index)}
				aria-label="Go to slide {index + 1}"
			></button>
		{/each}
	</div>
</div>

<style>
	.carousel-track {
		transition: transform 0.5s ease-in-out;
	}
</style>
