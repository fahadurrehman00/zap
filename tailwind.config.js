/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#B7FA8A",
        secondary: "#003C0F",
        background: "#F8FFF3",
      },
      fontFamily: {
        body: ["Inter", "sans-serif"],
      },
      spacing: {
        "12": "3rem",
      },
    },
  },
  plugins: [],
};
