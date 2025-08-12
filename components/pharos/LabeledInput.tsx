import * as React from 'react'
import { cn } from '../../lib/utils'

export type InputState = 'default' | 'error' | 'success' | 'disabled'

export function LabeledInput({ id, label, helper, state = 'default', ...props }: { id: string; label: string; helper?: string; state?: InputState } & React.InputHTMLAttributes<HTMLInputElement>) {
  const ring = 'focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2'
  const byState = {
    default: 'border-slate-200',
    error: 'border-red-200 text-red-700',
    success: 'border-green-200',
    disabled: 'opacity-70 pointer-events-none',
  } as const
  return (
    <div>
      <label htmlFor={id} className="mb-1 block text-sm font-medium text-slate-700">{label}</label>
      <input id={id} className={cn('rounded-xl border px-3 py-2 w-full', ring, byState[state])} disabled={state==='disabled'} {...props} />
      {helper && <p className={cn('mt-1 text-xs', state==='error' ? 'text-red-700' : 'text-slate-500')}>{helper}</p>}
    </div>
  )
}

// Numeric input variant
export function LabeledNumberInput({ 
  id, 
  label, 
  helper, 
  state = 'default',
  className,
  ...props 
}: { id: string; label: string; helper?: string; state?: InputState; className?: string } & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'>) {
  return (
    <LabeledInput
      id={id}
      label={label}
      helper={helper}
      state={state}
      type="number"
      inputMode="numeric"
      className={className}
      {...props}
    />
  );
}

// Textarea variant
export function LabeledTextarea({ 
  id, 
  label, 
  helper, 
  state = 'default',
  className,
  rows = 3,
  ...props 
}: { id: string; label: string; helper?: string; state?: InputState; className?: string; rows?: number } & React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const ring = 'focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2'
  const byState = {
    default: 'border-slate-200',
    error: 'border-red-200 text-red-700',
    success: 'border-green-200',
    disabled: 'opacity-70 pointer-events-none',
  } as const
  
  return (
    <div>
      <label htmlFor={id} className="mb-1 block text-sm font-medium text-slate-700">{label}</label>
      <textarea
        id={id}
        rows={rows}
        className={cn(
          'w-full px-4 py-3 border rounded-xl',
          'text-slate-900 placeholder-slate-500',
          ring,
          byState[state],
          'disabled:bg-slate-50 disabled:text-slate-500 disabled:cursor-not-allowed',
          'transition-colors duration-200 resize-vertical',
          className
        )}
        disabled={state === 'disabled'}
        {...props}
      />
      {helper && <p className={cn('mt-1 text-xs', state === 'error' ? 'text-red-700' : 'text-slate-500')}>{helper}</p>}
    </div>
  );
}
