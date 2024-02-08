import logo from './assets/logo-nlw-expert.svg'
import { NoteNoteCard } from './components/new-note-card'
import { NotesCard } from './components/note-card'

export function App() {
  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6">
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
      <div className="grid grid-cols-3 auto-rows-[250px] gap-6">
        <NoteNoteCard />

        <NotesCard />
      </div>
    </div>
  )
}
