import assert from 'node:assert/strict';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { test } from 'node:test';
import { createServer } from 'vite';
import { svelte, vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const root = fileURLToPath(new URL('../', import.meta.url));
const richText = (text) => [{ type: 'paragraph', text, spans: [] }];
const card = (title, extra = {}) => ({
	title: richText(title),
	image: {},
	price: [],
	text: [],
	notes: [],
	remove_items: false,
	...extra
});

test('menu cards label instead of hiding', async (t) => {
	const server = await createServer({
		root,
		configFile: false,
		cacheDir: path.join(root, 'node_modules/.vite-menu-label-tests'),
		plugins: [svelte({ configFile: false, preprocess: vitePreprocess(), hot: false })],
		resolve: {
			alias: {
				$lib: path.join(root, 'src/lib'),
				// The store only polls in the browser; SSR just needs empty stock.
				'$app/environment': path.join(root, 'tests/stubs/app-environment.js')
			}
		},
		server: { host: '127.0.0.1', middlewareMode: true, hmr: false, watch: null },
		ssr: { noExternal: ['@prismicio/svelte', 'svelte'] },
		optimizeDeps: { noDiscovery: true, include: [] }
	});
	try {
		const { render } = await server.ssrLoadModule('svelte/server');
		const { default: MenuSection } = await server.ssrLoadModule(
			'/src/lib/slices/MenuItems/index.svelte'
		);
		const { menuStock } = await server.ssrLoadModule('/src/lib/menuStock.svelte.ts');

		const renderCards = (cards, byKey = {}) => {
			menuStock.byKey = byKey;
			return render(MenuSection, {
				props: {
					slice: {
						id: 'food',
						slice_type: 'image_cards',
						variation: 'default',
						primary: { heading: richText('Food menu'), cards }
					}
				}
			}).body;
		};

		await t.test('New and unavailable can show together', () => {
			const html = renderCards([card('House Salad')], {
				'house-salad': { unavailable: true, isNew: true }
			});
			assert.match(html, /House Salad/);
			assert.match(html, />New</);
			assert.match(html, /Temporarily unavailable/);
		});

		await t.test('available items have no label', () => {
			const html = renderCards([card('House Salad')], {
				'house-salad': { unavailable: false, isNew: false }
			});
			assert.match(html, /House Salad/);
			assert.doesNotMatch(html, />New<|Temporarily unavailable/);
		});

		// Matches the real shape in Prismic: 86'd menu items carry price/text,
		// the "Currently Unavailable. Sorry!" placeholders carry nothing.
		await t.test('a named Prismic 86 item stays visible with a label', () => {
			const html = renderCards([
				card('Midnight Stout', { remove_items: true, price: richText('$9') })
			]);
			assert.match(html, /Midnight Stout/);
			assert.match(html, /Temporarily unavailable/);
		});

		// ponytail: known ceiling. A title-only 86'd card is indistinguishable
		// from a placeholder, so it is hidden. Give it a price to keep it visible.
		await t.test('a title-only 86 card is treated as a placeholder', () => {
			assert.doesNotMatch(renderCards([card('Bare Item', { remove_items: true })]), /Bare Item/);
		});

		await t.test('empty 86 placeholder cards stay hidden whatever they are titled', () => {
			const html = renderCards([
				card('Currently Unavailable. Sorry!', { remove_items: true }),
				card('Some Other Placeholder Wording', { remove_items: true }),
				card('House Salad')
			]);
			assert.doesNotMatch(html, /Currently Unavailable\. Sorry!/);
			assert.doesNotMatch(html, /Some Other Placeholder Wording/);
			assert.match(html, /House Salad/);
		});

		await t.test('an 86 item keeps its card when it has real content', () => {
			const html = renderCards([
				card('Fish & Chips', { remove_items: true, price: richText('$18') })
			]);
			assert.match(html, /Fish &amp; Chips/);
			assert.match(html, /\$18/);
			assert.match(html, /Temporarily unavailable/);
		});

		await t.test('stock keys tolerate punctuation and case differences', () => {
			const html = renderCards([card("Chef's Fish & Chips")], {
				'chefs-fish-and-chips': { unavailable: true }
			});
			assert.match(html, /Temporarily unavailable/);
		});
	} finally {
		await server.close();
	}
});
