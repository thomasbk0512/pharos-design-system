import { AppShell } from '@/components/patterns/AppShell'
import { PharosButton } from '@/components/pharos/Button'
import { BottomCta } from '@/components/patterns/AppShell'
import { CheckCircle } from 'lucide-react'

export default function PositionCompletePage() {
  return (
    <AppShell>
      <div data-testid="page-position-complete" className="pt-6">
        {/* Success Banner */}
        <section className="mb-8">
          <div className="bg-green-50 border border-green-200 rounded-2xl p-6 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h4 className="text-[20px] leading-[32px] font-semibold text-green-900 mb-2">
              Pair analysis complete!
            </h4>
            <p className="text-green-700">
              We've analyzed your trading pair and found optimal strategies.
            </p>
          </div>
        </section>

        {/* Summary Chips */}
        <section className="mb-8">
          <h5 className="text-[18px] leading-[28px] font-medium mb-4">Position Summary</h5>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-slate-50 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-slate-900">WETH/USDC</div>
              <div className="text-sm text-slate-600">Trading Pair</div>
            </div>
            <div className="bg-slate-50 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-slate-900">$10,000</div>
              <div className="text-sm text-slate-600">Investment</div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <BottomCta 
          primary={<PharosButton className="w-full">Go to performance</PharosButton>}
          secondary={<PharosButton variant="secondary" className="w-full">Adjust inputs</PharosButton>}
        />
      </div>
    </AppShell>
  )
}
