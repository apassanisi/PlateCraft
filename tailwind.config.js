/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable dark mode
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#4ade80', // Light green
          DEFAULT: '#22c55e', // Green
          dark: '#16a34a', // Dark green
        },
        secondary: {
          light: '#fbbf24', // Light orange
          DEFAULT: '#f59e0b', // Orange
          dark: '#d97706', // Dark orange
        },
        background: {
          light: '#ffffff', // Light background
          DEFAULT: '#f3f4f6', // Default background
          dark: '#1f2937', // Dark background
        },
        foreground: {
          light: '#1f2937', // Light foreground
          DEFAULT: '#111827', // Default foreground
          dark: '#f3f4f6', // Dark foreground
        },
        error: {
          light: '#f87171', // Light red
          DEFAULT: '#ef4444', // Red
          dark: '#dc2626', // Dark red
        },
      },
    },
  },
  plugins: [],
}
