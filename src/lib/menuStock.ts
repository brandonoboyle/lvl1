export interface WebsiteMenuStockItem {
	key: string;
	name: string;
	unavailable: boolean;
	isNew?: boolean;
	source: 'toast' | 'override' | 'default';
}

export const MAX_STOCK_AGE_MS = 45 * 60 * 1000;
export const UPSTREAM_STOCK_TIMEOUT_MS = 8_000;
export const CLIENT_STOCK_TIMEOUT_MS = 10_000;

export interface WebsiteMenuStockPayload {
	ok: true;
	checkedAt?: string;
	stockCheckedAt: string;
	items: WebsiteMenuStockItem[];
}

export function isMenuStockPayload(value: unknown): value is WebsiteMenuStockPayload {
	if (!value || typeof value !== 'object') return false;
	const payload = value as Record<string, unknown>;
	if (payload.ok !== true || !isFreshStockCheck(payload.stockCheckedAt)) return false;
	if (
		payload.checkedAt !== undefined &&
		(typeof payload.checkedAt !== 'string' || !Number.isFinite(Date.parse(payload.checkedAt)))
	)
		return false;
	if (!Array.isArray(payload.items)) return false;
	const keys = new Set<string>();
	for (const item of payload.items) {
		if (
			!item ||
			typeof item !== 'object' ||
			typeof item.key !== 'string' ||
			!item.key.trim() ||
			keys.has(item.key) ||
			typeof item.name !== 'string' ||
			typeof item.unavailable !== 'boolean' ||
			(item.isNew !== undefined && typeof item.isNew !== 'boolean') ||
			!['toast', 'override', 'default'].includes(item.source)
		)
			return false;
		keys.add(item.key);
	}
	return true;
}

// The deadline covers both response headers and the response body.
export async function readMenuStock(
	fetcher: typeof fetch,
	endpoint: string,
	timeoutMs: number,
	init: RequestInit = {}
): Promise<WebsiteMenuStockPayload> {
	const signal = init.signal
		? AbortSignal.any([init.signal, AbortSignal.timeout(timeoutMs)])
		: AbortSignal.timeout(timeoutMs);
	const response = await fetcher(endpoint, { ...init, cache: 'no-store', signal });
	if (!response.ok) throw new Error('Stock service request failed');
	const payload: unknown = await response.json();
	if (!isMenuStockPayload(payload)) throw new Error('Stock service data is invalid or stale');
	return payload;
}

export function isFreshStockCheck(
	value: unknown,
	now = Date.now(),
	maxAgeMs = MAX_STOCK_AGE_MS
): value is string {
	if (typeof value !== 'string') return false;
	const checkedAt = Date.parse(value);
	return Number.isFinite(checkedAt) && checkedAt <= now + 60_000 && now - checkedAt <= maxAgeMs;
}

export function websiteMenuKey(value: string): string {
	return value
		.normalize('NFKD')
		.replace(/[\u0300-\u036f]/g, '')
		.toLowerCase()
		.replace(/&/g, ' and ')
		.replace(/[\u2019']/g, '')
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/(^-|-$)/g, '');
}

// Stock only applies to the two menu pages. Other pages (/wizard) use the same
// MenuItems slice and must not poll or label.
export const STOCK_ROUTES = ['/food', '/drink'];

export function isStockRoute(pathname: string): boolean {
	return STOCK_ROUTES.includes(pathname.replace(/\/+$/, ''));
}

// Sample labels are a design-review aid, never something a visitor can turn on.
// `allowed` comes from the server, which knows the real deployment environment;
// a hostname can be aliased to production, so it can't be trusted for this.
export function isSamplePreview(search: string, allowed: boolean): boolean {
	return allowed && new URLSearchParams(search).get('stock-preview') === '1';
}

// The permanent link to a Toast item. Prismic's own card UUID isn't in the
// published API, so the editor holds the id in `website_menu_id`; cards that
// haven't been backfilled yet still match on their title.
export function menuCardStockKey(websiteMenuId: string | null | undefined, title: string): string {
	return websiteMenuId?.trim() || websiteMenuKey(title);
}
