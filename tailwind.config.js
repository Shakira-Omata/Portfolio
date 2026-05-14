/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        jscolors: {
          bg: '#090d0b',
          bg2: '#101710',
          bg3: '#162016',
          accent: '#c8f04a',
          teal: '#6dd4a8',
          foreground: '#e5ede7',
          muted: '#6d8c76',
        },
        bg: '#090d0b',
        bg2: '#101710',
        bg3: '#162016',
        accent: '#c8f04a',
        teal: '#6dd4a8',
        foreground: '#e5ede7',
        muted: '#6d8c76',
      },
    },
  },
  plugins: [],
}
