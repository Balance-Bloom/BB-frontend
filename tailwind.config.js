/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lilac: "#C1AFE3",
        fuschia: "#C03882",
        pink: "#FFCFDB",
        coral: "#ECA4B0",
      },
    },
  },
  plugins: [require("daisyui")],
};
