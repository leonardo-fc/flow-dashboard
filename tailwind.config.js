/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.svelte"],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        success: "#55dd99",
        error: "#ff6060",
      },
    },
  },
  plugins: [],
};
