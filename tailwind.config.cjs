/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-default": "var(--bg-default)",
        "bg-active": "var(--bg-active)",
        "bg-primary-hover": "var(--bg-primary-hover)",
        "bg-primary-active": "var(--bg-primary-active)",
        "bg-primary-emphasis": "var(--bg-primary-emphasis)",
        "bg-primary-emphasis-hover": "var(--bg-primary-emphasis-hover)",
        "bg-primary-emphasis-active": "var(--bg-primary-emphasis-active)",
        "bg-destructive-emphasis": "var(--bg-destructive-emphasis)",
        "bg-destructive-emphasis-hover": "var(--bg-destructive-emphasis-hover)",
        "bg-destructive-emphasis-active":
          "var(--bg-destructive-emphasis-active)",
        "bg-destructive-hover": "var(--bg-destructive-hover)",
        "bg-destructive-active": "var(--bg-destructive-active)",
        "border-supportive": "var(--border-supportive)",
        "text-default": "var(--text-default)",
        "text-on-emphasis": "var(--text-on-emphasis)",
        "text-primary": "var(--text-primary)",
        "text-destructive": "var(--text-destructive)",
        "icon-decorative-on-emphasis": "var(--icon-decorative-on-emphasis)",
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', ...defaultTheme.fontFamily.sans],
      },
      transitionTimingFunction: {
        "camp-out": "cubic-bezier(0.23, 1, 0.32, 1)",
      },
    },
  },
  plugins: [],
};
