import FlexSearch from 'flexsearch';

let postsIndex: FlexSearch.Index;
let posts: any[];

export function createPostsIndex(data: any[]) {
	postsIndex = new FlexSearch.Index({ tokenize: 'forward' });

	data.forEach((post, i) => {
		const item = `${post.Family} ${post.Category} ${post.URL}`;
		postsIndex.add(i, item);
	});

	posts = data;
}

export function searchPostsIndex(searchTerm: string) {
	// escape special regex characters
// 	const match = searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
// 	const results = postsIndex.search(match);
// 	console.log(results);
//
// 	return results
// 		.map((index) => posts[index as number])
// 		.map(({ Family, Category, URL }) => {
// 			return { Family, Category, URL };
// 		});
// }
// Escape special regex characters
	const match = searchTerm.replace(/[.*+?^${}()|[]\]/g, '\$&');
	const results = postsIndex.search(match);

	// Map results to the original posts
	const mappedResults = results.map((index) => posts[index as number]);

	// Sort the mapped results alphabetically by a specific property (e.g., Family)
	const sortedResults = mappedResults.sort((a, b) =>
		a.Family.localeCompare(b.Family)
	);

	// Format the sorted results
	return sortedResults.map(({ Family, Category, URL }) => {
		return { Family, Category, URL };
	});
}