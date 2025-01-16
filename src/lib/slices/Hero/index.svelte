<script lang="ts">
	import { isFilled, type Content } from "@prismicio/client";
	import { PrismicImage, PrismicLink } from "@prismicio/svelte";

	import Bounded from "$lib/components/Bounded.svelte";
	import PrismicRichText from "$lib/components/PrismicRichText.svelte";

	import Heading from "./Heading.svelte";

	interface Props {
		slice: Content.HeroSlice;
	}

	let { slice }: Props = $props();
</script>

<section
	class="relative drop-shadow-2xl"
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
>
	{#if isFilled.image(slice.primary.backgroundImage)}
		<PrismicImage
			field={slice.primary.backgroundImage}
			alt=""
			class="absolute inset-0 h-full w-full pointer-events-none select-none object-cover opacity-50 shadow-2xl px-6"
		/>
	{/if}
	<Bounded tag="div" yPadding="sm" class="relative">
		<div class="grid justify-items-center gap-8">
			<!--TODO: Make cool gradient for the headings-->
			<div class="max-w-2xl text-center space-y-16 py-6">
				<PrismicRichText
					field={slice.primary.text}
					components={{
            heading1: Heading,
          }}
				/>
			</div>
			{#if isFilled.link(slice.primary.buttonLink)}
				<PrismicLink
					field={slice.primary.buttonLink}
					class="variant-glass-tertiary hover:variant-ghost-tertiary px-5 py-3 text-2xl font-bold rounded-xl"
				>
					{slice.primary.buttonText || "Learn More"}
				</PrismicLink>
			{/if}
		</div>
	</Bounded>
</section>
