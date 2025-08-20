'use client'
export const dynamic = 'force-dynamic'
import ClientShell from '@/components/ClientShell'
import PerformancePanel from '@/components/performance/PerformancePanel'

export default function Page() {
  return (
    <ClientShell active="Position">
      <PerformancePanel />
    </ClientShell>
  )
}
