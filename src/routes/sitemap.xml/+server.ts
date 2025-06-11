import { createClient } from '$lib/prismicio'; // adjust import if needed
import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
	// Fetch all documents you want in the sitemap
	const documents = await createClient().getAllByType('page'); // change 'page' to your custom type(s)

	// Base URL of your site
	const baseUrl = 'https://levelonegamepub.com'; // 

	// Build XML
	const urls = documents
		.map((doc) => {
			const path = doc.uid === 'home' ? '' : `/${doc.uid}`; // adjust for your routing
			return `
      <url>
        <loc>${baseUrl}${path}</loc>
        <lastmod>${doc.last_publication_date || new Date().toISOString()}</lastmod>
      </url>
    `;
		})
		.join('');

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls}
    </urlset>
  `;

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml'
		}
	});
};
