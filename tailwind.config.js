module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        primary:"#2e2e2e",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
