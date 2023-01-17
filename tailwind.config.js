module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
		'./src/screens/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: false, // Or 'media' or 'class'
	theme: {
		fontFamily: {
			inter: ['Inter', 'sans-serif'],
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
		inter: ['Inter', 'sans-serif'],
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
