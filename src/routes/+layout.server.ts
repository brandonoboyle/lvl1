import { asLink, asText, isFilled } from '@prismicio/client';
import { createClient } from '$lib/prismicio';

export const prerender = 'auto';

export async function load({ fetch, cookies }) {
	const client = createClient({ fetch, cookies });

	const nav = await client.getSingle('navigation');

	const links = nav.data.links.filter((item) => isFilled.link(item.link)).map((item) => ({
		label: asText(item.label),
		href: asLink(item.link) ?? '#'
	}));

	return { links };
}

