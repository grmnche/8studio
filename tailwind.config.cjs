module.exports = {
  content: ['./src/**/*.{js,jsx}', './src/index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#000',
      },
    },
  },
  variants: {},
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.writing-vertical-rl': {
          'writing-mode': 'vertical-rl',
        },
        '.writing-vertical-lr': {
          'writing-mode': 'vertical-lr',
        },
      };

      addUtilities(newUtilities);
    },
  ],
};
