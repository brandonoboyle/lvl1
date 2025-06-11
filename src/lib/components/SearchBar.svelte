<script lang="ts">
	import { onMount } from 'svelte';
	import { createPostsIndex, searchPostsIndex } from '$lib/search';
	import { read, utils } from 'xlsx';
	import { ListBox, ListBoxItem } from '@skeletonlabs/skeleton';

	interface Boardgame {
		Games: string;
		Bilingual: string;
		Category: string;
		URL: string;
		Hidden: string;
	}

	type SearchResult = {
		Games: string;
		Bilingual: string;
		Category: string;
		URL: string;
		Hidden: string;
	};

	let search: 'loading' | 'ready' = $state('loading');
	let searchTerm = $state('');
	let results = $state<SearchResult[]>([]);
	let valueMultiple = $state<string[]>([]);
	let allPosts: Boardgame[] = [];

	onMount(async () => {
		const f = await (
			await fetch(
				'https://docs.google.com/spreadsheets/d/e/2PACX-1vQFx_Iv2nSAN_JE0rcJ4CasXx5bGqHiaffaZTwI-hQyN8WouUed9eV6wTWvOlz5zyRhCy5LK-jIB_3p/pubhtml'
			)
		).arrayBuffer();
		const wb = read(f);
		const posts = utils.sheet_to_json<Boardgame>(wb.Sheets[wb.SheetNames[0]]);
		allPosts = posts;
		createPostsIndex(posts);
		search = 'ready';
	});

	$effect(() => {
		if (search === 'ready') {
			if (searchTerm.trim() === '' && valueMultiple.length === 0) {
				results = allPosts;
			} else {
				results = searchPostsIndex(searchTerm + ' ' + valueMultiple);
			}
		}
	});
</script>

{#if search === 'ready'}
	<div class="w-full pb-8">
		<div class="grid grid-cols-2 gap-4 py-4">
			<ListBox multiple hover="" rounded="rounded-xl" class="bg-surface-700" active="variant-filled-primary">
				<ListBoxItem bind:group={valueMultiple} name="medium" value="New">New</ListBoxItem>
				<ListBoxItem bind:group={valueMultiple} name="medium" value="Adult">Adult</ListBoxItem>
				<ListBoxItem bind:group={valueMultiple} name="medium" value="Cooperative"
					>Cooperative</ListBoxItem
				>
				<ListBoxItem bind:group={valueMultiple} name="medium" value="Dexterity"
					>Dexterity</ListBoxItem
				>
				<ListBoxItem bind:group={valueMultiple} name="medium" value="Family">Family</ListBoxItem>
				<ListBoxItem bind:group={valueMultiple} name="medium" value="Light Strategy"
					>Light Strategy</ListBoxItem
				>
			</ListBox>
			<ListBox multiple hover="" rounded="rounded-xl" class="bg-surface-700" active="variant-filled-primary">
				<!-- String reads en/fr as bilingual not the term bilingual -->
				<ListBoxItem bind:group={valueMultiple} name="medium" value="en/fr">Bilingual</ListBoxItem>
				<ListBoxItem bind:group={valueMultiple} name="medium" value="Party">Party</ListBoxItem>
				<ListBoxItem bind:group={valueMultiple} name="medium" value="Solo">Solo</ListBoxItem>
				<ListBoxItem bind:group={valueMultiple} name="medium" value="Strategy">Strategy</ListBoxItem
				>
				<ListBoxItem bind:group={valueMultiple} name="medium" value="Trivia">Trivia</ListBoxItem>
				<ListBoxItem bind:group={valueMultiple} name="medium" value="Two">Two Player</ListBoxItem>
			</ListBox>
		</div>
		<div
			class="variant-glass-surface h-96 w-full overflow-y-auto rounded-t-xl opacity-90"
		>
			{#if results}
				<ul class="grid w-full list-none grid-flow-row lg:grid-cols-3">
					{#each results as result}
						<a
							href={result.URL}
							target="_blank"
							rel="noopener noreferrer"
							class="block text-lg lg:text-2xl"
						>
							<li class="p-2">
								<p class="text-pretty">{@html result.Games}</p>

								<div class="flex flex-row flex-wrap gap-2">
									<p class="text-sm text-tertiary-400">{@html result.Category}</p>
									<p class="text-sm text-secondary-400">{@html result.Bilingual}</p>
								</div>
							</li>
						</a>
					{/each}
				</ul>
			{/if}
		</div>

		<div class="relative flex w-full gap-2 py-4 font-sans text-2xl">
			<input
				value={searchTerm}
				placeholder="Search..."
				autocomplete="off"
				spellcheck="false"
				type="search"
				id="Search"
				class="w-full rounded-xl border-none bg-surface-800 p-6 text-primary-100 outline-none focus:outline-4 focus:outline-tertiary-700 focus:-outline-offset-1 drop-shadow-2xl transition-colors"
				onkeydown={(e) => {
					if (e.key === 'Enter') {
						searchTerm = e.currentTarget.value;
					}
				}}
			/>
			<button
				class="rounded-xl bg-gradient-to-br from-tertiary-600 to-secondary-600 px-5 py-3 text-2xl text-primary-50 hover:shadow-lg hover:shadow-tertiary-600"
				onclick={() => {
					searchTerm = '';
					valueMultiple = [];
				}}>Clear All</button
			>
		</div>
	</div>
{/if}

{#if search === 'loading'}
	<section class="card w-full pt-4 bg-surface-900">
		<div class="placeholder-circle ml-4 w-16 bg-surface-500"></div>
		<div class="space-y-4 p-4">
			<div class="placeholder bg-surface-500"></div>
			<div class="grid grid-cols-3 gap-8">
				<div class="placeholder bg-surface-500"></div>
				<div class="placeholder bg-surface-500"></div>
				<div class="placeholder bg-surface-500"></div>
			</div>
			<div class="placeholder bg-surface-500"></div>
		</div>
	</section>
{/if}
