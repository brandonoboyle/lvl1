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
			class="variant-glass flex flex-col items-center justify-center rounded-xl bg-surface-800 py-2 drop-shadow-2xl"
		>
			<PrismicText field={slice.primary.heading} />
		</Heading>
	{/if}
	<ul
		class="variant-glass grid gap-12 rounded-xl p-8 drop-shadow-2xl lg:grid-cols-2"
	>
		{#each slice.primary.cards as card}
			{#if !card.remove_items}
				<MenuItems {card} />
			{/if}
		{/each}
	</ul>
</div>
