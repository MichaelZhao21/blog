/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				background: '#f6ede7',
				'background-light': '#ebe0d8',
				text: '#2e514d',
				'text-dark': '#000000',
				grey: '#9a8e86',
				'grey-light': '#beb0a6',
				brown: '#663c14',
				'brown-1': '#a46e48',
				'brown-2': '#a46e48',
				'brown-3': '#a58a77',
			},
			fontFamily: {
				title: '"Nerko One", ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
				text: '"Lexend", ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
			},
		},
	},
	plugins: [],
};
