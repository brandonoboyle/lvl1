// Minimal `page` store. Tests call setTestPage to choose the route, query string
// and layout data a render happens under.

/** @typedef {{ url: URL, data: Record<string, unknown> }} TestPage */

/** @type {TestPage} */
let current = { url: new URL('http://localhost/food'), data: {} };

/** @param {TestPage} next */
export function setTestPage(next) {
	current = next;
}

export const page = {
	/** @param {(value: TestPage) => void} run */
	subscribe(run) {
		run(current);
		return () => {};
	}
};
