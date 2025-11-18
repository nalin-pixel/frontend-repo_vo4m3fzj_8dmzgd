import { ArrowRight } from 'lucide-react'

const steps = [
  { title: 'Discover', desc: 'We align on goals, audience and KPIs, then map the product.', time: '1 week' },
  { title: 'Design', desc: 'We craft world-class visuals and motion that feel premium.', time: '2–3 weeks' },
  { title: 'Build', desc: 'We develop pixel-perfect, blazing-fast experiences.', time: '2–4 weeks' },
  { title: 'Launch', desc: 'We test, deploy and iterate for impact.', time: 'ongoing' },
]

export default function Process() {
  return (
    <section id="process" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-white/70 text-xs">How we work</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-white tracking-tight">A refined, outcome-driven process</h2>
        </div>

        <div className="mt-12 grid md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={s.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <div className="text-white/60 text-sm">Step {i+1}</div>
                <div className="text-white/60 text-sm">{s.time}</div>
              </div>
              <div className="mt-3 text-white font-semibold text-lg">{s.title}</div>
              <p className="mt-2 text-white/70 text-sm leading-relaxed">{s.desc}</p>
              <div className="mt-4 inline-flex items-center gap-2 text-amber-300/90 text-sm">
                Learn more <ArrowRight size={16} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
