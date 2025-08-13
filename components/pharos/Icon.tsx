'use client'
import * as React from 'react'
import type { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

type PharosIconSize = 16 | 20 | 24

export interface PharosIconProps {
  icon: LucideIcon
  size?: PharosIconSize
  strokeWidth?: 1 | 1.5 | 2
  className?: string
  // Optional aria-label if the icon is standalone (not purely decorative)
  'aria-label'?: string
  // If decorative, set aria-hidden to true (default false)
  'aria-hidden'?: boolean
}

export function PharosIcon({
  icon: Icon,
  size = 20,
  strokeWidth = 1.5,
  className,
  'aria-hidden': ariaHidden,
  ...rest
}: PharosIconProps) {
  return (
    <Icon
      className={cn('inline-block align-middle text-current', className)}
      // lucide uses pixel size; we restrict to 16/20/24 only
      size={size}
      strokeWidth={strokeWidth}
      aria-hidden={ariaHidden}
      focusable={ariaHidden ? false : undefined}
      {...rest}
    />
  )
}
