/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        dblue: "#2b3945",
        dbgblue: "#202c37",
        lbgblue: "#fafafa",
        lmtblue: "#111517",
        lmiblue: "#858585",
        dmtblue: "#ffffff",
      },
    },
  },
  plugins: [],
};
