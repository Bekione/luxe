import type { Config } from "tailwindcss";

import tailwindConfig from "@luxe/tailwind-config"

const config: Config = {
  content: [
    "./src/pages/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/app/**/*.{ts,tsx}",
    "./src/_registry/**/*.{ts,tsx}",
  ],
  // @ts-ignore
  presets: [tailwindConfig],
  plugins: [require("tailwindcss-animate")],
};

export default config;
