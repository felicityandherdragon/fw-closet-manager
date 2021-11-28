module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#ffffff',
      black: '#333',
      blue: {
        light: '#c5dbe5',
        DEFAULT: '#6d81a8',
        dark: '#41606d',
      },
      pink: {
        light: '#ff7ce5',
        DEFAULT: '#e09dd2',
        dark: '#ff16d1',
      },
      yellow: {
        dark: '#b08d51',
        DEFAULT: '#fcc276',
        light: '#d3beab',
      },
      red: {
        dark: '#612e2d',
        DEFAULT: '#eb470d',
        light: '#eaa993',
      },
      green: {
        dark: '#3d412c',
        DEFAULT: '#6c7250',
        light: '#dfe0ce',
      },
      grey: {
        DEFAULT: '#dbdbdb',
        dark: '#a3a3a3',
        light: '#f9f7f7',
      },
    },
    fontFamily: {
      'display': ['"Righteous", cursive'],
      'body': ['"Rubik", sans-serif'],
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
