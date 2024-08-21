/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        ailerons: ['Ailerons', 'sans-serif'], // Añade la fuente aquí
      },
      colors: {
        primary: '#9C00D0',
        secondary: '#7400B8',
        ternary: '#BF00FF',
        orange: '#60F5D3',
        background: '#09111F'
      }
    },
  },
  plugins: [],
};
