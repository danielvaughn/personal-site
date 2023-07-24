/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	fontFamily: {
		sans: [
			'Inter var, sans-serif',
		],
	},
		extend: {
			colors: {
				'hackernews': '#ff4000',
				'github': '#333',
				'linkedin': '#0a66c2',
				'twitter': '#1da1f2',
			},
		},
	},
	plugins: [],
}
