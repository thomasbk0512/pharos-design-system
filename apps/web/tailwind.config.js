const path = require('path');

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // DS package (switch src ↔ dist depending on what you import from)
    path.join(__dirname, "../../packages/pharos-design-system/src/**/*.{js,ts,jsx,tsx,mdx}")
  ],
  theme: { extend: {} },
  plugins: []
};
