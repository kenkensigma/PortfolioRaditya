'use client'
import { useEffect } from 'react'

export default function Hero() {
  useEffect(() => {
    document.body.classList.add('js-ready')
    const lines = document.querySelectorAll('.hero__title-line, .hero__subtitle, .hero__actions, .hero__scroll')
    lines.forEach(el => {
      const delay = parseInt(el.dataset.delay || 0, 10)
      setTimeout(() => el.classList.add('revealed'), delay + 100)
    })
  }, [])

  const goTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="hero" id="home">
      <div className="hero__grid-bg" aria-hidden="true" />
      <div className="hero__orb hero__orb--1" aria-hidden="true" />
      <div className="hero__orb hero__orb--2" aria-hidden="true" />

      <div className="hero__container">
        <div className="hero__content">
          <p className="hero__eyebrow reveal-char">
            <span className="hero__eyebrow-line" />
            Hello, I'm
          </p>

          <h1 className="hero__title">
            <span className="hero__title-line hero__title-line--name reveal-up" data-delay="0">
              <span className="name-hover">Raditya Putra</span>
            </span>
            <span className="hero__title-line hero__title-line--role reveal-up" data-delay="100">
              Backend <em>Developer</em>
            </span>
          </h1>

          <p className="hero__subtitle reveal-up" data-delay="250">
            I design and build modern web applications,<br />
            APIs, and digital products.
          </p>

          <div className="hero__actions reveal-up" data-delay="380">
            <a href="#projects" className="btn btn--outline"
              onClick={e => { e.preventDefault(); goTo('#projects') }}>
              <span>View Projects</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="#contact" className="btn btn--ghost"
              onClick={e => { e.preventDefault(); goTo('#contact') }}>
              <span>Contact Me</span>
            </a>
          </div>

          <div className="hero__scroll reveal-up" data-delay="500" aria-hidden="true">
            <div className="hero__scroll-line" />
            <span>Scroll</span>
          </div>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="hero__sphere-wrapper">
            <div className="hero__ring hero__ring--1" />
            <div className="hero__ring hero__ring--2" />
            <div className="hero__ring hero__ring--3" />
            <div className="hero__sphere">
              <div className="hero__sphere-core" />
              <div className="hero__sphere-glow" />
              <div className="hero__code-tag hero__code-tag--1"><span className="tag-bracket">&lt;</span>dev<span className="tag-bracket">/&gt;</span></div>
              <div className="hero__code-tag hero__code-tag--2"><span className="tag-func">fn</span>{'() { }'}</div>
              <div className="hero__code-tag hero__code-tag--3"><span className="tag-var">$</span>build</div>
              <div className="hero__code-tag hero__code-tag--4">0x1F</div>
            </div>
            <div className="hero__orbit hero__orbit--1"><div className="hero__orbit-dot" /></div>
            <div className="hero__orbit hero__orbit--2"><div className="hero__orbit-dot" /></div>
          </div>
          <div className="hero__stat hero__stat--1"><strong>5+</strong><span>Years Exp.</span></div>
          <div className="hero__stat hero__stat--2"><strong>6+</strong><span>Projects</span></div>
        </div>
      </div>
    </section>
  )
}
