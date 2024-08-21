/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#0090FF",
        "secondary": "#526071",
        "invert": "#F2F2F2",
        "bluedark": "#111B26",
        "whiteskin": "#F2F2F2",
        "grayskin": "#828282",
        "bullet" : "#1F2B39",
        "darkfooter" : "#2C3C4D",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        NunitoSans: ["Nunito Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
}