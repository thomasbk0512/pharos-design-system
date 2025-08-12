'use client'
import * as React from 'react'

export function TooltipSpecimen() {
  return (
    <div className="rounded-2xl border border-slate-200 shadow-pharos bg-white p-4">
      <div className="text-sm font-medium mb-2">Tooltip (static specimen)</div>
      <pre className="text-xs bg-slate-50 rounded-xl p-3 overflow-auto"><code>{`/* Timing */\ntransition: opacity var(--ph-global-motion-fast) var(--ph-global-motion-ease);\n/* Content */\nfont-size: 12px; padding: 8px 12px; border-radius: 8px;\n/* Colors */\nbackground: white; border: 1px solid var(--ph-semantic-color-border); color: var(--ph-semantic-color-textSecondary);`}</code></pre>
    </div>
  )
}
