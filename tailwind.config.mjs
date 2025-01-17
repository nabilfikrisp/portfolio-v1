import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit Variable", ...defaultTheme.fontFamily.sans],
      },
      animation: {
        "move-up": "moveUp 0.5s ease-out",
      },
      keyframes: {
        moveUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      colors: {
        "my-background": "#f8f5f2",
        "my-headline": "#232323",
        "my-paragraph": "#222525",
        "my-accent-one": "#078080",
        "my-accent-two": "#f45d48",
        "my-accent-text": "#fffffe",
      },
    },
  },
  plugins: [],
};
