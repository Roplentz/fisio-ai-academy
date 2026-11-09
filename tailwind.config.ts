import type { Config } from "tailwindcss";
const config: Config = { content: ["./app/**/*.{ts,tsx}","./components/**/*.{ts,tsx}"], theme: { extend: { colors: { navy:"#0B1730", teal:"#0D9488" } } }, plugins: [] };
export default config;
