import * as React from 'react'

export function Metric({ label, value, hint }: { label: string; value: string; hint?: string }) {
  return (
    <div className="rounded-xl border border-slate-200 p-3">
      <div className="text-sm text-slate-500">{label}</div>
      <div className="text-2xl font-semibold mt-1">{value}</div>
      {hint && <div className="text-xs text-slate-500 mt-1">{hint}</div>}
    </div>
  )
}

// Metric grid for displaying multiple metrics
export function MetricGrid({ 
  children, 
  className,
  columns = 3 
}: { 
  children: React.ReactNode; 
  className?: string;
  columns?: 1 | 2 | 3 | 4;
}) {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  };
  
  return (
    <div className={cn(
      'grid gap-4',
      gridCols[columns],
      className
    )}>
      {children}
    </div>
  );
}

// Specialized metric variants
export const PerformanceMetric = ({ 
  label, 
  value, 
  change, 
  period = '30d',
  ...props 
}: Omit<MetricProps, 'trend' | 'trendValue'> & { 
  change: number; 
  period?: string;
}) => {
  const trend = change > 0 ? 'up' : change < 0 ? 'down' : 'neutral';
  const trendValue = `${change > 0 ? '+' : ''}${change.toFixed(1)}% ${period}`;
  
  return (
    <Metric
      label={label}
      value={value}
      trend={trend}
      trendValue={trendValue}
      {...props}
    />
  );
};

export const CurrencyMetric = ({ 
  label, 
  value, 
  currency = 'USD',
  ...props 
}: Omit<MetricProps, 'value'> & { 
  value: number; 
  currency?: string;
}) => {
  const formattedValue = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  }).format(value);
  
  return (
    <Metric
      label={label}
      value={formattedValue}
      {...props}
    />
  );
};
