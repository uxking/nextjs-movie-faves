module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'sput-deep-brown': '#402637',
        'sput-brown': '#3e2332',
        'sput-pink': '#d96cb3',
        'sput-red': '#a6175a',
        'sput-purple': '#8d53a6',
        'sput-black': '#0d0d0d',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
