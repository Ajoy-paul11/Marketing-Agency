/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'ring-pulse': 'pulse-ring 1.5s cubic-bezier(0.25, 0.8, 0.25, 1) infinite',
        fadeIn: 'fadeIn 0.3s ease-out'
      },
      keyframes: {
        'pulse-ring': {
          '0%': { boxShadow: '0 0 0 0 rgba(255, 255, 255, 0.8)' },
          '70%': { boxShadow: '0 0 0 10px rgba(255, 255, 210, 0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(255, 255, 210, 0)' }
        },
        fadeIn: {
            '0%': { opacity: '0', transform: 'translateY(-10px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
    },
  },
  plugins: [],
}