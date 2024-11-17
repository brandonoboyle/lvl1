<script lang="ts">
	import { onMount } from 'svelte';
	import { createPostsIndex, searchPostsIndex } from '$lib/search';

	let search: 'loading' | 'ready' = 'loading';
	let searchTerm = '';
	let results = [];

	onMount(async () => {
		const posts = await fetch('/search.json').then((res) => res.json());
		createPostsIndex(posts);
		search = 'ready';
	});

	$: if (search === 'ready') {
		results = searchPostsIndex(searchTerm);
	}
</script>

{#if search === 'ready'}
	<div class="variant-glass-surface relative w-full font-sans text-2xl drop-shadow-2xl">
		<input
			bind:value={searchTerm}
			placeholder="Search..."
			autocomplete="off"
			spellcheck="false"
			type="search"
			class="w-full bg-surface-800 border-none p-6 text-primary-100 outline-none"
		/>
		<div class="h-3/4 overflow-y-auto  p-6">
			{#if results}
				<ul class="grid list-none gap-4">
					{#each results as result}
						<li class="p-2">
							<a href="/{result.slug}" class="block text-2xl transition-colors">
								{@html result.title}
							</a>
							<p>{@html result.content}</p>
						</li>
					{/each}
				</ul>
			{/if}
		</div>
	</div>
{/if}
