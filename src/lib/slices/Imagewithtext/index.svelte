<script lang="ts">
	import { isFilled, type Content } from '@prismicio/client';
	import { PrismicImage } from '@prismicio/svelte';

	import Bounded from '$lib/components/Bounded.svelte';
	import PrismicRichText from '$lib/components/PrismicRichText.svelte';

	interface Props {
		slice: Content.ImagewithtextSlice;
	}

	let { slice }: Props = $props();
</script>

<Bounded
	as="section"
	yPadding="sm"
	class="px-5 bg-ink-noise text-chalk font-body"
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
>
	<div class="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
		<div>
			{#if isFilled.image(slice.primary.image)}
				<div class="drop-shadow-2xl">
					<PrismicImage
						field={slice.primary.image}
						sizes="100vw"
						class="w-full rounded-lg opacity-90 drop-shadow-2xl "
					/>
				</div>
			{/if}
		</div>
		<div class="text-xl/8">
			<PrismicRichText field={slice.primary.text} />
		</div>
	</div>
</Bounded>
