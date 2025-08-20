'use client'
import * as React from 'react'

export function DateInputGuidelines() {
  return (
    <div className="grid md:grid-cols-2 gap-3 text-sm">
      {/* Native date input */}
      <div className="rounded-2xl border border-slate-200 bg-white p-4">
        <div className="font-medium mb-1">Native date input</div>
        <label htmlFor="spec-date-native" className="block text-slate-700 mb-1">Start date</label>
        <input
          id="spec-date-native"
          type="date"
          className="h-8 w-full rounded-xl border border-slate-200 bg-white px-3 text-slate-800 outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
        />
        <p className="text-xs text-slate-600 mt-3">Preferred when browser support is acceptable.</p>
      </div>

      {/* Text fallback (yyyy-mm-dd) */}
      <div className="rounded-2xl border border-slate-200 bg-white p-4">
        <div className="font-medium mb-1">Text fallback</div>
        <label htmlFor="spec-date-text" className="block text-slate-700 mb-1">Start date</label>
        <input
          id="spec-date-text"
          type="text"
          inputMode="numeric"
          placeholder="YYYY-MM-DD"
          className="h-8 w-full rounded-xl border border-slate-200 bg-white px-3 text-slate-800 outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
          aria-describedby="spec-date-hint"
        />
        <p id="spec-date-hint" className="text-xs text-slate-600 mt-1">Use ISO format. Validate on blur and on submit.</p>
      </div>
    </div>
  )
}


