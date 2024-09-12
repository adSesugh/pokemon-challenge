import type { Config } from "tailwindcss";
const defaultTheme = require('tailwindcss/defaultTheme')
import flowbite from "flowbite-react/tailwind";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        'xs': '280px',
        ...defaultTheme.screens,
        '3xl': '1600px',
      }
    },
  },
  plugins: [flowbite.plugin(),],
};
export default config;
