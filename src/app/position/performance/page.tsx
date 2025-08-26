import { AppShell } from '@/components/patterns/AppShell'
import { PharosButton } from '@/components/pharos/Button'
import { BottomCta } from '@/components/patterns/AppShell'

export default function PerformancePage() {
  return (
    <AppShell>
      <div data-testid="page-performance" className="pt-6">
        {/* Header */}
        <h4 className="text-[20px] leading-[32px] font-semibold mb-8">Strategy Performance</h4>

        {/* Expected Net Yield Card */}
        <section className="mb-8">
          <div className="bg-white border border-slate-200 rounded-2xl p-6">
            <h5 className="text-[18px] leading-[28px] font-medium mb-4">Expected Net Yield</h5>
            <div className="text-4xl font-bold text-brand mb-4">12.4%</div>
            
            {/* Optimistic/Likely/Conservative Table */}
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-slate-100">
                <span className="text-slate-600">Optimistic</span>
                <span className="font-semibold text-green-600">18.2%</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-100">
                <span className="text-slate-600">Likely</span>
                <span className="font-semibold text-brand">12.4%</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-slate-600">Conservative</span>
                <span className="font-semibold text-orange-600">8.7%</span>
              </div>
            </div>
          </div>
        </section>

        {/* Performance Breakdown */}
        <section className="mb-8">
          <h5 className="text-[18px] leading-[28px] font-medium mb-4">Performance Breakdown</h5>
          <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4">
            <div className="flex justify-between">
              <span>Base Yield</span>
              <span className="font-semibold">8.2%</span>
            </div>
            <div className="flex justify-between">
              <span>Strategy Bonus</span>
              <span className="font-semibold text-green-600">+4.2%</span>
            </div>
            <div className="flex justify-between border-t border-slate-100 pt-2">
              <span className="font-medium">Total</span>
              <span className="font-bold text-brand">12.4%</span>
            </div>
          </div>
        </section>

        {/* Risk-Adjusted Return */}
        <section className="mb-8">
          <h5 className="text-[18px] leading-[28px] font-medium mb-4">Risk-Adjusted Return</h5>
          <div className="bg-white border border-slate-200 rounded-2xl p-6">
            <div className="text-2xl font-bold text-slate-900 mb-2">1.24</div>
            <p className="text-slate-600 text-sm">Sharpe Ratio - Excellent risk-adjusted performance</p>
          </div>
        </section>

        {/* Concentration Analysis */}
        <section className="mb-8">
          <h5 className="text-[18px] leading-[28px] font-medium mb-4">Concentration Analysis</h5>
          <div className="bg-white border border-slate-200 rounded-2xl p-6">
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-2">
                <span>Protocol Concentration</span>
                <span>65%</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2">
                <div className="bg-brand h-2 rounded-full" style={{ width: '65%' }}></div>
              </div>
            </div>
            <p className="text-slate-600 text-sm">Moderate concentration - consider diversification</p>
          </div>
        </section>

        {/* Bottom CTA */}
        <BottomCta 
          primary={<PharosButton className="w-full">Discover Better Options</PharosButton>}
          secondary={<PharosButton variant="secondary" className="w-full">Adjust position</PharosButton>}
        />
      </div>
    </AppShell>
  )
}

