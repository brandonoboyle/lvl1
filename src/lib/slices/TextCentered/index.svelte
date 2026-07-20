<script lang="ts">
	import type { Content } from '@prismicio/client';
	import { isFilled } from '@prismicio/client';

	import Bounded from '$lib/components/Bounded.svelte';
	import PrismicRichText from '$lib/components/PrismicRichText.svelte';

	export let slice: Content.TextCenteredSlice;
</script>

<Bounded
	yPadding="sm"
	as="section"
	class="px-5 leading-relaxed text-center bg-ink-noise text-chalk font-body"
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
>
	<div class="">
		{#if isFilled.richText(slice?.primary?.text)}
			<PrismicRichText field={slice.primary.text} />
		{/if}
	</div>
</Bounded>
