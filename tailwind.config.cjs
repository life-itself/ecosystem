const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const defaultConfig = require("tailwindcss/defaultConfig");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./content/**/*.{md,mdx}",
    "./node_modules/@portaljs/core/dist/*.js",
    "./node_modules/@portaljs/core/*.js",
  ],
  darkMode: "class",
  theme: {
    extend: {
      // support wider width for large screens >1440px eg. in hero
      maxWidth: {
        "8xl": "88rem",
      },
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
        serif: ["EB Garamond", ...defaultTheme.fontFamily.serif],
        mono: ["ui-monospace", ...defaultTheme.fontFamily.mono],
        headings: ["Roboto", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        ...defaultConfig.theme.fontSize,
        homepagelarge: ["4rem", "1"],
        homepagemedium: ["2.5rem", "1"],
      },
      colors: {
        background: {
          DEFAULT: colors.white,
          dark: colors.slate[900],
        },
        primary: {
          DEFAULT: colors.gray[700],
          dark: colors.gray[300],
        },
        secondary: {
          DEFAULT: colors.sky[400],
          dark: colors.sky[400],
        },
      },
    },
  },
  /* eslint global-require: off */
  plugins: [require("@tailwindcss/typography")],
};
