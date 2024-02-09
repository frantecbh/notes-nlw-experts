import logo from './assets/logo-nlw-expert.svg'
import { NoteNoteCard } from './components/new-note-card'
import { NotesCard } from './components/note-card'

const note = {
  date: new Date(),
  content: 'Hello world',
}

export function App() {
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
          />
        </form>
        <div className="h-px bg-slate-700" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[250px] gap-6 px-4">
        <NoteNoteCard />

        <NotesCard note={note} />
      </div>
    </div>
  )
}
