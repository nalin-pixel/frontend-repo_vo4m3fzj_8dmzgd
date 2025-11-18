import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/30 to-slate-950/80 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-24 pb-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-white/70 text-xs backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Available for new projects
          </div>

          <h1 className="mt-6 text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.05]">
            Luxury digital experiences for ambitious brands
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-white/70 max-w-2xl">
            We craft premium websites, mobile apps and AI chatbots that stand out. Design-forward, performance obsessed, conversion focused.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#contact" className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-tr from-amber-500 via-rose-500 to-fuchsia-600 px-6 py-3 text-white font-semibold shadow-[0_12px_60px_rgba(236,72,153,0.35)]">
              Start a project
            </a>
            <a href="#work" className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-white/90">
              See our work
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-white/70">
            <div>
              <div className="text-3xl font-semibold text-white">70+</div>
              <div className="text-xs">Projects shipped</div>
            </div>
            <div>
              <div className="text-3xl font-semibold text-white">15%</div>
              <div className="text-xs">Avg. conversion lift</div>
            </div>
            <div>
              <div className="text-3xl font-semibold text-white"><span className="align-middle">⚡</span> 0.9s</div>
              <div className="text-xs">FCP on average</div>
            </div>
            <div>
              <div className="text-3xl font-semibold text-white">24/7</div>
              <div className="text-xs">AI support agents</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
