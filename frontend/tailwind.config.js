/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      lg: '1.10rem',
      '9xl' : ['187px','200px' ],
      '8xl' : ['120px','150px' ],
      '7xl' : ['105px','150px' ],
      '6xl' : ['65px','100px' ]
    },
    extend: {},
  },
  plugins: [],
}

