/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        zinc50: "rgba(var(--zinc50))",
        slate200: "rgba(var(--slate200))",
        slate500: "rgba(var(--slate500))",
        slate600: "rgba(var(--slate600))",
        gray300: "rgba(var(--gray300))",
        indigo700: "rgba(var(--indigo700))",
      },
      backgroundSize: { stretch: "100%" },
      letterSpacing: { "extra-wide": "0.3em" },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to right bottom, hsl(192, 100%, 67%), hsl(280, 87%, 65%))",
        "hover-custom-gradient":
          "linear-gradient(to right bottom, hsl(192, 100%, 84%), hsl(281, 87%, 83%))",
        zinc50: "zinc-50 dark:slate-600",
      },
      fontFamily: { JosefinSans: ["Josefin Sans", "sans-serif"] },
      keyframes: {
        "slide-up-fade-in": {
          from: {
            opacity: 0,
            transform: "translateY(3rem)",
          },
          to: {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        up: "slide-up-fade-in 0.5s forwards ease-in-out",
      },
    },
  },
  plugins: [],
};
