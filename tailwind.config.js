/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
    './js/*.js',
  ],

  theme: {
    extend: {
      colors: {
        "primary-color": "var(--color-primary)",
        "secondary-color": "var(--color-secondary)",
      },
      fontFamily: {
        poppins: ['Poppins']
      }
    },
  },
  plugins: [],
}

