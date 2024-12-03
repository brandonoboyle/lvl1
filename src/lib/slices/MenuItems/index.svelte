<script lang="ts">
	import { isFilled, type Content } from '@prismicio/client';
	import { PrismicText } from '@prismicio/svelte';


	import MenuItems from './MenuItems.svelte';
	import Heading from '$lib/components/Heading.svelte';


	export let slice: Content.ImageCardsSlice;
</script>



	<div class="relative grid gap-12 p-4">
		{#if isFilled.richText(slice.primary.heading)}
			<Heading class="flex flex-col items-center justify-center bg-surface-800 opacity-95 drop-shadow-2xl">
				<PrismicText field={slice.primary.heading} />
			</Heading>
		{/if}
		<ul class="grid grid-cols-1 items-start gap-12 md:flex md:flex-col drop-shadow-2xl variant-glass rounded-lg p-8">
			{#each slice.primary.cards as card}
				<MenuItems {card} />
			{/each}
		</ul>
	</div>


