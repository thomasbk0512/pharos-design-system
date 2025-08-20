'use client'

import * as React from 'react'
import { AppShell } from '@pharos/design-system'

type Props = {
  active?: 'Dashboard' | 'Position' | 'Recommendations' | 'Execute' | 'Trial'
  initialAuthed?: boolean
  children: React.ReactNode
}

/**
 * Accepts initialAuthed from server and re-checks with URLSearchParams on mount.
 * This avoids Suspense issues while maintaining zero-flicker auth state.
 */
export default function ClientShell({ active, initialAuthed = false, children }: Props) {
  const [authed, setAuthed] = React.useState(initialAuthed)
  
  React.useEffect(() => {
    // Re-check auth state on mount to ensure consistency
    const urlParams = new URLSearchParams(window.location.search)
    setAuthed(urlParams.get('auth') === '1')
  }, [])

  return (
    <AppShell active={active} showBottomNav={authed}>
      {children}
    </AppShell>
  )
}
