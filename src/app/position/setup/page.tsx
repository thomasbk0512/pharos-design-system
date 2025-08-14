import { AppShellQueryGate } from '@/components/patterns/AppShellQueryGate'
import { PharosButton } from '@/components/pharos/Button'
import { PharosIcon } from '@/components/pharos/Icon'
import { BottomCta } from '@/components/patterns/AppShell'
import { ChevronLeft } from '@/components/pharos/icons'
import Link from 'next/link'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default function PositionSetupPage() {
  return (
    <AppShellQueryGate active="Simulator">
      <div data-testid="page-position-setup" className="pt-6">
        {/* Header row: back chevron + H4 with gap-4 mb-8 */}
        <div data-testid="vr-header-row" className="flex items-center gap-4 mb-8">
          <Link href="/">
            <button
              data-testid="vr-back-button"
              type="button"
              className="p-2 rounded-xl border border-slate-200 hover:bg-slate-50 focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
              aria-label="Go back"
            >
              <PharosIcon icon={ChevronLeft} size={20} aria-hidden />
            </button>
          </Link>
          <h4 data-testid="vr-h4" className="text-[20px] leading-[32px] font-semibold">Position Setup</h4>
        </div>

        {/* Trading Pair Section */}
        <section>
          <h5 className="text-[18px] leading-[28px] font-medium mb-6">Select Your Trading Pair</h5>
          
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
        </section>

        {/* Section gap */}
        <div className="ph-spacer-24" aria-hidden />

        {/* Capital Deployment Section */}
        <section>
          <h5 className="text-[18px] leading-[28px] font-medium mb-6">Capital Deployment</h5>
          
          <div className="ph-stack-label">
            <label className="block text-sm font-medium text-slate-700">Investment Amount</label>
            <PharosButton variant="secondary" className="w-full justify-start">
              <span className="text-slate-900">Enter amount</span>
            </PharosButton>
          </div>

          <div className="ph-spacer-16" aria-hidden />

          <div className="ph-stack-label">
            <label className="block text-sm font-medium text-slate-700">Risk Tolerance</label>
            <PharosButton variant="secondary" className="w-full justify-start">
              <span className="text-slate-900">Select risk level</span>
            </PharosButton>
          </div>
        </section>

        {/* Bottom CTA */}
        <BottomCta 
          primary={<PharosButton className="w-full">Simulate position</PharosButton>}
        />
      </div>
    </AppShellQueryGate>
  )
}
