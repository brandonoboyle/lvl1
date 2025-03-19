<script lang="ts">
	import '../app.postcss';

	import { PrismicPreview } from '@prismicio/svelte/kit';
	import { page } from '$app/stores';
	import { repositoryName } from '$lib/prismicio';
	import Header from '$lib/components/Header.svelte';

	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	import bg from '$lib/assets/images/bgimage.jpg';

	inject({ mode: dev ? 'development' : 'production' });

	let { data, children } = $props();
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
<div>
	<Header navigation={data.navigation} />

	<main class="text-surface-800-100-token pt-36">{@render children?.()}</main>
</div>

<PrismicPreview {repositoryName} />
