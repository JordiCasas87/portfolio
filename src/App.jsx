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

  useEffect(() => {
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
  }, [])

  useEffect(() => {
    const revealElements = document.querySelectorAll('.scroll-reveal')
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle('is-visible', entry.isIntersecting)
        })
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -12% 0px',
      },
    )

    revealElements.forEach((element) => revealObserver.observe(element))

    return () => {
      revealObserver.disconnect()
    }
  }, [])

  useEffect(() => {
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
  }, [])

  return (
    <div className="app-shell" data-active-section={activeSection}>
      <div className="page-ambient page-ambient-one" />
      <div className="page-ambient page-ambient-two" />
      <div className="page-ambient page-ambient-three" />
      <div className="page-grid" />
      <Navigation activeSection={activeSection} />
      <main className="app-main">
        <Hero />
        <About />
        <Projects />
        <Other />
        <Contact />
      </main>
    </div>
  )
}

export default App
