[![pharos-ci](https://github.com/thomasbk0512/pharos-design-system/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/thomasbk0512/pharos-design-system/actions/workflows/ci.yml)

# 🎨 **PHAROS Design System — Light UI**

**Calm, readable, predictable. Light UI only.**

A comprehensive design system that works seamlessly with Figma, Cursor, and MCPs. Built for DeFi applications with clarity over decoration.

## ✨ Features

- **🎨 Automated Token Extraction** - Directly from your Figma PHAROS file
- **🔧 Complete Component Library** - React components with TypeScript support
- **🎯 Tailwind Integration** - Full PHAROS design system in Tailwind CSS
- **📱 Responsive & Accessible** - Built with modern web standards
- **🔄 Automated Workflows** - CI/CD pipeline for design updates
- **📊 Real-time Updates** - Watch for Figma changes automatically

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Environment Variables

Create a `.env` file:

```bash
FIGMA_ACCESS_TOKEN=your_figma_access_token
FIGMA_FILE_KEY=rjisK4g6zXD9hH7BXMXviI
```

### 3. Extract PHAROS Design Tokens

```bash
npm run pharos
```

This will:
- Extract tokens from your Figma file
- Generate PHAROS CSS
- Create design system JSON

### 4. Use in Your Project

```html
<!-- Include PHAROS CSS -->
<link rel="stylesheet" href="tokens/css/pharos-design-system.css">
```

```tsx
// Import PHAROS components
import { Button, Card, Metric } from '@/components/pharos';

export default function App() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>PHAROS Dashboard</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Connect Wallet</Button>
      </CardContent>
    </Card>
  );
}
```

## 🎯 Design Principles

### **Calm, Readable, Predictable**
- Light UI only
- Clarity over decoration
- Whitespace is a feature

### **Consistent Patterns**
- **Radius**: 16px (cards), 12-16px (controls)
- **Spacing**: 8px baseline system
- **Shadows**: Subtle only
- **Colors**: Brand indigo + Tailwind Slate

### **Typography**
- **Family**: Plus Jakarta Sans, ui-sans-serif, system-ui
- **Scale**: 32/24/20/16/14/12px
- **Line Heights**: Headings tight, body normal

## 🎨 **Design Tokens**

### **Brand Colors**
```css
:root {
  --pharos-brand: #3538CD;        /* Primary brand color */
  --pharos-brand-50: #E5E7FF;     /* Light brand tint */
}
```

### **Neutral Scale (Tailwind Slate)**
```css
:root {
  --pharos-slate-100: #f1f5f9;   /* Surface backgrounds */
  --pharos-slate-200: #e2e8f0;   /* Borders, dividers */
  --pharos-slate-300: #cbd5e1;   /* Disabled text */
  --pharos-slate-400: #94a3b8;   /* Placeholder text */
  --pharos-slate-500: #64748b;   /* Secondary text */
  --pharos-slate-600: #475569;   /* Primary text */
  --pharos-slate-700: #334155;   /* Headings */
  --pharos-slate-800: #1e293b;   /* Strong headings */
  --pharos-slate-900: #0f172a;   /* Page backgrounds */
}
```

### **Status Colors (Tint Triples)**
```css
:root {
  /* Success */
  --pharos-success-100: #dcfce7;  /* Background */
  --pharos-success-200: #bbf7d0;  /* Border */
  --pharos-success-700: #15803d;  /* Text */
  
  /* Warning */
  --pharos-warning-100: #fef3c7;  /* Background */
  --pharos-warning-200: #fde68a;  /* Border */
  --pharos-warning-700: #a16207;  /* Text */
  
  /* Error */
  --pharos-error-100: #fee2e2;    /* Background */
  --pharos-error-200: #fecaca;    /* Border */
  --pharos-error-700: #b91c1c;    /* Text */
}
```

### **Spacing (8px Baseline Only)**
```css
:root {
  --pharos-spacing-4: 0.25rem;   /* 4px */
  --pharos-spacing-8: 0.5rem;    /* 8px */
  --pharos-spacing-12: 0.75rem;  /* 12px */
  --pharos-spacing-16: 1rem;     /* 16px */
  --pharos-spacing-24: 1.5rem;   /* 24px */
  --pharos-spacing-32: 2rem;     /* 32px */
}
```

### **Border Radius**
```css
:root {
  --pharos-radius-xl: 0.75rem;   /* 12px - Controls */
  --pharos-radius-2xl: 1rem;     /* 16px - Cards */
}
```

### **Shadows**
```css
:root {
  --pharos-shadow: 0 1px 2px rgba(16,24,40,0.04);      /* Primary elevation */
  --pharos-shadow-sm: 0 1px 1px rgba(16,24,40,0.03);   /* Subtle elevation */
}
```

### **Focus States**
```css
:root {
  --pharos-focus-ring: ring-2 ring-brand ring-offset-2; /* Visible focus indicators */
}
```

## 🧩 Component Library

### Core Components

#### Button
```tsx
import { Button, ButtonPrimary, ButtonSecondary, ButtonOutline, ButtonGhost, ButtonDestructive } from '@/components/pharos';

<Button variant="primary" size="md">Connect Wallet</Button>
<Button variant="secondary">Settings</Button>
<Button variant="outline">Save Draft</Button>
<Button variant="ghost">Cancel</Button>
<Button variant="destructive">Delete Strategy</Button>
<Button loading>Loading...</Button>
<Button disabled>Disabled</Button>
```

**Variants**: `primary` (solid brand), `secondary` (brand.50 fill), `outline`, `ghost`, `destructive` (red)  
**States**: `default`, `hover`, `active`, `focus`, `disabled`, `loading`  
**Disabled**: 60% opacity, non-interactive, maintains AA contrast

#### Card
```tsx
import { Card, CardHeader, CardContent, CardTitle } from '@/components/pharos';

<Card>
  <CardHeader>
    <CardTitle>Strategy Summary</CardTitle>
  </CardHeader>
  <CardContent>
    <p>Your content here</p>
  </CardContent>
</Card>
```

#### Input
```tsx
import { LabeledInput, LabeledNumberInput, LabeledTextarea } from '@/components/pharos';

<LabeledInput 
  id="strategy-name" 
  label="Strategy Name"
  helperText="Enter a descriptive name for your strategy"
/>

<LabeledNumberInput 
  id="allocation" 
  label="Allocation %"
  placeholder="25"
/>

<LabeledTextarea 
  id="description" 
  label="Description"
  placeholder="Describe your strategy"
/>
```

**States**: `default`, `focus` (ring-brand), `error` (border/text-red, helper), `disabled`  
**Focus**: Visible ring with brand color and offset

#### Badge
```tsx
import { Badge, BadgeNeutral, BadgeSuccess, BadgeWarning, BadgeError } from '@/components/pharos';

<BadgeNeutral>Neutral</BadgeNeutral>
<BadgeSuccess>Success</BadgeSuccess>
<BadgeWarning>Warning</BadgeWarning>
<BadgeError>Error</BadgeError>
```

**Tone Maps**: Maps to status tint triples (bg-100/border-200/text-700)  
**Style**: Rounded-full, 1px border, AA contrast maintained

#### Metric
```tsx
import { Metric, MetricGrid, PerformanceMetric } from '@/components/pharos';

<MetricGrid columns={3}>
  <PerformanceMetric 
    label="30d Return" 
    value="+3.4%" 
    change={3.4} 
  />
  <PerformanceMetric 
    label="Max Drawdown" 
    value="-1.2%" 
    change={-1.2} 
  />
  <Metric 
    label="Confidence" 
    value="High" 
  />
</MetricGrid>
```

#### Stepper
```tsx
import { Stepper } from '@/components/pharos';

<Stepper step={1} steps={['Goal', 'Composer', 'Deploy', 'Monitor']} />
```

**4 Steps**: Goal, Composer, Deploy, Monitor  
**Style**: Chip pattern with 16px radius, icons for active/done, separators between steps

#### Tabs
```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/pharos';

<Tabs defaultValue="overview">
  <TabsList>
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="performance">Performance</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">Overview content</TabsContent>
  <TabsContent value="performance">Performance content</TabsContent>
</Tabs>
```

#### Charts
```tsx
import { PerfVsHodl, AreaChartBlock } from '@/components/pharos';

<PerfVsHodl data={performanceData} />
<AreaChartBlock data={areaData} />
```

**Types**: Line/Area only  
**Theme**: Strategy in brand color, baseline in slate-400/500, dashed grid, concise tooltips

### Layout Components

#### Header & Navigation
```tsx
import { Header, Page, PageHeader } from '@/components/pharos';

<Header showMenuButton onMenuClick={toggleMenu} />
<Page>
  <PageHeader 
    title="Dashboard" 
    subtitle="Monitor your DeFi strategies"
  >
    <Button>New Strategy</Button>
  </PageHeader>
</Page>
```

## 🎨 Tailwind Integration

### Configuration

```ts
// tailwind.config.ts
import type { Config } from 'tailwindcss';

export default {
  content: [
    'src/**/*.{ts,tsx,mdx}',
    'components/**/*.{ts,tsx}',
    'tokens/css/**/*.css'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#3538CD',
          50: '#E5E7FF',
        },
        pharos: {
          brand: '#3538CD',
          'brand-50': '#E5E7FF',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'ui-sans-serif', 'system-ui'],
      },
      borderRadius: {
        xl: '12px',
        '2xl': '16px',
      },
      boxShadow: {
        pharos: '0 1px 2px 0 rgba(16,24,40,0.04)',
      },
    },
  },
} satisfies Config;
```

### Utility Classes

```css
/* Brand Colors */
.bg-pharos-brand
.text-pharos-brand
.bg-pharos-brand-50

/* Slate Colors */
.bg-slate-100
.text-slate-900

/* Typography */
.font-pharos
.text-2xl
.font-semibold

/* Spacing */
.p-6
.m-4
.gap-4

/* Border Radius */
.rounded-xl
.rounded-2xl

/* Shadows */
.shadow-pharos
.shadow-sm
```

## 🔄 Automated Workflows

### Local Development

```bash
# Watch for Figma changes
npm run watch-figma

# Extract tokens manually
npm run pharos-tokens

# Generate CSS manually
npm run pharos-css

# Full PHAROS update
npm run pharos
```

### CI/CD Pipeline

The system includes GitHub Actions that:

1. **Extract Tokens** - Pull latest from Figma
2. **Build Components** - Type check and lint
3. **Test System** - Validate output
4. **Deploy** - Create releases automatically
5. **Notify** - Team notifications

### Figma Integration

- **Real-time Updates** - Polls Figma every 5 minutes
- **Version Tracking** - Monitors file version changes
- **Automatic Extraction** - Updates tokens when designs change
- **CSS Generation** - Regenerates CSS with new tokens

## 📁 Project Structure

```
design-system/
├── components/pharos/          # PHAROS component library
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Input.tsx
│   ├── Badge.tsx
│   ├── Metric.tsx
│   ├── AlertItem.tsx
│   ├── Stepper.tsx
│   ├── Tabs.tsx
│   ├── ChartBlock.tsx
│   ├── Layout.tsx
│   └── index.ts
├── tokens/
│   ├── json/                  # Generated design tokens
│   │   └── pharos-tokens.json
│   └── css/                   # Generated CSS
│       └── pharos-design-system.css
├── scripts/                   # Build and extraction scripts
│   ├── pharos-tokens.js
│   ├── pharos-css-generator.js
│   ├── watch-figma.js
│   └── figma-api-client.js
├── lib/
│   └── utils.ts              # Utility functions
├── tailwind.config.ts        # Tailwind configuration
├── .github/workflows/        # CI/CD workflows
└── package.json
```

## 🚀 Available Scripts

```bash
# Core PHAROS operations
npm run pharos              # Extract tokens + generate CSS
npm run pharos-tokens       # Extract tokens from Figma
npm run pharos-css          # Generate CSS from tokens

# Development
npm run dev                 # Development setup
npm run watch-figma         # Watch for Figma changes

# Legacy (kept for compatibility)
npm run extract-tokens      # Old token extraction
npm run generate-css        # Old CSS generation
npm run generate-json       # Generate JSON tokens
npm run explore-figma       # Explore Figma structure
```

## 🔧 Configuration

### Environment Variables

```bash
FIGMA_ACCESS_TOKEN=figd_...    # Your Figma access token
FIGMA_FILE_KEY=rjisK4g6zXD9hH7BXMXviI  # PHAROS file key
```

### Figma Setup

1. **Create Access Token** - Go to Figma Settings > Account > Personal Access Tokens
2. **Get File Key** - From your PHAROS Figma file URL
3. **Set Permissions** - Ensure token has read access to your file

### GitHub Secrets

For CI/CD, set these repository secrets:

```bash
FIGMA_ACCESS_TOKEN=your_token_here
FIGMA_FILE_KEY=rjisK4g6zXD9hH7BXMXviI
```

## 📚 Usage Examples

### Basic Dashboard

```tsx
import { 
  Header, 
  Page, 
  PageHeader, 
  Card, 
  CardHeader, 
  CardContent, 
  CardTitle,
  MetricGrid,
  PerformanceMetric,
  Button
} from '@/components/pharos';

export default function Dashboard() {
  return (
    <>
      <Header />
      <Page>
        <PageHeader 
          title="PHAROS Dashboard" 
          subtitle="Monitor your DeFi strategies"
        >
          <Button>New Strategy</Button>
        </PageHeader>
        
        <MetricGrid columns={3}>
          <PerformanceMetric 
            label="Total Value Locked" 
            value="$2.4M" 
            change={12.5} 
          />
          <PerformanceMetric 
            label="30d Return" 
            value="+8.2%" 
            change={8.2} 
          />
          <PerformanceMetric 
            label="Active Strategies" 
            value="7" 
            change={2} 
          />
        </MetricGrid>
        
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Strategy deployment activity will appear here</p>
          </CardContent>
        </Card>
      </Page>
    </>
  );
}
```

### Form with Validation

```tsx
import { 
  Card, 
  CardHeader, 
  CardContent, 
  CardTitle,
  LabeledInput,
  LabeledNumberInput,
  Button,
  Badge
} from '@/components/pharos';

export default function StrategyForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Create New Strategy</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <LabeledInput 
          id="strategy-name" 
          label="Strategy Name"
          placeholder="Conservative Yield Farm"
          helperText="Choose a descriptive name for your strategy"
          required
        />
        
        <LabeledNumberInput 
          id="allocation" 
          label="Portfolio Allocation"
          placeholder="25"
          helperText="Percentage of portfolio to allocate"
          required
        />
        
        <div className="flex items-center gap-4">
          <Button type="submit">Deploy Strategy</Button>
          <Button variant="secondary">Save Draft</Button>
        </div>
      </CardContent>
    </Card>
  );
}
```

## 🎯 Best Practices

### Design System Usage

1. **Use PHAROS Tokens** - Always use CSS custom properties
2. **Follow Spacing Scale** - Stick to 8px baseline
3. **Consistent Radius** - 12px for controls, 16px for cards
4. **Brand Colors** - Primary actions use brand indigo
5. **Typography Scale** - Use defined font sizes and weights

### Component Development

1. **Extend Base Components** - Build on existing PHAROS components
2. **Consistent Props** - Follow established patterns
3. **Accessibility First** - Include proper ARIA labels and focus states
4. **Mobile Responsive** - Design for all screen sizes
5. **Performance** - Keep components lightweight

### Token Management

1. **Single Source of Truth** - Figma is the source
2. **Automated Updates** - Use CI/CD pipeline
3. **Version Control** - Track token changes
4. **Documentation** - Keep token usage documented
5. **Testing** - Validate token structure

## 🐛 Troubleshooting

### Common Issues

#### Token Extraction Fails
```bash
# Check Figma access
npm run explore-figma

# Verify environment variables
echo $FIGMA_ACCESS_TOKEN
echo $FIGMA_FILE_KEY
```

#### CSS Generation Issues
```bash
# Regenerate tokens first
npm run pharos-tokens

# Then generate CSS
npm run pharos-css
```

#### Component Import Errors
```bash
# Check TypeScript configuration
npx tsc --noEmit

# Verify component exports
cat components/pharos/index.ts
```

### Debug Mode

```bash
# Enable verbose logging
DEBUG=pharos:* npm run pharos

# Check file watcher
npm run watch-figma -- --verbose
```

## 🤝 Contributing

### Development Workflow

1. **Fork Repository** - Create your fork
2. **Create Branch** - `feature/new-component`
3. **Make Changes** - Follow PHAROS design principles
4. **Test Changes** - Run `npm run pharos`
5. **Submit PR** - Include description of changes

### Code Standards

- **TypeScript** - All components must be typed
- **ESLint** - Follow established rules
- **Prettier** - Consistent formatting
- **Accessibility** - WCAG 2.1 AA compliance
- **Documentation** - Include JSDoc comments

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Figma** - Design tool integration
- **Tailwind CSS** - Utility-first CSS framework
- **React** - Component library foundation
- **TypeScript** - Type safety and developer experience

---

**Built with ❤️ for the PHAROS DeFi platform**

*Calm, readable, predictable. Light UI only.*
