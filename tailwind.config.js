/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{html,js,ts,tsx}',  // Ensure this covers your .tsx files
    './src/components/**/*.{html,js,ts,tsx}', // If you have components outside the app directory
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Make Poppins the default sans-serif font
      },
    },
  },
  plugins: [],
}
