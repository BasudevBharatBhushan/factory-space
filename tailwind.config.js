/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      blur: {
        xs: "2px",
      },

      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
        Raleway: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
};
