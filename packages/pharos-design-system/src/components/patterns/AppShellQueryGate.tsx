// components/patterns/AppShellQueryGate.tsx
'use client';

import * as React from 'react';
import { useSearchParams } from 'next/navigation';
import { AppShell } from './AppShell';
import { type Tab } from '@/constants/nav';

export function AppShellQueryGate({
  children,
  active = 'Dashboard',
}: {
  children?: React.ReactNode;
  active?: Tab;
}) {
  const sp = useSearchParams();
  const showBottomNav = sp.get('auth') === '1'; // demo toggle (?auth=1)
  return (
    <AppShell active={active} showBottomNav={showBottomNav}>
      {children}
    </AppShell>
  );
}
