import { AppShell } from '@/components/patterns/AppShell'
import { PharosButton } from '@/components/pharos/Button'
import { BottomCta } from '@/components/patterns/AppShell'
import { PharosIcon } from '@/components/pharos/Icon'
import { CheckCircle, Clock, DollarSign } from '@/components/pharos/icons'

export default function OptimalOptionPage() {
  return (
    <AppShell>
      <div data-testid="page-option" className="pt-6">
        {/* Header */}
        <h4 className="text-[20px] leading-[32px] font-semibold mb-2">Optimal option</h4>
        <p className="text-slate-600 mb-8">Yearn Finance offers the best risk-adjusted returns for your position.</p>

        {/* Provider Summary Row */}
        <section className="mb-8">
          <div className="bg-white border border-slate-200 rounded-2xl p-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-brand mb-1">15.2%</div>
                <div className="text-sm text-slate-600">APY</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-1">+7.0%</div>
                <div className="text-sm text-slate-600">Improvement</div>
              </div>
            </div>
          </div>
        </section>

        {/* Steps List */}
        <section className="mb-8">
          <h5 className="text-[18px] leading-[28px] font-medium mb-4">Navigation Steps</h5>
          <div className="space-y-4">
            {[
              { step: 1, title: "Approve WETH", duration: "~2 min", fee: "$0" },
              { step: 2, title: "Deposit to Yearn", duration: "~1 min", fee: "$0" },
              { step: 3, title: "Stake LP tokens", duration: "~1 min", fee: "$0" },
              { step: 4, title: "Start earning", duration: "Immediate", fee: "$0" }
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-4 bg-white border border-slate-200 rounded-xl p-4">
                <div className="w-8 h-8 bg-brand/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-brand font-semibold">{item.step}</span>
                </div>
                <div className="flex-1">
                  <div className="font-medium">{item.title}</div>
                  <div className="flex items-center gap-4 text-sm text-slate-600">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {item.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <DollarSign className="w-4 h-4" />
                      {item.fee}
                    </div>
                  </div>
                </div>
                <CheckCircle className="w-5 h-5 text-green-600" />
              </div>
            ))}
          </div>
        </section>

        {/* Financial Impact Table */}
        <section className="mb-8">
          <h5 className="text-[18px] leading-[28px] font-medium mb-4">Financial Impact</h5>
          <div className="bg-white border border-slate-200 rounded-2xl p-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-slate-600">Current Annual Yield</span>
                <span className="font-semibold">$820</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-600">New Annual Yield</span>
                <span className="font-semibold text-brand">$1,520</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-600">Gas Fees</span>
                <span className="font-semibold text-red-600">-$45</span>
              </div>
              <div className="flex justify-between items-center border-t border-slate-100 pt-2">
                <span className="font-medium">Net Annual Benefit</span>
                <span className="font-bold text-green-600">$655</span>
              </div>
            </div>
          </div>
        </section>

        {/* Route Advantages */}
        <section className="mb-8">
          <h5 className="text-[18px] leading-[28px] font-medium mb-4">Route Advantages</h5>
          <div className="space-y-3">
            {[
              "Auto-compounding for maximum yield",
              "Risk-managed by Yearn's treasury",
              "No lock-up period",
              "Governance token rewards included"
            ].map((advantage, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-brand rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-slate-700">{advantage}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <BottomCta 
          primary={<PharosButton className="w-full">Navigate to Yearn Finance</PharosButton>}
        />
      </div>
    </AppShell>
  )
}
