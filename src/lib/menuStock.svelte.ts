import { browser, dev } from '$app/environment';
import {
	readMenuStock,
	isSamplePreview,
	isStockRoute,
	CLIENT_STOCK_TIMEOUT_MS,
	type WebsiteMenuStockItem
} from '$lib/menuStock';

// ponytail: one module-level poller shared by every menu section on the page,
// so /food and /drink need no changes at all. Per-page state would only matter
// if two menus ever had to show different stock, which they don't.
const stock = $state({
	byKey: {} as Record<string, WebsiteMenuStockItem>,
	preview: false
});

export const menuStock = stock;

const REFRESH_MS = 30_000;

let started = false;

/** Safe to call from every section; only the first call on a menu page does anything. */
export function startMenuStockPolling() {
	// Not `started` first: a client-side nav from /wizard to /food must still start it.
	if (!browser || !isStockRoute(window.location.pathname) || started) return;
	started = true;

	stock.preview = isSamplePreview(window.location.search, window.location.hostname, dev);
	if (stock.preview) return;

	let inFlight = false;

	const load = async () => {
		if (inFlight) return;
		inFlight = true;
		try {
			const payload = await readMenuStock(fetch, '/api/menu-stock', CLIENT_STOCK_TIMEOUT_MS);
			stock.byKey = Object.fromEntries(payload.items.map((item) => [item.key, item]));
		} catch (error) {
			// Keep the last confirmed labels. A dead feed must never make an
			// unavailable item look available; a stale label is the safe direction.
			console.error('[menu-stock] refresh failed', error);
		} finally {
			inFlight = false;
		}
	};

	void load();
	window.setInterval(() => {
		if (document.visibilityState === 'visible') void load();
	}, REFRESH_MS);
}
