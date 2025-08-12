'use client'
import * as React from 'react'
import { PharosCard } from '../pharos/Card'
import { PharosButton } from '../pharos/Button'

export function CardVariants() {
  return (
    <div className="grid md:grid-cols-3 gap-3">
      {/* Base card */}
      <PharosCard>
        <div className="p-3 pb-2 border-b border-slate-200 text-sm font-medium">Base</div>
        <div className="p-4 text-sm text-slate-700">Body content uses 16px padding. One border only.</div>
      </PharosCard>

      {/* Header actions */}
      <PharosCard>
        <div className="p-3 pb-2 border-b border-slate-200 text-sm font-medium flex items-center gap-2">
          With actions
          <span className="ml-auto inline-flex items-center gap-2">
            <button className="rounded-xl px-2.5 py-1 border border-slate-200 text-xs hover:bg-slate-50 focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2">Edit</button>
            <PharosButton className="px-2.5 py-1 text-xs">Run</PharosButton>
          </span>
        </div>
        <div className="p-4 text-sm text-slate-700">Actions live in the header; keep labels short.</div>
      </PharosCard>

      {/* Divided sections */}
      <PharosCard>
        <div className="p-3 pb-2 border-b border-slate-200 text-sm font-medium">Divided sections</div>
        <div className="divide-y divide-slate-200">
          <div className="p-4 text-sm text-slate-700">Section A</div>
          <div className="p-4 text-sm text-slate-700">Section B</div>
          <div className="p-4 text-sm text-slate-700">Section C</div>
        </div>
      </PharosCard>
    </div>
  )
}
