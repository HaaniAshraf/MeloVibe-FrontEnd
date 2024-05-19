/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xxs': '320px',  
        'xs': '375px',  
        'sm': '425px',  
        'md': '768px',  
        'lg': '1024px', 
        'xl': '1280px', 
        '2xl':'1536px'
      }
    },
    fontFamily:{
      signature:['Dynalight'],
      bannerFont:['Lobster'],
      collageFont:['Freeman'],
    },
    boxShadow: {
      customShadow: '0px 1px 7px 0px #708090',
    },
    keyframes: {
      gradient: {
        '0%, 100%': { backgroundPosition: '0% 50%' },
        '50%': { backgroundPosition: '100% 50%' },
      },
    },
    animation: {
      gradient: 'gradient 3s ease infinite',
    },
  },
  plugins: [],
}