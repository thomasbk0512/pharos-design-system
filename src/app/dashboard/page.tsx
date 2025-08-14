import { AppShellQueryGate } from '@/components/patterns/AppShellQueryGate'
import { PharosButton } from '@/components/pharos/Button'
import { PharosIcon } from '@/components/pharos/Icon'
import { TrendingUp, TrendingDown, ExternalLink, AlertTriangle, Lightbulb } from 'lucide-react'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default function DashboardPage() {
  return (
    <AppShellQueryGate active="Dashboard">
      <div data-testid="page-dashboard" className="pt-6">
        {/* Header */}
        <h4 className="text-[20px] leading-[32px] font-semibold mb-2">Dashboard</h4>
        <p className="text-slate-600 mb-8">Monitor your DeFi positions and discover opportunities.</p>

        {/* Total Portfolio KPI */}
        <section className="mb-8">
          <div className="bg-white border border-slate-200 rounded-2xl p-6">
            <h5 className="text-[18px] leading-[28px] font-medium mb-4">Total Portfolio</h5>
            <div className="text-4xl font-bold text-slate-900 mb-2">$24,850</div>
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-5 h-5 text-green-600" />
              <span className="text-green-600 font-semibold">+$1,240 (5.3%)</span>
              <span className="text-slate-600 text-sm">this week</span>
            </div>
            
            {/* Mini Breakdown Row */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-100">
              <div className="text-center">
                <div className="text-lg font-semibold text-slate-900">$18,200</div>
                <div className="text-xs text-slate-600">DeFi Vaults</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold text-slate-900">$4,650</div>
                <div className="text-xs text-slate-600">Liquidity</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold text-slate-900">$2,000</div>
                <div className="text-xs text-slate-600">Staking</div>
              </div>
            </div>
          </div>
        </section>

        {/* Alerts Section */}
        <section className="mb-8">
          <h5 className="text-[18px] leading-[28px] font-medium mb-4">Alerts</h5>
          <div className="space-y-4">
            {/* Needs Correction Alert */}
            <div className="bg-orange-50 border border-orange-200 rounded-2xl p-4">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h6 className="font-medium text-orange-900 mb-1">Position needs correction</h6>
                    <p className="text-orange-700 text-sm">Your Aave position has dropped below optimal LTV ratio.</p>
                  </div>
                </div>
                <PharosButton variant="secondary" className="px-3 py-1 text-sm">Rebalance</PharosButton>
              </div>
            </div>

            {/* Discovered Opportunity Alert */}
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <Lightbulb className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h6 className="font-medium text-blue-900 mb-1">Discovered opportunity</h6>
                    <p className="text-blue-700 text-sm">New Yearn vault with 2.1% higher APY available.</p>
                  </div>
                </div>
                <PharosButton variant="secondary" className="px-3 py-1 text-sm">Review</PharosButton>
              </div>
            </div>
          </div>
        </section>

        {/* Active Strategies */}
        <section>
          <h5 className="text-[18px] leading-[28px] font-medium mb-4">Active Strategies</h5>
          <div className="space-y-4">
            {[
              {
                name: "Yearn WETH/USDC Strategy",
                status: "Active",
                positionValue: "$12,400",
                pnl: "+$620",
                currentApy: "15.2%"
              },
              {
                name: "Aave USDC Lending",
                status: "Active",
                positionValue: "$5,800",
                pnl: "+$145",
                currentApy: "8.7%"
              }
            ].map((strategy, index) => (
              <div key={index} className="bg-white border border-slate-200 rounded-2xl p-6">
                {/* Strategy Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h6 className="font-medium text-slate-900 mb-1">{strategy.name}</h6>
                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                      {strategy.status}
                    </span>
                  </div>
                  <PharosButton variant="secondary" className="px-3 py-1 text-sm">
                    Modify Strategy
                  </PharosButton>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div>
                    <div className="text-sm text-slate-600 mb-1">Position Value</div>
                    <div className="font-semibold text-slate-900">{strategy.positionValue}</div>
                  </div>
                  <div>
                    <div className="text-sm text-slate-600 mb-1">P&L</div>
                    <div className="font-semibold text-green-600">{strategy.pnl}</div>
                  </div>
                  <div>
                    <div className="text-sm text-slate-600 mb-1">Current APY</div>
                    <div className="font-semibold text-brand">{strategy.currentApy}</div>
                  </div>
                </div>

                {/* Details Links */}
                <div className="space-y-2 pt-4 border-t border-slate-100">
                  {[
                    "Vault Strategy Notes",
                    "Performance vs. HODL",
                    "Composition Changes",
                    "Rebalance History"
                  ].map((link, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">{link}</span>
                      <ExternalLink className="w-4 h-4 text-slate-400" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </AppShellQueryGate>
  )
}
