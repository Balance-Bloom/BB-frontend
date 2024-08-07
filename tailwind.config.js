/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lilac: "#C1AFE3",
        fuschia: "#C03882",
        pink: "#FFCFDB",
        deepPink: "#FF5A7D",
        coral: "#ECA4B0",
        daisy: "#faf7f5",
        bgColor: "#F6F6F6",
        subheader: "#a9a9a9",
        subText: "#00000099",
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(180deg, #ffd6e7, #ffecf2)",
      },
    },
  },
  plugins: [require("daisyui")],
};
