'use client'
import * as React from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { PositionDraftSchema, PositionDraft } from '@/lib/schemas'
import { useAppStore } from '@/lib/store'

export default function SetupForm() {
  const router = useRouter()
  const setDraft = useAppStore((s) => s.setDraft)
  const { register, handleSubmit, formState: { errors } } = useForm<PositionDraft>({
    resolver: zodResolver(PositionDraftSchema),
    defaultValues: { baseAsset: '', quoteAsset: '', amount: 0 }
  })

  const onSubmit = (data: PositionDraft) => {
    setDraft({ ...data, amount: Number(data.amount) })
    router.push('/position/performance')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto px-4 ph-spacer-24" data-testid="screen-position-setup">
      <div className="flex items-center gap-4 mb-8" data-testid="vr-header-row">
        <button data-testid="vr-back-button" className="p-2 rounded-xl border border-slate-200" aria-label="Back" type="button" />
        <h4 data-testid="vr-h4" className="text-[20px] leading-[32px] font-semibold">Position Setup</h4>
      </div>

      <h5 className="text-[18px] leading-[28px] font-medium mb-6">Select Your Trading Pair</h5>

      <div className="ph-stack-label">
        <label className="block text-sm font-medium text-slate-700">Base Asset</label>
        <input className="h-10 w-full rounded-xl border border-slate-200 px-3" {...register('baseAsset')} />
        {errors.baseAsset && <p className="text-xs text-red-600 mt-1">{errors.baseAsset.message}</p>}
      </div>

      <div className="ph-spacer-16" aria-hidden />

      <div className="ph-stack-label">
        <label className="block text-sm font-medium text-slate-700">Quote Asset</label>
        <input className="h-10 w-full rounded-xl border border-slate-200 px-3" {...register('quoteAsset')} />
        {errors.quoteAsset && <p className="text-xs text-red-600 mt-1">{errors.quoteAsset.message}</p>}
      </div>

      <div className="ph-spacer-24" aria-hidden />

      <h5 className="text-[18px] leading-[28px] font-medium mb-6">Capital Deployment</h5>
      <div className="ph-stack-label">
        <label className="block text-sm font-medium text-slate-700">Investment Amount</label>
        <input type="number" className="h-10 w-full rounded-xl border border-slate-200 px-3" {...register('amount', { valueAsNumber: true })} />
        {errors.amount && <p className="text-xs text-red-600 mt-1">{errors.amount.message}</p>}
      </div>

      <div className="ph-spacer-24" aria-hidden />
      <button className="h-10 px-4 rounded-xl border border-slate-200" type="submit">Continue</button>
    </form>
  )
}
