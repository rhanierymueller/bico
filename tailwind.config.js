module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/screens/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    extend: {
      fontSize: {
        xs: [".75rem", { lineHeight: "1rem" }],
      },
      colors: {
        "primary-700": "#0369A1",
        "primary-800": "#075985",
        "primary-900": "#0C4A6E",
        "secondary-100": "#FFEDD5",
        "secondary-700": "#C2410C",
        "gray-200": "#E5E7EB",
        "gray-500": "#6B7280",
        "light-blue-50": "#F0F9FF",
        "light-blue-100": "#E0F2FE",
        "light-blue-600": "#0284C7",
        "light-blue-800": "#075985",
        "light-blue-700": "#0369A1",
        "facebook-color": "#3b5998",
      },
    },
  },
  fontFamily: {
    inter: ["Inter", "sans-serif"],
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
