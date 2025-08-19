import * as React from 'react'

export function StateGrid({ cols, children }: { cols: string[]; children: React.ReactNode }) {
  return (
    <div className="border border-slate-200 rounded-2xl overflow-hidden">
      <div className="grid grid-cols-[200px_repeat(5,minmax(0,1fr))] *:p-3 text-sm bg-slate-50">
        <div />{cols.map((c) => <div key={c} className="font-medium text-slate-600">{c}</div>)}
      </div>
      <div className="divide-y divide-slate-200">{children}</div>
    </div>
  )
}

export function StateRow({ label, cells }: { label: string; cells: React.ReactNode[] }) {
  return (
    <div className="grid grid-cols-[200px_repeat(5,minmax(0,1fr))] *:p-3 items-center">
      <div className="text-sm text-slate-600">{label}</div>
      {cells.map((c, i) => <div key={i}>{c}</div>)}
    </div>
  )
}


