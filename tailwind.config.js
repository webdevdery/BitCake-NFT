// tailwind.config.js

const themeColors = {
  "primary" : "#F178B0",
  "primary-light" : "#FFC2DE",
  "primary-dark" : "#E2125D",
  "secondary" : "#14FDEF",
  "secondary-dark" : "#15DFD1"
}

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      ...themeColors
    }),
    borderColor: (theme) => ({
      ...theme("colors"),
      ...themeColors
    }),
    textColor: (theme) => ({
      ...theme("colors"),
      ...themeColors
    }),
    ringColor: (theme) => ({
      ...theme("colors"),
      ...themeColors
    }),
    fontFamily: {
      'moon': ['moon_get-Heavy'],
      'serif' : ['Serif'],
      'janeroeb': ['janeroe-bold'],
      'janeroel': ['janeroe-light'],
      'nasalization' : ['nasalization-rg'],
      'microfltb' : ['microflt-bold'],
      'microflt' : ['microflt'],
      'hakuna' : ['hakuna'],
      'oktab' : ['okta-b']
    },
    scale: {
      '102' : '1.02'
    },
    extend: {
      height: {
        'frow' : '2196px',
        'trow' : '1088px',
        'orow' : '534px',
        '100' : '400px'
      },
      boxShadow: {
        'dark' : '0px 0px 5px 0px rgba(0, 0, 0, 0.3)'
      },
      minWidth: {
        '80' : '320px'
      }
    }
  },
  variants: {
    extend: {
      backgroundColor: ['checked'],
      borderColor: ['checked'],
      textColor: ['checked'],
    },
  },
  plugins: [],
}