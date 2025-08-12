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
  helperText, 
  error, 
  required = false,
  className,
  ...props 
}: Omit<LabeledInputProps, 'type'>) {
  return (
    <LabeledInput
      id={id}
      label={label}
      helperText={helperText}
      error={error}
      required={required}
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
  helperText, 
  error, 
  required = false,
  className,
  rows = 3,
  ...props 
}: Omit<LabeledInputProps, 'type'> & { rows?: number }) {
  return (
    <div className="space-y-2">
      <label 
        htmlFor={id} 
        className="block text-sm font-medium text-slate-700"
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      
      <textarea
        id={id}
        rows={rows}
        className={cn(
          'w-full px-4 py-3 border border-slate-200 rounded-xl',
          'text-slate-900 placeholder-slate-500',
          'focus:outline-none focus:ring-2 focus:ring-pharos-brand focus:ring-offset-2 focus:border-pharos-brand',
          'disabled:bg-slate-50 disabled:text-slate-500 disabled:cursor-not-allowed',
          'transition-colors duration-200 resize-vertical',
          error && 'border-red-300 focus:ring-red-500 focus:border-red-500',
          className
        )}
        {...props}
      />
      
      {helperText && !error && (
        <p className="text-sm text-slate-500">{helperText}</p>
      )}
      
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
    </div>
  );
}
