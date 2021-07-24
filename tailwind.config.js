module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'deep-champaign': '#f2cc8f',
        'green-sheen': '#81b29a',
        'us-independence': '#3d405b',
        'terra-cotta': '#e07a5f',
        'egg-shell': '#f4f1de',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
