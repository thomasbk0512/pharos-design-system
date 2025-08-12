'use client'
import * as React from 'react'
import { cn } from '../../lib/utils'

export function PharosCheckbox({ id, label, checked, disabled, className }: { id: string; label: string; checked?: boolean; disabled?: boolean; className?: string }) {
  return (
    <div className={cn('inline-flex items-center gap-2', className)}>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        disabled={disabled}
        className={cn(
          'rounded-[4px] w-4 h-4 text-brand bg-white border border-slate-300',
          'focus:ring-2 focus:ring-brand focus:ring-offset-2',
          'disabled:opacity-50 disabled:cursor-not-allowed'
        )}
      />
      <label htmlFor={id} className={cn('text-sm cursor-pointer', disabled ? 'text-slate-400' : 'text-slate-700')}>
        {label}
      </label>
    </div>
  )
}
