module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  safelist: [
    'bg-blue-600 ',
  ],
  darkMode: 'class',
  theme: {

    extend: {

      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
       },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      width: {

        "mainImgW": "auto",


      },
      height: {
        "top-bar": "8vh",
        "header": "12vh",
        "tiles-section": "40rem",
        "mainImgH": "auto",

      },


      colors: {
        primary: "#1f2745",
        secondary: "#100d1f",
        textPrimary: "#333",
        textSecondary: "#5c0f38",


      }

    }
  },
  variants: {

    extend: {

    },

  },

  plugins: [],

}