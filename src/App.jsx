import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Showcase from './components/Showcase'
import Process from './components/Process'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white relative">
      {/* background accents */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(1000px_400px_at_10%_-10%,rgba(236,72,153,0.15),transparent),radial-gradient(1000px_400px_at_90%_-10%,rgba(245,158,11,0.12),transparent)]" />

      <Navbar />
      <main>
        <Hero />
        <Services />
        <Showcase />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
