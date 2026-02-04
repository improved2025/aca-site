import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core brand
        wine: "#4B0B22",
        plum: "#6A0F33",
        magenta: "#B1165A",
        gold: "#D6B15A",
        cream: "#F7E9D3",

        // Surfaces
        paper: "#F6F1EA",
        ink: "#0B0B0D",
      },
    },
  },
  plugins: [],
};

export default config;
