import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#985600",
        secondary: "#d8a147",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],daisyui: {
    themes: ["light"],
  },
};
export default config;
