'use client'

import * as React from 'react'
import { useAppStore } from '@/lib/store'

type Props = {
  isOpen: boolean
  onClose: () => void
}

export default function ConnectDialog({ isOpen, onClose }: Props) {
  const setConnected = useAppStore((s) => s.setConnected)

  const handleConnect = () => {
    setConnected(true)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-2xl p-6 max-w-sm w-full mx-4">
        <h2 className="text-xl font-semibold mb-4">Connect Wallet</h2>
        <p className="text-sm text-slate-600 mb-6">
          Connect your wallet to execute strategies and manage positions.
        </p>
        <div className="flex gap-3">
          <button
            className="flex-1 h-10 px-4 rounded-xl bg-blue-600 text-white font-medium"
            onClick={handleConnect}
          >
            Connect
          </button>
          <button
            className="flex-1 h-10 px-4 rounded-xl border border-slate-200"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}
