import { error } from '@sveltejs/kit';

export async function load() {
	// Return HTTP 410 Gone status for old board games pages
	// This tells search engines that these pages were intentionally removed
	throw error(410, 'Please use the new site link for board games');
}
