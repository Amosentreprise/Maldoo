/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    colors: {
      primary: "#0A6535",
      secondary: "#FAE837",
      slate:"#F5F5F5"
      
    },
    extend: {},
  },

  plugins: [require("flowbite/plugin")],
};
