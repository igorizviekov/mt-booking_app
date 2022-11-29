const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary-color': 'var(--primary-color)',
        'text-color-1': 'var(--text-color-1)',
        'text-color-2': 'var(--text-color-2)',
        'shadow-1': 'var(--shadow-1)',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.underline-red': {
          color: 'red',
          'text-decoration': 'underline',
        },
      });
    }),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
