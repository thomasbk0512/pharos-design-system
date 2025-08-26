'use client'
import ClientShell from '@/components/ClientShell'
import { useRouter } from 'next/navigation'

export default function Page({ searchParams }: { searchParams?: { [k: string]: string } }) {
  const router = useRouter()
  const initialAuthed = searchParams?.auth === '1'
  
  return (
    <ClientShell active="Recommendations" initialAuthed={initialAuthed}>
      <div className="px-4" data-testid="screen-execute">
        <h1 className="text-[20px] leading-[32px] font-semibold">Execute Strategy</h1>
        <div className="ph-spacer-16" aria-hidden />
        <p className="text-sm text-slate-700">Strategy execution confirmed.</p>
        <div className="ph-spacer-24" aria-hidden />
        <button className="h-10 px-4 rounded-xl border" onClick={() => router.push('/recommendations/complete')}>
          Continue
        </button>
      </div>
    </ClientShell>
  )
}

