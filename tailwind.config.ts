import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {      width:{
      '108': '27rem',
      '128': '32rem',
      '140': '35rem',
      '160': '40rem',
      '200': '50rem',

    },
    height:{
      '108': '27rem',
      '128': '32rem',
      '140': '35rem',
      '160': '40rem',
      '200': '50rem',

    },
    colors:{
      custom: '#42454A'},
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
