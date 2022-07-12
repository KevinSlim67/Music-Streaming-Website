module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          200: '#FFE145',
          400: '#FFB802',
          700: '#C86C00'
        },

        secondary: {
          dark: '#00010D',
          dark_lighter: '#08071C',
          light: '#dfe0df'
        },

        accent: {
          200: '#03BEA8',
          400: '#008E7D',
          800: '#005248',
        },

        info: '#0090E1',

      }
    },

  },
  plugins: [],
}