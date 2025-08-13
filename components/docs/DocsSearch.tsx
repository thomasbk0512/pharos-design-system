'use client'
import * as React from 'react'

type Item = { id: string; label: string }

export function DocsSearch({ items }: { items: Item[] }) {
  const [q, setQ] = React.useState('')
  const filtered = React.useMemo(() => {
    const needle = q.trim().toLowerCase()
    if (!needle) return items
    return items.filter(i =>
      i.label.toLowerCase().includes(needle) || i.id.toLowerCase().includes(needle)
    )
  }, [q, items])

  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-pharos-sm p-3 grid gap-2">
      <label htmlFor="ph-docs-search" className="text-xs text-slate-600">Search sections</label>
      <input
        id="ph-docs-search"
        type="text"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Type to filter…"
        className="h-8 rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-800 outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
      />
      <div className="grid gap-1">
        {filtered.length === 0 ? (
          <div className="text-xs text-slate-600">No matches.</div>
        ) : (
          filtered.slice(0, 12).map((i) => (
            <a
              key={i.id}
              href={`#${i.id}`}
              className="text-sm text-slate-700 hover:text-slate-900 underline-offset-2 hover:underline"
            >
              {i.label}
            </a>
          ))
        )}
      </div>
    </div>
  )
}
