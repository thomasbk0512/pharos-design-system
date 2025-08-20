'use client'
import * as React from 'react'
import { Inbox } from 'lucide-react'

export function EmptyState() {
  return (
    <div className="rounded-2xl border border-slate-200 shadow-pharos bg-white p-8 text-center grid place-items-center gap-3">
      <Inbox className="h-8 w-8 text-slate-600" />
      <div className="text-sm font-medium text-slate-900">No items yet</div>
      <div className="text-sm text-slate-600">Create your first strategy to get started.</div>
      <button className="inline-flex items-center rounded-xl px-3 py-2 bg-brand text-white text-sm hover:brightness-95 focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2">Create strategy</button>
    </div>
  )
}


