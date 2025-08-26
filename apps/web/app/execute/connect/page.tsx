'use client'
export const dynamic = 'force-dynamic'
import ClientShell from '@/components/ClientShell'
import ConnectWalletPanel from '@/components/execute/ConnectWalletPanel'

export default function Page() {
  return (
    <ClientShell active="Execute">
      <ConnectWalletPanel />
    </ClientShell>
  )
}

