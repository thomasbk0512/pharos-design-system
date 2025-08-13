'use client'
import * as React from 'react'

export function InlineValidationSpecimen() {
  return (
    <div className="grid md:grid-cols-2 gap-3 text-sm">
      {/* Do */}
      <div className="rounded-2xl border border-slate-200 bg-white p-4">
        <div className="font-medium mb-1">Do — concise, inline</div>
        <label htmlFor="spec-email-good" className="block text-slate-700 mb-1">Email</label>
        <input
          id="spec-email-good"
          type="email"
          defaultValue="not-an-email"
          className="h-8 w-full rounded-xl border border-slate-200 bg-white px-3 text-slate-800 outline-none ring-2 ring-red-600"
          aria-invalid="true"
          aria-describedby="spec-email-good-hint"
        />
        <p id="spec-email-good-hint" className="text-xs text-red-600 mt-1">Enter a valid email like name@host.com</p>
      </div>

      {/* Don't */}
      <div className="rounded-2xl border border-slate-200 bg-white p-4">
        <div className="font-medium mb-1">Don't — stacked errors</div>
        <label htmlFor="spec-email-bad" className="block text-slate-700 mb-1">Email</label>
        <input
          id="spec-email-bad"
          type="email"
          defaultValue=""
          className="h-8 w-full rounded-xl border border-slate-200 bg-white px-3 text-slate-800 outline-none"
        />
        <ul className="mt-1 text-xs text-red-600 grid gap-1">
          <li>• Invalid</li>
          <li>• Missing @</li>
          <li>• Missing domain</li>
        </ul>
        <p className="text-xs text-slate-600 mt-3">Avoid multiple stacked errors; provide one actionable message.</p>
      </div>
    </div>
  )
}
