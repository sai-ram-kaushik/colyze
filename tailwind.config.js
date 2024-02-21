/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0E0E0E",
        primary: "#E2E2E2",
        secondary: "#37DBFF"
      },

      fontFamily: {
        title: "Playfair Display",
        heading: "Poppins",
        para: "Work Sans",
      },
    },
  },
  plugins: [],
};
