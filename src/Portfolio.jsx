// ─── Portfolio.jsx ────────────────────────────────────────────────────────
// Root component — imports everything and puts it together

import useReveal from './hooks/useReveal'

import Cursor   from './components/Cursor'
import Nav      from './components/Nav'
import Hero     from './components/Hero'
import Marquee  from './components/Marquee'
import About    from './components/About'
import Skills   from './components/Skills'
import Projects from './components/Projects'
import Contact  from './components/Contact'
import Footer   from './components/Footer'

export default function Portfolio() {
  useReveal() // activates scroll reveal for all .reveal elements

  return (
    <>
      <Cursor />
      <Nav />

      <main>
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  )
}