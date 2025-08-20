import fs from 'fs'

const required = [
  'colors.brand.DEFAULT',
  'colors.brand.50',
  'spacing.4',
  'spacing.32',
  'borderRadius.xl',
  'borderRadius.2xl',
  'boxShadow.pharos',
  'colors.status.success.100',
  'colors.status.error.100'
]

function get(obj, path){ return path.split('.').reduce((o,k)=>o && o[k], obj) }

try {
  const raw = fs.readFileSync('tokens/json/pharos-tokens.json','utf8')
  const json = JSON.parse(raw)
  const missing = required.filter(key => !get(json, key))
  if (missing.length) {
    console.error('Token validation failed. Missing keys:')
    missing.forEach(k => console.error(' -', k))
    process.exit(1)
  } else {
    console.log('Token validation passed')
  }
} catch (e) {
  console.error('Token validation error:', e.message)
  process.exit(1)
}


