/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
        display: ["Red Hat Display", "sans-serif"],
      },

     
      keyframes: {
        gradientMove: {
          "0%": { backgroundPosition: "0% center" },
          "100%": { backgroundPosition: "200% center" },
        },
      },

      animation: {
        gradient: "gradientMove 4s linear infinite",
      },

      backgroundSize: {
        "200%": "200% 200%",
      },
    },
  },

  plugins: [],
};