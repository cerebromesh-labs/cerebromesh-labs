import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Sora: ["var(--font-sora)", "sans-serif"],
        SourceCodePro: ["--font-source-code-pro", "monospace"],
        Inter: ["--font-inter", "sans-serif"],
      },
      colors:{
        "main-bg": "#1B1B1B",
        "secondary-bg": "#222328",
        'light-blue-bg': '#464D69',
        'dark-blue-bg': '#1D2336',
        'primary':'#8CA6FF'
      }
    }
  },
  plugins: [],
};
export default config;
