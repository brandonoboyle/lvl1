<script lang="ts">
	import type { Content } from '@prismicio/client';
	import PrismicRichText from '$lib/components/PrismicRichText.svelte';

	export let slice: Content.PageSplitSlice;
</script>

<div class="pb-6 md:pb-12">
	<div class="flex h-full w-full justify-center bg-gradient-to-br from-surface-800 to-surface-600 py-10 shadow-2xl">
		<span
			class="bg-gradient-to-br from-primary-500 to-tertiary-400 box-decoration-clone bg-clip-text text-transparent"
		>
			<!-- Neon Text Effect -->
		<!-- <span
			class="text-6xl font-black uppercase tracking-wide text-transparent"
			style="-webkit-text-stroke: 1px #ff0080; text-shadow: 0 0 8px #ff0080;"
		> -->
			<PrismicRichText field={slice.primary.text} />
		</span>
	</div>
</div>
