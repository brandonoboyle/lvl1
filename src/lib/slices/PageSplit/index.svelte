<script lang="ts">
	import type { Content } from '@prismicio/client';
	import PrismicRichText from '$lib/components/PrismicRichText.svelte';

	export let slice: Content.PageSplitSlice;
</script>

<div class="pb-6 md:pb-12">
	<div class="flex w-full h-full justify-center bg-surface-800 py-10 drop-shadow-2xl">
		<span
			class="bg-gradient-to-br from-secondary-400 to-error-400 box-decoration-clone bg-clip-text text-transparent"
		>
			<PrismicRichText field={slice.primary.text} />
		</span>
	</div>
</div>
