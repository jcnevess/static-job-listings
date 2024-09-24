import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "desaturated-cyan": "var(--color-desaturated-cyan)",
        "grayish-background": "var(--color-grayish-background)",
        "grayish-filter": "var(--color-grayish-filter)",
        "grayish-cyan": "var(--color-grayish-cyan)",
        "dark-grayish-cyan": "var(--color-dark-grayish-cyan)",
      },
    },
  },
  plugins: [],
};
export default config;
