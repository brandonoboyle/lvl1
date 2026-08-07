<script lang="ts">
	import type { Content } from '@prismicio/client';
	import PrismicRichText from '$lib/components/PrismicRichText.svelte';
	import Heading1 from './Heading1.svelte';

	export let slice: Content.PageSplitSlice;
</script>

<div class="pb-6 md:pb-12">
	<div class="flex h-full w-full justify-center text-center border-b-4 border-red bg-ink-noise py-5 shadow-2xl md:py-8">
		<span class="text-chalk">
			<PrismicRichText field={slice.primary.text} components={{ heading1: Heading1 }} />
		</span>
	</div>
</div>
