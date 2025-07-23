// interfaces/index.ts

import { ButtonHTMLAttributes } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'small' | 'medium' | 'large'
  shape?: 'rounded-sm' | 'rounded-md' | 'rounded-full'
  className?: string
}


//define CardProps interface
export interface CardProps{
    title: string
    content: string
}

export interface PostModalProps{
  open: boolean
  onClose: () => void
  onSubmit: (data: { title: string; content: string }) => void
}

export interface PostProps{
    title: string
    content: string
    userId: number
}