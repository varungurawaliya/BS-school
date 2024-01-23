/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  

    theme: {

      extend: {        
        fontFamily: {
          'worksans': ['Work Sans', 'sans-serif'],  
          'montserrat': ['Montserrat', 'sans-serif'], 
          'spectral': ['Spectral', 'serif'] 
        },

        animation: {
          img: 'img 5s ease 1',
          icon: 'icon 5s ease 1',
          events: 'events 2s ease 1',
        },

        keyframes: {
          img: {
            '0%, 100%': { opacity: 0 },
            '10%, 90%': { opacity: 1 },
          },

          icon: {
            '0%': { opacity: 0 },
            '20%': { opacity: 1 },
          },

          events: {
            '0%': { opacity: 0 },
            '100%': { opacity: 1 },
          }
        }
    }
    
  },
  plugins: [],
}