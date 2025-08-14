import { AppShellQueryGate } from '@/components/patterns/AppShellQueryGate'
import { PharosButton } from '@/components/pharos/Button'
import { BottomCta } from '@/components/patterns/AppShell'
import { PharosIcon } from '@/components/pharos/Icon'
import { Zap, Shield, TrendingUp, BarChart3, Clock, Users } from 'lucide-react'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default function TrialPage() {
  return (
    <AppShellQueryGate>
      <div data-testid="page-trial" className="pt-6">
        {/* Header */}
        <h4 className="text-[20px] leading-[32px] font-semibold mb-8">Enhance Your DeFi Strategy</h4>

        {/* Free Trial Display */}
        <section className="mb-8">
          <div className="bg-gradient-to-br from-brand/10 to-purple-100 border border-brand/20 rounded-2xl p-8 text-center">
            <div className="text-6xl font-bold text-brand mb-2">7-day</div>
            <div className="text-2xl font-semibold text-slate-900 mb-4">free trial</div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
              Limited time
            </div>
          </div>
        </section>

        {/* Pricing Lines */}
        <section className="mb-8">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-slate-600">After trial</span>
              <span className="text-2xl font-bold text-slate-900">$29/month</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-600">Annual plan</span>
              <span className="text-2xl font-bold text-slate-900">$290/year</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-600">Save with annual</span>
              <span className="text-green-600 font-semibold">$58/year</span>
            </div>
          </div>
        </section>

        {/* SOC 2 Chip Row */}
        <section className="mb-8">
          <div className="flex items-center justify-center">
            <div className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
              SOC 2 Type II Certified
            </div>
          </div>
        </section>

        {/* Feature List */}
        <section className="mb-8">
          <h5 className="text-[18px] leading-[28px] font-medium mb-4">Premium Features</h5>
          <div className="space-y-4">
            {[
              { icon: Zap, title: "Advanced Analytics", description: "Real-time performance tracking and insights" },
              { icon: Shield, title: "Risk Management", description: "AI-powered risk assessment and alerts" },
              { icon: TrendingUp, title: "Portfolio Optimization", description: "Automated rebalancing recommendations" },
              { icon: BarChart3, title: "Custom Dashboards", description: "Personalized views and reporting" },
              { icon: Clock, title: "24/7 Monitoring", description: "Continuous position surveillance" },
              { icon: Users, title: "Expert Support", description: "Direct access to DeFi specialists" }
            ].map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <PharosIcon icon={feature.icon} size={24} className="text-brand" />
                </div>
                <div>
                  <h6 className="font-medium text-slate-900 mb-1">{feature.title}</h6>
                  <p className="text-slate-600 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <BottomCta 
          primary={<PharosButton className="w-full">Start free trial</PharosButton>}
          secondary={<PharosButton variant="secondary" className="w-full">Try another simulation</PharosButton>}
        />
      </div>
    </AppShellQueryGate>
  )
}
