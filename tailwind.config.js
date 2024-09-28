/** @type {import('tailwindcss').Config} */
import capelogo from "../src/assets/capelogo.png";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage:{
'welcome-pattern':"url('https://images.unsplash.com/photo-1664575599618-8f6bd76fc670?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YnVzaW5lc3N8ZW58MHx8MHx8fDA%3D')"

    },
    extend: {
      colors: {
  			primary: {
  				'50': '#E1E8EF',
  				'100': '#D4DEE7',
  				'200': '#B7C7D7',
  				'300': '#99B0C7',
  				'400': '#7C99B6',
  				'500': '#5E82A6',
  				'600': '#4C6B8A',
  				'700': '#3C546C',
  				'800': '#2C3D4F',
  				'900': '#1B2631',
  				'950': '#141C24'
  			},
  			accent: {
  				'50': '#FAF5F0',
  				'100': '#F4ECE1',
  				'200': '#E8D6BF',
  				'300': '#DDC2A2',
  				'400': '#D2AF84',
  				'500': '#C69963',
  				'600': '#B78343',
  				'700': '#926835',
  				'800': '#6C4D28',
  				'900': '#4B351B',
  				'950': '#382814'
  			}
  		},
    },
  },
  plugins: [],
}