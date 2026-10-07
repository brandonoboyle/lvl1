import FlexSearch from 'flexsearch';

export interface Boardgame {
	Game: string;
	Category: string;
	URL: string;
	Bilingual: boolean;
	Solo: boolean;
	New: boolean;
}

// These filters read their own TRUE/FALSE column instead of the Category list
const flagFilters = ['Bilingual', 'Solo', 'New'] as const;
type Flag = (typeof flagFilters)[number];
const isFlag = (filter: string): filter is Flag => (flagFilters as readonly string[]).includes(filter);

let postsIndex: FlexSearch.Index;
let posts: Boardgame[];

export function createPostsIndex(data: Boardgame[]) {
	postsIndex = new FlexSearch.Index({ tokenize: 'forward' });

	// Only the game name is searchable, so "light" doesn't match the Light Strategy category
	data.forEach((post, i) => postsIndex.add(i, post.Game));

	posts = data;
}

export function searchPostsIndex(searchTerm: string, filters: string[] = []) {
	let results: (number | string)[];

	// If we have a search term, search the posts index
	if (searchTerm.trim()) {
		// Escape special regex characters
		const match = searchTerm.replace(/[.*+?^${}()|[]\]/g, '$&');
		results = postsIndex.search(match);
	} else {
		// If no search term, get all posts (all indices)
		results = Array.from({ length: posts.length }, (_, i) => i);
	}

	// Games must match ALL selected filters
	const flags = filters.filter(isFlag);
	const categories = filters.filter((f) => !isFlag(f));

	return results
		.map((index) => posts[Number(index)])
		.filter((post) => {
			// Category holds comma-separated values, e.g. "Coop, 2 Player"
			const postCategories = post.Category.split(',').map((cat) => cat.trim());
			return (
				flags.every((flag) => post[flag]) &&
				categories.every((category) => postCategories.includes(category))
			);
		})
		.sort((a, b) => a.Game.localeCompare(b.Game));
}
