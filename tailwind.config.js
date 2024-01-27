/** @type {import('tailwindcss').Config} */
const { colors } = require('./src/constants');
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	presets: [require('nativewind/preset')],
	theme: {
		extend: {
			colors: {
				primary: colors.primary,
				primaryText: colors.primaryText,
				primary_dark: colors.primary_dark,
				primary_darkText: colors.primary_darkText,
				textMuted: colors.textMuted,
			},
		},
	},
	future: {
		hoverOnlyWhenSupported: true,
	},
	plugins: [],
};
