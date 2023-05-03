/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "home-banner-1":"url(~/src/assets/images/banner1.jpg)"
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}