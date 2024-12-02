import FlexSearch from 'flexsearch';

let postsIndex: FlexSearch.Index;
let posts: any[];

export function createPostsIndex(data: any[]) {
	postsIndex = new FlexSearch.Index({ tokenize: 'forward' });

	data.forEach((post, i) => {
		const item = `${post.Family} ${post.URL}`;
		postsIndex.add(i, item);
	});

	posts = data;
}

export function searchPostsIndex(searchTerm: string) {
	// escape special regex characters
	const match = searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
	const results = postsIndex.search(match);

	/*return results
		.map((index) => posts[index as number])
		.map(({ slug, title, content }) => {
			return { slug, title, content };
		});
}*/

	return results
		.map((index) => posts[index as number])
		.map(({ Family, URL }) => {
			return { Family, URL };
		});
}