import { browser } from '$app/environment';
import { readMenuStock, CLIENT_STOCK_TIMEOUT_MS, type WebsiteMenuStockItem } from '$lib/menuStock';

// ponytail: one module-level poller shared by every menu section on the page,
// so /food and /drink need no changes at all. Per-page state would only matter
// if two menus ever had to show different stock, which they don't.
const stock = $state({
	byKey: {} as Record<string, WebsiteMenuStockItem>,
	preview: false
});

export const menuStock = stock;

const REFRESH_MS = 30_000;
const GIVE_UP_AFTER = 5;

let started = false;

/** Safe to call from every section; only the first call does anything. */
export function startMenuStockPolling() {
	if (!browser || started) return;
	started = true;

	stock.preview = new URLSearchParams(window.location.search).get('stock-preview') === '1';
	if (stock.preview) return;

	let inFlight = false;
	let failures = 0;

	const load = async () => {
		if (inFlight) return;
		inFlight = true;
		try {
			const payload = await readMenuStock(fetch, '/api/menu-stock', CLIENT_STOCK_TIMEOUT_MS);
			stock.byKey = Object.fromEntries(payload.items.map((item) => [item.key, item]));
			failures = 0;
		} catch (error) {
			failures += 1;
			// Keep the last known labels through a blip; drop them once it looks sustained.
			if (failures >= GIVE_UP_AFTER) stock.byKey = {};
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
