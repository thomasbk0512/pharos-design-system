'use client';

import * as React from 'react';
import { PharosButton } from '@/components/pharos/Button';
import { PharosIcon } from '@/components/pharos/Icon';
import { LayoutDashboard, TrendingUp, Lightbulb, Zap } from '@/components/pharos/icons';
import { type Tab } from '@/constants/nav';

const NAV: Array<{ label: Tab; icon: any }> = [
  { label: 'Dashboard', icon: LayoutDashboard },
  { label: 'Simulator', icon: TrendingUp },
  { label: 'Insights',  icon: Lightbulb },
  { label: 'Advisor',   icon: Zap },
];

export function AppShell({
  children,
  active = 'Dashboard',
  showBottomNav = false, // <-- optional override, defaults to false
}: {
  children?: React.ReactNode;
  active?: Tab;
  showBottomNav?: boolean;
}) {

  return (
    <div data-testid="app-shell" className="min-h-screen bg-white text-slate-900">
      {/* Header 64px */}
      <header
        data-testid="app-shell-header"
        className="h-16 sticky top-0 z-30 border-b border-slate-200 bg-white shadow-pharos-sm"
      >
        <div className="h-full max-w-screen-sm mx-auto px-4 flex items-center justify-between">
          <div className="text-sm font-medium text-slate-700">PHAROS</div>
          <div className="flex items-center gap-3">
            <PharosButton variant="secondary">Secondary</PharosButton>
            <PharosButton>Primary</PharosButton>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main data-testid="app-shell-main" className="max-w-screen-sm mx-auto px-4">
        {children}
      </main>

      {/* Sticky bottom menu (auth-only) — EXACT 104px */}
      {showBottomNav && (
        <nav
          data-testid="app-bottom-nav"
          className="sticky bottom-0 z-30 border-t border-slate-200 bg-white ph-bottom-nav-safe"
          style={{ height: '104px' }}
          aria-label="Primary destinations"
        >
          <div className="max-w-screen-sm mx-auto px-4 h-full grid grid-cols-4">
            {NAV.map(({ label, icon }) => {
              const isActive = label === active;
              return (
                <button
                  key={label}
                  type="button"
                  className="flex flex-col items-center justify-center gap-3 focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span className={isActive ? 'text-brand' : 'text-slate-900'}>
                    <PharosIcon icon={icon} size={32} strokeWidth={2} aria-hidden />
                  </span>
                  <span
                    className={`text-[20px] leading-[32px] font-semibold ${
                      isActive ? 'text-brand' : 'text-slate-900'
                    }`}
                  >
                    {label}
                  </span>
                </button>
              );
            })}
          </div>
        </nav>
      )}
    </div>
  );
}

export function BottomCta({
  primary,
  secondary,
}: {
  primary?: React.ReactNode;
  secondary?: React.ReactNode;
}) {
  return (
    <section
      data-testid="bottom-cta"
      className="sticky bottom-0 z-30 bg-white border-t border-slate-200"
    >
      <div className="max-w-screen-sm mx-auto px-4 pt-4 pb-[calc(16px+env(safe-area-inset-bottom))] grid gap-3">
        {primary}
        {secondary}
      </div>
    </section>
  );
}
