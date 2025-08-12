import React from 'react';
import { cn } from '../../lib/utils';
import { PharosButton } from './Button';
import { Settings, Menu, X } from 'lucide-react';

interface HeaderProps {
  className?: string;
  onMenuClick?: () => void;
  showMenuButton?: boolean;
  isMenuOpen?: boolean;
}

export function Header({ 
  className,
  onMenuClick,
  showMenuButton = false,
  isMenuOpen = false
}: HeaderProps) {
  return (
    <header className={cn(
      'sticky top-0 z-10 border-b border-slate-200 bg-white/80 backdrop-blur',
      className
    )}>
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center gap-3">
        {/* Mobile menu button */}
        {showMenuButton && (
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        )}
        
        {/* Logo */}
        <div className="h-8 w-8 rounded-xl grid place-items-center bg-pharos-brand-50 flex-shrink-0">
          <div className="h-4 w-4 rounded-full bg-pharos-brand" />
        </div>
        
        <div className="font-semibold text-slate-900">Pharos</div>
        
        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-6 ml-8">
          <a href="#" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
            Dashboard
          </a>
          <a href="#" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
            Strategies
          </a>
          <a href="#" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
            Analytics
          </a>
          <a href="#" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
            Portfolio
          </a>
        </nav>
        
        {/* Right side actions */}
        <div className="ml-auto flex items-center gap-2">
          <PharosButton variant="ghost" className="hidden sm:flex px-3 py-2 text-sm">
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </PharosButton>
          <PharosButton className="px-3 py-2 text-sm">Connect wallet</PharosButton>
        </div>
      </div>
    </header>
  );
}

interface PageProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl';
}

export function Page({ 
  children, 
  className,
  maxWidth = '7xl'
}: PageProps) {
  const maxWidthClasses = {
    'sm': 'max-w-sm',
    'md': 'max-w-md',
    'lg': 'max-w-lg',
    'xl': 'max-w-xl',
    '2xl': 'max-w-2xl',
    '3xl': 'max-w-3xl',
    '4xl': 'max-w-4xl',
    '5xl': 'max-w-5xl',
    '6xl': 'max-w-6xl',
    '7xl': 'max-w-7xl'
  };
  
  return (
    <main className={cn(
      'mx-auto px-4 py-6 space-y-6',
      maxWidthClasses[maxWidth],
      className
    )}>
      {children}
    </main>
  );
}

// Page header component
export function PageHeader({ 
  title, 
  subtitle,
  children,
  className 
}: { 
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('flex items-start justify-between', className)}>
      <div>
        <h1 className="text-3xl font-bold text-slate-900">{title}</h1>
        {subtitle && (
          <p className="text-lg text-slate-600 mt-2">{subtitle}</p>
        )}
      </div>
      {children && (
        <div className="flex items-center gap-3">
          {children}
        </div>
      )}
    </div>
  );
}

// Page section component
export function PageSection({ 
  title, 
  children,
  className 
}: { 
  title?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn('space-y-4', className)}>
      {title && (
        <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
      )}
      {children}
    </section>
  );
}

// Sidebar layout component
export function SidebarLayout({ 
  sidebar, 
  children,
  className 
}: { 
  sidebar: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('flex min-h-screen', className)}>
      {/* Sidebar */}
      <aside className="w-64 border-r border-slate-200 bg-white hidden lg:block">
        <div className="sticky top-0 h-screen overflow-y-auto">
          {sidebar}
        </div>
      </aside>
      
      {/* Main content */}
      <main className="flex-1 min-w-0">
        {children}
      </main>
    </div>
  );
}

// Mobile sidebar overlay
export function MobileSidebar({ 
  isOpen, 
  onClose, 
  children,
  className 
}: { 
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}) {
  if (!isOpen) return null;
  
  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/20 z-40 lg:hidden"
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <aside className={cn(
        'fixed left-0 top-0 h-full w-64 bg-white border-r border-slate-200 z-50 lg:hidden',
        'transform transition-transform duration-200 ease-in-out',
        isOpen ? 'translate-x-0' : '-translate-x-full',
        className
      )}>
        <div className="flex items-center justify-between p-4 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <div className="h-6 w-6 rounded-lg grid place-items-center bg-pharos-brand-50">
              <div className="h-3 w-3 rounded-full bg-pharos-brand" />
            </div>
            <span className="font-semibold text-slate-900">Pharos</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <div className="p-4">
          {children}
        </div>
      </aside>
    </>
  );
}
