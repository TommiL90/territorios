/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    colors: {
      current: 'currentColor',
      transparent: 'transparent',
      white: '#FFFFFF',
      black: '#090E34',
      dark: '#1D2144',
      primary: '#4A6CF7',
      yellow: '#FBB040',
      'body-color': '#959CB1',
    },
    screens: {
      xs: '450px',
      // => @media (min-width: 450px) { ... }

      sm: '575px',
      // => @media (min-width: 576px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '992px',
      // => @media (min-width: 992px) { ... }

      xl: '1200px',
      // => @media (min-width: 1200px) { ... }

      '2xl': '1400px',
      // => @media (min-width: 1400px) { ... }
    },
    extend: {
      boxShadow: {
        signUp: '0px 5px 10px rgba(4, 10, 34, 0.2)',
        one: '0px 2px 3px rgba(7, 7, 77, 0.05)',
        sticky: 'inset 0 -1px 0 0 rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}

// theme: {
//   extend: {
//     // fontFamily: {
//     //   sans: 'var(--font-roboto)',
//     //   alt: 'var(--font-bai-jamjuree)',
//     // },
//     colors: {
//       gray: {
//         50: '#eaeaea',
//         100: '#bebebf',
//         200: '#9e9ea0',
//         300: '#727275',
//         400: '#56565a',
//         500: '#2c2c31',
//         600: '#28282d',
//         700: '#1f1f23',
//         800: '#18181b',
//         900: '#121215',
//       },
//       purple: {
//         50: '#f3eefc',
//         100: '#d8cbf7',
//         200: '#c6b2f3',
//         300: '#ab8eee',
//         400: '#9b79ea',
//         500: '#8257e5',
//         600: '#764fd0',
//         700: '#5c3ea3',
//         800: '#48307e',
//         900: '#372560',
//       },
//       green: {
//         50: '#e6fbef',
//         100: '#b1f1ce',
//         200: '#8cebb6',
//         300: '#57e295',
//         400: '#36dc81',
//         500: '#04d361',
//         600: '#04c058',
//         700: '#039645',
//         800: '#027435',
//         900: '#025929',
//       },
//     },

//     // backgroundImage: {
//     //   stripes:
//     //     'linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1) 12.5%, transparent 12.5%, transparent)',
//     // },

//     // fontSize: {
//     //   '5xl': '2.5rem',
//     // },

//     // backgroundSize: {
//     //   stripes: '100% 8px',
//     // },

//     // blur: {
//     //   full: '194px',
//     // },
//   },
// },
