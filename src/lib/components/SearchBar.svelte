<script lang="ts">
	import { onMount } from 'svelte';
	import { createPostsIndex, searchPostsIndex } from '$lib/search';
	import { read, utils } from 'xlsx';
	import { TabGroup, Tab } from '@skeletonlabs/skeleton';

	let search: 'loading' | 'ready' = $state('loading');
	let searchTerm = $state('');
	let results = $state([]);
	let tabSet: number = $state(0);

	interface Boardgame {
		Games: string;
		Bilingual: string;
		Category: string;
	}

	onMount(async () => {
		const f = await (
			await fetch(
				'https://docs.google.com/spreadsheets/d/e/2PACX-1vQFx_Iv2nSAN_JE0rcJ4CasXx5bGqHiaffaZTwI-hQyN8WouUed9eV6wTWvOlz5zyRhCy5LK-jIB_3p/pubhtml'
			)
		).arrayBuffer();
		const wb = read(f);
		const posts = utils.sheet_to_json<Boardgame>(wb.Sheets[wb.SheetNames[0]]);
		createPostsIndex(posts);
		search = 'ready';
	});

	$effect(() => {
		if (search === 'ready') {
			results = searchPostsIndex(searchTerm);
		}
	});
</script>

{#if search === 'ready'}
	<div>
		<TabGroup>
			<Tab bind:group={tabSet} name="tab1" value={0}>
				<span>All</span>
			</Tab>
			<Tab bind:group={tabSet} name="tab2" value={1}>Bilingual</Tab>
			<Tab bind:group={tabSet} name="tab3" value={2}>Classics</Tab>
			<Tab bind:group={tabSet} name="tab4" value={3}>Co-op</Tab>
			<Tab bind:group={tabSet} name="tab5" value={4}>Dexterity</Tab>
			<Tab bind:group={tabSet} name="tab6" value={5}>Family</Tab>
			<Tab bind:group={tabSet} name="tab7" value={6}>Light Strategy</Tab>
			<Tab bind:group={tabSet} name="tab8" value={7}>Adult</Tab>
			<Tab bind:group={tabSet} name="tab9" value={8}>Party</Tab>
			<Tab bind:group={tabSet} name="tab10" value={9}>Solo</Tab>
			<Tab bind:group={tabSet} name="tab11" value={10}>Strategy</Tab>
			<Tab bind:group={tabSet} name="tab12" value={11}>Themed</Tab>
			<Tab bind:group={tabSet} name="tab13" value={12}>Trivia</Tab>
			<Tab bind:group={tabSet} name="tab14" value={13}>Two Player</Tab>
			<!-- Tab Panels --->
			<svelte:fragment slot="panel">
				{#if tabSet === 0}
					{searchTerm = ''}
				{:else if tabSet === 1}
					(tab panel 2 contents)
				{:else if tabSet === 2}
					(tab panel 3 contents)
				{:else if tabSet === 3}
					(tab panel 4 contents)
				{:else if tabSet === 4}
					(tab panel 5 contents)
				{:else if tabSet === 5}
					(tab panel 6 contents)
				{:else if tabSet === 6}
					(tab panel 7 contents)
				{:else if tabSet === 7}
					(tab panel 8 contents)
				{:else if tabSet === 8}
					(tab panel 9 contents)
				{:else if tabSet === 9}
					(tab panel 10 contents)
				{:else if tabSet === 10}
					(tab panel 11 contents)
				{:else if tabSet === 11}
					(tab panel 12 contents)
				{:else if tabSet === 12}
					(tab panel 13 contents)
				{:else if tabSet === 13}
					(tab panel 14 contents)
				{/if}
			</svelte:fragment>
		</TabGroup>
		<div class="variant-glass-surface h-80 overflow-y-auto p-6 opacity-90">
			{#if results}
				<ul class="grid list-none grid-flow-row gap-6 text-xl lg:grid-cols-3">
					{#each results as result}
						<li class="p-2">
							<a href={result.URL} target="_blank" rel="noopener noreferrer" class="block text-4xl">
								{@html result.Games}
							</a>
							<p class="text-primary-400">{@html result.Category} {@html result.Bilingual}</p>
						</li>
					{/each}
				</ul>
			{/if}
		</div>

		<div class="relative w-full font-sans text-2xl">
			<input
				bind:value={searchTerm}
				placeholder="Search..."
				autocomplete="off"
				spellcheck="false"
				type="search"
				id="Search"
				class="w-full border-none bg-surface-800 p-6 text-primary-100 outline-none drop-shadow-2xl transition-colors"
			/>
		</div>
	</div>
{/if}

{#if search === 'loading'}
	<section class="card w-full pt-4">
		<div class="placeholder-circle ml-4 w-16"></div>
		<div class="space-y-4 p-4">
			<div class="placeholder"></div>
			<div class="grid grid-cols-3 gap-8">
				<div class="placeholder"></div>
				<div class="placeholder"></div>
				<div class="placeholder"></div>
			</div>
			<div class="placeholder"></div>
		</div>
	</section>
{/if}
