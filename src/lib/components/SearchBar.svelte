<script lang="ts">
	import { onMount } from 'svelte';
	import { createPostsIndex, searchPostsIndex} from '$lib/search';

	let search: 'loading' | 'ready' = 'loading';
	let searchTerm = 'imagine';
	let results = [];

	onMount(async () => {
		const posts = await fetch('/search.json').then((res) => res.json());
		console.log(posts);
		createPostsIndex(posts);
		search = 'ready';
	});

	$: if (search === 'ready') {
		results = searchPostsIndex(searchTerm);
	}
</script>

{#if search === 'ready'}
	<div class="search">
		<input
			bind:value={searchTerm}
			placeholder="Search..."
			autocomplete="off"
			spellcheck="false"
			type="search"
		/>
	</div>
{/if}

<pre>
  {JSON.stringify(results, null, 2)}
</pre>
