const path = require("path");

module.exports = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx,mdx}",
    "./components/**/*.{ts,tsx,js,jsx,mdx}",
    // monorepo source (local dev) - more specific pattern
    path.join(__dirname, "../../packages/pharos-design-system/src/**/*.{ts,tsx,js,jsx,mdx}"),
    // published build (Vercel)
    "./node_modules/@pharos/design-system/**/*.{js,ts,jsx,tsx}"
  ],
  // Keep a broad safelist so DS runtime/dynamic classes are not purged
  safelist: [
    // layout/display
    { pattern: /^(flex|inline-flex|grid|inline-grid)$/ },
    { pattern: /^(items|justify|content|self)-(start|center|end|between|around)$/ },
    { pattern: /^(gap|space-[xy])-(0|0\.5|1|1\.5|2|3|4|6|8|10|12|16)$/ },
    { pattern: /^(p|px|py|pt|pb|pl|pr|m|mx|my|mt|mb|ml|mr)-(0|0\.5|1|1\.5|2|3|4|6|8|10|12|16)$/ },

    // shapes & borders
    { pattern: /^rounded(-(none|sm|md|lg|xl|2xl|3xl|full))?$/ },
    { pattern: /^border(-(0|2|4|8))?$/ },

    // colors (bg/text/border)
    { pattern: /^bg-(white|black|slate|gray|zinc|neutral|blue|indigo|emerald|red|amber)-(50|100|200|300|400|500|600|700|800|900)$/ },
    { pattern: /^text-(slate|gray|zinc|neutral|blue|indigo|emerald|red|amber)-(50|100|200|300|400|500|600|700|800|900)$/ },
    { pattern: /^border-(slate|gray|zinc|neutral|blue|indigo|emerald|red|amber)-(50|100|200|300|400|500|600|700|800|900)$/ },

    // typography & shadows
    { pattern: /^text-(xs|sm|base|lg|xl|2xl|3xl|4xl)$/ },
    { pattern: /^(shadow|shadow-(sm|md|lg|xl|2xl))$/ },

    // positioning (AppShell / bottom nav, dialogs, etc.)
    { pattern: /^(fixed|absolute|relative)$/ },
    { pattern: /^(bottom|top|left|right|inset|inset-x|inset-y)-(0|1|2|3|4|6|8|12|16)$/ },
    { pattern: /^z-(0|10|20|30|40|50)$/ }
  ],
  theme: { extend: {} },
  plugins: []
};
