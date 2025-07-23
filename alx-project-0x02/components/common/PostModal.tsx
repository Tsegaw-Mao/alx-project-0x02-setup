import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useState } from 'react'
import { type PostModalProps } from '@/interfaces'

export default function PostModal({ open, onClose, onSubmit }: PostModalProps) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleFormSubmit = () => {
    if (!title.trim() || !content.trim()) return
    onSubmit({ title, content })
    setTitle('')
    setContent('')
    onClose()
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create New Post</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleFormSubmit} className="space-y-4">
          <Input
            placeholder="Post Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <Textarea
            placeholder="Post Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
          <div className="flex justify-end gap-2">
            <Button type="button" variant="outline" onClick={onClose} className='bg-red-500 text-white border-white hover:scale-110'>
              Cancel
            </Button>
            <Button type="submit" className='bg-green-500 text-white hover:scale-110 border-white'>Submit</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}