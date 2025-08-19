'use client'
import { useAppStore } from '@/lib/store'

export default function DashboardSummary() {
  const draft = useAppStore((s) => s.draft)
  const selected = useAppStore((s) => s.selected)
  const isConnected = useAppStore((s) => s.isConnected)

  return (
    <div className="px-4" data-testid="screen-dashboard">
      <h1 className="text-[20px] leading-[32px] font-semibold">Dashboard</h1>
      <div className="ph-spacer-16" aria-hidden />
      
      {draft && (
        <div className="rounded-2xl border p-4 mb-4">
          <h3 className="font-medium">Position Draft</h3>
          <p className="text-sm text-slate-600">
            {draft.baseAsset}/{draft.quoteAsset} - ${draft.amount}
          </p>
        </div>
      )}
      
      {selected && (
        <div className="rounded-2xl border p-4 mb-4">
          <h3 className="font-medium">Selected Strategy</h3>
          <p className="text-sm text-slate-600">
            {selected.label} - {selected.expectedAPR}% APR
          </p>
        </div>
      )}
      
      <div className="rounded-2xl border p-4">
        <h3 className="font-medium">Status</h3>
        <p className="text-sm text-slate-600">
          Wallet: {isConnected ? 'Connected' : 'Disconnected'}
        </p>
      </div>
    </div>
  )
}
