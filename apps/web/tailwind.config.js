const path = require("path");

module.exports = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx,mdx}",
    "./components/**/*.{ts,tsx,js,jsx,mdx}",

    // Monorepo source (local dev & some CI setups)
    path.join(__dirname, "../../packages/pharos-design-system/**/*.{ts,tsx,js,jsx,mdx}"),

    // Published package (how Vercel resolves it)
    "./node_modules/@pharos/design-system/**/*.{js,ts,jsx,tsx}"
  ],
  theme: { extend: {} },
  plugins: []
};
