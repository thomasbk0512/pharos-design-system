import { AppShell } from '@/components/patterns/AppShell'
import { PharosButton } from '@/components/pharos/Button'
import { PharosIcon } from '@/components/pharos/Icon'
import { TrendingUp, Shield, Zap } from '@/components/pharos/icons'

export default function RecommendationsPage() {
  const providers = [
    {
      name: "Yearn Finance",
      badge: "Best APY",
      apy: "15.2%",
      features: ["Auto-compounding", "Risk-managed"],
      note: "Highest yield with proven track record",
      improvement: "+2.8%"
    },
    {
      name: "Aave",
      badge: "Most Liquid",
      apy: "12.8%",
      features: ["Liquidity mining", "Stable rates"],
      note: "Excellent liquidity and stability",
      improvement: "+0.4%"
    },
    {
      name: "Compound",
      badge: "Established",
      apy: "11.9%",
      features: ["Governance tokens", "Flexible terms"],
      note: "Well-established protocol",
      improvement: "-0.5%"
    }
  ]

  return (
    <AppShell>
      <div data-testid="page-recommendations" className="pt-6">
        {/* Header */}
        <h4 className="text-[20px] leading-[32px] font-semibold mb-8">Strategy Recommendations</h4>

        {/* Provider Cards */}
        <section className="mb-8">
          <div className="space-y-4">
            {providers.map((provider, index) => (
              <div key={index} className="bg-white border border-slate-200 rounded-2xl p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h5 className="text-[18px] leading-[28px] font-medium">{provider.name}</h5>
                      <span className="px-2 py-1 bg-brand/10 text-brand text-xs font-medium rounded-full">
                        {provider.badge}
                      </span>
                    </div>
                    <div className="text-3xl font-bold text-brand">{provider.apy}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-slate-600">Improvement</div>
                    <div className={`text-lg font-semibold ${provider.improvement.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                      {provider.improvement}
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {provider.features.map((feature, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Note */}
                <p className="text-slate-600 text-sm mb-4">{provider.note}</p>

                {/* CTA */}
                <PharosButton variant="secondary" className="w-full">
                  Select this option
                </PharosButton>
              </div>
            ))}
          </div>
        </section>

        {/* Route Comparison */}
        <section>
          <h5 className="text-[18px] leading-[28px] font-medium mb-4">Route Comparison</h5>
          <div className="bg-white border border-slate-200 rounded-2xl p-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-slate-600">Current Strategy</span>
                <span className="font-semibold">8.2% APY</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-600">Recommended Route</span>
                <span className="font-semibold text-brand">15.2% APY</span>
              </div>
              <div className="flex justify-between items-center border-t border-slate-100 pt-2">
                <span className="font-medium">Potential Gain</span>
                <span className="font-bold text-green-600">+7.0% APY</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </AppShell>
  )
}
