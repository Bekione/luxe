import type { Config } from "tailwindcss";

import tailwindConfig from "@luxe/tailwind-config"

const config: Config = {
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  prefix: 'ui-',
  // @ts-ignore
  presets: [tailwindConfig],
};

export default config;
