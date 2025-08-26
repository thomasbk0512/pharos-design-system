const path = require("path");

module.exports = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx,mdx}",
    "./components/**/*.{ts,tsx,js,jsx,mdx}",
    // monorepo local source (dev)
    path.join(__dirname, "../../packages/pharos-design-system/src/**/*.{ts,tsx,js,jsx,mdx}"),
    // published package (CI/Vercel)
    "./node_modules/@pharos/design-system/**/*.{js,ts,jsx,tsx}"
  ],
  safelist: [
    // minimal dynamic classes used by DS
    { pattern: /^rounded(-(sm|md|lg|xl|2xl|full))?$/ },
    { pattern: /^border(-(0|2))?$/ },
    { pattern: /^shadow(-(sm|md|lg|xl|2xl))?$/ },
    { pattern: /^(flex|grid|inline-flex)$/ },
    { pattern: /^(items|justify)-(start|center|end|between)$/ },
    { pattern: /^(p|px|py|m|mx|my)-(0|1|2|3|4|6|8|10|12|16)$/ },
    { pattern: /^(text|bg|border)-(slate|gray|zinc|neutral|blue|indigo|emerald|red|amber)-(50|100|200|300|400|500|600|700|800|900)$/ },
  ],
  theme: { extend: {} },
  plugins: []
};

