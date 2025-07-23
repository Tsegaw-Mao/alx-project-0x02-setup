'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { type ButtonProps } from '@/interfaces'

const sizeClasses: Record<NonNullable<ButtonProps['size']>, string> = {
  small: 'px-3 py-1 text-sm',
  medium: 'px-4 py-2 text-base',
  large: 'px-6 py-3 text-lg',
}

const Button: React.FC<ButtonProps> = ({
  size = 'medium',
  shape = 'rounded-md',
  className,
  children,
  ...props
}) => {
  return (
    <button
      className={cn(
        'bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50',
        sizeClasses[size],
        shape,
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
