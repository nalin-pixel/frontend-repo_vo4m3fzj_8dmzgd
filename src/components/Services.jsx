import { Smartphone, Bot, Globe2, Sparkles, Rocket, ShieldCheck } from 'lucide-react'

const items = [
  {
    icon: Globe2,
    title: 'Websites',
    desc: 'High-performance marketing sites, SaaS dashboards and headless storefronts built with modern stacks.',
    badge: 'Conversion-first'
  },
  {
    icon: Smartphone,
    title: 'Apps',
    desc: 'iOS/Android apps and PWAs with buttery-smooth UX, offline-first architecture and robust APIs.',
    badge: 'Native + Web'
  },
  {
    icon: Bot,
    title: 'Chatbots',
    desc: 'On-brand AI assistants that automate support, boost sales and integrate with your tools.',
    badge: 'LLM-powered'
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_10%_10%,rgba(236,72,153,0.08),transparent),radial-gradient(800px_400px_at_90%_10%,rgba(245,158,11,0.08),transparent)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-white/70 text-xs">What we do</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-white tracking-tight">Design, build and scale</h2>
          <p className="mt-3 text-white/70">From concept to launch. We partner as your end-to-end product team and deliver outcomes, not handoffs.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-2xl">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-fuchsia-600 flex items-center justify-center text-white shadow-[0_8px_30px_rgba(236,72,153,0.35)]">
                  <item.icon size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold">{item.title}</h3>
                  <div className="text-xs text-white/70">{item.badge}</div>
                </div>
              </div>
              <p className="mt-4 text-sm text-white/70 leading-relaxed">{item.desc}</p>
              <div className="mt-6 flex items-center gap-3 text-xs text-white/60">
                <Sparkles size={16} /> Premium animations
                <ShieldCheck size={16} /> Secure
                <Rocket size={16} /> Fast
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
