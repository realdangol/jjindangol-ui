/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          100: "#fcefea",
          200: "#f9e0d5",
          300: "#f4ccba",
          400: "#f2bfa9",
          500: "#eda587",
          600: "#e78b64",
          700: "#e27242",
        },
        neutral: {
          100: "#f4f4f4",
          200: "#e3e3e3",
          300: "#d1d1d1",
          400: "#b0b0b0",
          500: "#8e8e8e",
          600: "#686868",
          700: "#4e4e4e",
          800: "#1d1e1e",
        },
        error: {
          100: "#feddd8",
          200: "#fdbab1",
          300: "#fc988a",
          400: "#fb7563",
          500: "#fa533c",
          600: "#f83015",
        },
        success: {
          100: "#f1f9ee",
          200: "#e3f3e1",
          300: "#c4e8c6",
          400: "#a3dcaa",
          500: "#82ce8f",
          600: "#59c173",
        },
      },
      spacing: {
        xxs: "0.25rem",
        xs: "0.5rem",
        s: "0.75rem",
        m: "1rem",
        l: "1.25rem",
        xxxl: "2.5rem",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".typo-h": {
          fontSize: "1.5rem",
          lineHeight: "1.5rem",
          fontWeight: "700",
        },
        ".typo-h1": {
          fontSize: "1.25rem",
          lineHeight: "1.5rem",
          fontWeight: "700",
        },
        ".typo-h2": {
          fontSize: "1.125rem",
          lineHeight: "1.375rem",
          fontWeight: "700",
        },
        ".typo-h2-medium": {
          fontSize: "1.125rem",
          lineHeight: "1.375rem",
          fontWeight: "500",
        },
        ".typo-body1-bold": {
          fontSize: "1rem",
          lineHeight: "1.25rem",
          fontWeight: "700",
        },
        ".typo-body1-medium": {
          fontSize: "1rem",
          lineHeight: "1.25rem",
          fontWeight: "500",
          letterSpacing: "-0.00625rem",
        },
        ".typo-body1-regular": {
          fontSize: "1rem",
          lineHeight: "1.25rem",
          fontWeight: "400",
          letterSpacing: "-0.0125rem",
        },
        ".typo-body2-bold": {
          fontSize: "0.9375rem",
          lineHeight: "1.125rem",
          fontWeight: "700",
          letterSpacing: "-0.0125rem",
        },
        ".typo-body2-medium": {
          fontSize: "0.9375rem",
          lineHeight: "1.125rem",
          fontWeight: "500",
          letterSpacing: "-0.0125rem",
        },
        ".typo-body2-regular": {
          fontSize: "0.9375rem",
          lineHeight: "1.125rem",
          fontWeight: "400",
          letterSpacing: "-0.0125rem",
        },
        ".typo-body3-medium": {
          fontSize: "0.875rem",
          lineHeight: "1rem",
          fontWeight: "500",
          letterSpacing: "-0.0125rem",
        },
        ".typo-body3-regular": {
          fontSize: "0.875rem",
          lineHeight: "1rem",
          fontWeight: "400",
          letterSpacing: "-0.0125rem",
        },
        ".typo-label": {
          fontSize: "0.8125rem",
          lineHeight: "0.9375rem",
          fontWeight: "500",
        },
        ".typo-element1": {
          fontSize: "1rem",
          lineHeight: "1.125rem",
          fontWeight: "700",
        },
        ".typo-element2": {
          fontSize: "0.875rem",
          lineHeight: "1rem",
          fontWeight: "700",
        },
        ".typo-element3": {
          fontSize: "0.8125rem",
          lineHeight: "0.9375rem",
          fontWeight: "600",
        },
      };

      addUtilities(newUtilities);
    },
  ],
};
