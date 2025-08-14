'use client'
import * as React from 'react'
import { PharosButton } from '@/components/pharos/Button'
import { PharosIcon } from '@/components/pharos/Icon'
import { ArrowLeft } from 'lucide-react'

export function PositionSetupSpecimen() {
  return (
    <div className="max-w-md mx-auto">
      {/* Back button + H4 with 16px gap */}
      <div data-testid="vr-header-row" className="flex items-center gap-4 mb-8">
        <button
          data-testid="vr-back-button"
          type="button"
          className="p-2 rounded-xl border border-slate-200 hover:bg-slate-50 focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
          aria-label="Go back"
        >
          <PharosIcon icon={ArrowLeft} size={20} aria-hidden />
        </button>
        <h4 data-testid="vr-h4" className="text-[20px] leading-[32px] font-semibold">Position Setup</h4>
      </div>

      {/* H5 → Label → Control stack (24px + 8px) */}
      <h5 className="text-[20px] leading-[28px] font-medium mb-6">Select Your Trading Pair</h5>
      
      <div className="ph-stack-label">
        <label className="block text-sm font-medium text-slate-700">Base Asset</label>
        <PharosButton variant="secondary" className="w-full justify-start">
          <span className="text-slate-900">Select base asset</span>
        </PharosButton>
      </div>

      <div className="ph-spacer-16" aria-hidden />

      <div className="ph-stack-label">
        <label className="block text-sm font-medium text-slate-700">Quote Asset</label>
        <PharosButton variant="secondary" className="w-full justify-start">
          <span className="text-slate-900">Select quote asset</span>
        </PharosButton>
      </div>

      {/* Section gap (40px) */}
      <div className="ph-spacer-40" aria-hidden />

      {/* Next section */}
      <h5 className="text-[20px] leading-[28px] font-medium mb-6">Capital Deployment</h5>
      
      <div className="ph-stack-label">
        <label className="block text-sm font-medium text-slate-700">Investment Amount</label>
        <PharosButton variant="secondary" className="w-full justify-start">
          <span className="text-slate-900">Enter amount</span>
        </PharosButton>
      </div>
    </div>
  )
}
