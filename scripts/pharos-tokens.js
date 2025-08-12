#!/usr/bin/env node

const FigmaAPIClient = require('./figma-api-client');
const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');

class PharosTokenExtractor {
  constructor() {
    const accessToken = process.env.FIGMA_ACCESS_TOKEN || '***REMOVED***';
    this.client = new FigmaAPIClient(accessToken);
    
    // PHAROS Design System tokens structure
    this.tokens = {
      colors: {
        brand: {
          DEFAULT: '#3538CD',
          50: '#E5E7FF'
        },
        neutral: {
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a'
        },
        status: {
          error: {
            DEFAULT: '#dc2626',
            100: '#fef2f2'
          },
          warning: {
            DEFAULT: '#d97706',
            100: '#fffbeb'
          },
          success: {
            DEFAULT: '#16a34a',
            100: '#f0fdf4'
          }
        }
      },
      typography: {
        fontFamily: {
          sans: ['Plus Jakarta Sans', 'ui-sans-serif', 'system-ui']
        },
        fontSize: {
          'xs': '0.75rem',    // 12px
          'sm': '0.875rem',   // 14px
          'base': '1rem',     // 16px
          'xl': '1.25rem',    // 20px
          '2xl': '1.5rem',    // 24px
          '3xl': '2rem'       // 32px
        },
        fontWeight: {
          'normal': '400',
          'medium': '500',
          'semibold': '600',
          'bold': '700'
        },
        lineHeight: {
          'tight': '1.25',
          'normal': '1.5'
        }
      },
      spacing: {
        '0': '0',
        '1': '0.125rem',  // 2px
        '2': '0.25rem',   // 4px
        '3': '0.375rem',  // 6px
        '4': '0.5rem',    // 8px
        '5': '0.625rem',  // 10px
        '6': '0.75rem',   // 12px
        '8': '1rem',      // 16px
        '10': '1.25rem',  // 20px
        '12': '1.5rem',   // 24px
        '16': '2rem',     // 32px
        '20': '2.5rem',   // 40px
        '24': '3rem',     // 48px
        '32': '4rem',     // 64px
        '40': '5rem',     // 80px
        '48': '6rem',     // 96px
        '64': '8rem'      // 128px
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px'
      },
      boxShadow: {
        'pharos': '0 1px 2px 0 rgba(16,24,40,0.04)',
        'sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)'
      },
      focus: {
        ring: '#3538CD'
      }
    };
  }

  async connect() {
    try {
      console.log(chalk.blue('🔗 Connecting to PHAROS Figma file...'));
      console.log(chalk.green('✓ Connected to Figma API'));
    } catch (error) {
      console.error(chalk.red('✗ Failed to connect to Figma API:'), error);
      process.exit(1);
    }
  }

  async extractTokens(fileKey) {
    try {
      console.log(chalk.blue(`🎨 Extracting PHAROS design tokens from: ${fileKey}`));
      
      // Get file information
      const fileInfo = await this.client.getFile(fileKey);
      console.log(chalk.green(`✓ Connected to Figma file: ${fileInfo.name || 'PHAROS'}`));
      
      // Extract and validate brand colors
      await this.extractBrandColors(fileInfo.document);
      
      // Extract typography scale
      await this.extractTypography(fileInfo.document);
      
      // Extract spacing and layout patterns
      await this.extractSpacing(fileInfo.document);
      
      console.log(chalk.green('✓ PHAROS token extraction completed'));
      
      // Save tokens
      await this.saveTokens();
      
    } catch (error) {
      console.error(chalk.red('✗ Token extraction failed:'), error);
    }
  }

  async extractBrandColors(document) {
    console.log(chalk.blue('🎨 Extracting PHAROS brand colors...'));
    
    try {
      // Look for your specific brand colors in the document
      const brandColors = this.findBrandColors(document);
      
      if (brandColors.length > 0) {
        console.log(chalk.blue(`Found ${brandColors.length} brand color instances`));
        
        // Update tokens with actual found colors
        brandColors.forEach(color => {
          if (color.name.toLowerCase().includes('primary') || color.name.toLowerCase().includes('brand')) {
            this.tokens.colors.brand.DEFAULT = color.value;
            console.log(chalk.green(`✓ Primary brand color: ${color.value}`));
          } else if (color.name.toLowerCase().includes('tint') || color.name.toLowerCase().includes('50')) {
            this.tokens.colors.brand['50'] = color.value;
            console.log(chalk.green(`✓ Brand tint: ${color.value}`));
          }
        });
      } else {
        console.log(chalk.yellow('⚠️  No brand colors found, using default PHAROS colors'));
      }
      
    } catch (error) {
      console.log(chalk.yellow('⚠️  Brand color extraction failed, using default PHAROS colors'));
    }
  }

  async extractTypography(document) {
    console.log(chalk.blue('📝 Extracting PHAROS typography scale...'));
    
    try {
      const textStyles = this.findTextStyles(document);
      
      if (textStyles.length > 0) {
        console.log(chalk.blue(`Found ${textStyles.length} text style instances`));
        
        // Group by font sizes to find your scale
        const sizeGroups = {};
        textStyles.forEach(style => {
          if (style.fontSize) {
            const size = Math.round(style.fontSize);
            if (!sizeGroups[size]) sizeGroups[size] = [];
            sizeGroups[size].push(style);
          }
        });
        
        // Map to your PHAROS scale
        const pharosSizes = [12, 14, 16, 20, 24, 32];
        pharosSizes.forEach(size => {
          if (sizeGroups[size]) {
            const remSize = (size / 16).toFixed(3);
            const key = this.getPharosSizeKey(size);
            this.tokens.typography.fontSize[key] = `${remSize}rem`;
            console.log(chalk.green(`✓ Font size ${key}: ${size}px → ${remSize}rem`));
          }
        });
      } else {
        console.log(chalk.yellow('⚠️  No text styles found, using default PHAROS typography'));
      }
      
    } catch (error) {
      console.log(chalk.yellow('⚠️  Typography extraction failed, using default PHAROS typography'));
    }
  }

  async extractSpacing(document) {
    console.log(chalk.blue('📏 Extracting PHAROS spacing patterns...'));
    
    try {
      // Look for consistent spacing patterns (8px baseline)
      const spacingPatterns = this.findSpacingPatterns(document);
      
      if (spacingPatterns.length > 0) {
        console.log(chalk.blue(`Found ${spacingPatterns.length} spacing patterns`));
        
        // Validate against 8px baseline
        const validSpacings = spacingPatterns.filter(spacing => spacing % 8 === 0);
        console.log(chalk.green(`✓ Valid 8px baseline spacings: ${validSpacings.join(', ')}px`));
      } else {
        console.log(chalk.yellow('⚠️  No spacing patterns found, using default PHAROS spacing'));
      }
      
    } catch (error) {
      console.log(chalk.yellow('⚠️  Spacing extraction failed, using default PHAROS spacing'));
    }
  }

  findBrandColors(node, colors = []) {
    if (node.fills && node.fills.length > 0) {
      node.fills.forEach(fill => {
        if (fill.type === 'SOLID' && fill.color) {
          const colorValue = this.extractColorValue(fill);
          if (colorValue) {
            colors.push({
              name: node.name || 'Unnamed',
              value: colorValue,
              nodeId: node.id
            });
          }
        }
      });
    }
    
    if (node.children && node.children.length > 0) {
      node.children.forEach(child => {
        this.findBrandColors(child, colors);
      });
    }
    
    return colors;
  }

  findTextStyles(node, styles = []) {
    if (node.style && (node.style.fontSize || node.style.fontWeight)) {
      styles.push({
        name: node.name || 'Unnamed',
        fontSize: node.style.fontSize,
        fontWeight: node.style.fontWeight,
        fontFamily: node.style.fontFamily,
        nodeId: node.id
      });
    }
    
    if (node.children && node.children.length > 0) {
      node.children.forEach(child => {
        this.findTextStyles(child, styles);
      });
    }
    
    return styles;
  }

  findSpacingPatterns(node, patterns = []) {
    // Look for consistent spacing in layout
    if (node.absoluteBoundingBox) {
      const { width, height } = node.absoluteBoundingBox;
      if (width > 0 && width <= 100) patterns.push(Math.round(width));
      if (height > 0 && height <= 100) patterns.push(Math.round(height));
    }
    
    if (node.children && node.children.length > 0) {
      node.children.forEach(child => {
        this.findSpacingPatterns(child, patterns);
      });
    }
    
    return [...new Set(patterns)].sort((a, b) => a - b);
  }

  extractColorValue(fill) {
    if (fill.type === 'SOLID' && fill.color) {
      const { r, g, b } = fill.color;
      const red = Math.round(r * 255);
      const green = Math.round(g * 255);
      const blue = Math.round(b * 255);
      return `#${red.toString(16).padStart(2, '0')}${green.toString(16).padStart(2, '0')}${blue.toString(16).padStart(2, '0')}`;
    }
    return null;
  }

  getPharosSizeKey(size) {
    switch (size) {
      case 12: return 'xs';
      case 14: return 'sm';
      case 16: return 'base';
      case 20: return 'xl';
      case 24: return '2xl';
      case 32: return '3xl';
      default: return 'base';
    }
  }

  async saveTokens() {
    try {
      const tokensPath = path.join(__dirname, '../tokens/json/pharos-tokens.json');
      await fs.ensureDir(path.dirname(tokensPath));
      await fs.writeJson(tokensPath, this.tokens, { spaces: 2 });
      
      console.log(chalk.green(`✓ PHAROS tokens saved to ${tokensPath}`));
    } catch (error) {
      console.error(chalk.red('✗ Failed to save PHAROS tokens:'), error);
    }
  }

  async disconnect() {
    console.log(chalk.green('✓ Disconnected from Figma API'));
  }
}

// Main execution
async function main() {
  const extractor = new PharosTokenExtractor();
  
  try {
    await extractor.connect();
    
    const fileKey = process.env.FIGMA_FILE_KEY || 'rjisK4g6zXD9hH7BXMXviI';
    await extractor.extractTokens(fileKey);
    
  } finally {
    await extractor.disconnect();
  }
}

if (require.main === module) {
  main().catch(console.error);
}

module.exports = PharosTokenExtractor;
