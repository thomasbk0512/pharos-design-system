'use client'
import * as React from 'react'
import { PharosButton } from '@/components/pharos/Button'
import { LabeledInput } from '@/components/pharos/LabeledInput'
import { PharosCard } from '@/components/pharos/Card'

export function FormPattern() {
  return (
    <div className="grid md:grid-cols-2 gap-3">
      {/* Two‑column form layout */}
      <PharosCard>
        <div className="p-3 pb-2 border-b border-slate-200 text-sm font-medium">Two‑column form</div>
        <div className="p-4 grid gap-4">
          <div className="grid md:grid-cols-2 gap-3">
            <LabeledInput id="name" label="Strategy name" placeholder="Enter name" />
            <LabeledInput id="capital" label="Initial capital" placeholder="$5,000" inputMode="numeric" />
          </div>
          <div className="grid md:grid-cols-2 gap-3">
            <LabeledInput id="horizon" label="Time horizon (days)" placeholder="30" inputMode="numeric" />
            <LabeledInput id="fee" label="Fee tier" placeholder="0.3%" />
          </div>
          <div className="flex items-center justify-end gap-2">
            <button className="rounded-xl px-3 py-2 border border-slate-200 text-sm hover:bg-slate-50 focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2">Cancel</button>
            <PharosButton>Save</PharosButton>
          </div>
        </div>
      </PharosCard>

      {/* Validation placement */}
      <PharosCard>
        <div className="p-3 pb-2 border-b border-slate-200 text-sm font-medium">Validation</div>
        <div className="p-4 grid gap-3">
          <LabeledInput id="v1" label="Strategy ID" placeholder="abc‑123" state="error" helper="Use 3–32 lowercase letters, numbers, or dashes." />
          <LabeledInput id="v2" label="Capital" placeholder="$10,000" helper="Numbers only; currency symbol allowed." />
          <div className="text-xs text-slate-600">Guidance: keep error text to one sentence; place beneath the field. Don't stack multiple errors per field.</div>
        </div>
      </PharosCard>
    </div>
  )
}
