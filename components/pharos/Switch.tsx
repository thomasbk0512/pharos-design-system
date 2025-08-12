'use client'
import * as React from 'react'
import { Switch as Base } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'

export function PharosSwitch({ id, label, checked, disabled }: { id: string; label: string; checked?: boolean; disabled?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <Base id={id} checked={checked} disabled={disabled} className="focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2" />
      <Label htmlFor={id} className={disabled ? 'text-slate-400' : 'text-slate-700'}>{label}</Label>
    </div>
  )
}
