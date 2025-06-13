export default {
  /** @type {import('tailwindcss').Config} */
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./.storybook/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          700: "#e27242",
        },
        neutral: {
          600: "#686868",
        },
      },
    },
  },
  plugins: [],
};
