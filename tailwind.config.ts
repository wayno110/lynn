import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FAF7F2",
        ink: "#1F2937",
        jade: {
          50: "#F0FAF4",
          100: "#DCF3E4",
          500: "#4F9D69",
          600: "#3F7F55",
          700: "#2F5F40",
        },
        seal: "#B23A48",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["'Noto Serif SC'", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
