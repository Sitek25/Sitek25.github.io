/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0A0A0A', 
        'card-bg': '#121212', 
        'accent-blue': '#3B82F6', 
        'accent-purple': '#8B5CF6', 
      },
      animation: {
        'slow-spin': 'spin 20s linear infinite',
      }
    },
  },
  plugins: [],
}