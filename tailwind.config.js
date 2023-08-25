/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "purple-p": "#555A88",
        "red-p": "#D93F3F",
        "gray-p":"#E5E5E5",
        "gray-p4": "#BDBDBD"
      }
    },
  },
  plugins: [],
}

