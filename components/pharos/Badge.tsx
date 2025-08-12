import * as React from 'react'
import { cn } from '../../lib/utils'

type Tone = 'neutral' | 'success' | 'warning' | 'error'

type Size = 'sm' | 'md'

export function StatusChip({ tone = 'neutral', size = 'md', className, children }: React.PropsWithChildren<{ tone?: Tone; size?: Size; className?: string }>) {
  const sizes = { sm: 'px-2 py-0.5 text-xs', md: 'px-3 py-1 text-sm' }
  const tones: Record<Tone, string> = {
    neutral: 'bg-slate-100 border border-slate-200 text-slate-800',
    success: 'bg-status-success-100 border border-status-success-200 text-status-success-700',
    warning: 'bg-status-warning-100 border border-status-warning-200 text-status-warning-700',
    error: 'bg-status-error-100 border border-status-error-200 text-status-error-700',
  }
  return (
    <span className={cn('inline-flex items-center rounded-full gap-1.5', sizes[size], tones[tone], className)}>{children}</span>
  )
}
