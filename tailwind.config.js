/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: [
        "var(--text-font-size-xs)",
        {
          lineHeight: "var(--text-line-height)",
          letterSpacing: "var(--text-letter-spacing)",
        },
      ],
      sm: [
        "var(--text-font-size-sm)",
        {
          lineHeight: "var(--text-line-height)",
          letterSpacing: "var(--text-letter-spacing)",
        },
      ],
      base: [
        "var(--text-font-size-base)",
        {
          lineHeight: "var(--text-line-height)",
          letterSpacing: "var(--text-letter-spacing)",
        },
      ],
      lg: [
        "var(--text-font-size-lg)",
        {
          lineHeight: "var(--text-line-height)",
          letterSpacing: "var(--text-letter-spacing)",
        },
      ],
      xl: [
        "var(--text-font-size-xl)",
        {
          lineHeight: "var(--text-line-height)",
          letterSpacing: "var(--text-letter-spacing)",
        },
      ],
      "2xl": [
        "var(--text-font-size-2xl)",
        {
          lineHeight: "var(--text-line-height)",
          letterSpacing: "var(--text-letter-spacing)",
        },
      ],
      "3xl": [
        "var(--text-font-size-3xl)",
        {
          lineHeight: "var(--text-line-height)",
          letterSpacing: "var(--text-letter-spacing)",
        },
      ],
    },
    fontFamily: {
      sans: ["Barlow", "sans-serif"],
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--color-primary-500)",
          100: "var(--color-primary-100)",
          200: "var(--color-primary-200)",
          300: "var(--color-primary-300)",
          400: "var(--color-primary-400)",
          500: "var(--color-primary-500)",
          600: "var(--color-primary-600)",
          700: "var(--color-primary-700)",
          800: "var(--color-primary-800)",
          900: "var(--color-primary-900)",
        },
        secondary: {
          DEFAULT: "var(--color-secondary-500)",
          100: "var(--color-secondary-100)",
          200: "var(--color-secondary-200)",
          300: "var(--color-secondary-300)",
          400: "var(--color-secondary-400)",
          500: "var(--color-secondary-500)",
          600: "var(--color-secondary-600)",
          700: "var(--color-secondary-700)",
          800: "var(--color-secondary-800)",
          900: "var(--color-secondary-900)",
        },
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        input: "var(--color-input)",
      },
      strokeWidth: {
        3: "3px",
        4: "4px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
