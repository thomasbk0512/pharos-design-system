import { AppShell } from '@/components/patterns/AppShell'
import { PharosButton } from '@/components/pharos/Button'
import { BottomCta } from '@/components/patterns/AppShell'
import { PharosIcon } from '@/components/pharos/Icon'
import { CheckCircle, TrendingUp, DollarSign } from '@/components/pharos/icons'

export default function RecommendationsCompletePage() {
  return (
    <AppShell>
      <div data-testid="page-recommendations-complete" className="pt-6">
        {/* Success Banner */}
        <section className="mb-8">
          <div className="bg-green-50 border border-green-200 rounded-2xl p-6 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h4 className="text-[20px] leading-[32px] font-semibold text-green-900 mb-2">
              Navigation completed successfully! 🎉
            </h4>
            <p className="text-green-700">
              Your position is now earning optimal yields on Yearn Finance.
            </p>
          </div>
        </section>

        {/* Completed Steps List */}
        <section className="mb-8">
          <h5 className="text-[18px] leading-[28px] font-medium mb-4">Completed Steps</h5>
          <div className="space-y-3">
            {[
              "WETH approval confirmed",
              "Deposited to Yearn vault",
              "LP tokens staked",
              "Yield generation started"
            ].map((step, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-slate-700">{step}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Summary Card */}
        <section className="mb-8">
          <h5 className="text-[18px] leading-[28px] font-medium mb-4">Position Summary</h5>
          <div className="bg-white border border-slate-200 rounded-2xl p-6">
            <div className="grid grid-cols-2 gap-6 mb-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-brand mb-1">15.2%</div>
                <div className="text-sm text-slate-600">New APY</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">+$655</div>
                <div className="text-sm text-slate-600">Annual Benefit</div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-sm text-slate-600 mb-1">Total Cost</div>
              <div className="text-lg font-semibold">$45 (gas fees)</div>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="mb-8">
          <h5 className="text-[18px] leading-[28px] font-medium mb-4">What's Next?</h5>
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <TrendingUp className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-blue-800">Monitor your position performance</span>
              </div>
              <div className="flex items-start gap-3">
                <DollarSign className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-blue-800">Track yield accumulation</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-blue-800">Set up alerts for rebalancing</span>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <BottomCta 
          primary={<PharosButton className="w-full">View Dashboard</PharosButton>}
          secondary={<PharosButton variant="secondary" className="w-full">Back to Plan</PharosButton>}
        />
      </div>
    </AppShell>
  )
}
