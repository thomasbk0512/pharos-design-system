module.exports = {
  // Figma configuration
  figma: {
    // Your Figma file key (get this from the URL when viewing your file)
    fileKey: process.env.FIGMA_FILE_KEY || 'rjisK4g6zXD9hH7BXMXviI',
    
    // Node IDs for specific design tokens (optional)
    nodes: {
      colors: 'your-color-styles-node-id',
      typography: 'your-text-styles-node-id',
      spacing: 'your-spacing-styles-node-id',
      shadows: 'your-shadow-styles-node-id'
    },
    
    // MCP server configuration
    mcp: {
      serverName: 'figma',
      autoSync: true,
      syncInterval: 300000 // 5 minutes
    }
  },
  
  // Token generation settings
  tokens: {
    // Output formats
    formats: ['css', 'scss', 'json', 'typescript'],
    
    // CSS output options
    css: {
      variables: true,
      utilityClasses: true,
      customProperties: true,
      outputPath: './tokens/css/'
    },
    
    // SCSS output options
    scss: {
      variables: true,
      mixins: true,
      functions: true,
      outputPath: './tokens/scss/'
    },
    
    // JSON output options
    json: {
      pretty: true,
      outputPath: './tokens/json/'
    },
    
    // TypeScript output options
    typescript: {
      interfaces: true,
      enums: true,
      outputPath: './tokens/typescript/'
    }
  },
  
  // Design system structure
  structure: {
    colors: {
      primary: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'],
      neutral: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'],
      semantic: ['success', 'warning', 'error', 'info']
    },
    
    typography: {
      fontSizes: ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl'],
      fontWeights: ['light', 'normal', 'medium', 'semibold', 'bold', 'extrabold'],
      lineHeights: ['tight', 'snug', 'normal', 'relaxed', 'loose']
    },
    
    spacing: {
      scale: ['0', '1', '2', '3', '4', '5', '6', '8', '10', '12', '16', '20', '24', '32', '40', '48', '56', '64']
    },
    
    breakpoints: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    }
  },
  
  // Build and watch options
  build: {
    watch: true,
    minify: false,
    sourcemaps: true,
    autoprefixer: true
  }
};
