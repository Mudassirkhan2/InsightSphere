/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#151c2c',
        'softBg': '#182237',
        'primary-text': 'white',
        'softText': '#b7bac1',
      },
    },
  },
  plugins: [],
}
