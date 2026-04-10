'use client'
import { useEffect } from 'react'

export default function ClientEffects() {
  useEffect(() => {
    document.body.classList.add('js-ready')

    // ── Cursor glow ──────────────────────────────────────
    const glow = document.getElementById('cursorGlow')
    const dot  = document.getElementById('cursorDot')
    if (glow && dot) {
      let mx=0,my=0,gx=0,gy=0,dx=0,dy=0
      const lerp = (a,b,t) => a+(b-a)*t
      document.addEventListener('mousemove', e => { mx=e.clientX; my=e.clientY })
      const tick = () => {
        gx=lerp(gx,mx,.08); gy=lerp(gy,my,.08)
        dx=lerp(dx,mx,.25); dy=lerp(dy,my,.25)
        glow.style.left=gx+'px'; glow.style.top=gy+'px'
        dot.style.left =dx+'px'; dot.style.top =dy+'px'
        requestAnimationFrame(tick)
      }
      tick()
      const sel = 'a,button,.project-card,.skill-card,.contact__link,.btn'
      document.addEventListener('mouseover', e => { if (e.target.closest(sel)) dot.classList.add('hovering') })
      document.addEventListener('mouseout',  e => { if (e.target.closest(sel)) dot.classList.remove('hovering') })
    }

    // ── Scroll reveal ─────────────────────────────────────
    const els = document.querySelectorAll('.section-reveal,.reveal-up,.skill-card,.project-card,.workflow__step,.contact__link')
    if (els.length && window.IntersectionObserver) {
      const obs = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return
          const el = entry.target
          el.style.transitionDelay = el.style.getPropertyValue('--delay') || el.dataset.delay || '0ms'
          el.classList.add('revealed')
          obs.unobserve(el)
        })
      }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' })
      els.forEach(el => obs.observe(el))
    }

    // ── Skill card glow ───────────────────────────────────
    document.querySelectorAll('.skill-card').forEach(card => {
      card.addEventListener('mousemove', e => {
        const r = card.getBoundingClientRect()
        const g = card.querySelector('.skill-card__glow')
        if (g) { g.style.left=(e.clientX-r.left)+'px'; g.style.top=(e.clientY-r.top)+'px'; g.style.transform='translate(-50%,-50%) scale(1.5)' }
      })
      card.addEventListener('mouseleave', () => {
        const g = card.querySelector('.skill-card__glow')
        if (g) g.style.transform='translate(-50%,-50%) scale(0)'
      })
    })

    // ── Hero parallax ─────────────────────────────────────
    const grid = document.querySelector('.hero__grid-bg')
    const onScroll = () => { if (grid) grid.style.transform=`translateY(${window.scrollY*.3}px)` }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return null
}
