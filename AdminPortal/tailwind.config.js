/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      colors: {
      saffron: ' #EE922B',
      yellow: '#ef6b13',  // Saffron color code
      keyframes: {
        fallDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        slideFromLeft: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideFromBottom: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        fallDown: 'fallDown 2s ease-out forwards',
        slideFromLeft: 'slideFromLeft 2s ease-out forwards',
        slideFromBottom: 'slideFromBottom 2s ease-out forwards',
      },
    },
  },
  },
  plugins: [],
}

