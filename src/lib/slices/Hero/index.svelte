<script lang="ts">
	import { isFilled, type Content } from '@prismicio/client';
	import { PrismicImage, PrismicLink } from '@prismicio/svelte';

	import Bounded from '$lib/components/Bounded.svelte';
	import PrismicRichText from '$lib/components/PrismicRichText.svelte';

	import Heading from './Heading.svelte';

	interface Props {
		slice: Content.HeroSlice;
	}

	let { slice }: Props = $props();
</script>

<div class="pb-10 px-6 md:px-10">
	<div class="relative pb-4 w-full mx-auto drop-shadow-2xl">
		<div class="rounded-2xl overflow-hidden">
			{#if isFilled.image(slice.primary.backgroundImage)}
				<PrismicImage
					field={slice.primary.backgroundImage}
					alt=""
					class="absolute inset-0 left-1/2 h-full w-full -translate-x-1/2 object-cover opacity-50 drop-shadow-2xl rounded-2xl"
				/>
				<div
					class="absolute inset-0 left-1/2 h-full w-full -translate-x-1/2 bg-gradient-to-br from-secondary-400/30 to-tertiary-400/30 via-surface-400/30 mix-blend-overlay rounded-2xl"
				></div>
			{/if}
		</div>
		<Bounded tag="div" yPadding="sm" class="relative">
			<div class="grid justify-items-center gap-8">
				<div
					class="max-w-2xl space-y-16 bg-gradient-to-br from-primary-600 to-tertiary-400 box-decoration-clone bg-clip-text px-4 py-6 text-center text-transparent"
				>
					<!-- an error is called for this heading declaration but I swear it works fine -->
					<PrismicRichText
						field={slice.primary.text}
						components={{
							heading1: Heading
						}}
					/>
				</div>
				{#if isFilled.link(slice.primary.buttonLink)}
					<PrismicLink
						field={slice.primary.buttonLink}
						class="variant-glass-secondary rounded-xl px-5 py-3 text-2xl font-bold hover:variant-ghost-tertiary"
					>
						{slice.primary.buttonText || 'Learn More'}
					</PrismicLink>
				{/if}
			</div>
		</Bounded>
	</div>
</div>
