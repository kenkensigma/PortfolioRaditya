'use client'
import { useEffect } from 'react'
import Link from 'next/link'
import { projects } from '@/data/projects'

export default function Projects() {
  useEffect(() => {
    const cards = document.querySelectorAll('.project-card[data-tilt]')
    cards.forEach(card => {
      let rect = null
      card.addEventListener('mouseenter', () => { rect = card.getBoundingClientRect() })
      card.addEventListener('mousemove', e => {
        if (!rect) rect = card.getBoundingClientRect()
        const x = e.clientX - rect.left, y = e.clientY - rect.top
        const nx = (x - rect.width/2)/(rect.width/2), ny = (y - rect.height/2)/(rect.height/2)
        card.style.transform = `perspective(900px) rotateX(${-ny*6}deg) rotateY(${nx*6}deg) scale(1.02)`
        card.style.transition = 'transform 0.08s linear'
        const glow = card.querySelector('.project-card__glow')
        if (glow) glow.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.05) 0%, transparent 55%)`
      })
      card.addEventListener('mouseleave', () => {
        card.style.transform = ''
        card.style.transition = 'transform 0.5s cubic-bezier(0.22,1,0.36,1)'
        rect = null
        const glow = card.querySelector('.project-card__glow')
        if (glow) glow.style.background = ''
      })
    })
  }, [])

  return (
    <section className="projects section-reveal" id="projects">
      <div className="container">
        <div className="section-label">
          <span className="section-label__num">03</span>
          <span className="section-label__text">Selected Work</span>
        </div>
        <div className="projects__header">
          <h2 className="section-title">Products I've<br /><em>shipped.</em></h2>
          <a href="#contact" className="btn btn--outline btn--sm"
            onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}>
            Start a project
          </a>
        </div>
        <div className="projects__grid">
          {projects.map((p, i) => (
            <div key={p.slug}
              className={`project-card${i === 0 ? ' project-card--featured' : ''}`}
              style={{ '--accent': p.accent, '--bg': p.color, '--delay': `${i*100}ms` }}
              data-tilt>
              <div className="project-card__visual">
                <div className="project-card__visual-bg">
                  <div className="project-card__visual-pattern" aria-hidden="true" />
                  <div className="project-card__visual-accent" aria-hidden="true" />
                </div>
                <span className="project-card__num" aria-hidden="true">{p.num}</span>
                <span className="project-card__type">{p.type}</span>
              </div>
              <div className="project-card__body">
                <h3 className="project-card__title">{p.title}</h3>
                <p className="project-card__desc">{p.desc}</p>
                <div className="project-card__stack">
                  {Object.values(p.tech).flat().slice(0,4).map(t => (
                    <span className="project-card__tech" key={t}>{t}</span>
                  ))}
                </div>
                <div className="project-card__footer">
                  <Link href={`/projects/${p.slug}`} className="project-card__link">
                    View Project
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="project-card__glow" aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
