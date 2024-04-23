import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkish: "#040816",
        lightGrayish: "#7F8189",
        lightBlueish: "#2068F6",
        redish: "#F62020",
        greenish: "#3E8048",
        borderDarkColor: "#21293A",
      },
    },
  },
  plugins: [],
};
export default config;
