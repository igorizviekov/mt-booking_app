/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
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
  plugins: [],
};
