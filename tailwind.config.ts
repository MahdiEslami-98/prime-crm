import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      "primary-01": "#49deff",
      "primary-02": "#4fffdf",
      "primary-03": "#303030",
      "primary-04": "#4BE3EB",
      "secondry-01": "#4e4e4e",
      "secondry-02": "#dedede",
      "secondry-03": "#f4f4f4",
      "secondry-04": "#f9f9f9",
      "secondry-05": "#eaeaea",
      "secondry-06": "#4a4a4a",
      white: "#ffffff",
      black: "#000000",
      transparent: "transparent",
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        jost: ["Jost", "sans-serif"],
        "open-sans": ["Open Sans", "sans-serif"],
        mulish: ["Mulish", "sans-serif"],
      },
      fontSize: {
        head1: "60px",
        head2: "40px",
        head3: "35px",
        head4: "30px",
        head5: "25px",
        head6: "20px",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        spin2: {
          to: { transform: "rotate(360deg)" },
        },
        spin3: {
          "0%": { transform: "rotate(90deg)" },
          "50%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(-90deg)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out",
        fadeOut: "fadeOut 0.5s ease-in-out",
        spin: "spin 3s linear infinite",
        spin2: "spin2 20s linear infinite",
        spin3: "spin 5s linear infinite",
      },
      gridTemplateColumns: {
        hero: "0.75fr 1fr",
      },
    },
  },
  plugins: [],
};
export default config;
