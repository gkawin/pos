import type { Config } from "tailwindcss";

export default {
  prefix: "tw-",
  important: "html",
  corePlugins: {
    preflight: false,
  },
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
