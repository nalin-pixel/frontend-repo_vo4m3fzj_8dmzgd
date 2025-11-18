import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#services', label: 'Services' },
    { href: '#work', label: 'Work' },
    { href: '#process', label: 'Process' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl rounded-2xl px-5 py-3 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-amber-400 to-rose-500 shadow-[0_0_40px_rgba(251,191,36,0.35)]" />
            <span className="text-white/90 font-semibold tracking-tight">Your Studio</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-white/70 hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-fuchsia-600 px-4 py-2 text-sm font-medium text-white shadow-[0_8px_30px_rgba(236,72,153,0.35)]">
              Start a Project
            </a>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden text-white/90" aria-label="Toggle menu">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-3 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-4">
            <nav className="flex flex-col gap-3">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm text-white/80">
                  {l.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="inline-flex items-center justify-center rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-fuchsia-600 px-4 py-2 text-sm font-medium text-white">
                Start a Project
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
