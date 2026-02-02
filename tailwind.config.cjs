/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        cyan: {
          400: "#22d3ee",
          500: "#06b6d4",
        },
        purple: {
          400: "#a78bfa",
          500: "#7c3aed",
        },
      },
      backdropBlur: {
        xs: "2px",
        sm: "4px",
        md: "12px",
        lg: "16px",
      },
      spacing: {
        safe: "max(1rem, env(safe-area-inset-left))",
      },
    },
  },
  plugins: [],
};
