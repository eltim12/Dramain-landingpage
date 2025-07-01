import {heroui} from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['General Sans', 'ui-sans-serif', 'system-ui'], // Fallbacks are good!
    },
    extend: {
      scrollBehavior: ['responsive'],
    },
  },
  corePlugins: {
    scrollBehavior: true,
  },
  darkMode: "class",
  plugins: [heroui()],
}
