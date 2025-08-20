'use client'
import * as React from 'react'

export function PharosRadioGroup({ options, value, disabled, name }: { options: { id: string; label: string }[]; value?: string; disabled?: boolean; name?: string }) {
  return (
    <div className="grid gap-3">
      {options.map(o => (
        <div key={o.id} className="flex items-center gap-2">
          <input
            type="radio"
            id={o.id}
            name={name || 'radio-group'}
            value={o.id}
            checked={value === o.id}
            disabled={disabled}
            className="w-4 h-4 text-brand bg-white border border-slate-300 focus:ring-2 focus:ring-brand focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          />
          <label htmlFor={o.id} className={`text-sm cursor-pointer ${disabled ? 'text-slate-400' : 'text-slate-700'}`}>
            {o.label}
          </label>
        </div>
      ))}
    </div>
  )
}
