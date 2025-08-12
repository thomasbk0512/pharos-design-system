import * as React from 'react'
import { cn } from '../../lib/utils'

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive'

export function PharosButton({ variant = 'primary', loading, className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant; loading?: boolean }) {
  const base = 'rounded-xl ' +
    'focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 '
  const map: Record<Variant, string> = {
    primary: 'bg-brand text-white hover:brightness-95 disabled:opacity-70 disabled:pointer-events-none',
    secondary: 'bg-brand-50 text-slate-900 border border-indigo-100 hover:bg-indigo-50 disabled:opacity-70 disabled:pointer-events-none',
    outline: 'border border-slate-200 hover:bg-slate-50 disabled:opacity-70 disabled:pointer-events-none',
    ghost: 'hover:bg-slate-50 disabled:opacity-70 disabled:pointer-events-none',
    destructive: 'bg-red-600 text-white hover:bg-red-700 disabled:opacity-70 disabled:pointer-events-none',
  }
  return (
    <button className={cn(base, map[variant], className)} aria-busy={loading} {...props} />
  )
}
