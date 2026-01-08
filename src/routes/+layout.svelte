<script lang="ts">
	import '../app.postcss';

	import { PrismicPreview } from '@prismicio/svelte/kit';
	import { page } from '$app/stores';
	import { repositoryName, createClient } from '$lib/prismicio';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	inject({ mode: dev ? 'development' : 'production' });

	let { data, children } = $props();

	const client = createClient();
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
<div class="flex min-h-screen flex-col">
	<Header navigation={data.navigation} />

	<main class="flex-1 pt-24 text-tertiary-50 md:pt-20">{@render children?.()}</main>

	<Footer navigation={data.navigation} />
</div>

<PrismicPreview {repositoryName} />
