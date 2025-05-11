/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Make sure this line includes the paths to all your component files
  ],
  theme: {
    extend: {
      colors: {
        navy: '#001f3f',       // Example: A common hex code for navy
        darkNavy: '#001429',   // Example: A darker shade of navy
        // Add any other custom colors here
      },
    },
  },
  plugins: [],
}