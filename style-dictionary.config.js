export default {
  source: ['tokens/pharos.tokens.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'src/lib/pharos/',
      prefix: 'ph',
      files: [
        {
          destination: 'semantic.css',
          format: 'css/variables',
          options: { selector: ':root', outputReferences: true }
        }
      ]
    },
    js: {
      transformGroup: 'js',
      buildPath: 'src/lib/pharos/',
      prefix: 'ph',
      files: [
        { 
          destination: 'tokens.ts', 
          format: 'javascript/es6',
          options: {
            showFileHeader: false
          }
        }
      ]
    }
  }
}
