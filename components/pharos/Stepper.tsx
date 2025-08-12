import * as React from 'react'
import { Circle, CircleCheck } from 'lucide-react'

export function Stepper({ step }: { step: 0|1|2|3 }) {
  const items = ['Goal','Composer','Deploy','Monitor']
  return (
    <div className="flex items-center gap-3 border border-slate-200 rounded-2xl p-3 bg-white">
      {items.map((label, i) => {
        const active = step === i
        const done = step > i
        return (
          <div key={label} className="flex items-center">
            <div className={`inline-flex items-center gap-2 border rounded-xl px-2.5 py-1 ${done ? 'bg-green-100 border-green-300' : active ? 'bg-indigo-50 border-indigo-300' : 'bg-white border-slate-300'}`}>
              {done ? <CircleCheck className="h-4 w-4 text-green-600"/> : active ? <Circle className="h-3 w-3 text-indigo-600"/> : <span className="text-[10px] text-slate-500">{i+1}</span>}
              <span className={`text-sm ${active ? 'text-slate-900 font-medium' : 'text-slate-600'}`}>{label}</span>
            </div>
            {i < items.length - 1 && <div className="mx-2 h-5 w-px bg-slate-200" />}
          </div>
        )
      })}
    </div>
  )
}

// Vertical stepper variant
export function VerticalStepper({ 
  step, 
  steps = ['Goal', 'Composer', 'Deploy', 'Monitor'],
  className 
}: Omit<StepperProps, 'onStepClick' | 'clickable'>) {
  return (
    <div className={cn('space-y-4', className)}>
      {steps.map((label, i) => {
        const active = step === i;
        const done = step > i;
        
        return (
          <div key={label} className="flex items-start gap-3">
            <div className={cn(
              'grid place-items-center h-6 w-6 rounded-full border flex-shrink-0 mt-0.5',
              done ? 'bg-green-100 border-green-300' : 
              active ? 'bg-pharos-brand-50 border-pharos-brand' : 
              'bg-white border-slate-300'
            )}>
              {done ? (
                <Check className="h-4 w-4 text-green-600" />
              ) : active ? (
                <Circle className="h-3 w-3 text-pharos-brand" />
              ) : (
                <span className="text-[10px] text-slate-500 font-medium">
                  {i + 1}
                </span>
              )}
            </div>
            
            <div className="flex-1 min-w-0">
              <div className={cn(
                'text-sm font-medium transition-colors duration-200',
                active ? 'text-slate-900' : 'text-slate-500'
              )}>
                {label}
              </div>
              
              {active && (
                <div className="text-xs text-slate-500 mt-1">
                  Current step
                </div>
              )}
            </div>
            
            {i < steps.length - 1 && (
              <div className="ml-3 h-8 w-px bg-slate-200" />
            )}
          </div>
        );
      })}
    </div>
  );
}

// Progress stepper with percentage
export function ProgressStepper({ 
  step, 
  steps = ['Goal', 'Composer', 'Deploy', 'Monitor'],
  className 
}: Omit<StepperProps, 'onStepClick' | 'clickable'>) {
  const progress = ((step + 1) / steps.length) * 100;
  
  return (
    <div className={cn('space-y-4', className)}>
      {/* Progress bar */}
      <div className="w-full bg-slate-200 rounded-full h-2">
        <div 
          className="bg-pharos-brand h-2 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      
      {/* Steps */}
      <div className="flex items-center justify-between">
        {steps.map((label, i) => {
          const active = step === i;
          const done = step > i;
          
          return (
            <div key={label} className="flex flex-col items-center gap-2">
              <div className={cn(
                'grid place-items-center h-8 w-8 rounded-full border transition-all duration-200',
                done ? 'bg-green-100 border-green-300' : 
                active ? 'bg-pharos-brand-50 border-pharos-brand' : 
                'bg-white border-slate-300'
              )}>
                {done ? (
                  <Check className="h-4 w-4 text-green-600" />
                ) : active ? (
                  <Circle className="h-4 w-4 text-pharos-brand" />
                ) : (
                  <span className="text-xs text-slate-500 font-medium">
                    {i + 1}
                  </span>
                )}
              </div>
              
              <span className={cn(
                'text-xs text-center transition-colors duration-200',
                active ? 'text-slate-900 font-medium' : 'text-slate-500'
              )}>
                {label}
              </span>
            </div>
          );
        })}
      </div>
      
      {/* Progress text */}
      <div className="text-center text-sm text-slate-600">
        Step {step + 1} of {steps.length} • {Math.round(progress)}% complete
      </div>
    </div>
  );
}
