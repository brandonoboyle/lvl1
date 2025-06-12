<script lang="ts">
	import type { Content } from '@prismicio/client';
	import PrismicRichText from '$lib/components/PrismicRichText.svelte';

	export let slice: Content.PageSplitSlice;
</script>

<div class="pb-6 md:pb-12">
	<div
		class="flex h-full w-full justify-center bg-gradient-to-br from-surface-800 to-surface-600 py-5 md:py-8 shadow-2xl"
	>
		<span
			class="bg-gradient-to-br from-primary-500 to-tertiary-400 box-decoration-clone bg-clip-text text-transparent"
		>
			<PrismicRichText field={slice.primary.text} />
		</span>
	</div>
</div>
