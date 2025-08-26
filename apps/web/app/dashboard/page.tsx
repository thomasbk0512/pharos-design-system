'use client'
export const dynamic = 'force-dynamic'
import ClientShell from '@/components/ClientShell'
import DashboardSummary from '@/components/DashboardSummary'

export default function Page() {
  return (
    <ClientShell active="Dashboard">
      <DashboardSummary />
    </ClientShell>
  )
}

