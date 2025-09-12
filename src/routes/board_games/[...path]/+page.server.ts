import { error } from '@sveltejs/kit';

export async function load() {
	// Return HTTP 410 Gone status for all old board games subpages
	// This catches any URLs like /board_games/chess, /board_games/monopoly, etc.
	throw error(410, 'Please use the new site link for board games');
}
