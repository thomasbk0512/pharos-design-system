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
