/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#45B69C', // Teal color
        secondary: '#8B5CF6', // Purple color
        tertiary: '#3B82F6', // Blue color
      },
      backgroundColor: {
        dark: '#121212',
        'dark-card': '#1E1E1E',
      },
      textColor: {
        'dark-primary': '#E0E0E0',
        'dark-secondary': '#A0A0A0',
      }
    },
  },
  plugins: [],
}