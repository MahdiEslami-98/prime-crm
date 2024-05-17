import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "primary-01": "#49deff",
      "primary-02": "#4fffdf",
      "primary-03": "#303030",
      "secondry-01": "#4e4e4e",
      "secondry-02": "#dedede",
      "secondry-03": "#f4f4f4",
      "secondry-04": "#f9f9f9",
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
      },
      fontSize: {
        head1: "60px",
        head2: "40px",
        head3: "35px",
        head4: "30px",
        head5: "25px",
        head6: "20px",
      },
      padding: {
        "5.5": "1.375rem",
      },
    },
  },
  plugins: [],
};
export default config;
