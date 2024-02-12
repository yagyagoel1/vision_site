/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      '9xl' : ['187px','1315px' ],
      '8xl' : ['120px','1000px' ],
      '7xl' : ['105px','900px' ],
      '6xl' : ['80px','900px' ]
    },
    extend: {},
  },
  plugins: [],
}

