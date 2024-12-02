<script lang="ts">
	import { onMount } from 'svelte';
	import { createPostsIndex, searchPostsIndex } from '$lib/search';
	import { read, utils } from 'xlsx';

	let search: 'loading' | 'ready' = 'loading';
	let searchTerm = '';
	let results = [];

	interface Boardgame {
		Family: string;
		Bilingual: string;
		Category: string;
	}

	onMount(async () => {
		const f = await (
			await fetch(
				'https://docs.google.com/spreadsheets/d/e/2PACX-1vRvgOFOz382IuGr6V0fab_yO03dJ8YL2D5AxdXRyogcQSl1GEDcP2wRV7iPfzfu1ZE1y2k-WLBiz5Ib/pubhtml'
			)
		).arrayBuffer();
		const wb = read(f);
		const posts = utils.sheet_to_json<Boardgame>(wb.Sheets[wb.SheetNames[0]]);
		console.log(posts);
		createPostsIndex(posts);
		search = 'ready';
	});

	$: if (search === 'ready') {
		results = searchPostsIndex(searchTerm);
	}
</script>

{#if search === 'ready'}
	<div class="variant-glass-surface h-80 overflow-y-auto p-6 opacity-90">
		{#if results}
			<ul class="grid grid-flow-row lg:grid-cols-3 list-none gap-6 text-xl">
				{#each results as result}
					<li class="p-2">
						<a href="{result.URL}" target="_blank" rel="noopener noreferrer" class="block text-4xl">
							{@html result.Family}
						</a>
						<p>{@html result.Category}</p>
					</li>
				{/each}
			</ul>
		{/if}
	</div>

	<div class="variant-glass-surface relative w-full font-sans text-2xl">
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
{/if}

{#if search === 'loading'}
	<section class="card w-full pt-4">
		<div class="placeholder-circle ml-4 w-16" />
		<div class="space-y-4 p-4">
			<div class="placeholder" />
			<div class="grid grid-cols-3 gap-8">
				<div class="placeholder" />
				<div class="placeholder" />
				<div class="placeholder" />
			</div>
			<div class="placeholder" />
		</div>
	</section>
{/if}


