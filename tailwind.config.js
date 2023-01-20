module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
		'./src/screens/**/*.{js,ts,jsx,tsx}',
		'./assets/fonts/',
	],
	darkMode: false, // Or 'media' or 'class'
	theme: {
		fontFamily: {
			ubuntu: ['ubuntu'], // Outputs "font-sans"
		},
		extend: {
			fontSize: {
				xs: ['.75rem', {lineHeight: '1rem'}],
			},
			colors: {
				primary: '#ea580c',
				'facebook-color': '#3b5998',
			},
		},
	},
	fontFamily: {
		ubuntu: ['ubuntu'],
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
