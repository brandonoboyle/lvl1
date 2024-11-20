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
				'https://docs.google.com/spreadsheets/d/e/2PACX-1vTuwkH2hnHyRhPIrjhHCs1C9EODB7krniQbuOAhMQJOyYbvdquPOFBmbp2kEDl3sKdsl9SrHMP0PCaW/pubhtml'
			)
		).arrayBuffer();
		const wb = read(f);
		const posts = utils.sheet_to_json<Boardgame>(wb.Sheets[wb.SheetNames[0]]);
		console.log(posts);
		createPostsIndex(posts);
		search = 'ready';
	});
	/*const data = utils.sheet_to_json<Boardgame>(wb.Sheets[wb.SheetNames[0]]);
	console.log(data);*/

	/*onMount(async () => {
		const posts = await fetch('/search.json').then((res) => res.json());
		createPostsIndex(posts);
		search = 'ready';
	});*/

	$: if (search === 'ready') {
		results = searchPostsIndex(searchTerm);
	}
</script>

{#if search === 'ready'}
	<div class="variant-glass-surface h-80 overflow-y-auto p-6 opacity-90">
		{#if results}
			<ul class="grid list-none gap-4 text-2xl">
				{#each results as result}
					<li class="p-2">
						<a href="/{result.slug}" class="block text-4xl">
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
	<!--<label class="">
	<input type="radio" name="Family" /> Adult
		<input type="radio" name="Family" /> Bilingual
		<input type="radio" name="Family" /> Classics
		<input type="radio" name="Family" /> Co-op
		<input type="radio" name="Family" /> Dexterity
		<input type="radio" name="Family" /> Family
		<input type="radio" name="Family" /> Light Strategy
		<input type="radio" name="Family" /> New
		<input type="radio" name="Family" /> Party
		<input type="radio" name="Family" /> Solo Game
		<input type="radio" name="Family" /> Strategy
		<input type="radio" name="Family" /> Themed
		<input type="radio" name="Family" /> Trivia
		<input type="radio" name="Family" /> Two Player
	</label>-->
{/if}

{#if search === 'loading'}
	<div class="placeholder" />
{/if}