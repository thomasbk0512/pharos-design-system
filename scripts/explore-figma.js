#!/usr/bin/env node

const FigmaAPIClient = require('./figma-api-client');
const chalk = require('chalk');

async function exploreFigmaFile() {
  const accessToken = process.env.FIGMA_ACCESS_TOKEN || 'figd__JjNkDdhrkUoGw376luqWCejPYgE-DS2bCh2tK-0';
  const fileKey = process.env.FIGMA_FILE_KEY || 'rjisK4g6zXD9hH7BXMXviI';
  
  const client = new FigmaAPIClient(accessToken);
  
  try {
    console.log(chalk.blue(`🔍 Exploring Figma file: ${fileKey}`));
    
    // Get file information
    console.log(chalk.yellow('\n📁 File Information:'));
    const fileInfo = await client.getFile(fileKey);
    console.log(`Name: ${fileInfo.name}`);
    console.log(`Last Modified: ${new Date(fileInfo.lastModified).toLocaleString()}`);
    console.log(`Version: ${fileInfo.version}`);
    console.log(`Thumbnail URL: ${fileInfo.thumbnailUrl || 'None'}`);
    
    // Get styles
    console.log(chalk.yellow('\n🎨 Styles Information:'));
    const styles = await client.getFileStyles(fileKey);
    console.log(`Total Styles: ${styles.meta?.styles?.length || 0}`);
    
    if (styles.meta?.styles && styles.meta.styles.length > 0) {
      console.log('\nAvailable Styles:');
      styles.meta.styles.forEach((style, index) => {
        console.log(`  ${index + 1}. ${style.name} (${style.style_type}) - ID: ${style.node_id}`);
      });
    } else {
      console.log('No shared styles found in this file.');
    }
    
    // Explore document structure
    console.log(chalk.yellow('\n📄 Document Structure:'));
    if (fileInfo.document) {
      exploreNode(fileInfo.document, 0);
    }
    
    // Check for local styles in the document
    console.log(chalk.yellow('\n🔍 Looking for local styles in document...'));
    const localStyles = findLocalStyles(fileInfo.document);
    if (localStyles.length > 0) {
      console.log(`Found ${localStyles.length} local styles:`);
      localStyles.forEach((style, index) => {
        console.log(`  ${index + 1}. ${style.name} (${style.type})`);
      });
    } else {
      console.log('No local styles found in document structure.');
    }
    
  } catch (error) {
    console.error(chalk.red('❌ Error exploring Figma file:'), error.message);
  }
}

function exploreNode(node, depth = 0) {
  const indent = '  '.repeat(depth);
  const nodeType = node.type || 'UNKNOWN';
  const nodeName = node.name || 'Unnamed';
  
  console.log(`${indent}${nodeType}: ${nodeName}`);
  
  // Check for styles
  if (node.styles) {
    Object.entries(node.styles).forEach(([key, value]) => {
      if (value) {
        console.log(`${indent}  Style ${key}: ${value}`);
      }
    });
  }
  
  // Check for fills (colors)
  if (node.fills && node.fills.length > 0) {
    console.log(`${indent}  Fills: ${node.fills.length} fill(s)`);
    node.fills.forEach((fill, index) => {
      if (fill.type === 'SOLID' && fill.color) {
        const { r, g, b, a } = fill.color;
        const red = Math.round(r * 255);
        const green = Math.round(g * 255);
        const blue = Math.round(b * 255);
        const alpha = a || 1;
        console.log(`${indent}    Fill ${index + 1}: rgba(${red}, ${green}, ${blue}, ${alpha})`);
      }
    });
  }
  
  // Check for text properties
  if (node.style) {
    const style = node.style;
    if (style.fontSize) console.log(`${indent}  Font Size: ${style.fontSize}px`);
    if (style.fontWeight) console.log(`${indent}  Font Weight: ${style.fontWeight}`);
    if (style.fontFamily) console.log(`${indent}  Font Family: ${style.fontFamily}`);
    if (style.lineHeightPx) console.log(`${indent}  Line Height: ${style.lineHeightPx}px`);
    if (style.lineHeightPercent) console.log(`${indent}  Line Height: ${style.lineHeightPercent}%`);
  }
  
  // Recursively explore children
  if (node.children && node.children.length > 0) {
    node.children.forEach(child => {
      exploreNode(child, depth + 1);
    });
  }
}

function findLocalStyles(node, styles = []) {
  // Check if this node has styles
  if (node.styles) {
    Object.entries(node.styles).forEach(([key, value]) => {
      if (value) {
        styles.push({
          name: `${node.name || 'Unnamed'} (${key})`,
          type: key,
          nodeId: node.id
        });
      }
    });
  }
  
  // Check for fills (potential color styles)
  if (node.fills && node.fills.length > 0) {
    node.fills.forEach((fill, index) => {
      if (fill.type === 'SOLID' && fill.color) {
        styles.push({
          name: `${node.name || 'Unnamed'} (Fill ${index + 1})`,
          type: 'FILL',
          nodeId: node.id,
          fill: fill
        });
      }
    });
  }
  
  // Check for text properties (potential text styles)
  if (node.style && (node.style.fontSize || node.style.fontWeight || node.style.fontFamily)) {
    styles.push({
      name: `${node.name || 'Unnamed'} (Text)`,
      type: 'TEXT',
      nodeId: node.id,
      style: node.style
    });
  }
  
  // Recursively check children
  if (node.children && node.children.length > 0) {
    node.children.forEach(child => {
      findLocalStyles(child, styles);
    });
  }
  
  return styles;
}

if (require.main === module) {
  exploreFigmaFile().catch(console.error);
}

module.exports = { exploreFigmaFile };
