'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAppStore } from '@/lib/store'
import ConnectDialog from './ConnectDialog'

export default function ConnectWalletPanel() {
  const router = useRouter()
  const isConnected = useAppStore((s) => s.isConnected)
  const [showDialog, setShowDialog] = useState(false)

  if (isConnected) {
    return (
      <div className="px-4" data-testid="screen-connect">
        <h1 className="text-[20px] leading-[32px] font-semibold">Wallet Connected</h1>
        <div className="ph-spacer-16" aria-hidden />
        <p className="text-sm text-slate-700">Your wallet is already connected.</p>
        <div className="ph-spacer-24" aria-hidden />
        <button className="h-10 px-4 rounded-xl border" onClick={() => router.push('/recommendations/complete')}>
          Continue
        </button>
      </div>
    )
  }

  return (
    <div className="px-4" data-testid="screen-connect">
      <h1 className="text-[20px] leading-[32px] font-semibold">Connect Wallet</h1>
      <div className="ph-spacer-16" aria-hidden />
      <p className="text-sm text-slate-700">Connect your wallet to execute strategies.</p>
      <div className="ph-spacer-24" aria-hidden />
      <button 
        className="h-10 px-4 rounded-xl border"
        onClick={() => setShowDialog(true)}
        data-testid="open-connect-dialog"
      >
        Connect Wallet
      </button>
      
      <ConnectDialog 
        isOpen={showDialog} 
        onClose={() => setShowDialog(false)} 
      />
    </div>
  )
}
