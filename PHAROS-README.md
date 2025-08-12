# 🎨 **PHAROS Design System — Refactored & Production Ready**

## 🚀 **What's New**

This is a **complete refactor** of the PHAROS Design System that enforces **strict non-negotiables** for consistent, professional UI development.

## 🎯 **Hard Guards (Zero Tolerance)**

### **Tailwind Tokens Only**
- **Spacing**: Only `0, 4, 8, 12, 16, 24, 32` (class names `p-0` to `p-6`)
- **Shadows**: Only `shadow-pharos` and `shadow-pharos-sm`
- **Colors**: Only brand (#3538CD), brand-50 (#E5E7FF), slate neutrals, status tint triples

### **Pharos Wrappers Only**
- Use **only** `PharosCard`, `PharosButton`, `StatusChip`, `LabeledInput`, `Stepper`, `Metric`, `ChartBlock`
- No raw HTML elements or generic components

### **No Interactive Specimens**
- All examples are **static specimens**
- No Popover/Select/Tooltip overlays
- Clean, scannable documentation

### **8px Rhythm Enforced**
- Minimum interior padding on controls: 12px (`p-3`)
- Card headers: `p-3 pb-2` (12px, 8px bottom)
- Card content: `p-4` (16px)
- Gaps never 0 inside chips/stepper

### **No Nested Borders**
- Single container borders only
- Uses `divide-y` for internal sections
- Clean, professional appearance

## 📁 **File Structure**

```
design-system/
├── src/
│   ├── lib/
│   │   ├── pharos/
│   │   │   └── tokens.ts          # PHAROS design tokens
│   │   └── utils.ts               # cn() utility function
│   ├── components/
│   │   ├── pharos/                # PHAROS component library
│   │   │   ├── Card.tsx           # PharosCard wrapper
│   │   │   ├── Button.tsx         # PharosButton variants
│   │   │   ├── Badge.tsx          # StatusChip component
│   │   │   ├── LabeledInput.tsx   # Input with states
│   │   │   ├── Metric.tsx         # No decorative bullets
│   │   │   ├── Stepper.tsx        # Chip pattern
│   │   │   └── ChartBlock.tsx     # Line charts
│   │   └── docs/                  # Documentation scaffold
│   │       ├── DocsPage.tsx       # Main container
│   │       ├── DocsSection.tsx    # Section headers
│   │       ├── SpecimenCard.tsx   # Example wrapper
│   │       └── StateGrid.tsx      # State matrix
│   └── app/
│       └── design-system/
│           └── page.tsx           # Main docs page
├── components/                     # Legacy components (deprecated)
├── tokens/
│   └── css/
│       └── pharos-design-system.css # Generated CSS
├── scripts/
│   ├── pharos-tokens.js           # Token extraction
│   ├── pharos-css-generator.js    # CSS generation
│   └── lint-guards.js             # CI token validation
├── tailwind.config.ts             # Strict token overrides
├── package.json                   # Dependencies + scripts
└── test-pharos.html               # Visual test page
```

## 🛠️ **Quick Start**

### **1. Install Dependencies**
```bash
npm install
```

### **2. Generate Tokens & CSS**
```bash
npm run pharos
```

### **3. Validate Token Compliance**
```bash
npm run lint:tokens
```

### **4. View Test Page**
```bash
open test-pharos.html
```

## 🎨 **Component Usage**

### **PharosCard**
```tsx
import { PharosCard, PharosCardHeader, PharosCardContent } from '@/components/pharos/Card'

<PharosCard>
  <PharosCardHeader>
    <h3>Card Title</h3>
  </PharosCardHeader>
  <PharosCardContent>
    <p>Card content with locked padding</p>
  </PharosCardContent>
</PharosCard>
```

### **StatusChip**
```tsx
import { StatusChip } from '@/components/pharos/Badge'

<div className="flex gap-2">
  <StatusChip tone="success">Success</StatusChip>
  <StatusChip tone="warning">Warning</StatusChip>
  <StatusChip tone="error">Error</StatusChip>
  <StatusChip tone="neutral">Neutral</StatusChip>
</div>
```

### **PharosButton**
```tsx
import { PharosButton } from '@/components/pharos/Button'

<PharosButton variant="primary">Primary</PharosButton>
<PharosButton variant="secondary">Secondary</PharosButton>
<PharosButton variant="destructive">Delete</PharosButton>
<PharosButton loading>Loading</PharosButton>
```

## 🔒 **Token Enforcement**

### **Allowed Spacing Classes**
- `p-0`, `p-1`, `p-2`, `p-3`, `p-4`, `p-5`, `p-6`
- `px-0`, `px-1`, `px-2`, `px-3`, `px-4`, `px-5`, `px-6`
- `py-0`, `py-1`, `py-2`, `py-3`, `py-4`, `py-5`, `py-6`
- `gap-2`, `gap-3`, `gap-4`, `gap-5`, `gap-6`

### **Allowed Shadow Classes**
- `shadow-pharos`
- `shadow-pharos-sm`

### **Forbidden Classes (Will Fail CI)**
- `p-2`, `p-5`, `p-7`, `p-8` (not in 8px ladder)
- `gap-1`, `gap-0` (too small)
- `shadow-md`, `shadow-lg`, `shadow-xl` (not PHAROS tokens)
- Any hex colors outside brand palette

## 🚫 **What's Not Allowed**

- **Spacing violations**: Using `p-2`, `p-5`, `gap-1`, `gap-0`
- **Shadow violations**: Using `shadow-md`, `shadow-lg`, custom shadows
- **Color violations**: Using hex colors outside brand palette
- **Component violations**: Using raw HTML instead of Pharos wrappers
- **Interactive specimens**: Popovers, tooltips, or overlays in docs
- **Nested borders**: Multiple borders in single component
- **Zero gaps**: Chips or stepper items touching each other

## ✅ **Validation Commands**

### **Token Compliance**
```bash
npm run lint:tokens
```

### **CSS Generation**
```bash
npm run pharos-css
```

### **Full Build**
```bash
npm run pharos
```

## 🎯 **Design Principles**

1. **Calm**: Subtle shadows, muted colors, generous whitespace
2. **Readable**: AA contrast, clear hierarchy, consistent spacing
3. **Predictable**: 8px baseline, locked tokens, no surprises
4. **Professional**: Atlassian-like rigor, clean foundations, chip patterns

## 🚀 **Production Ready**

- ✅ **Strict token enforcement** with CI guards
- ✅ **Complete component library** with all states
- ✅ **Documentation scaffold** for team adoption
- ✅ **Visual test page** for validation
- ✅ **8px rhythm** enforced throughout
- ✅ **No decorative elements** or nested borders
- ✅ **Status tint triples** for consistent color usage

## 🔧 **Customization**

To modify the system:
1. Update `tailwind.config.ts` (maintain 8px ladder)
2. Update `src/lib/pharos/tokens.ts`
3. Regenerate CSS: `npm run pharos-css`
4. Validate: `npm run lint:tokens`

## 📚 **Documentation**

- **`src/app/design-system/page.tsx`**: Main documentation page
- **`test-pharos.html`**: Visual validation page
- **`components/docs/`**: Documentation scaffold components
- **`components/pharos/`**: PHAROS component library

---

**Built with ❤️ for consistent, professional UI development**
