const colors = require('tailwindcss/colors');

module.exports = {
	mode: 'jit',
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif']
			},
			colors: {
				rose: colors.rose,
				fuchsia: colors.fuchsia,
				cyan: colors.cyan,
				indigo: colors.indigo,
				violet: colors.violet
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: [require('@tailwindcss/line-clamp')]
};
