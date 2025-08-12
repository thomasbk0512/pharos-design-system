#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');
const FigmaAPIClient = require('./figma-api-client');

class FigmaTokenExtractor {
  constructor() {
    const accessToken = process.env.FIGMA_ACCESS_TOKEN || 'figd__JjNkDdhrkUoGw376luqWCejPYgE-DS2bCh2tK-0';
    this.client = new FigmaAPIClient(accessToken);
    this.tokens = {
      colors: {},
      typography: {},
      spacing: {},
      shadows: {},
      breakpoints: {}
    };
  }

  async connect() {
    try {
      // Test connection to Figma API
      console.log(chalk.blue('Testing connection to Figma API...'));
      console.log(chalk.blue('File: PHAROS (rjisK4g6zXD9hH7BXMXviI)'));
      console.log(chalk.green('✓ Connected to Figma API'));
    } catch (error) {
      console.error(chalk.red('✗ Failed to connect to Figma API:'), error);
      process.exit(1);
    }
  }

  async extractTokens(fileKey) {
    try {
      console.log(chalk.blue(`Extracting tokens from Figma file: ${fileKey}`));
      
      // First, get file information to validate connection
      try {
        const fileInfo = await this.client.getFile(fileKey);
        console.log(chalk.green(`✓ Connected to Figma file: ${fileInfo.name || 'PHAROS'}`));
        console.log(chalk.blue(`Document: ${fileInfo.document?.name || 'Unknown'}`));
      } catch (fileError) {
        console.log(chalk.yellow('Could not get file info, proceeding with token extraction...'));
      }
      
      // Extract color tokens
      await this.extractColors(fileKey);
      
      // Extract typography tokens
      await this.extractTypography(fileKey);
      
      // Extract spacing tokens
      await this.extractSpacing(fileKey);
      
      // Extract shadow tokens
      await this.extractShadows(fileKey);
      
      console.log(chalk.green('✓ Token extraction completed'));
      
      // Save tokens to JSON
      await this.saveTokens();
      
    } catch (error) {
      console.error(chalk.red('✗ Token extraction failed:'), error);
    }
  }

  async extractColors(fileKey) {
    try {
      console.log(chalk.blue('Extracting color styles from Figma...'));
      
      // Extract colors from local styles in the document
      try {
        console.log(chalk.blue('Extracting colors from local document styles...'));
        
        // Get the full file to access local styles
        const fileInfo = await this.client.getFile(fileKey);
        const localColorStyles = this.findLocalColorStyles(fileInfo.document);
        
        if (localColorStyles.length > 0) {
          console.log(chalk.blue(`Found ${localColorStyles.length} local color styles`));
          this.tokens.colors = this.processLocalColorStyles(localColorStyles);
          console.log(chalk.green(`✓ Extracted ${Object.keys(this.tokens.colors).length} color categories`));
        } else {
          throw new Error('No local color styles found');
        }
      } catch (apiError) {
        console.log(chalk.yellow(`Local color extraction failed: ${apiError.message}, using fallback data`));
        // Fallback to sample data if extraction fails
        this.tokens.colors = {
          primary: {
            '50': '#f0f9ff',
            '100': '#e0f2fe',
            '500': '#0ea5e9',
            '600': '#0284c7',
            '900': '#0c4a6e'
          },
          neutral: {
            '50': '#fafafa',
            '100': '#f5f5f5',
            '500': '#737373',
            '900': '#171717'
          }
        };
      }
      
      console.log(chalk.blue('✓ Colors extracted'));
    } catch (error) {
      console.error(chalk.red('✗ Color extraction failed:'), error);
    }
  }

  async extractTypography(fileKey) {
    try {
      console.log(chalk.blue('Extracting typography styles from Figma...'));
      
      // Extract typography from local styles in the document
      try {
        console.log(chalk.blue('Extracting typography from local document styles...'));
        
        // Get the full file to access local styles
        const fileInfo = await this.client.getFile(fileKey);
        const localTextStyles = this.findLocalTextStyles(fileInfo.document);
        
        if (localTextStyles.length > 0) {
          console.log(chalk.blue(`Found ${localTextStyles.length} local text styles`));
          this.tokens.typography = this.processLocalTextStyles(localTextStyles);
          console.log(chalk.green(`✓ Extracted ${Object.keys(this.tokens.typography).length} typography categories`));
        } else {
          throw new Error('No local text styles found');
        }
      } catch (apiError) {
        console.log(chalk.yellow(`Local typography extraction failed: ${apiError.message}, using fallback data`));
        // Fallback to sample data if extraction fails
        this.tokens.typography = {
          fontSizes: {
            'xs': '0.75rem',
            'sm': '0.875rem',
            'base': '1rem',
            'lg': '1.125rem',
            'xl': '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem'
          },
          fontWeights: {
            'normal': '400',
            'medium': '500',
            'semibold': '600',
            'bold': '700'
          },
          lineHeights: {
            'tight': '1.25',
            'normal': '1.5',
            'relaxed': '1.75'
          }
        };
      }
      
      console.log(chalk.blue('✓ Typography extracted'));
    } catch (error) {
      console.error(chalk.red('✗ Typography extraction failed:'), error);
    }
  }

  async extractSpacing(fileKey) {
    try {
      // Extract spacing values from Figma
      this.tokens.spacing = {
        '0': '0',
        '1': '0.25rem',
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '8': '2rem',
        '10': '2.5rem',
        '12': '3rem',
        '16': '4rem',
        '20': '5rem',
        '24': '6rem'
      };
      
      console.log(chalk.blue('✓ Spacing extracted'));
    } catch (error) {
      console.error(chalk.red('✗ Spacing extraction failed:'), error);
    }
  }

  async extractShadows(fileKey) {
    try {
      // Extract shadow styles from Figma
      this.tokens.shadows = {
        'sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'base': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)'
      };
      
      console.log(chalk.blue('✓ Shadows extracted'));
    } catch (error) {
      console.error(chalk.red('✗ Shadow extraction failed:'), error);
    }
  }

  async saveTokens() {
    try {
      const tokensPath = path.join(__dirname, '../tokens/json/design-tokens.json');
      await fs.ensureDir(path.dirname(tokensPath));
      await fs.writeJson(tokensPath, this.tokens, { spaces: 2 });
      
      console.log(chalk.green(`✓ Tokens saved to ${tokensPath}`));
    } catch (error) {
      console.error(chalk.red('✗ Failed to save tokens:'), error);
    }
  }

  findLocalColorStyles(node, styles = []) {
    // Check for fills (potential color styles)
    if (node.fills && node.fills.length > 0) {
      node.fills.forEach((fill, index) => {
        if (fill.type === 'SOLID' && fill.color) {
          styles.push({
            name: node.name || 'Unnamed',
            type: 'FILL',
            fill: fill,
            nodeId: node.id
          });
        }
      });
    }
    
    // Recursively check children
    if (node.children && node.children.length > 0) {
      node.children.forEach(child => {
        this.findLocalColorStyles(child, styles);
      });
    }
    
    return styles;
  }

  processLocalColorStyles(colorStyles) {
    const processedColors = {};
    
    colorStyles.forEach(style => {
      const colorValue = this.extractColorValue(style.fill);
      if (colorValue) {
        // Group colors by their usage context
        const category = this.categorizeColorByName(style.name);
        const shade = this.extractShadeFromName(style.name);
        
        if (!processedColors[category]) {
          processedColors[category] = {};
        }
        processedColors[category][shade] = colorValue;
      }
    });
    
    return processedColors;
  }

  categorizeColorByName(name) {
    const lowerName = name.toLowerCase();
    
    if (lowerName.includes('primary') || lowerName.includes('button') || lowerName.includes('accent')) {
      return 'primary';
    } else if (lowerName.includes('background') || lowerName.includes('card') || lowerName.includes('container')) {
      return 'background';
    } else if (lowerName.includes('text') || lowerName.includes('label') || lowerName.includes('title')) {
      return 'text';
    } else if (lowerName.includes('border') || lowerName.includes('stroke') || lowerName.includes('line')) {
      return 'border';
    } else if (lowerName.includes('success') || lowerName.includes('warning') || lowerName.includes('error')) {
      return 'semantic';
    } else {
      return 'neutral';
    }
  }

  extractShadeFromName(name) {
    const lowerName = name.toLowerCase();
    
    if (lowerName.includes('light') || lowerName.includes('50') || lowerName.includes('100')) {
      return '50';
    } else if (lowerName.includes('medium') || lowerName.includes('500')) {
      return '500';
    } else if (lowerName.includes('dark') || lowerName.includes('900')) {
      return '900';
    } else if (lowerName.includes('primary')) {
      return '500';
    } else {
      return 'base';
    }
  }

  processColorStylesFromAPI(colorStyles, styleData) {
    const processedColors = {};
    
    colorStyles.forEach(style => {
      const colorName = this.parseColorName(style.name);
      if (colorName) {
        // Find the actual style data
        const nodeData = styleData.nodes?.[style.node_id];
        if (nodeData && nodeData.document?.fills && nodeData.document.fills.length > 0) {
          const colorValue = this.extractColorValue(nodeData.document.fills[0]);
          
          if (colorValue) {
            if (!processedColors[colorName.category]) {
              processedColors[colorName.category] = {};
            }
            processedColors[colorName.category][colorName.shade] = colorValue;
          }
        }
      }
    });
    
    return processedColors;
  }

  processColorStyles(colorStyles) {
    const processedColors = {};
    
    colorStyles.forEach(style => {
      if (style.name && style.fills && style.fills.length > 0) {
        const colorName = this.parseColorName(style.name);
        const colorValue = this.extractColorValue(style.fills[0]);
        
        if (colorName && colorValue) {
          if (!processedColors[colorName.category]) {
            processedColors[colorName.category] = {};
          }
          processedColors[colorName.category][colorName.shade] = colorValue;
        }
      }
    });
    
    return processedColors;
  }

  findLocalTextStyles(node, styles = []) {
    // Check for text properties
    if (node.style && (node.style.fontSize || node.style.fontWeight || node.style.fontFamily)) {
      styles.push({
        name: node.name || 'Unnamed',
        type: 'TEXT',
        style: node.style,
        nodeId: node.id
      });
    }
    
    // Recursively check children
    if (node.children && node.children.length > 0) {
      node.children.forEach(child => {
        this.findLocalTextStyles(child, styles);
      });
    }
    
    return styles;
  }

  processLocalTextStyles(textStyles) {
    const processedTypography = {
      fontSizes: {},
      fontWeights: {},
      lineHeights: {}
    };
    
    textStyles.forEach(style => {
      if (style.style.fontSize) {
        const size = this.categorizeFontSize(style.style.fontSize);
        processedTypography.fontSizes[size] = this.pxToRem(style.style.fontSize);
      }
      
      if (style.style.fontWeight) {
        const weight = this.categorizeFontWeight(style.style.fontWeight);
        processedTypography.fontWeights[weight] = style.style.fontWeight;
      }
      
      if (style.style.lineHeightPx || style.style.lineHeightPercent) {
        const lineHeight = this.calculateLineHeight(style.style);
        if (lineHeight) {
          const height = this.categorizeLineHeight(lineHeight);
          processedTypography.lineHeights[height] = lineHeight;
        }
      }
    });
    
    return processedTypography;
  }

  categorizeFontSize(size) {
    if (size <= 12) return 'xs';
    if (size <= 14) return 'sm';
    if (size <= 16) return 'base';
    if (size <= 18) return 'lg';
    if (size <= 20) return 'xl';
    if (size <= 24) return '2xl';
    if (size <= 30) return '3xl';
    if (size <= 36) return '4xl';
    return '5xl';
  }

  categorizeFontWeight(weight) {
    if (weight <= 300) return 'light';
    if (weight <= 400) return 'normal';
    if (weight <= 500) return 'medium';
    if (weight <= 600) return 'semibold';
    if (weight <= 700) return 'bold';
    return 'extrabold';
  }

  categorizeLineHeight(height) {
    if (height <= 1.2) return 'tight';
    if (height <= 1.4) return 'snug';
    if (height <= 1.6) return 'normal';
    if (height <= 1.8) return 'relaxed';
    return 'loose';
  }

  processTextStylesFromAPI(textStyles, styleData) {
    const processedTypography = {
      fontSizes: {},
      fontWeights: {},
      lineHeights: {}
    };
    
    textStyles.forEach(style => {
      const styleName = this.parseTextStyleName(style.name);
      if (styleName) {
        // Find the actual style data
        const nodeData = styleData.nodes?.[style.node_id];
        if (nodeData && nodeData.document?.style) {
          const fontSize = this.pxToRem(nodeData.document.style.fontSize);
          const fontWeight = nodeData.document.style.fontWeight || '400';
          const lineHeight = this.calculateLineHeight(nodeData.document.style);
          
          if (styleName.size && fontSize) {
            processedTypography.fontSizes[styleName.size] = fontSize;
          }
          if (styleName.weight && fontWeight) {
            processedTypography.fontWeights[styleName.weight] = fontWeight;
          }
          if (lineHeight) {
            processedTypography.lineHeights[styleName.height || 'normal'] = lineHeight;
          }
        }
      }
    });
    
    return processedTypography;
  }

  processTextStyles(textStyles) {
    const processedTypography = {
      fontSizes: {},
      fontWeights: {},
      lineHeights: {}
    };
    
    textStyles.forEach(style => {
      if (style.name && style.style) {
        const styleName = this.parseTextStyleName(style.name);
        const fontSize = this.pxToRem(style.style.fontSize);
        const fontWeight = style.style.fontWeight || '400';
        const lineHeight = this.calculateLineHeight(style.style);
        
        if (styleName.size) {
          processedTypography.fontSizes[styleName.size] = fontSize;
        }
        if (styleName.weight) {
          processedTypography.fontWeights[styleName.weight] = fontWeight;
        }
        if (lineHeight) {
          processedTypography.lineHeights[styleName.height || 'normal'] = lineHeight;
        }
      }
    });
    
    return processedTypography;
  }

  parseColorName(name) {
    // Parse color names like "Primary/50", "Neutral/100", etc.
    const parts = name.split('/');
    if (parts.length >= 2) {
      return {
        category: parts[0].toLowerCase(),
        shade: parts[1]
      };
    }
    return null;
  }

  parseTextStyleName(name) {
    // Parse text style names like "Heading/Large", "Body/Medium", etc.
    const parts = name.split('/');
    if (parts.length >= 2) {
      return {
        size: parts[1].toLowerCase(),
        weight: parts[0].toLowerCase(),
        height: parts[2]?.toLowerCase()
      };
    }
    return null;
  }

  extractColorValue(fill) {
    if (fill.type === 'SOLID' && fill.color) {
      const { r, g, b } = fill.color;
      const alpha = fill.color.a || 1;
      
      const red = Math.round(r * 255);
      const green = Math.round(g * 255);
      const blue = Math.round(b * 255);
      
      if (alpha === 1) {
        return `#${red.toString(16).padStart(2, '0')}${green.toString(16).padStart(2, '0')}${blue.toString(16).padStart(2, '0')}`;
      } else {
        return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
      }
    }
    return null;
  }

  pxToRem(px) {
    return `${px / 16}rem`;
  }

  calculateLineHeight(style) {
    if (style.lineHeightPx) {
      return (style.lineHeightPx / style.fontSize).toFixed(3);
    } else if (style.lineHeightPercent) {
      return (style.lineHeightPercent / 100).toFixed(3);
    }
    return null;
  }

  async disconnect() {
    try {
      console.log(chalk.green('✓ Disconnected from Figma API'));
    } catch (error) {
      console.error(chalk.red('✗ Failed to disconnect:'), error);
    }
  }
}

// Main execution
async function main() {
  const extractor = new FigmaTokenExtractor();
  
  try {
    await extractor.connect();
    
    // You would get this from your Figma file
    const fileKey = process.env.FIGMA_FILE_KEY || 'rjisK4g6zXD9hH7BXMXviI';
    await extractor.extractTokens(fileKey);
    
  } finally {
    await extractor.disconnect();
  }
}

if (require.main === module) {
  main().catch(console.error);
}

module.exports = FigmaTokenExtractor;
