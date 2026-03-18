/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          calc: {
            beige: '#f6f3ee',     // Main page background
            white: '#ffffff',     // Cards
            green: '#15803d',     // Buttons
            darkGreen: '#166534', // Hover states
            orange: '#f97316',    // Investment chart
            indigo: '#6366f1',    // Returns chart
            lightGray: '#e5e7eb', // Borders
            gray: '#6b7280',      // Labels
            darkGray: '#374151',  // Secondary text
            black: '#000000',     // Headings
          }
        },
        fontFamily: {
          sans: ['Inter', 'sans-serif'], // Standard clean font
        }
      },
    },
    plugins: [],
  }