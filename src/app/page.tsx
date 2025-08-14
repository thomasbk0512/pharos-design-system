import { AppShellQueryGate } from '@/components/patterns/AppShellQueryGate'
import { PharosButton } from '@/components/pharos/Button'
import { PharosIcon } from '@/components/pharos/Icon'
import { Zap, Shield, TrendingUp } from 'lucide-react'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default function LandingPage() {
  return (
    <AppShellQueryGate>
      <div data-testid="page-landing" className="pt-6">
        {/* Hero Section */}
        <section className="text-center mb-6">
          <div className="mb-6">
            <div className="text-4xl font-bold text-brand mb-4">PHAROS</div>
            <h1 className="text-[32px] leading-[40px] font-bold text-slate-900 mb-4">
              Simulate your yield risks
            </h1>
            <p className="text-lg text-slate-600 max-w-md mx-auto">
              Discover optimal DeFi strategies with AI-powered risk analysis and yield optimization.
            </p>
          </div>
          
          {/* Email Input + CTA */}
          <div className="max-w-sm mx-auto mb-6">
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2"
              />
              <PharosButton className="px-6">
                Simulate now
              </PharosButton>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section>
          <h2 className="text-[20px] leading-[32px] font-semibold mb-4 text-center">How it works</h2>
          <div className="space-y-6">
            {[
              {
                icon: Zap,
                label: "Connect & Analyze",
                description: "Connect your DeFi positions and get instant risk assessment"
              },
              {
                icon: TrendingUp,
                label: "Optimize Strategy",
                description: "Discover better yield opportunities with lower risk"
              },
              {
                icon: Shield,
                label: "Execute Safely",
                description: "Navigate to optimal protocols with confidence"
              }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center flex-shrink-0">
                  <PharosIcon icon={item.icon} size={24} className="text-brand" />
                </div>
                <div>
                  <h3 className="text-[18px] leading-[28px] font-medium text-slate-900 mb-1">
                    {item.label}
                  </h3>
                  <p className="text-slate-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
              </div>
      </AppShellQueryGate>
  )
}


