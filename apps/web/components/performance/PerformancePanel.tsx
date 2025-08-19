'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAppStore } from '@/lib/store'

export default function PerformancePanel() {
  const router = useRouter()
  const draft = useAppStore((s) => s.draft)
  const setPerf = useAppStore((s) => s.setPerf)

  useEffect(() => {
    if (!draft) return
    // simple mock calc
    const apr = Math.min(40, Math.max(5, draft.amount / 100))
    const sharpe = 1.2
    setPerf({ apr, sharpe })
  }, [draft, setPerf])

  if (!draft) {
    return (
      <div className="px-4" data-testid="screen-position-performance">
        <h1 className="text-[20px] leading-[32px] font-semibold">Strategy Performance</h1>
        <div className="ph-spacer-16" aria-hidden />
        <p className="text-sm text-slate-700">No position draft found. Please set up a position first.</p>
        <div className="ph-spacer-24" aria-hidden />
        <button className="h-10 px-4 rounded-xl border" onClick={() => router.push('/position/setup')}>
          Go to Position Setup
        </button>
      </div>
    )
  }

  return (
    <div className="px-4" data-testid="screen-position-performance">
      <h1 className="text-[20px] leading-[32px] font-semibold">Strategy Performance</h1>
      <div className="ph-spacer-16" aria-hidden />
      <div className="rounded-2xl border p-4">
        <p className="text-sm">Est. APR: <strong>{useAppStore.getState().perf?.apr}%</strong></p>
        <p className="text-sm">Sharpe: <strong>{useAppStore.getState().perf?.sharpe}</strong></p>
      </div>
      <div className="ph-spacer-24" aria-hidden />
      <button className="h-10 px-4 rounded-xl border" onClick={() => router.push('/recommendations')}>See Recommendations</button>
    </div>
  )
}
