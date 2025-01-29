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

<div class="relative drop-shadow-2xl overflow-hidden">
	<div class="">
		{#if isFilled.image(slice.primary.backgroundImage)}
			<PrismicImage
				field={slice.primary.backgroundImage}
			alt=""
			class="pointer-events-none absolute inset-0 h-full w-11/12 left-1/2 -translate-x-1/2 select-none object-cover rounded-xl opacity-40 shadow-2xl"
		/>
	{/if}
	</div>
	<Bounded tag="div" yPadding="sm" class="relative">
		<div class="grid justify-items-center gap-8">
			<div class="max-w-2xl space-y-16 py-6 text-center">
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
					class="variant-glass-tertiary rounded-xl px-5 py-3 text-2xl font-bold hover:variant-ghost-tertiary"
				>
					{slice.primary.buttonText || 'Learn More'}
				</PrismicLink>
			{/if}
		</div>
	</Bounded>
</div>
