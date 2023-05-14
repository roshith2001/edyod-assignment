/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      text1: '#D9D9D9',
      text2: '#3C4852',
      text3: '#BEBEBE',
      text4: '#FFFFFF',
      alertText: '#DE4313',
      disabled: '#E7E7E7',
      success: '#47BA68',
      success2: '#D7EDDD',
      danger: '#F77171',
      danger2: '#FF0000',
      primary: '#0096FF',
    },
    fontFamily:{
      'raleway': ['Raleway', 'sans-serif'],
      'roboto': ['Roboto', 'sans-serif'],
    },
    screens:{
      sm: '940px',
    },
    extend: {},
  },
  plugins: [],
}

