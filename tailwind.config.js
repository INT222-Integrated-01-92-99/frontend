module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '100%': '100%',
      '16': '4rem',
    },
    extend: {
      fontFamily: {
        'rozha': ['"Rozha One"', 'cursive'],
        'prompt-regular-400': ['"Prompt"', 'cursive'],
        'prompt-medium-500': ['"Prompt"', 'cursive'],
        'prompt-bold-700': ['"Prompt"', 'cursive'],
      },
      zIndex: { '-10': '-10', },
      colors: {
        'red-light': '#A34655',
        'red-dark': '#6B2626',
        'gray-extra-light': '#EAEAEA',
        'gray-light': '#A5A5A5',
        'gray-dark': '#5F5F5F',
      }
    },
  },
  variants: {
    extend: {

    },
  },
  plugins: [],
}
