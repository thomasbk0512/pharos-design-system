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
  // ban stray hex colors and illegal shadows
  const badHex = /#[0-9a-fA-F]{3,8}\b/.test(s)
  const badShadow = /shadow-(?!pharos(-sm)?\b)/.test(s)
  if (badHex || badShadow) offenders.push(f)
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
  'components/pharos/icons.ts',     // central icon re-exports (new)
  'components/docs',                // docs can import for specimens if needed
  'src/app/design-system',          // design system docs can import for specimens
  'components/patterns'             // specimens
  // NOTE: app pages must import from components/pharos/icons.ts
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
  console.error('Icon guard failed: import lucide-react only via components/pharos/Icon.tsx or components/pharos/icons.ts')
  badLucide.forEach(f => console.error(' - ' + f))
  process.exit(1)
}

// Guard: spacing utilities must use allowed Tailwind indices (supports variants e.g. md:mb-6)
// Allowed ladder (Tailwind indices): 0,1,2,3,4,6,8,10 → 0,4,8,12,16,24,32,40px
const allowed = new Set(['0','1','2','3','4','6','8','10'])
// capture classes like "mb-12", "md:gap-5", "sm:space-y-5", "p-8"
const spacingTokenRe = /(?:^|\s)(?:[a-z-]+:)*(-?(?:p|px|py|pt|pr|pb|pl|m|mx|my|mt|mr|mb|ml|gap|space-x|space-y))-(\d+)(?=\s|["'`]|$)/g

function scanSpacingVerbose(file) {
  const lines = fs.readFileSync(file, 'utf8').split(/\r?\n/)
  const hits = []
  lines.forEach((line, i) => {
    let m
    spacingTokenRe.lastIndex = 0
    while ((m = spacingTokenRe.exec(line)) !== null) {
      const idx = m[2]
      if (!allowed.has(idx)) {
        hits.push({ line: i+1, token: `${m[1]}-${idx}` })
      }
    }
  })
  return hits
}

const spacingProblems = []
for (const f of files) {
  const hits = scanSpacingVerbose(f)
  if (hits.length) spacingProblems.push({ file: f, hits })
}
if (spacingProblems.length) {
  console.error('Spacing guard failed: only indices 0,2,3,4,6,8,10 are allowed (→ 0,8,12,16,24,32,40px)')
  spacingProblems.forEach(({file, hits}) => {
    console.error(` - ${file}`)
    hits.forEach(h => console.error(`    L${h.line}: ${h.token}`))
  })
  process.exit(1)
}
