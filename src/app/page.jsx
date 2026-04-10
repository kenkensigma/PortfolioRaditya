import Navbar        from '@/components/Navbar'
import Hero          from '@/components/Hero'
import About         from '@/components/About'
import Skills        from '@/components/Skills'
import Projects      from '@/components/Projects'
import Workflow      from '@/components/Workflow'
import FAQ           from '@/components/FAQ'
import Contact       from '@/components/Contact'
import Footer        from '@/components/Footer'
import ClientEffects from '@/components/ClientEffects'

export default function Home() {
  return (
    <>
      {/* Custom cursor */}
      <div className="cursor-glow"   id="cursorGlow" />
      <div className="cursor-dot"    id="cursorDot"  />
      <div className="noise-overlay" />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Workflow />
        <FAQ />
        <Contact />
      </main>

      <Footer />
      <ClientEffects />
    </>
  )
}
