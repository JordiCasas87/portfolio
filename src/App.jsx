import { useEffect, useState } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Other from './components/Other'
import Contact from './components/Contact'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('hero')
  const [reducedEffects, setReducedEffects] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const mobileQuery = window.matchMedia('(max-width: 768px), (pointer: coarse)')
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

    const updateReducedEffects = () => {
      setReducedEffects(mobileQuery.matches || reducedMotionQuery.matches)
      setReducedMotion(reducedMotionQuery.matches)
    }

    updateReducedEffects()
    mobileQuery.addEventListener('change', updateReducedEffects)
    reducedMotionQuery.addEventListener('change', updateReducedEffects)

    return () => {
      mobileQuery.removeEventListener('change', updateReducedEffects)
      reducedMotionQuery.removeEventListener('change', updateReducedEffects)
    }
  }, [])

  useEffect(() => {
    if (reducedEffects) {
      const root = document.documentElement
      root.style.setProperty('--scroll-progress', '0')
      root.style.setProperty('--scroll-y', '0px')
      return
    }

    const root = document.documentElement
    const handleScroll = () => {
      const maxScroll = Math.max(document.body.scrollHeight - window.innerHeight, 1)
      const progress = window.scrollY / maxScroll
      root.style.setProperty('--scroll-progress', progress.toFixed(4))
      root.style.setProperty('--scroll-y', `${window.scrollY}px`)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [reducedEffects])

  useEffect(() => {
    if (reducedMotion) {
      document
        .querySelectorAll('.scroll-reveal')
        .forEach((element) => element.classList.add('is-visible'))
      return
    }

    const revealElements = document.querySelectorAll('.scroll-reveal')
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle('is-visible', entry.isIntersecting)
        })
      },
      {
        threshold: reducedEffects ? 0.08 : 0.18,
        rootMargin: reducedEffects ? '0px 0px -6% 0px' : '0px 0px -12% 0px',
      },
    )

    revealElements.forEach((element) => revealObserver.observe(element))

    return () => {
      revealObserver.disconnect()
    }
  }, [reducedEffects, reducedMotion])

  useEffect(() => {
    if (reducedEffects) {
      setActiveSection('hero')
      return
    }

    const sections = document.querySelectorAll('[data-section]')
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visibleEntries.length > 0) {
          setActiveSection(visibleEntries[0].target.getAttribute('data-section') || 'hero')
        }
      },
      {
        threshold: [0.2, 0.35, 0.55, 0.75],
        rootMargin: '-18% 0px -28% 0px',
      },
    )

    sections.forEach((section) => sectionObserver.observe(section))

    return () => {
      sectionObserver.disconnect()
    }
  }, [reducedEffects])

  return (
    <div
      className="app-shell"
      data-active-section={activeSection}
      data-reduced-effects={reducedEffects ? 'true' : 'false'}
      data-reduced-motion={reducedMotion ? 'true' : 'false'}
    >
      <div className="page-ambient page-ambient-one" />
      <div className="page-ambient page-ambient-two" />
      <div className="page-ambient page-ambient-three" />
      <div className="page-grid" />
      <Navigation activeSection={activeSection} />
      <main className="app-main">
        <Hero />
        <About />
        <Projects reducedEffects={reducedEffects} />
        <Other reducedEffects={reducedEffects} />
        <Contact />
      </main>
    </div>
  )
}

export default App
