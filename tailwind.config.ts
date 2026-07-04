import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0A0F1C",
        panel: "#111A2C",
        panel2: "#16213A",
        edge: "#223049",
        edge2: "#2A3A57",
        ivory: "#E9EDF6",
        mist: "#8C97AC",
        signal: "#4FD1A5",
        signalDim: "#2E7C63",
        amber: "#F2B84B",
        indigo: "#7C8CFF",
        rose: "#F2705A",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "SFMono-Regular", "monospace"],
        body: ["'Inter'", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(233,237,246,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(233,237,246,0.05) 1px, transparent 1px)",
      },
      keyframes: {
        packet: {
          "0%": { transform: "translateY(-8px)", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { transform: "translateY(340px)", opacity: "0" },
        },
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
      },
      animation: {
        packet: "packet 3.2s ease-in-out infinite",
        blink: "blink 1s step-start infinite",
      },
    },
  },
  plugins: [],
};
export default config;
