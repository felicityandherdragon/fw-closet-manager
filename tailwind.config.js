module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#ffffff',
      black: '#333',
      beige: {
        light: '#FBF9F6',
        DEFAULT: '#FBF9F6',
        dark: '#e0e0e0',
      },
      grassGreen: '#20D488',
      blue: {
        light: '#c5dbe5',
        DEFAULT: '#6d81a8',
        dark: '#41606d',
      },
      pink: {
        light: '#efc9e8',
        DEFAULT: '#e09dd2',
        dark: '#db5ca8',
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
      purple: {
        DEFAULT: '#5710B2',
        dark: '#423a8e',
        light: '#958de8',
      },
    },
    fontFamily: {
      display: ['"Supermercado One", cursive'],
      body: ['"Rubik", sans-serif'],
    },
    extend: {
      backgroundImage: {
        'addnew-texture':
          'url("https://closet-manager-s3-bucket.s3.us-east-2.amazonaws.com/memphis-pattern_1045-810.jpeg")',
      },
      spacing: {
        '128': '32rem',
        '192': '40rem',
        '218': '48rem',
        '256': '56rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
