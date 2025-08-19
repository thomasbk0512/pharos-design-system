'use client'
import * as React from 'react'
import { cn } from '../../lib/utils'

export function PharosSwitch({
  id,
  label,
  checked,
  disabled,
  onCheckedChange,
}: {
  id: string
  label: string
  checked?: boolean
  disabled?: boolean
  onCheckedChange?: (v: boolean) => void
}) {
  const labelId = `${id}-label`
  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        id={id}
        role="switch"
        aria-checked={!!checked}
        aria-labelledby={labelId}
        disabled={disabled}
        onClick={() => onCheckedChange && onCheckedChange(!checked)}
        className={cn(
          'relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
          checked ? 'bg-brand' : 'bg-slate-200'
        )}
      >
        <span
          className={cn(
            'inline-block h-4 w-4 transform rounded-full bg-white transition-transform',
            checked ? 'translate-x-6' : 'translate-x-1'
          )}
        />
      </button>
      <label
        id={labelId}
        htmlFor={id}
        className={cn('text-sm cursor-pointer', disabled ? 'text-slate-400' : 'text-slate-700')}
      >
        {label}
      </label>
    </div>
  )
}
