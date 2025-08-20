'use client'
import { useSearchParams } from 'next/navigation'

export function AuthGate({ children }: { children: (authed: boolean) => React.ReactNode }) {
  const sp = useSearchParams()
  const authed = sp.get('auth') === '1'
  return <>{children(authed)}</>
}
