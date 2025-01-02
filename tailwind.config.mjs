/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideRight: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(10px)" }, // Adjust the value as needed
        },
      },
      animation: {
        slideRight: "slideRight .5s ease-in-out forwards", // Define the animation name and properties
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        heading: "var(--headingColor)",
        paragraph: "var(--paragraph-color)",
        main: "var(--main)",
      },
    },
  },
  plugins: [{ tailwindcss: {}, autoprefixer: {} }],
};
