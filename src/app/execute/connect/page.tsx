import { AppShellQueryGate } from '@/components/patterns/AppShellQueryGate'
import { PharosButton } from '@/components/pharos/Button'
import { PharosIcon } from '@/components/pharos/Icon'
import { Shield } from 'lucide-react'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default function ConnectWalletPage() {
  return (
    <AppShellQueryGate active="Advisor">
      <div data-testid="page-execute-connect" className="pt-6">
        {/* Header */}
        <h4 className="text-[20px] leading-[32px] font-semibold mb-8">Execute Navigation</h4>

        {/* Connect Wallet Section */}
        <section className="mb-8">
          <h5 className="text-[18px] leading-[28px] font-medium mb-6">Connect Your Wallet</h5>
          
          {/* Info Card */}
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <PharosIcon icon={Shield} size={24} className="text-blue-600" />
              </div>
              <div>
                <h6 className="font-medium text-blue-900 mb-2">Secure Connection</h6>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-sm text-blue-700">Your private keys never leave your device</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-sm text-blue-700">Read-only access to view balances</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-sm text-blue-700">Explicit approval for all transactions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Big Buttons */}
          <div className="space-y-4">
            <PharosButton className="w-full py-4 text-lg">
              Connect Wallet
            </PharosButton>
            <PharosButton variant="secondary" className="w-full py-4 text-lg">
              Continue Simulation Mode
            </PharosButton>
          </div>
        </section>

        {/* Additional Info */}
        <section>
          <div className="bg-slate-50 rounded-2xl p-6">
            <h6 className="font-medium text-slate-900 mb-2">Supported Wallets</h6>
            <p className="text-sm text-slate-600">
              MetaMask, WalletConnect, Coinbase Wallet, and other Web3 wallets are supported.
            </p>
          </div>
        </section>
      </div>
    </AppShellQueryGate>
  )
}
