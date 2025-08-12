#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');

class PharosCSSGenerator {
  constructor() {
    this.tokens = {};
  }

  async loadTokens() {
    try {
      const tokensPath = path.join(__dirname, '../tokens/json/pharos-tokens.json');
      this.tokens = await fs.readJson(tokensPath);
      console.log(chalk.blue('✓ PHAROS design tokens loaded'));
    } catch (error) {
      console.error(chalk.red('✗ Failed to load PHAROS tokens:'), error);
      process.exit(1);
    }
  }

  generateCSS() {
    let css = '/* PHAROS Design System - Generated CSS */\n';
    css += '/* Calm, readable, predictable. Light UI only. */\n\n';
    
    // Generate CSS custom properties
    css += this.generateCSSVariables();
    
    // Generate utility classes
    css += this.generateUtilityClasses();
    
    // Generate component styles
    css += this.generateComponentStyles();
    
    return css;
  }

  generateCSSVariables() {
    let css = ':root {\n';
    
    // Brand colors
    css += '  /* PHAROS Brand Colors */\n';
    css += '  --pharos-brand: #3538CD;\n';
    css += '  --pharos-brand-50: #E5E7FF;\n\n';
    
    // Neutral scale (Tailwind Slate)
    css += '  /* PHAROS Neutral Scale */\n';
    css += '  --pharos-slate-100: #f1f5f9;\n';
    css += '  --pharos-slate-200: #e2e8f0;\n';
    css += '  --pharos-slate-300: #cbd5e1;\n';
    css += '  --pharos-slate-400: #94a3b8;\n';
    css += '  --pharos-slate-500: #64748b;\n';
    css += '  --pharos-slate-600: #475569;\n';
    css += '  --pharos-slate-700: #334155;\n';
    css += '  --pharos-slate-800: #1e293b;\n';
    css += '  --pharos-slate-900: #0f172a;\n\n';
    
    // Status colors (tint triples)
    css += '  /* PHAROS Status Colors (Tint Triples) */\n';
    css += '  --pharos-success-100: #dcfce7;\n';
    css += '  --pharos-success-200: #bbf7d0;\n';
    css += '  --pharos-success-700: #15803d;\n';
    css += '  --pharos-warning-100: #fef3c7;\n';
    css += '  --pharos-warning-200: #fde68a;\n';
    css += '  --pharos-warning-700: #a16207;\n';
    css += '  --pharos-error-100: #fee2e2;\n';
    css += '  --pharos-error-200: #fecaca;\n';
    css += '  --pharos-error-700: #b91c1c;\n\n';
    
    // Typography
    css += '  /* PHAROS Typography */\n';
    css += '  --pharos-font-sans: "Plus Jakarta Sans", ui-sans-serif, system-ui;\n';
    css += '  --pharos-text-xs: 0.75rem;\n';
    css += '  --pharos-text-sm: 0.875rem;\n';
    css += '  --pharos-text-base: 1rem;\n';
    css += '  --pharos-text-lg: 1.125rem;\n';
    css += '  --pharos-text-xl: 1.25rem;\n';
    css += '  --pharos-text-2xl: 1.5rem;\n';
    css += '  --pharos-text-3xl: 2rem;\n';
    css += '  --pharos-font-normal: 400;\n';
    css += '  --pharos-font-medium: 500;\n';
    css += '  --pharos-font-semibold: 600;\n';
    css += '  --pharos-font-bold: 700;\n';
    css += '  --pharos-leading-tight: 1.25;\n';
    css += '  --pharos-leading-normal: 1.5;\n\n';
    
    // Spacing (8px baseline only)
    css += '  /* PHAROS Spacing (8px baseline only) */\n';
    css += '  --pharos-spacing-4: 0.25rem;   /* 4px */\n';
    css += '  --pharos-spacing-8: 0.5rem;    /* 8px */\n';
    css += '  --pharos-spacing-12: 0.75rem;  /* 12px */\n';
    css += '  --pharos-spacing-16: 1rem;     /* 16px */\n';
    css += '  --pharos-spacing-24: 1.5rem;   /* 24px */\n';
    css += '  --pharos-spacing-32: 2rem;     /* 32px */\n\n';
    
    // Border radius
    css += '  /* PHAROS Border Radius */\n';
    css += '  --pharos-radius-xl: 0.75rem;   /* 12px - Control */\n';
    css += '  --pharos-radius-2xl: 1rem;     /* 16px - Card */\n\n';
    
    // Shadows
    css += '  /* PHAROS Shadows */\n';
    css += '  --pharos-shadow: 0 1px 2px rgba(16,24,40,0.04);\n';
    css += '  --pharos-shadow-sm: 0 1px 1px rgba(16,24,40,0.03);\n\n';
    
    // Focus
    css += '  /* PHAROS Focus */\n';
    css += '  --pharos-focus-ring: ring-2 ring-brand ring-offset-2;\n\n';
    
    css += '}\n\n';
    
    return css;
  }

  generateUtilityClasses() {
    let css = '/* PHAROS Utility Classes */\n\n';
    
    // Brand color utilities
    css += '/* Brand Colors */\n';
    css += '.bg-brand { background-color: var(--pharos-brand); }\n';
    css += '.bg-brand-50 { background-color: var(--pharos-brand-50); }\n';
    css += '.text-brand { color: var(--pharos-brand); }\n';
    css += '.text-brand-50 { color: var(--pharos-brand-50); }\n\n';
    
    // Neutral color utilities (Tailwind Slate)
    css += '/* Slate Colors */\n';
    css += '.bg-slate-100 { background-color: var(--pharos-slate-100); }\n';
    css += '.bg-slate-200 { background-color: var(--pharos-slate-200); }\n';
    css += '.bg-slate-300 { background-color: var(--pharos-slate-300); }\n';
    css += '.bg-slate-400 { background-color: var(--pharos-slate-400); }\n';
    css += '.bg-slate-500 { background-color: var(--pharos-slate-500); }\n';
    css += '.bg-slate-600 { background-color: var(--pharos-slate-600); }\n';
    css += '.bg-slate-700 { background-color: var(--pharos-slate-700); }\n';
    css += '.bg-slate-800 { background-color: var(--pharos-slate-800); }\n';
    css += '.bg-slate-900 { background-color: var(--pharos-slate-900); }\n\n';
    
    css += '.text-slate-100 { color: var(--pharos-slate-100); }\n';
    css += '.text-slate-200 { color: var(--pharos-slate-200); }\n';
    css += '.text-slate-300 { color: var(--pharos-slate-300); }\n';
    css += '.text-slate-400 { color: var(--pharos-slate-400); }\n';
    css += '.text-slate-500 { color: var(--pharos-slate-500); }\n';
    css += '.text-slate-600 { color: var(--pharos-slate-600); }\n';
    css += '.text-slate-700 { color: var(--pharos-slate-700); }\n';
    css += '.text-slate-800 { color: var(--pharos-slate-800); }\n';
    css += '.text-slate-900 { color: var(--pharos-slate-900); }\n\n';
    
    // Status color utilities (tint triples)
    css += '/* Status Colors (Tint Triples) */\n';
    css += '.bg-success-100 { background-color: var(--pharos-success-100); }\n';
    css += '.bg-success-200 { background-color: var(--pharos-success-200); }\n';
    css += '.text-success-700 { color: var(--pharos-success-700); }\n';
    css += '.border-success-200 { border-color: var(--pharos-success-200); }\n\n';
    
    css += '.bg-warning-100 { background-color: var(--pharos-warning-100); }\n';
    css += '.bg-warning-200 { background-color: var(--pharos-warning-200); }\n';
    css += '.text-warning-700 { color: var(--pharos-warning-700); }\n';
    css += '.border-warning-200 { border-color: var(--pharos-warning-200); }\n\n';
    
    css += '.bg-error-100 { background-color: var(--pharos-error-100); }\n';
    css += '.bg-error-200 { background-color: var(--pharos-error-200); }\n';
    css += '.text-error-700 { color: var(--pharos-error-700); }\n';
    css += '.border-error-200 { border-color: var(--pharos-error-200); }\n\n';
    
    // Typography utilities
    css += '/* Typography */\n';
    css += '.font-pharos { font-family: var(--pharos-font-sans); }\n';
    css += '.text-xs { font-size: var(--pharos-text-xs); }\n';
    css += '.text-sm { font-size: var(--pharos-text-sm); }\n';
    css += '.text-base { font-size: var(--pharos-text-base); }\n';
    css += '.text-lg { font-size: var(--pharos-text-lg); }\n';
    css += '.text-xl { font-size: var(--pharos-text-xl); }\n';
    css += '.text-2xl { font-size: var(--pharos-text-2xl); }\n';
    css += '.text-3xl { font-size: var(--pharos-text-3xl); }\n\n';
    
    css += '.font-normal { font-weight: var(--pharos-font-normal); }\n';
    css += '.font-medium { font-weight: var(--pharos-font-medium); }\n';
    css += '.font-semibold { font-weight: var(--pharos-font-semibold); }\n';
    css += '.font-bold { font-weight: var(--pharos-font-bold); }\n\n';
    
    css += '.leading-tight { line-height: var(--pharos-leading-tight); }\n';
    css += '.leading-normal { line-height: var(--pharos-leading-normal); }\n\n';
    
    // Spacing utilities (8px baseline only)
    css += '/* Spacing (8px baseline only) */\n';
    css += '.p-3 { padding: var(--pharos-spacing-12); }\n';
    css += '.p-4 { padding: var(--pharos-spacing-16); }\n';
    css += '.p-6 { padding: var(--pharos-spacing-24); }\n';
    css += '.p-8 { padding: var(--pharos-spacing-32); }\n\n';
    
    // Border radius utilities
    css += '/* Border Radius */\n';
    css += '.rounded-xl { border-radius: var(--pharos-radius-xl); }\n';
    css += '.rounded-2xl { border-radius: var(--pharos-radius-2xl); }\n\n';
    
    // Shadow utilities
    css += '/* Shadows */\n';
    css += '.shadow-pharos { box-shadow: var(--pharos-shadow); }\n';
    css += '.shadow-pharos-sm { box-shadow: var(--pharos-shadow-sm); }\n\n';
    
    return css;
  }

  generateComponentStyles() {
    let css = '/* PHAROS Component Styles */\n\n';
    
    // Button styles
    css += '/* Button Variants */\n';
    css += '.btn-pharos-primary {\n';
    css += '  background-color: var(--pharos-brand);\n';
    css += '  color: white;\n';
    css += '  border-radius: var(--pharos-radius-xl);\n';
    css += '  padding: var(--pharos-spacing-12) var(--pharos-spacing-24);\n';
    css += '  font-weight: var(--pharos-font-medium);\n';
    css += '  transition: filter 0.2s;\n';
    css += '  border: none;\n';
    css += '  cursor: pointer;\n';
    css += '  font-family: var(--pharos-font-sans);\n';
    css += '}\n';
    css += '.btn-pharos-primary:hover { filter: brightness(0.95); }\n';
    css += '.btn-pharos-primary:disabled { opacity: 0.6; cursor: not-allowed; }\n\n';
    
    css += '.btn-pharos-secondary {\n';
    css += '  background-color: var(--pharos-brand-50);\n';
    css += '  color: var(--pharos-slate-900);\n';
    css += '  border: none;\n';
    css += '  border-radius: var(--pharos-radius-xl);\n';
    css += '  padding: var(--pharos-spacing-12) var(--pharos-spacing-24);\n';
    css += '  font-weight: var(--pharos-font-medium);\n';
    css += '  transition: background-color 0.2s;\n';
    css += '  cursor: pointer;\n';
    css += '  font-family: var(--pharos-font-sans);\n';
    css += '}\n';
    css += '.btn-pharos-secondary:hover { background-color: var(--pharos-slate-100); }\n';
    css += '.btn-pharos-secondary:disabled { opacity: 0.6; cursor: not-allowed; }\n\n';
    
    css += '.btn-pharos-outline {\n';
    css += '  background-color: white;\n';
    css += '  color: var(--pharos-slate-900);\n';
    css += '  border: 1px solid var(--pharos-slate-200);\n';
    css += '  border-radius: var(--pharos-radius-xl);\n';
    css += '  padding: var(--pharos-spacing-12) var(--pharos-spacing-24);\n';
    css += '  font-weight: var(--pharos-font-medium);\n';
    css += '  transition: background-color 0.2s;\n';
    css += '  cursor: pointer;\n';
    css += '  font-family: var(--pharos-font-sans);\n';
    css += '}\n';
    css += '.btn-pharos-outline:hover { background-color: var(--pharos-slate-50); }\n';
    css += '.btn-pharos-outline:disabled { opacity: 0.6; cursor: not-allowed; }\n\n';
    
    css += '.btn-pharos-ghost {\n';
    css += '  background-color: transparent;\n';
    css += '  color: var(--pharos-slate-700);\n';
    css += '  border: none;\n';
    css += '  border-radius: var(--pharos-radius-xl);\n';
    css += '  padding: var(--pharos-spacing-12) var(--pharos-spacing-24);\n';
    css += '  font-weight: var(--pharos-font-medium);\n';
    css += '  transition: background-color 0.2s;\n';
    css += '  cursor: pointer;\n';
    css += '  font-family: var(--pharos-font-sans);\n';
    css += '}\n';
    css += '.btn-pharos-ghost:hover { background-color: var(--pharos-slate-50); }\n';
    css += '.btn-pharos-ghost:disabled { opacity: 0.6; cursor: not-allowed; }\n\n';
    
    css += '.btn-pharos-destructive {\n';
    css += '  background-color: #dc2626;\n';
    css += '  color: white;\n';
    css += '  border: none;\n';
    css += '  border-radius: var(--pharos-radius-xl);\n';
    css += '  padding: var(--pharos-spacing-12) var(--pharos-spacing-24);\n';
    css += '  font-weight: var(--pharos-font-medium);\n';
    css += '  transition: background-color 0.2s;\n';
    css += '  cursor: pointer;\n';
    css += '  font-family: var(--pharos-font-sans);\n';
    css += '}\n';
    css += '.btn-pharos-destructive:hover { background-color: #b91c1c; }\n';
    css += '.btn-pharos-destructive:disabled { opacity: 0.6; cursor: not-allowed; }\n\n';
    
    // Card styles
    css += '/* Card Styles */\n';
    css += '.card-pharos {\n';
    css += '  background-color: white;\n';
    css += '  border: 1px solid var(--pharos-slate-200);\n';
    css += '  border-radius: var(--pharos-radius-2xl);\n';
    css += '  box-shadow: var(--pharos-shadow-pharos-sm);\n';
    css += '}\n\n';
    
    // Input styles
    css += '/* Input Styles */\n';
    css += '.input-pharos {\n';
    css += '  border: 1px solid var(--pharos-slate-200);\n';
    css += '  border-radius: var(--pharos-radius-xl);\n';
    css += '  padding: var(--pharos-spacing-12) var(--pharos-spacing-16);\n';
    css += '  font-family: var(--pharos-font-sans);\n';
    css += '  transition: border-color 0.2s, box-shadow 0.2s;\n';
    css += '  font-size: var(--pharos-text-base);\n';
    css += '  color: var(--pharos-slate-900);\n';
    css += '}\n';
    css += '.input-pharos:focus {\n';
    css += '  outline: none;\n';
    css += '  border-color: var(--pharos-brand);\n';
    css += '  box-shadow: 0 0 0 3px var(--pharos-brand-50);\n';
    css += '}\n';
    css += '.input-pharos:disabled {\n';
    css += '  background-color: var(--pharos-slate-50);\n';
    css += '  color: var(--pharos-slate-500);\n';
    css += '  cursor: not-allowed;\n';
    css += '}\n\n';
    
    // Badge styles
    css += '/* Badge Styles */\n';
    css += '.badge-pharos {\n';
    css += '  display: inline-flex;\n';
    css += '  align-items: center;\n';
    css += '  border-radius: 9999px;\n';
    css += '  padding: var(--pharos-spacing-4) var(--pharos-spacing-12);\n';
    css += '  font-size: var(--pharos-text-xs);\n';
    css += '  font-weight: var(--pharos-font-medium);\n';
    css += '  border: 1px solid;\n';
    css += '}\n\n';
    
    css += '.badge-pharos-neutral {\n';
    css += '  background-color: var(--pharos-slate-100);\n';
    css += '  color: var(--pharos-slate-800);\n';
    css += '  border-color: var(--pharos-slate-200);\n';
    css += '}\n\n';
    
    css += '.badge-pharos-success {\n';
    css += '  background-color: var(--pharos-success-100);\n';
    css += '  color: var(--pharos-success-700);\n';
    css += '  border-color: var(--pharos-success-200);\n';
    css += '}\n\n';
    
    css += '.badge-pharos-warning {\n';
    css += '  background-color: var(--pharos-warning-100);\n';
    css += '  color: var(--pharos-warning-700);\n';
    css += '  border-color: var(--pharos-warning-200);\n';
    css += '}\n\n';
    
    css += '.badge-pharos-error {\n';
    css += '  background-color: var(--pharos-error-100);\n';
    css += '  color: var(--pharos-error-700);\n';
    css += '  border-color: var(--pharos-error-200);\n';
    css += '}\n\n';
    
    return css;
  }

  async saveCSS() {
    try {
      const css = this.generateCSS();
      const cssPath = path.join(__dirname, '../tokens/css/pharos-design-system.css');
      
      await fs.ensureDir(path.dirname(cssPath));
      await fs.writeFile(cssPath, css);
      
      console.log(chalk.green(`✓ PHAROS CSS generated and saved to ${cssPath}`));
    } catch (error) {
      console.error(chalk.red('✗ Failed to save PHAROS CSS:'), error);
    }
  }
}

// Main execution
async function main() {
  const generator = new PharosCSSGenerator();
  
  try {
    await generator.loadTokens();
    await generator.saveCSS();
  } catch (error) {
    console.error(chalk.red('✗ PHAROS CSS generation failed:'), error);
  }
}

if (require.main === module) {
  main().catch(console.error);
}

module.exports = PharosCSSGenerator;
