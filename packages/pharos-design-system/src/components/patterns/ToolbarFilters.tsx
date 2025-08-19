'use client'
import * as React from 'react'
import { Tag } from '../pharos/Tag'
import { ChevronDown } from 'lucide-react'

export function ToolbarFilters() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-pharos p-4 grid gap-3">
      <div className="flex flex-wrap items-center gap-2">
        <div className="inline-flex items-center rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-700">
          Network
          <ChevronDown className="ml-2 h-4 w-4 text-slate-500" />
        </div>
        <div className="inline-flex items-center rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-700">
          Pair
          <ChevronDown className="ml-2 h-4 w-4 text-slate-500" />
        </div>
        <div className="inline-flex items-center rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-700">
          Status
          <ChevronDown className="ml-2 h-4 w-4 text-slate-500" />
        </div>
        <div className="h-6 w-px bg-slate-200 mx-1" />
        <Tag>WETH/USDC</Tag>
        <Tag tone="success">Healthy</Tag>
        <Tag tone="warning">Rebalance</Tag>
      </div>
      <div className="text-xs text-slate-600">Guidance: toolbars use concise chips and a single row of controls. Avoid multiple stacked rows; collapse to a drawer on small screens.</div>
    </div>
  )
}
