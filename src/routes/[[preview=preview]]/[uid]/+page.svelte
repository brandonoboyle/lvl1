<script lang="ts">
	import { SliceZone } from '@prismicio/svelte';
	import { page } from '$app/stores';

	import { components } from '$lib/slices';

	let { data } = $props();
</script>

<svelte:head>
	<title>{$page.data.title}</title>
	{#if $page.data.meta_description}
		<meta name="description" content={$page.data.meta_description} />
	{/if}
	{#if $page.data.meta_title}
		<meta name="og:title" content={$page.data.meta_title} />
	{/if}
	{#if $page.data.meta_image}
		<meta name="og:image" content={$page.data.meta_image.url} />
		<meta name="twitter:card" content="summary_large_image" />
	{/if}
</svelte:head>

<SliceZone slices={data.page.data.slices} {components} />
