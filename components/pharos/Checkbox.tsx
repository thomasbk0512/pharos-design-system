'use client'
import * as React from 'react'
import { Checkbox as Base } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'

export function PharosCheckbox({ id, label, checked, disabled, className }: { id: string; label: string; checked?: boolean; disabled?: boolean; className?: string }) {
  return (
    <div className={cn('inline-flex items-center gap-2', className)}>
      <Base id={id} checked={checked} disabled={disabled} className={cn(
        'rounded-[4px] data-[state=checked]:bg-brand data-[state=checked]:text-white',
        'focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2'
      )} />
      <Label htmlFor={id} className={cn('text-sm', disabled ? 'text-slate-400' : 'text-slate-700')}>{label}</Label>
    </div>
  )
}
