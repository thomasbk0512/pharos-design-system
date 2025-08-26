'use client'
import * as React from 'react'
import { cn } from '@/lib/utils'

/**
 * GridOverlay
 * Non-interactive 12-column visual grid overlay.
 * Uses token-driven CSS vars (no raw hex). Subtle column tint via color-mix.
 */
export function GridOverlay({ columns = 12, className, children }: { columns?: number; className?: string; children?: React.ReactNode }) {
  const colWidth = 100 / columns
  // Subtle column tint mixed from slate-900 token
  const columnColor = 'color-mix(in srgb, var(--ph-global-color-slate-900) 6%, transparent)'
  const bg = `repeating-linear-gradient(
    to right,
    ${columnColor} 0,
    ${columnColor} calc(${colWidth}% - 1px),
    transparent calc(${colWidth}% - 1px),
    transparent ${colWidth}%
  )`

  return (
    <div className={cn('relative rounded-2xl border border-slate-200 shadow-pharos-sm overflow-hidden bg-white', className)}>
      <div className="relative p-4">
        {children}
      </div>
      <div aria-hidden className="pointer-events-none absolute inset-0" style={{ backgroundImage: bg }} />
    </div>
  )
}



