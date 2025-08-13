'use client'
import * as React from 'react'

export function SelectSpecimen() {
  return (
    <div className="grid md:grid-cols-2 gap-3 text-sm">
      {/* Select (closed) */}
      <div className="rounded-2xl border border-slate-200 bg-white p-4">
        <div className="font-medium mb-1">Select (closed)</div>
        <label htmlFor="spec-select" className="block text-slate-700 mb-1">Network</label>
        <button
          id="spec-select"
          type="button"
          className="w-full h-8 rounded-xl border border-slate-200 bg-white px-3 text-left text-slate-800 outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
          aria-haspopup="listbox"
          aria-expanded="false"
        >
          Ethereum Mainnet <span className="float-right">▼</span>
        </button>
        <p className="text-xs text-slate-600 mt-3">Static representation. Use Combobox for search when 7+ options.</p>
      </div>

      {/* Select (error) */}
      <div className="rounded-2xl border border-slate-200 bg-white p-4">
        <div className="font-medium mb-1">Select (error)</div>
        <label htmlFor="spec-select-error" className="block text-slate-700 mb-1">Network</label>
        <button
          id="spec-select-error"
          type="button"
          className="w-full h-8 rounded-xl border border-slate-200 bg-white px-3 text-left text-slate-800 outline-none ring-2 ring-red-600"
          aria-invalid="true"
        >
          Select a network <span className="float-right">▼</span>
        </button>
        <p className="text-xs text-red-600 mt-1">Required. Choose a network.</p>
      </div>
    </div>
  )
}
