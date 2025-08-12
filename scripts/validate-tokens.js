import fs from 'fs'

const required = [
  'global.color.brand',
  'global.color.brand50',
  'global.spacing.4',
  'global.spacing.32',
  'global.radius.control',
  'global.radius.card',
  'global.shadow.pharos',
  'semantic.color.status.success.bg100',
  'semantic.color.status.error.text700'
]

function get(obj, path){ return path.split('.').reduce((o,k)=>o && o[k], obj) }

try {
  const raw = fs.readFileSync('tokens/pharos.tokens.json','utf8')
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
