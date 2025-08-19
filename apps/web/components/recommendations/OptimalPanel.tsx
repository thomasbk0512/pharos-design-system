'use client'
import { useRouter } from 'next/navigation'
import { useAppStore } from '@/lib/store'

export default function OptimalPanel() {
  const router = useRouter()
  const sel = useAppStore((s) => s.selected)
  
  if (!sel) {
    return (
      <div className="px-4" data-testid="screen-optimal">
        <h1 className="text-[20px] leading-[32px] font-semibold">Optimal Option</h1>
        <div className="ph-spacer-16" aria-hidden />
        <p className="text-sm text-slate-700">No recommendation selected. Please choose a strategy first.</p>
        <div className="ph-spacer-24" aria-hidden />
        <button className="h-10 px-4 rounded-xl border" onClick={() => router.push('/recommendations')}>
          Go to Recommendations
        </button>
      </div>
    )
  }

  return (
    <div className="px-4" data-testid="screen-optimal">
      <h1 className="text-[20px] leading-[32px] font-semibold">Optimal Option</h1>
      <div className="ph-spacer-16" aria-hidden />
      <div className="rounded-2xl border p-4">
        <div className="font-medium">{sel.label}</div>
        <div className="text-sm text-slate-700">APR ~ {sel.expectedAPR}% · Risk {sel.riskLevel}</div>
      </div>
      <div className="ph-spacer-24" aria-hidden />
      <button className="h-10 px-4 rounded-xl border" onClick={() => router.push('/recommendations/execute')}>Continue to Execute</button>
    </div>
  )
}
