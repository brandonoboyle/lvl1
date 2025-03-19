<script lang="ts">
	import type { Content } from '@prismicio/client';
	import { isFilled } from '@prismicio/client';
	import clsx from 'clsx';

	import Bounded from '$lib/components/Bounded.svelte';
	import PrismicRichText from '$lib/components/PrismicRichText.svelte';

	interface Props {
		slice: Content.TextSlice;
	}

	export let slice: Props['slice'];
</script>

<Bounded
	yPadding="sm"
	as="section"
	class="leading-relaxed px-5"
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
>
	<div class="">
		{#if isFilled.richText(slice?.primary?.text)}
			<PrismicRichText field={slice.primary.text} />
		{/if}
	</div>
</Bounded>
