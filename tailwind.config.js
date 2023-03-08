/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
    './src/**/*.{js,ts,jsx,tsx}'
  ],
	theme: {
		extend: {
			transitionProperty: {
				rounded: 'border-radius'
			}
		},
	},
	plugins: [],
};
