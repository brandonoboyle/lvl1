<script lang="ts">
	import { isFilled, type Content } from '@prismicio/client';
	import { PrismicImage } from '@prismicio/svelte';

	import Bounded from '$lib/components/Bounded.svelte';
	import PrismicRichText from '$lib/components/PrismicRichText.svelte';

	interface Props {
		slice: Content.TextWithImageSlice;
	}

	let { slice }: Props = $props();
</script>

<div class="grid grid-cols-1 items-center gap-8 px-6 md:px-10 md:grid-cols-2 py-6">
	<div>
		{#if isFilled.image(slice.primary.image)}
			<div class="drop-shadow-2xl">
				<PrismicImage
					field={slice.primary.image}
					sizes="100vw"
					class="w-full rounded-lg opacity-50 drop-shadow-2xl "
				/>
			</div>
		{/if}
	</div>
	<div class="order-first md:order-last text-center">
		<PrismicRichText field={slice.primary.text} />
	</div>
</div>
