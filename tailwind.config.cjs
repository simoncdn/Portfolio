/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#81AFDD",
        linearBackground: "#07164A",
        background: "#040C18",
        linearLeft: "#AE67FA",
        linearRight: "#1BF1FF",
      },
      fontFamily: {
        title: "Roboto",
        text: "Open sans",
      },
      screens: {
        xs: "320px",
        ss: "620px",
        sm: "825px",
        md: "1024px",
        lg: "1250px",
        xl: "1700px",
      },
      keyframes: {
        levitation: {
          "0%, 100%": { transform: "translateY(-20px)" },
          "50%": { transform: "translateY(-50px)" },
        },
        shadowScale: {
          "0%, 100%": { scale: "1" },
          "50%": { scale: "0.7" },
        },
        sidebar: {
          "0%": { transform: "translateY(50px)", opacity: "0" },
          "100%%": { transform: "translateY(0px)", opacity: "1" },
        },
      },
      animation: {
        levitation: "levitation 6s linear infinite",
        shadowScale: "shadowScale 6s linear infinite",
        sidebar: "sidebar 1000ms ease-in-out ",
      },
    },
  },
  plugins: [],
};
