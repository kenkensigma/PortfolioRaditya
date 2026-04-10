'use client'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      const sections = document.querySelectorAll('section[id]')
      let current = 'home'
      sections.forEach(sec => {
        if (window.scrollY >= sec.offsetTop - 120) current = sec.id
      })
      setActive(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scroll = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) window.scrollTo({ top: target.offsetTop - 70, behavior: 'smooth' })
    setMobileOpen(false)
  }

  const links = [
    { href: '#home',     label: 'Home',     id: 'home' },
    { href: '#about',    label: 'About',    id: 'about' },
    { href: '#projects', label: 'Projects', id: 'projects' },
    { href: '#skills',   label: 'Skills',   id: 'skills' },
  ]

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
      <div className="navbar__inner">
        <a href="#home" className="navbar__brand" onClick={e => scroll(e, '#home')}>
          Raditya<span className="navbar__brand-dot">.</span>Dev
        </a>

        <ul className="navbar__links" role="list">
          {links.map(l => (
            <li key={l.id}>
              <a href={l.href} className={`navbar__link${active === l.id ? ' active' : ''}`}
                data-section={l.id} onClick={e => scroll(e, l.href)}>
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="navbar__link navbar__link--cta" onClick={e => scroll(e, '#contact')}>
              Contact
            </a>
          </li>
        </ul>

        <button className={`navbar__hamburger${mobileOpen ? ' open' : ''}`}
          onClick={() => setMobileOpen(p => !p)} aria-label="Toggle menu">
          <span /><span /><span />
        </button>
      </div>

      <div className={`navbar__mobile${mobileOpen ? ' open' : ''}`}>
        <ul role="list">
          {[...links, { href: '#contact', label: 'Contact', id: 'contact' }].map(l => (
            <li key={l.id}>
              <a href={l.href} className="navbar__mobile-link" onClick={e => scroll(e, l.href)}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
