/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      colors: {
      saffron: ' #f93',
      yellow: '#ef6b13'  // Saffron color code
    },
  },
  },
  plugins: [],
}

