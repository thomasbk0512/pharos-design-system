# 🚀 Quick Start Guide

Get your design system up and running in 5 minutes!

## 1. Install Dependencies
```bash
npm install
```

## 2. Test the System (Optional)
```bash
# Create sample tokens and generate CSS
npm run dev

# Open the demo in your browser
open example.html
```

## 3. Connect to Your Figma File

### Get Your Figma File Key
1. Open your Figma file in the browser
2. Copy the file key from the URL:
   ```
   https://www.figma.com/file/XXXXXXXXXXXXXX/Design-System
   ```
   The file key is: `XXXXXXXXXXXXXX`

### Set Environment Variables
```bash
# Copy the example file
cp env.example .env

# Edit .env with your values
nano .env
```

### Update Configuration
Edit `design-system.config.js`:
```javascript
figma: {
  fileKey: 'your-actual-figma-file-key',
  // ... other settings
}
```

## 4. Extract Real Tokens from Figma
```bash
# Extract tokens from your Figma file
npm run extract-tokens

# Generate CSS from extracted tokens
npm run generate-css
```

## 5. Use in Your Projects
```html
<!-- Include the generated CSS -->
<link rel="stylesheet" href="tokens/css/design-tokens.css">

<!-- Use the design tokens -->
<div class="bg-primary-500 text-white p-4">
  Primary Button
</div>
```

## 🎯 What You Get

- **CSS Custom Properties**: `var(--color-primary-500)`
- **Utility Classes**: `bg-primary-500`, `text-lg`, `p-4`
- **Consistent Design**: All projects use the same tokens
- **Auto-sync**: Update Figma, regenerate tokens

## 🔄 Workflow

1. **Design in Figma** → Create/update styles
2. **Extract Tokens** → `npm run extract-tokens`
3. **Generate Code** → `npm run generate-css`
4. **Use in Projects** → Import generated CSS
5. **Repeat** → When designs change

## 🆘 Need Help?

- Check the main [README.md](README.md)
- Verify your Figma access token
- Ensure your MCP server is running in Cursor
- Look at the generated files in `tokens/` directory

---

**You're all set! 🎉**
