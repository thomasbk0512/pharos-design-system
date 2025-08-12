'use client'
import * as React from 'react'
import { PharosButton } from '../pharos/Button'

export function PageHeader() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-pharos p-4">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="text-base font-semibold text-slate-900">Strategies</div>
          <div className="text-sm text-slate-600">Manage, deploy, and monitor vault strategies.</div>
        </div>
        <div className="flex items-center gap-2">
          <button className="rounded-xl px-3 py-2 border border-slate-200 text-sm hover:bg-slate-50 focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2">Import</button>
          <PharosButton>New strategy</PharosButton>
        </div>
      </div>
    </div>
  )
}
