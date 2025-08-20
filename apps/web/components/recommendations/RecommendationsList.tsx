'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAppStore } from '@/lib/store'

export default function RecommendationsList() {
  const router = useRouter()
  const recs = useAppStore((s) => s.recs)
  const setRecs = useAppStore((s) => s.setRecs)
  const selectRec = useAppStore((s) => s.selectRec)

  useEffect(() => {
    if (recs.length) return
    setRecs([
      { id: 'alpha', label: 'Alpha Strategy', expectedAPR: 12.5, riskLevel: 'low' },
      { id: 'beta', label: 'Beta Strategy', expectedAPR: 18.0, riskLevel: 'med' },
      { id: 'gamma', label: 'Gamma Strategy', expectedAPR: 25.0, riskLevel: 'high' }
    ])
  }, [recs.length, setRecs])

  return (
    <div className="px-4" data-testid="screen-recommendations">
      <h1 className="text-[20px] leading-[32px] font-semibold">Recommendations</h1>
      <div className="ph-spacer-16" aria-hidden />
      <div className="grid gap-4">
        {recs.map(r => (
          <button key={r.id} className="text-left rounded-2xl border p-4"
            onClick={() => { selectRec(r); router.push('/recommendations/optimal') }}>
            <div className="font-medium">{r.label}</div>
            <div className="text-sm text-slate-600">APR ~ {r.expectedAPR}% · Risk {r.riskLevel}</div>
          </button>
        ))}
      </div>
    </div>
  )
}
