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
        obsidian: "#070A0F",
        charcoal: "#101722",
        steel: "#7B8794",
        volt: "#D7FF3F",
        ember: "#FF5A2D",
      },
      boxShadow: {
        glow: "0 0 50px rgba(215, 255, 63, 0.16)",
      },
      backgroundImage: {
        "radial-volt": "radial-gradient(circle at top, rgba(215,255,63,0.18), transparent 34rem)",
      },
    },
  },
  plugins: [],
};

export default config;
