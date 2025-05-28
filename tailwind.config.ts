import { join } from 'path';
import type { Config } from 'tailwindcss';
import { skeleton } from '@skeletonlabs/tw-plugin';
import forms from '@tailwindcss/forms';
import { myCustomTheme } from './src/my-custom-theme';

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
			},
			colors: {
				// Force dark mode colors
				background: 'rgb(17, 17, 17)',
				foreground: 'rgb(255, 255, 255)'
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
				],
				custom: [
					myCustomTheme
				]
			}
		})
	]
} satisfies Config;
