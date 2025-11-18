export default function Showcase() {
  const projects = [
    {
      name: 'Aurora Commerce',
      tag: 'Headless Storefront',
      img: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop'
    },
    {
      name: 'NeuralCare',
      tag: 'AI Health Assistant',
      img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop'
    },
    {
      name: 'Flux OS',
      tag: 'SaaS Dashboard',
      img: 'https://images.unsplash.com/photo-1551281044-8d8d0d8d8d8d?q=80&w=1200&auto=format&fit=crop'
    },
  ]

  return (
    <section id="work" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-white/70 text-xs">Selected work</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-white tracking-tight">Results were proud of</h2>
          <p className="mt-3 text-white/70">A glimpse at recent launches. Each tailored to brand, audience and business goals.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.name} className="group rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={p.img} alt={p.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <div className="text-xs text-white/60">{p.tag}</div>
                <div className="text-white font-semibold text-lg">{p.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
