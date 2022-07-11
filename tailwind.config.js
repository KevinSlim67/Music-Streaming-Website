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
          dark_lighter: '#08071C'
        },

        accent: {
          800: '#004F42',
        },

        info: '#0090E1',

      }
    },

  },
  plugins: [],
}