/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      serif: ["Red Hat Text", "serif"],
    },
    extend: {
      screens: {
        xxl: "120.5rem",
      },
    },
  },
  plugins: [],
};
