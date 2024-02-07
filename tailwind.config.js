/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        body: ['"Barlow Condensed"', 'sans-serif'],
      },
      colors: {
        'off-black': 'var(--off-black)',
        primary: 'var(--primary-color)',
      },
    },
  },
  plugins: [],
};
