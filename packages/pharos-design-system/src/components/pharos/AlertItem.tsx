import React from 'react';
import { cn } from '../../lib/utils';
import { Bell, Triangle, AlertCircle } from 'lucide-react';
import { StatusChip } from './Badge';

type AlertSeverity = 'low' | 'medium' | 'high';

interface AlertItemProps {
  title: string;
  detail: string;
  time: string;
  severity: AlertSeverity;
  className?: string;
  onDismiss?: () => void;
  actionable?: boolean;
}

export function AlertItem({ 
  title, 
  detail, 
  time, 
  severity, 
  className,
  onDismiss,
  actionable = false
}: AlertItemProps) {
  const severityConfig = {
    low: {
      icon: <Bell className="h-4 w-4 text-slate-500" />,
      tone: 'neutral' as const,
      borderColor: 'border-slate-200'
    },
    medium: {
      icon: <AlertCircle className="h-4 w-4 text-amber-600" />,
      tone: 'warning' as const,
      borderColor: 'border-amber-200'
    },
    high: {
      icon: <Triangle className="h-4 w-4 text-red-600" />,
      tone: 'error' as const,
      borderColor: 'border-red-200'
    }
  };
  
  const config = severityConfig[severity];
  
  return (
    <div className={cn(
      'flex items-start justify-between rounded-xl border p-4',
      'transition-all duration-200 hover:shadow-sm',
      config.borderColor,
      actionable && 'cursor-pointer hover:bg-slate-50',
      className
    )}>
      <div className="flex items-start gap-3 flex-1">
        <div className="mt-0.5 flex-shrink-0">
          {config.icon}
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="text-sm font-medium text-slate-900 mb-1">
            {title}
          </div>
          <div className="text-sm text-slate-600 mb-2">
            {detail}
          </div>
          <div className="text-xs text-slate-500">
            {time}
          </div>
        </div>
      </div>
      
      <div className="flex items-center gap-2 ml-4">
        <StatusChip tone={config.tone} size="sm">
          {severity[0].toUpperCase() + severity.slice(1)}
        </StatusChip>
        
        {onDismiss && (
          <button
            onClick={onDismiss}
            className="text-slate-400 hover:text-slate-600 transition-colors"
            aria-label="Dismiss alert"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}

// Alert list container
export function AlertList({ 
  children, 
  className,
  emptyMessage = "No alerts to display"
}: { 
  children: React.ReactNode; 
  className?: string;
  emptyMessage?: string;
}) {
  return (
    <div className={cn('space-y-3', className)}>
      {React.Children.count(children) > 0 ? (
        children
      ) : (
        <div className="text-center py-8 text-slate-500">
          <Bell className="h-8 w-8 mx-auto mb-2 text-slate-300" />
          <p className="text-sm">{emptyMessage}</p>
        </div>
      )}
    </div>
  );
}

// Alert with action button
export function ActionableAlert({ 
  title, 
  detail, 
  time, 
  severity, 
  actionLabel,
  onAction,
  ...props 
}: AlertItemProps & { 
  actionLabel: string; 
  onAction: () => void;
}) {
  return (
    <div className="rounded-xl border border-slate-200 p-4 bg-white">
      <div className="flex items-start gap-3 mb-4">
        <div className="mt-0.5">
          {          severity === 'high' ? (
            <Triangle className="h-4 w-4 text-red-600" />
          ) : severity === 'medium' ? (
            <AlertCircle className="h-4 w-4 text-amber-600" />
          ) : (
            <Bell className="h-4 w-4 text-slate-500" />
          )}
        </div>
        
        <div className="flex-1">
          <div className="text-sm font-medium text-slate-900 mb-1">
            {title}
          </div>
          <div className="text-sm text-slate-600 mb-2">
            {detail}
          </div>
          <div className="text-xs text-slate-500">
            {time}
          </div>
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <StatusChip tone={severity === 'high' ? 'error' : severity === 'medium' ? 'warning' : 'neutral'}>
          {severity[0].toUpperCase() + severity.slice(1)}
        </StatusChip>
        
        <button
          onClick={onAction}
          className="px-4 py-2 bg-pharos-brand text-white text-sm font-medium rounded-xl hover:brightness-95 transition-all duration-200"
        >
          {actionLabel}
        </button>
      </div>
    </div>
  );
}
