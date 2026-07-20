<script lang="ts">
	import type { Content } from '@prismicio/client';
	import PrismicRichText from '$lib/components/PrismicRichText.svelte';

	export let slice: Content.PageSplitSlice;
</script>

<div class="pb-6 md:pb-12">
	<div class="flex h-full w-full justify-center bg-ink-noise py-5 shadow-2xl md:py-8">
		<span class="text-chalk">
			<PrismicRichText field={slice.primary.text} />
		</span>
	</div>
</div>
