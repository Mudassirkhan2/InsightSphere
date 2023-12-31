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
        // 'softBg': '#192a56',
        'primary-text': 'white',
        'softText': '#b7bac1',
      },
      backgroundImage: {
        'gradient-to-top': 'linear-gradient(to top, #182237, #253352)',
      },
      
    },
  },
  plugins: [],
}
