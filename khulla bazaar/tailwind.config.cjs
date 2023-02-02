/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        manrope:['"Manrope"', ...defaultTheme.fontFamily.sans],
        aro:['"Alfa Slab One"', ...defaultTheme.fontFamily.sans],
        kalam:['"Kalam"'],
        overlock:['"Overlock"',...defaultTheme.fontFamily.sans],
        dancing:['"Dancing Script"',...defaultTheme.fontFamily.sans],
        oswald:['"Oswald"',...defaultTheme.fontFamily.sans]
      },
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 5px 5px var(--tw-shadow-color)',
        lg: '0 8px 10px var(--tw-shadow-color)',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp'),
  plugin(function ({ matchUtilities, theme }) {
    matchUtilities(
      {
        'text-shadow': (value) => ({
          textShadow: value,
        }),
      },
      { values: theme('textShadow') }
    )
  }),],
}
