<script lang="ts">
	import { isFilled, type Content } from '@prismicio/client';
	import { PrismicText } from '@prismicio/svelte';

	import MenuItems from './MenuItems.svelte';
	import Heading from '$lib/components/Heading.svelte';

	interface Props {
		slice: Content.ImageCardsSlice;
	}

	let { slice }: Props = $props();
</script>

<div class="relative grid gap-12 p-4">
	{#if isFilled.richText(slice.primary.heading)}
		<Heading
			class="flex flex-col items-center justify-center rounded-xl bg-surface-800 py-2 variant-glass drop-shadow-2xl"
		>
			<PrismicText field={slice.primary.heading} />
		</Heading>
	{/if}
	<ul
		class="variant-glass grid grid-cols-1 items-start gap-12 rounded-lg p-8 drop-shadow-2xl md:flex md:flex-col"
	>
		{#each slice.primary.cards as card}
			<MenuItems {card} />
		{/each}
	</ul>
</div>
