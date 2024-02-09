import * as Dialog from '@radix-ui/react-dialog'
import React from 'react'

type NoteCardProps = {
  note: {
    date: Date
    content: string
  }
}

export function NotesCard({ note }: NoteCardProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="rounded-md text-left flex flex-col gap-3 bg-slate-800 p-5 overflow-hidden outline-none relative hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400">
        <span className="text-sm font-medium text-slate-300">
          {note.date.toISOString()}
        </span>
        <p className="text-sm leading-6 text-slate-400">{note.content}</p>
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="inset-0 fixed bg-black/60" />
        <Dialog.Content className="z-10 bg-yellow-100 absolute">
          oi
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
