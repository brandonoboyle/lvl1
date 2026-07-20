<script lang="ts">
	import type { Content } from '@prismicio/client';
	import Bounded from '$lib/components/Bounded.svelte';
	import PrismicRichText from '$lib/components/PrismicRichText.svelte';

	export let slice: Content.TextColumnsSlice;
</script>


	<div class="text-center gap-6 grid grid-cols-2 align-middle py-10 px-9 bg-ink-noise text-chalk font-body">
		<PrismicRichText field={slice.primary.text_columns} />
	</div>
