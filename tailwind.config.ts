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
				// Big display headings (Figma "Nexa Rust"), Advent Pro fallback.
				// Weight 900 is the Slab Black Shadow 01 cut, matching the logo (Sans Black Shadow 01 is retired).
				display: ['Nexa Rust Sans', 'Advent Pro', 'sans-serif'],
				heading: ['Advent Pro', 'sans-serif'],
				body: ['Lato', 'sans-serif']
			},
			colors: {
				// Force dark mode colors
				background: 'rgb(17, 17, 17)',
				foreground: 'rgb(255, 255, 255)',
				// Redesign palette — tokens live in :root (app.postcss)
				ink: 'var(--ink)',
				chalk: 'var(--chalk)',
				ivory: 'var(--ivory)',
				red: 'var(--red)',
				'red-bright': 'var(--red-bright)'
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
