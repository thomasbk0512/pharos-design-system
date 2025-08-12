#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');

class CSSTokenGenerator {
  constructor() {
    this.tokens = {};
  }

  async loadTokens() {
    try {
      const tokensPath = path.join(__dirname, '../tokens/json/design-tokens.json');
      this.tokens = await fs.readJson(tokensPath);
      console.log(chalk.blue('✓ Design tokens loaded'));
    } catch (error) {
      console.error(chalk.red('✗ Failed to load tokens:'), error);
      process.exit(1);
    }
  }

  generateCSSVariables() {
    let css = ':root {\n';
    
    // Generate color variables
    css += this.generateColorVariables();
    
    // Generate typography variables
    css += this.generateTypographyVariables();
    
    // Generate spacing variables
    css += this.generateSpacingVariables();
    
    // Generate shadow variables
    css += this.generateShadowVariables();
    
    css += '}\n\n';
    
    // Generate utility classes
    css += this.generateUtilityClasses();
    
    return css;
  }

  generateColorVariables() {
    let css = '  /* Color Tokens */\n';
    
    Object.entries(this.tokens.colors).forEach(([category, shades]) => {
      Object.entries(shades).forEach(([shade, value]) => {
        const variableName = `--color-${category}-${shade}`;
        css += `  ${variableName}: ${value};\n`;
      });
    });
    
    css += '\n';
    return css;
  }

  generateTypographyVariables() {
    let css = '  /* Typography Tokens */\n';
    
    // Font sizes
    Object.entries(this.tokens.typography.fontSizes).forEach(([size, value]) => {
      css += `  --font-size-${size}: ${value};\n`;
    });
    
    // Font weights
    Object.entries(this.tokens.typography.fontWeights).forEach(([weight, value]) => {
      css += `  --font-weight-${weight}: ${value};\n`;
    });
    
    // Line heights
    Object.entries(this.tokens.typography.lineHeights).forEach(([height, value]) => {
      css += `  --line-height-${height}: ${value};\n`;
    });
    
    css += '\n';
    return css;
  }

  generateSpacingVariables() {
    let css = '  /* Spacing Tokens */\n';
    
    Object.entries(this.tokens.spacing).forEach(([space, value]) => {
      css += `  --spacing-${space}: ${value};\n`;
    });
    
    css += '\n';
    return css;
  }

  generateShadowVariables() {
    let css = '  /* Shadow Tokens */\n';
    
    Object.entries(this.tokens.shadows).forEach(([shadow, value]) => {
      css += `  --shadow-${shadow}: ${value};\n`;
    });
    
    css += '\n';
    return css;
  }

  generateUtilityClasses() {
    let css = '/* Utility Classes */\n\n';
    
    // Color utilities
    css += '/* Color Utilities */\n';
    Object.entries(this.tokens.colors).forEach(([category, shades]) => {
      Object.entries(shades).forEach(([shade, value]) => {
        css += `.bg-${category}-${shade} { background-color: var(--color-${category}-${shade}); }\n`;
        css += `.text-${category}-${shade} { color: var(--color-${category}-${shade}); }\n`;
      });
    });
    
    css += '\n';
    
    // Typography utilities
    css += '/* Typography Utilities */\n';
    Object.entries(this.tokens.typography.fontSizes).forEach(([size, value]) => {
      css += `.text-${size} { font-size: var(--font-size-${size}); }\n`;
    });
    
    Object.entries(this.tokens.typography.fontWeights).forEach(([weight, value]) => {
      css += `.font-${weight} { font-weight: var(--font-weight-${weight}); }\n`;
    });
    
    css += '\n';
    
    // Spacing utilities
    css += '/* Spacing Utilities */\n';
    Object.entries(this.tokens.spacing).forEach(([space, value]) => {
      css += `.p-${space} { padding: var(--spacing-${space}); }\n`;
      css += `.m-${space} { margin: var(--spacing-${space}); }\n`;
    });
    
    return css;
  }

  async saveCSS() {
    try {
      const css = this.generateCSSVariables();
      const cssPath = path.join(__dirname, '../tokens/css/design-tokens.css');
      
      await fs.ensureDir(path.dirname(cssPath));
      await fs.writeFile(cssPath, css);
      
      console.log(chalk.green(`✓ CSS generated and saved to ${cssPath}`));
    } catch (error) {
      console.error(chalk.red('✗ Failed to save CSS:'), error);
    }
  }
}

// Main execution
async function main() {
  const generator = new CSSTokenGenerator();
  
  try {
    await generator.loadTokens();
    await generator.saveCSS();
  } catch (error) {
    console.error(chalk.red('✗ CSS generation failed:'), error);
  }
}

if (require.main === module) {
  main().catch(console.error);
}

module.exports = CSSTokenGenerator;
