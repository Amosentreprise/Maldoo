/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    fontFamily: {
      milky: ["Milky Nice", "sans-serif"],
      montsserat: ["Montserrat", "sans-serif"],
    },
    colors: {
      primary: "#0A6535",
      secondary: "#FAE837",
      slate: "#F5F5F5",
    },
    screens: {
      sm: "279px",
      // => @media (min-width: 640px) { ... }

      md: "549px",
      // => @media (min-width: 768px) { ... }

      lg: "770px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },

  plugins: [require("flowbite/plugin")],
};
