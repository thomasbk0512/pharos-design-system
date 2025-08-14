import { AppShell } from '@/components/patterns/AppShell'
import { PharosButton } from '@/components/pharos/Button'
import { BottomCta } from '@/components/patterns/AppShell'
import { PharosIcon } from '@/components/pharos/Icon'
import { CheckCircle, Clock, DollarSign } from '@/components/pharos/icons'

export default function ExecuteProgressPage() {
  return (
    <AppShell>
      <div data-testid="page-execute-progress" className="pt-6">
        {/* Header */}
        <h4 className="text-[20px] leading-[32px] font-semibold mb-2">Execute Navigation</h4>
        <p className="text-slate-600 mb-8">Navigating to Yearn Finance vault...</p>

        {/* Wallet Banner */}
        <section className="mb-8">
          <div className="bg-green-50 border border-green-200 rounded-2xl p-4">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="text-green-800 font-medium">Wallet connected successfully</span>
            </div>
          </div>
        </section>

        {/* Progress Bar */}
        <section className="mb-8">
          <h5 className="text-[18px] leading-[28px] font-medium mb-4">Navigation Progress</h5>
          <div 
            data-testid="exec-progress-bar"
            className="w-full bg-slate-200 rounded-full h-3 mb-4"
          >
            <div className="bg-brand h-3 rounded-full" style={{ width: '75%' }}></div>
          </div>
          <p className="text-sm text-slate-600">3 of 4 steps completed</p>
        </section>

        {/* Step Cards */}
        <section className="mb-8">
          <div className="space-y-4">
            {[
              { step: 1, title: "Approve WETH", status: "completed", time: "2 min", cost: "$0" },
              { step: 2, title: "Deposit to Yearn", status: "completed", time: "1 min", cost: "$0" },
              { step: 3, title: "Stake LP tokens", status: "completed", time: "1 min", cost: "$0" },
              { step: 4, title: "Start earning", status: "pending", time: "~30 sec", cost: "$0" }
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-4 bg-white border border-slate-200 rounded-xl p-4">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  item.status === 'completed' ? 'bg-green-100' : 'bg-slate-100'
                }`}>
                  {item.status === 'completed' ? (
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  ) : (
                    <span className="text-slate-600 font-semibold">{item.step}</span>
                  )}
                </div>
                <div className="flex-1">
                  <div className="font-medium">{item.title}</div>
                  <div className="flex items-center gap-4 text-sm text-slate-600">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {item.time}
                    </div>
                    <div className="flex items-center gap-1">
                      <DollarSign className="w-4 h-4" />
                      {item.cost}
                    </div>
                  </div>
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                  item.status === 'completed' 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-slate-100 text-slate-700'
                }`}>
                  {item.status === 'completed' ? 'Complete' : 'Pending'}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Cost Summary */}
        <section className="mb-8">
          <h5 className="text-[18px] leading-[28px] font-medium mb-4">Cost Summary</h5>
          <div className="bg-white border border-slate-200 rounded-2xl p-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-slate-600">Gas Fees (3 transactions)</span>
                <span className="font-semibold">$45</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-600">Protocol Fees</span>
                <span className="font-semibold">$0</span>
              </div>
              <div className="flex justify-between items-center border-t border-slate-100 pt-2">
                <span className="font-medium">Total Cost</span>
                <span className="font-bold">$45</span>
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
