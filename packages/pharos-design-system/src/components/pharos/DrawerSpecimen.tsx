'use client'
import * as React from 'react'

export function DrawerSpecimen() {
  return (
    <div className="rounded-2xl border border-slate-200 shadow-pharos bg-white w-full max-w-lg">
      <div className="p-3 pb-2 border-b border-slate-200 text-sm font-medium">Edit strategy</div>
      <div className="p-4 text-sm text-slate-700">Static drawer specimen showing header/body/footer paddings.</div>
      <div className="p-3 border-t border-slate-200 flex items-center justify-end gap-2">
        <button className="rounded-xl px-3 py-1 border border-slate-200 text-sm hover:bg-slate-50 focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2">Close</button>
        <button className="rounded-xl px-3 py-1 bg-brand text-white text-sm hover:brightness-95 focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2">Save</button>
      </div>
    </div>
  )
}


