/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
        colors: {
            'custom-dark': '#181A1B',
            'custom-dark-secondary': '#313030', // '#1F2223'
            'custom-light': '#f5f5f5',
        }
    },
  },
  plugins: [],
}