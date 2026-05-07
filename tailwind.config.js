/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#102830",
        light: "#AFF9C7",
        soft: "#EDFFF8",
      },
    },
  },
  plugins: [],
}
