<script lang="ts">
	import { isFilled, type Content } from '@prismicio/client';
	import { PrismicImage, PrismicLink } from '@prismicio/svelte';

	import Bounded from '$lib/components/Bounded.svelte';
	import PrismicRichText from '$lib/components/PrismicRichText.svelte';



	interface Props {
		slice: Content.HeroSlice;
	}

	let { slice }: Props = $props();
</script>

<div class="px-6 pb-10 md:px-10">
	<div class="relative mx-auto w-full pb-4 bg-gradient-to-br from-surface-600 to-surface-800 rounded-xl">
		<!-- <div class="overflow-hidden rounded-2xl">
			{#if isFilled.image(slice.primary.backgroundImage)}
				<PrismicImage
					field={slice.primary.backgroundImage}
					alt=""
					class="absolute inset-0 left-1/2 h-full w-full -translate-x-1/2 rounded-2xl object-cover opacity-40 drop-shadow-2xl"
				/>
				<div
					class="absolute inset-0 left-1/2 h-full w-full -translate-x-1/2 rounded-2xl bg-gradient-to-br from-secondary-600/30 via-surface-700/30 to-tertiary-600/30 mix-blend-overlay"
				></div>
			{/if}
		</div> -->
		<Bounded tag="div" yPadding="sm" class="relative">
			<div class="grid justify-items-center gap-8">
				<div
					class="max-w-2xl space-y-16 bg-gradient-to-br from-primary-600 to-tertiary-400 box-decoration-clone bg-clip-text px-4 py-6 text-center text-transparent"
				>
					<!-- an error is called for this heading declaration but I swear it works fine -->
					<PrismicRichText field={slice.primary.text} />
				</div>
				{#if isFilled.link(slice.primary.buttonLink)}
					<PrismicLink
						field={slice.primary.buttonLink}
						class="rounded-xl bg-gradient-to-br from-tertiary-600 to-secondary-600 px-5 py-3 text-2xl text-primary-50 hover:shadow-lg hover:shadow-tertiary-600"
					>
						{slice.primary.buttonText || 'Learn More'}
					</PrismicLink>
				{/if}
			</div>
		</Bounded>
	</div>
</div>
