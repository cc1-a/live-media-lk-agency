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
        primary: "#FFBF00",
        background: "#000000",
      },
      animation: {
        'neon-flicker': 'neon-flicker 2s infinite alternate',
      },
      keyframes: {
        'neon-flicker': {
          '0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%': {
            textShadow:
              '-0.1rem -0.1rem 0.5rem #fff, 0.1rem 0.1rem 0.5rem #fff, 0 0 1rem #FFBF00, 0 0 2rem #FFBF00, 0 0 3rem #FFBF00, 0 0 4rem #FFBF00',
          },
          '20%, 24%, 55%': {
            textShadow: 'none',
            opacity: '0.8',
          },
        },
      }
    },
  },
  plugins: [],
};
export default config;
