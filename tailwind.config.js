import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx}', './index.html'],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '630px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      forest: {
        50: '#f1f8f3',
        100: '#ddeedf',
        200: '#bdddc3',
        300: '#90c59d',
        400: '#61a675',
        500: '#408957',
        600: '#2e6d43',
        700: '#255737',
        800: '#1f462d',
        900: '#163020', //main
        950: '#0e2016',
      },
      sage: {
        50: '#f4f9f4',
        100: '#e7f2e6',
        200: '#cee4ce',
        300: '#a9cda8',
        400: '#7aaf79',
        500: '#569156',
        600: '#437643',
        700: '#375e37',
        800: '#304d30', //main
        900: '#283f28',
        950: '#122112',
      },
      grey: {
        50: '#f3f6f3',
        100: '#e4e8e3',
        200: '#b6c4b6', //main
        300: '#a2b3a3',
        400: '#788f7b',
        500: '#59705c',
        600: '#435846',
        700: '#364638',
        800: '#2c392e',
        900: '#252f27',
        950: '#141a16',
      },
      white: {
        50: '#f7f8f2',
        100: '#eef0e5', //main
        200: '#cdd3b4',
        300: '#b6bd8c',
        400: '#a6ad72',
        500: '#a1a15f',
        600: '#8d8952',
        700: '#766d47',
        800: '#625a3e',
        900: '#524a35',
        950: '#2d281b',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
