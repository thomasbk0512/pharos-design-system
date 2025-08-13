import fs from 'fs'
import path from 'path'

const root = path.resolve('src')
const files = []
function walk(dir){ for (const e of fs.readdirSync(dir,{withFileTypes:true})) {
  const p = path.join(dir, e.name)
  if (e.isDirectory()) walk(p)
  else if (/\.(ts|tsx|mdx)$/.test(e.name) && !p.includes('tokens.ts')) files.push(p)
}}

walk(root)

const offenders = []
for (const f of files) {
  const s = fs.readFileSync(f, 'utf8')
  // ban stray hex colors and illegal spacing/shadows
  const badHex = /#[0-9a-fA-F]{3,8}\b/.test(s)
  const badSpace = /(p|px|py|pt|pr|pb|pl|m|mx|my|gap)-(?![0-6]\b)/.test(s)
  const badShadow = /shadow-(?!pharos(-sm)?\b)/.test(s)
  if (badHex || badSpace || badShadow) offenders.push(f)
}

if (offenders.length) {
  console.error('\nToken guard failed in:')
  offenders.forEach(o => console.error(' -', o))
  process.exit(1)
} else {
  console.log('Token guard passed')
}

// Guard: discourage direct lucide-react imports outside the wrapper
const SRC_DIR = 'src'
const LUCIDE_RE = /from\s+['"]lucide-react['"]/g
const ALLOWLIST = new Set([
  'components/pharos/Icon.tsx',
  'components/docs', // docs can import for specimens if needed
  'src/app/design-system' // design system docs can import for specimens
])

function scanLucideImports(dir) {
  if (!fs.existsSync(dir)) return []
  const bad = []
  for (const entry of fs.readdirSync(dir)) {
    const p = path.join(dir, entry)
    const rel = p.replace(process.cwd() + path.sep, '')
    const stat = fs.statSync(p)
    if (stat.isDirectory()) {
      bad.push(...scanLucideImports(p))
      continue
    }
    if (!rel.endsWith('.tsx') && !rel.endsWith('.ts')) continue
    const text = fs.readFileSync(p, 'utf8')
    if (LUCIDE_RE.test(text)) {
      const allowed = [...ALLOWLIST].some(ok => rel.includes(ok))
      if (!allowed) bad.push(rel)
    }
  }
  return bad
}

const badLucide = scanLucideImports(SRC_DIR)
if (badLucide.length) {
  console.error('Icon guard failed: import lucide-react only via components/pharos/Icon.tsx')
  badLucide.forEach(f => console.error(' - ' + f))
  process.exit(1)
}
