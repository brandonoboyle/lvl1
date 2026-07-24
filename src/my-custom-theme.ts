import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
	name: 'my-custom-theme',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `'Lato', sans-serif`,
		'--theme-font-family-heading': `'Nexa Rust Sans', sans-serif`,
		'--theme-font-color-base': '255 255 255',
		'--theme-font-color-dark': '0 0 0',
		'--theme-rounded-base': '9999px',
		'--theme-rounded-container': '8px',
		'--theme-border-base': '2px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '0 0 0',
		'--on-secondary': '255 255 255',
		'--on-tertiary': '255 255 255',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '255 255 255',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #FFC700 (bright yellow)
		'--color-primary-50': '255 249 217', // #fff9d9
		'--color-primary-100': '255 246 179', // #fff6b3
		'--color-primary-200': '255 243 140', // #fff38c
		'--color-primary-300': '255 239 102', // #ffef66
		'--color-primary-400': '255 232 51', // #ffe833
		'--color-primary-500': '255 199 0', // #FFC700
		'--color-primary-600': '230 179 0', // #e6b300
		'--color-primary-700': '191 149 0', // #bf9500
		'--color-primary-800': '153 119 0', // #997700
		'--color-primary-900': '115 89 0', // #735900
		// secondary | #FF2D7A (neon pink)
		'--color-secondary-50': '255 224 236', // #ffe0ec
		'--color-secondary-100': '255 204 224', // #ffccf0
		'--color-secondary-200': '255 174 208', // #ffaed0
		'--color-secondary-300': '255 134 186', // #ff86ba
		'--color-secondary-400': '255 93 163', // #ff5da3
		'--color-secondary-500': '255 45 122', // #FF2D7A
		'--color-secondary-600': '230 41 110', // #e6296e
		'--color-secondary-700': '191 34 92', // #bf225c
		'--color-secondary-800': '153 27 74', // #991b4a
		'--color-secondary-900': '115 20 56', // #731438
		// tertiary | #FF5E13 (orange-magenta accent)
		'--color-tertiary-50': '255 232 217', // #ffe8d9
		'--color-tertiary-100': '255 217 191', // #ffd9bf
		'--color-tertiary-200': '255 199 153', // #ffc799
		'--color-tertiary-300': '255 170 102', // #ffaa66
		'--color-tertiary-400': '255 130 51', // #ff8233
		'--color-tertiary-500': '255 94 19', // #FF5E13
		'--color-tertiary-600': '230 85 17', // #e65511
		'--color-tertiary-700': '191 70 14', // #bf460e
		'--color-tertiary-800': '153 56 11', // #99380b
		'--color-tertiary-900': '115 42 8', // #732a08
		// success | #84cc16
		'--color-success-50': '237 247 220', // #edf7dc
		'--color-success-100': '230 245 208', // #e6f5d0
		'--color-success-200': '224 242 197', // #e0f2c5
		'--color-success-300': '206 235 162', // #ceeba2
		'--color-success-400': '169 219 92', // #a9db5c
		'--color-success-500': '132 204 22', // #84cc16
		'--color-success-600': '119 184 20', // #77b814
		'--color-success-700': '99 153 17', // #639911
		'--color-success-800': '79 122 13', // #4f7a0d
		'--color-success-900': '65 100 11', // #41640b
		// warning | #EAB308
		'--color-warning-50': '252 244 218', // #fcf4da
		'--color-warning-100': '251 240 206', // #fbf0ce
		'--color-warning-200': '250 236 193', // #faecc1
		'--color-warning-300': '247 225 156', // #f7e19c
		'--color-warning-400': '240 202 82', // #f0ca52
		'--color-warning-500': '234 179 8', // #EAB308
		'--color-warning-600': '211 161 7', // #d3a107
		'--color-warning-700': '176 134 6', // #b08606
		'--color-warning-800': '140 107 5', // #8c6b05
		'--color-warning-900': '115 88 4', // #735804
		// error | #D41976
		'--color-error-50': '249 221 234', // #f9ddea
		'--color-error-100': '246 209 228', // #f6d1e4
		'--color-error-200': '244 198 221', // #f4c6dd
		'--color-error-300': '238 163 200', // #eea3c8
		'--color-error-400': '225 94 159', // #e15e9f
		'--color-error-500': '212 25 118', // #D41976
		'--color-error-600': '191 23 106', // #bf176a
		'--color-error-700': '159 19 89', // #9f1359
		'--color-error-800': '127 15 71', // #7f0f47
		'--color-error-900': '104 12 58', // #680c3a
		// surface | #1A093E (deep purple)
		'--color-surface-50': '11 4 27', // #0b041b
		'--color-surface-100': '15 6 37', // #0f0625
		'--color-surface-200': '19 7 46', // #13072e
		'--color-surface-300': '23 8 55', // #170837
		'--color-surface-400': '26 9 62', // #1A093E
		'--color-surface-500': '26 9 62', // #1A093E
		'--color-surface-600': '23 8 55', // #170837
		'--color-surface-700': '19 7 46', // #13072e
		'--color-surface-800': '15 6 37', // #0f0625
		'--color-surface-900': '11 4 27' // #0b041b
	}
};
