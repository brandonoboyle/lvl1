<script lang="ts">
	import { onMount } from 'svelte';
	import { createPostsIndex, searchPostsIndex } from '$lib/search';
	import { read, utils } from 'xlsx';
	import { ListBox, ListBoxItem } from '@skeletonlabs/skeleton';

	let search: 'loading' | 'ready' = $state('loading');
	let searchTerm = $state('');
	let results = $state([]);
	let valueMultiple = $state<string[]>(['']);

	interface Boardgame {
		Games: string;
		Category: string;
	}

	onMount(async () => {
		const f = await (
			await fetch(
				'https://docs.google.com/spreadsheets/d/e/2PACX-1vThSfipWWiyIoyAETkBte74vb5JV2goo_HkAG-0grRhOlqfVy-i_vc-A0CylY7-6kaWzVmnmks03ZuC/pubhtml'
			)
		).arrayBuffer();
		const wb = read(f);
		const posts = utils.sheet_to_json<Boardgame>(wb.Sheets[wb.SheetNames[0]]);
		createPostsIndex(posts);
		console.log(posts);
		search = 'ready';
	});

	$effect(() => {
		if (search === 'ready') {
			results = searchPostsIndex(searchTerm + ' ' + valueMultiple);
		}
	});
</script>

{#if search === 'ready'}
	<div class="grid grid-cols-2 gap-4 py-4">
		<ListBox
			multiple
			hover=""
			rounded="rounded-xl"
			class="bg-surface-800"
		>
			<ListBoxItem bind:group={valueMultiple} name="medium" value="Gamecube">Gamecube</ListBoxItem>
			<ListBoxItem bind:group={valueMultiple} name="medium" value="N64">N64</ListBoxItem>
			<ListBoxItem bind:group={valueMultiple} name="medium" value="NES">NES</ListBoxItem>
			<ListBoxItem bind:group={valueMultiple} name="medium" value="PS1">PS1</ListBoxItem>
			<ListBoxItem bind:group={valueMultiple} name="medium" value="PS2">PS2</ListBoxItem>
			<ListBoxItem bind:group={valueMultiple} name="medium" value="PS3">PS3</ListBoxItem>
		</ListBox>
		<ListBox
			multiple
			hover=""
			rounded="rounded-xl"
			class="bg-surface-800"
		>
			<ListBoxItem bind:group={valueMultiple} name="medium" value="PS4">PS4</ListBoxItem>
			<ListBoxItem bind:group={valueMultiple} name="medium" value="PS5">PS5</ListBoxItem>
			<ListBoxItem bind:group={valueMultiple} name="medium" value="SNES">SNES</ListBoxItem>
			<ListBoxItem bind:group={valueMultiple} name="medium" value="Switch">Switch</ListBoxItem>
			<ListBoxItem bind:group={valueMultiple} name="medium" value="Wii">Wii</ListBoxItem>
			<ListBoxItem bind:group={valueMultiple} name="medium" value="WiiU">WiiU</ListBoxItem>
		</ListBox>
	</div>
	<div class="variant-glass-surface h-80 overflow-y-auto rounded-t-xl p-6 opacity-90">
		{#if results}
			<ul class="grid list-none grid-flow-row gap-6 text-xl lg:grid-cols-3">
				{#each results as result}
					<li class="p-2">
						<a href={result.URL} target="_blank" rel="noopener noreferrer" class="block text-4xl">
							{@html result.Games}
						</a>
						<p class="text-tertiary-400">{@html result.Category}</p>
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
