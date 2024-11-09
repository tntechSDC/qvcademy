/** @type {import('tailwindcss').Config} */
// tailwind.config.js

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple': '#382241',
        'dark-purple': '#221427',
        'teal': '#5c7683',
        'yellow':'#ffb866',
      }
    },
  },
  plugins: [],
}

