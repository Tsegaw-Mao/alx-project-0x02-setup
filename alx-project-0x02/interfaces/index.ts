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