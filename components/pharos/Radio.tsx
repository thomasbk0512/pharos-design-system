'use client'
import * as React from 'react'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'

export function PharosRadioGroup({ options, value, disabled }: { options: { id: string; label: string }[]; value?: string; disabled?: boolean }) {
  return (
    <RadioGroup value={value} className="grid gap-3">
      {options.map(o => (
        <div key={o.id} className="flex items-center gap-2">
          <RadioGroupItem id={o.id} value={o.id} disabled={disabled} className="focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2" />
          <Label htmlFor={o.id} className={disabled ? 'text-slate-400' : 'text-slate-700'}>{o.label}</Label>
        </div>
      ))}
    </RadioGroup>
  )
}
