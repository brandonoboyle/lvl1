<script lang="ts">
	import { isFilled, type Content } from '@prismicio/client';
	import { PrismicImage, PrismicLink } from '@prismicio/svelte';

	import Bounded from '$lib/components/Bounded.svelte';
	import PrismicRichText from './PrismicRichText.svelte';

	interface Props {
		slice: Content.HeroSmallSlice;
	}

	let { slice }: Props = $props();
</script>

<div class="px-4 pb-6 md:px-6">
	<div class="relative mx-auto w-full rounded-lg bg-ink-noise pb-3 lg:w-1/2">
		<!-- <div class="overflow-hidden rounded-xl">
			{#if isFilled.image(slice.primary.backgroundImage)}
				<PrismicImage
					field={slice.primary.backgroundImage}
					alt=""
					class="absolute inset-0 left-1/2 h-full w-full -translate-x-1/2 rounded-xl object-cover opacity-40 drop-shadow-xl"
				/>
				<div
					class="absolute inset-0 left-1/2 h-full w-full -translate-x-1/2 rounded-xl bg-gradient-to-br from-secondary-600/30 via-surface-700/30 to-tertiary-600/30 mix-blend-overlay"
				></div>
			{/if}
		</div> -->
		<Bounded tag="div" yPadding="xs" class="relative">
			<div class="grid justify-items-center gap-4">
				<div class="max-w-lg space-y-6 px-3 py-3 text-center text-chalk">
					<!-- an error is called for this heading declaration but I swear it works fine -->
					<PrismicRichText field={slice.primary.text} />
				</div>
				{#if isFilled.link(slice.primary.buttonLink)}
					<PrismicLink
						field={slice.primary.buttonLink}
						class="rounded-lg bg-gradient-to-br from-red to-red-bright px-4 py-2 font-display text-lg font-black text-chalk transition-shadow duration-300 ease-in-out hover:shadow-md hover:shadow-red/40"
					>
						{slice.primary.buttonText || 'Learn More'}
					</PrismicLink>
				{/if}
			</div>
		</Bounded>
	</div>
</div>
