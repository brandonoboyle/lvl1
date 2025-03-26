import { join } from 'path';
import type { Config } from 'tailwindcss';
import { skeleton } from '@skeletonlabs/tw-plugin';
import forms from '@tailwindcss/forms';

export default {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		extend: {
			fontFamily: {
				heading: ['Advent Pro', 'sans-serif'],
				body: ['Lato', 'sans-serif']
			}
		}
	},
	plugins: [
		forms,
		skeleton({
			themes: {
				preset: [
					{
						name: 'skeleton',
						enhancements: false
					}
				]
			}
		})
	]
} satisfies Config;
