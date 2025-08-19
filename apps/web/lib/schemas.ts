import { z } from 'zod'

export const PositionDraftSchema = z.object({
  baseAsset: z.string().min(1),
  quoteAsset: z.string().min(1),
  amount: z.number().positive()
})
export type PositionDraft = z.infer<typeof PositionDraftSchema>

export const RecommendationSchema = z.object({
  id: z.string(),
  label: z.string(),
  expectedAPR: z.number(),     // %
  riskLevel: z.enum(['low','med','high'])
})
export type Recommendation = z.infer<typeof RecommendationSchema>
