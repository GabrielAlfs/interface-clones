module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        xxs: ['0.688rem', '1rem'],
      },
      fontFamily: {
        spotify: ['spotify-circular', 'sans-serif'],
      },
      spacing: {
        15: '3.75rem',
        34: '8.5rem',
      },
      colors: {
        spotify: {
          black: '#000000',
          900: '#121212',
          800: '#181818',
          700: '#282828',
          600: '#686868',
          500: '#b2b2b2',
          white: '#ffffff',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
