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
        primary: {
          subtle: "#F7F7F8",
          DEFAULT: "#F0EFF0",
        },
        secondary: {
          lighter: "#9E99A3",
          light: "#6B6570",
          subtle: "#524D56",
          DEFAULT: "#38353B",
          dark: "#262428",
        },
        accent: {
          DEFAULT: "#2BCEF9",
          hover: "#19C3F0",
        },
        highlight: {
          DEFAULT: "#ECF060",
        },
        black: "#141315",
      },
      fontSize: {
        "8xl": "4.5rem",
        xsmall: "0.65rem",
      },
      fontWeight: {
        regular: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },
    },
    fontFamily: {
      sans: [
        "var(--font-libre-franklin)",
        "system-ui",
        "-apple-system",
        "sans-serif",
      ],
      mono: ["var(--font-ibm-plex-mono), monospace"],
    },
  },
  plugins: [],
};
export default config;
