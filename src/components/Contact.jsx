import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())
    try {
      setStatus('Sending...')
      // Placeholder - would post to backend/email service
      await new Promise((r) => setTimeout(r, 800))
      setStatus('Sent! Well get back within 24h.')
      e.currentTarget.reset()
    } catch (e) {
      setStatus('Something went wrong. Please try again.')
    }
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-white/70 text-xs">Get in touch</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-white tracking-tight">Tell us about your project</h2>
          <p className="mt-3 text-white/70">Share a few details and well set up a discovery call.</p>
        </div>

        <form onSubmit={submit} className="mt-10 grid md:grid-cols-2 gap-6">
          <input name="name" required placeholder="Your name" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white/90 placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-rose-400/40" />
          <input name="email" type="email" required placeholder="Email" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white/90 placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-rose-400/40" />
          <input name="company" placeholder="Company" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white/90 placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-rose-400/40" />
          <input name="budget" placeholder="Estimated budget" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white/90 placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-rose-400/40" />
          <textarea name="details" required placeholder="What are you building?" rows="5" className="md:col-span-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white/90 placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-rose-400/40" />
          <div className="md:col-span-2 flex items-center gap-4">
            <button type="submit" className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-tr from-amber-500 via-rose-500 to-fuchsia-600 px-6 py-3 text-white font-semibold shadow-[0_12px_60px_rgba(236,72,153,0.35)]">
              Send request
            </button>
            <span className="text-sm text-white/70">{status}</span>
          </div>
        </form>
      </div>
    </section>
  )
}
