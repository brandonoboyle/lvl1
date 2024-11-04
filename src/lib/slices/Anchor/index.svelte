<script lang="ts">
	import type { Content } from '@prismicio/client';
	import Bounded from '$lib/components/Bounded.svelte';
	import clsx from 'clsx';
	import PrismicRichText from '$lib/components/PrismicRichText.svelte';

	export let slice: Content.AnchorSlice;
</script>

<Bounded
	as="section"
	class="variant-glass-surface"
	yPadding="sm"
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
>
	<div class={clsx(slice.variation)}>
		<PrismicRichText field={slice.primary.anchor} />
	</div>
</Bounded>
