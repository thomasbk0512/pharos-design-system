'use client'
export const dynamic = 'force-dynamic'
import ClientShell from '@/components/ClientShell'

export default function Page() {
  return (
    <ClientShell active="Position">
      <div className="px-4" data-testid="screen-setup-complete">
        <h1 className="text-[20px] leading-[32px] font-semibold">Setup Complete</h1>
        <div className="ph-spacer-16" aria-hidden />
        <p className="text-sm text-slate-700">Position setup completed successfully.</p>
        <div className="ph-spacer-24" aria-hidden />
        <button className="h-10 px-4 rounded-xl border">Continue</button>
      </div>
    </ClientShell>
  )
}

