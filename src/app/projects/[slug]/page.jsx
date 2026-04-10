'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getProjectBySlug } from '@/data/projects'
import Navbar from '@/components/Navbar'

export default function ProjectPage({ params }) {
  const project = getProjectBySlug(params.slug)
  if (!project) notFound()

  const [lightbox, setLightbox] = useState(null)

  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') setLightbox(null) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    document.body.style.overflow = lightbox ? 'hidden' : ''
  }, [lightbox])

  return (
    <>
      <Navbar />

      {/* Back */}
      <div className="project-detail-back">
        <div className="container">
          <Link href="/#projects" className="back-link">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Projects
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="pd-hero" style={{ '--accent': project.accent, '--bg': project.color }}>
        <div className="pd-hero__bg" aria-hidden="true">
          <div className="pd-hero__grid" />
          <div className="pd-hero__glow" />
          <div className="pd-hero__pattern" />
        </div>
        <div className="container">
          <div className="pd-hero__inner">
            <div className="pd-hero__meta">
              <span className="pd-hero__num">{project.num}</span>
              <span className="pd-hero__type">{project.type}</span>
            </div>
            <h1 className="pd-hero__title">{project.title}</h1>
            <p className="pd-hero__desc">{project.desc}</p>
            <div className="pd-hero__actions">
              {project.url && (
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn btn--outline">
                  <span>Live Demo</span>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 12L12 2M12 2H6M12 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </a>
              )}
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
                  <span>GitHub</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <div className="pd-body">
        <div className="container">
          <div className="pd-grid">

            {/* Main */}
            <div className="pd-main">

              {/* Overview */}
              <div className="pd-section">
                <div className="pd-section__label">Overview</div>
                <div className="pd-section__content">
                  {project.overview.map((p, i) => <p className="pd-para" key={i}>{p}</p>)}
                </div>
              </div>

              {/* Screenshots */}
              {project.images?.length > 0 && (
                <div className="pd-section">
                  <div className="pd-section__label">Screenshots</div>
                  <div className="pd-section__content">
                    <div className="pd-gallery">
                      {project.images.map((img, i) => (
                        <div key={i}
                          className={`pd-gallery__item pd-gallery__item--clickable${i === 0 ? ' pd-gallery__item--featured' : ''}`}
                          onClick={() => setLightbox(img)}>
                          <div className="pd-gallery__img-wrap">
                            <img src={img.src} alt={img.caption} loading="lazy"
                              onError={e => {
                                e.target.style.display = 'none'
                                e.target.nextElementSibling.style.display = 'flex'
                              }} />
                            <div className="pd-gallery__placeholder" style={{ display:'none' }}>
                              <span>{i+1}</span><p>{img.caption}</p>
                            </div>
                            <div className="pd-gallery__overlay"><span>⊕ View</span></div>
                          </div>
                          <p className="pd-gallery__caption">{img.caption}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Features */}
              {project.features?.length > 0 && (
                <div className="pd-section">
                  <div className="pd-section__label">Key Features</div>
                  <div className="pd-section__content">
                    <ul className="pd-features">
                      {project.features.map((f, i) => (
                        <li className="pd-feature" key={i}>
                          <span className="pd-feature__dot" style={{ background: project.accent }} />
                          <div><strong>{f.title}</strong><p>{f.desc}</p></div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Challenges */}
              {project.challenges?.length > 0 && (
                <div className="pd-section">
                  <div className="pd-section__label">Challenges & Solutions</div>
                  <div className="pd-section__content">
                    {project.challenges.map((c, i) => (
                      <div className="pd-challenge" key={i}>
                        <div className="pd-challenge__q">
                          <span className="pd-challenge__icon">⊗</span>
                          <strong>{c.challenge}</strong>
                        </div>
                        <div className="pd-challenge__a">
                          <span className="pd-challenge__icon pd-challenge__icon--solved">⊕</span>
                          <p>{c.solution}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="pd-sidebar">
              <div className="pd-card">
                <div className="pd-card__header"><span className="pd-card__icon">⟨⟩</span> Tech Stack</div>
                <div className="pd-card__body">
                  {Object.entries(project.tech).map(([cat, items]) => (
                    <div className="pd-tech-group" key={cat}>
                      <p className="pd-tech-group__label">{cat}</p>
                      <div className="pd-tech-group__items">
                        {items.map(item => (
                          <span className="pd-tech-tag" style={{ '--accent': project.accent }} key={item}>{item}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pd-card">
                <div className="pd-card__header"><span className="pd-card__icon">◉</span> Project Info</div>
                <div className="pd-card__body">
                  {Object.entries(project.info).map(([label, value]) => (
                    <div className="pd-info-row" key={label}>
                      <span className="pd-info-row__label">{label}</span>
                      <span className="pd-info-row__value">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {(project.url || project.github) && (
                <div className="pd-card">
                  <div className="pd-card__header"><span className="pd-card__icon">↗</span> Links</div>
                  <div className="pd-card__body" style={{ gap:'8px', display:'flex', flexDirection:'column' }}>
                    {project.url && <a href={project.url} target="_blank" rel="noopener noreferrer" className="pd-link-btn">Live Demo <span>↗</span></a>}
                    {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="pd-link-btn pd-link-btn--ghost">GitHub <span>↗</span></a>}
                  </div>
                </div>
              )}

              {project.next && (
                <Link href={`/projects/${project.next.slug}`} className="pd-next-card">
                  <span className="pd-next-card__label">Next Project</span>
                  <span className="pd-next-card__title">{project.next.title}</span>
                  <span className="pd-next-card__arrow">→</span>
                </Link>
              )}
            </aside>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="lightbox open" style={{ display:'flex' }} onClick={() => setLightbox(null)}>
          <button className="lightbox__close" onClick={() => setLightbox(null)}>✕</button>
          <div className="lightbox__inner" onClick={e => e.stopPropagation()}>
            <img className="lightbox__img" src={lightbox.src} alt={lightbox.caption} />
            <p className="lightbox__caption">{lightbox.caption}</p>
          </div>
        </div>
      )}
    </>
  )
}
