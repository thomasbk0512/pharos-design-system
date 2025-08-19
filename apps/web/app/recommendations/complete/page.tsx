'use client'
import ClientShell from '@/components/ClientShell'
import { useRouter } from 'next/navigation'
import { useAppStore } from '@/lib/store'

export default function Page({ searchParams }: { searchParams?: { [k: string]: string } }) {
  const router = useRouter()
  const reset = useAppStore((s) => s.reset)
  const initialAuthed = searchParams?.auth === '1'
  
  return (
    <ClientShell active="Recommendations" initialAuthed={initialAuthed}>
      <div className="px-4" data-testid="screen-complete">
        <h1 className="text-[20px] leading-[32px] font-semibold">All Set!</h1>
        <div className="ph-spacer-16" aria-hidden />
        <p className="text-sm text-slate-700">Your strategy has been executed successfully.</p>
        <div className="ph-spacer-24" aria-hidden />
        <button className="h-10 px-4 rounded-xl border" onClick={() => {
          reset()
          router.push('/dashboard?auth=1')
        }}>
          View Dashboard
        </button>
      </div>
    </ClientShell>
  )
}
