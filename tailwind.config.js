/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],

  theme: {
   colors:{
    'gray-light':'#CBD5E0',
    'gray-dark': '#979595',
    'gray-darker':'#827f7f',
    'white':'#fff',
    'custom-purple':'#7433FF',
    'dark-purple': '#6a28e6',
    'custom-red': '#e46b6b',
    'custom-green':'#C6F6D5',
   },
    fontFamily: {
      'sans': ['Roboto', 'sans-serif'],
    },
    extend: {
 
      fontWeight: {
        'heading-lg': '800',
        'heading-md': '500'

      }
   
    },
  },
  plugins: [],
}

