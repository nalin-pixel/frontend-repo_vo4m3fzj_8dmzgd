export default function Footer() {
  const links = [
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <footer className="relative pt-16 pb-10">
      <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_50%_0%,rgba(236,72,153,0.15),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-amber-400 to-rose-500 shadow-[0_0_40px_rgba(251,191,36,0.35)]" />
            <div>
              <div className="text-white/90 font-semibold">Your Studio</div>
              <div className="text-white/50 text-xs">Websites • Apps • Chatbots</div>
            </div>
          </div>

          <nav className="flex items-center gap-6">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-white/70 hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/50 text-sm">
          <p>© {new Date().getFullYear()} Your Studio. All rights reserved.</p>
          <p className="text-white/40">Crafted with love and performance.</p>
        </div>
      </div>
    </footer>
  )
}
