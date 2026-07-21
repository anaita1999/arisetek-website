import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: { sans: ["Arial", "Helvetica", "sans-serif"] },
      boxShadow: { soft: "0 20px 60px rgba(26, 31, 44, .10)" },
    },
  },
  plugins: [],
};

export default config;
