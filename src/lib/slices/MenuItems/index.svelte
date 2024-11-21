<script lang="ts">
	import { isFilled, type Content } from '@prismicio/client';
	import { PrismicText } from '@prismicio/svelte';

	import Bounded from '$lib/components/Bounded.svelte';
	import MenuItems from './MenuItems.svelte';
	import Heading from '$lib/components/Heading.svelte';


	export let slice: Content.ImageCardsSlice;
</script>

<Bounded
	tag="section"
	class="sm"
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
>

	<div class="grid gap-12">
		{#if isFilled.richText(slice.primary.heading)}
			<Heading class="text-center">
				<PrismicText field={slice.primary.heading} />
			</Heading>
		{/if}
		<ul class="grid grid-cols-1 items-start gap-12 md:flex md:flex-col drop-shadow-2xl variant-glass rounded-lg p-8">
			{#each slice.primary.cards as card}
				<MenuItems {card} />
			{/each}
		</ul>
	</div>
</Bounded>

