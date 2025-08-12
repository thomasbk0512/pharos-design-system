'use client'
import * as React from 'react'
import { Info } from 'lucide-react'

export function ToastCard() {
  return (
    <div className="rounded-2xl border border-slate-200 shadow-pharos bg-white p-4 flex items-start gap-3">
      <Info className="h-4 w-4 text-slate-600 mt-0.5" />
      <div className="text-sm">
        <div className="font-medium text-slate-900">Saved</div>
        <div className="text-slate-600">Your settings were updated.</div>
      </div>
      <button className="ml-auto inline-flex items-center rounded-xl px-3 py-1 border border-slate-200 text-sm hover:bg-slate-50 focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2">Undo</button>
    </div>
  )
}
