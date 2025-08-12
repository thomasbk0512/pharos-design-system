'use client'
import * as React from 'react'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

type Tone = 'neutral' | 'success' | 'warning' | 'error'
export function Tag({ tone = 'neutral', children, dismissible, className }: { tone?: Tone; children: React.ReactNode; dismissible?: boolean; className?: string }) {
  const tones: Record<Tone, string> = {
    neutral: 'bg-slate-100 border border-slate-200 text-slate-800',
    success: 'bg-status-success-100 border border-status-success-200 text-status-success-700',
    warning: 'bg-status-warning-100 border border-status-warning-200 text-status-warning-700',
    error: 'bg-status-error-100 border border-status-error-200 text-status-error-700',
  }
  return (
    <span className={cn('inline-flex items-center rounded-full gap-1.5 px-3 py-1 text-sm', tones[tone], className)}>
      {children}
      {dismissible && <X className="h-3.5 w-3.5" />}
    </span>
  )
}
