/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        "primary-light": "#D5E1EF",
        "primary": "#2C7DFA",
        "primary-shade": "#3685FF",
        "primary-dark": "#1F314F",
      },
    },
  },
  plugins: [],
}