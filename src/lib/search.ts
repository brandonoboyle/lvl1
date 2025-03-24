import FlexSearch from 'flexsearch';

interface Post {
	Games: string;
	Category: string;
	URL: string;
	Bilingual: string;
}

let postsIndex: FlexSearch.Index;
let categoryIndex: FlexSearch.Index;
let posts: Post[];

export function createPostsIndex(data: Post[]) {
	postsIndex = new FlexSearch.Index({ tokenize: 'forward' });
	categoryIndex = new FlexSearch.Index({ tokenize: 'forward' });

	data.forEach((post, i) => {
		const item = `${post.Games} ${post.Category} ${post.URL} ${post.Bilingual}`;
		postsIndex.add(i, item);
		categoryIndex.add(i, post.Category);
	});

	posts = data;
}

export function searchPostsIndex(searchTerm: string, categories: string[] = []) {
	// Escape special regex characters
	const match = searchTerm.replace(/[.*+?^${}()|[]\]/g, '\$&');
	let results = postsIndex.search(match);

	// If we have categories selected, filter the results by category
	if (categories.length > 0) {
		const categoryMatches = new Set(
			categories.flatMap((cat) => categoryIndex.search(cat).map(Number))
		);
		results = results.filter((index) => categoryMatches.has(Number(index)));
	}

	// Map results to the original posts
	const mappedResults = results.map((index) => posts[index as number]);

	// Sort the mapped results alphabetically by Games
	const sortedResults = mappedResults.sort((a, b) => a.Games.localeCompare(b.Games));

	// Format the sorted results
	return sortedResults.map(({ Games, Bilingual, Category, URL }) => {
		return { Games, Bilingual, Category, URL };
	});
}
