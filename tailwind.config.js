/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layout/**/*.liquid',
    './sections/**/*.liquid',
    './snippets/**/*.liquid',
    './templates/**/*.liquid',
    './templates/**/*.json',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Georgia', 'serif'],
      },
      colors: {
        'zen-green': '#9BB7A7',
        'zen-dark': '#2F3E34',
        'zen-beige': '#F6F3EE',
        'zen-tan': '#E9E4D8',
        'zen-brown': '#C7A27C',
      },
    },
  },
  plugins: [],
}

