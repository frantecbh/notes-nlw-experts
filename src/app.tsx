import { ChangeEvent, useState } from 'react'
import logo from './assets/logo-nlw-expert.svg'
import { NoteNoteCard } from './components/new-note-card'
import { NotesCard } from './components/note-card'

interface Note {
  id: string
  date: Date
  content: string
}

export function App() {
  const [search, setSearch] = useState('')
  const [notes, setNotes] = useState<Note[]>(() => {
    const notOnStorage = localStorage.getItem('notes')

    if (notOnStorage) {
      return JSON.parse(notOnStorage)
    }
    return []
  })

  const onNoteCreate = (content: string) => {
    const newNote = {
      id: crypto.randomUUID(),
      date: new Date(),
      content,
    }

    const notesArray = [newNote, ...notes]

    setNotes(notesArray)

    localStorage.setItem('notes', JSON.stringify(notesArray))
  }

  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    const query = event.target.value

    setSearch(query)
  }

  const filterNotes =
    search !== ''
      ? notes.filter((note) =>
          note.content.toLocaleLowerCase().includes(search.toLocaleLowerCase()),
        )
      : notes

  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6">
      <div className="space-y-6 mx-4">
        <img src={logo} alt="Nlw expert" />
        <form className="w-full">
          {' '}
          <input
            className="w-full bg-transparent text-3xl font-semibold tracking-tight placeholder:text-slate-500 outline-none"
            type="text"
            placeholder="Busque por suas notas"
            onChange={handleSearch}
          />
        </form>
        <div className="h-px bg-slate-700" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[250px] gap-6 px-4">
        <NoteNoteCard onNoteCreate={onNoteCreate} />

        {filterNotes.map((note) => (
          <NotesCard key={note.id} note={note} />
        ))}
      </div>
    </div>
  )
}
