module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    
    extend: {
      extend: {
        keyframes: {
         fadeIn: {
           '0%': { opacity: '0' },
           '100%': { opacity: '1'  },
         }
        }
      },
      height:{
        "top-bar" :"8vh",
        "header" :"12vh",
        "section" :"80vh",
      },
      animation: {
        fadeIn: 'wiggle 1s ease-in-out infinite',
       },
      colors:{
        primary:"#2e2e2e",
        secondary:"#2e2e2e85",
      }
      
    },
  },
  variants: {

    extend: {
  
    },
  
  },
  
  plugins: [],
}
