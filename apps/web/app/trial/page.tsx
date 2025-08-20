'use client'
export const dynamic = 'force-dynamic'
import ClientShell from '@/components/ClientShell'

export default function Page() {
  return (
    <ClientShell active="Trial">
      <div className="px-4" data-testid="screen-trial">
        <h1 className="text-[20px] leading-[32px] font-semibold">Trial</h1>
        <div className="ph-spacer-16" aria-hidden />
        <p className="text-sm text-slate-700">7-day free trial available.</p>
        <div className="ph-spacer-24" aria-hidden />
        <button className="h-10 px-4 rounded-xl border">Start Trial</button>
      </div>
    </ClientShell>
  )
}
