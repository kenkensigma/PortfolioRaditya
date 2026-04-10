export default function Skills() {
  const skills = [
    { icon: '⬡', title: 'Backend Development',  desc: 'Building performant, scalable server-side systems with PHP, Laravel, Node.js, and RESTful architecture.', tags: ['PHP', 'Laravel', 'Node.js'] },
    { icon: '◫', title: 'Frontend Development', desc: 'Crafting responsive, interactive UIs using vanilla JS, modern CSS, and component-driven patterns.',           tags: ['HTML', 'CSS', 'JavaScript'] },
    { icon: '⊕', title: 'REST API Development', desc: 'Designing clean, versioned APIs with proper authentication, rate limiting, and documentation.',               tags: ['REST', 'OAuth', 'JSON'] },
    { icon: '⊞', title: 'Database Architecture',desc: 'Schema design, query optimisation, and data modelling for relational and document stores.',                   tags: ['MySQL', 'PostgreSQL', 'Redis'] },
    { icon: '◈', title: 'UI Implementation',    desc: 'Translating high-fidelity designs into pixel-perfect, accessible, and animated interfaces.',                  tags: ['Figma → Code', 'A11y', 'Animation'] },
    { icon: '⊗', title: 'DevOps & Deployment',  desc: 'CI/CD pipelines, Docker containerisation, Linux server management, and cloud deployments.',                  tags: ['Docker', 'Linux', 'CI/CD'] },
  ]
  const techs = ['PHP','Laravel','JavaScript','MySQL','PostgreSQL','Redis','Docker','Linux','REST API','Git','CSS','HTML5','Node.js','Vue.js']

  return (
    <section className="skills section-reveal" id="skills">
      <div className="container">
        <div className="section-label">
          <span className="section-label__num">02</span>
          <span className="section-label__text">Expertise</span>
        </div>
        <div className="skills__header">
          <h2 className="section-title">Technologies &<br /><em>Capabilities</em></h2>
          <p className="skills__intro">A curated set of tools and disciplines I've sharpened<br />across years of real-world project delivery.</p>
        </div>
        <div className="skills__grid">
          {skills.map((s, i) => (
            <div className="skill-card" style={{ '--delay': `${i * 80}ms` }} key={i}>
              <div className="skill-card__inner">
                <div className="skill-card__icon" aria-hidden="true">{s.icon}</div>
                <h3 className="skill-card__title">{s.title}</h3>
                <p className="skill-card__desc">{s.desc}</p>
                <div className="skill-card__tags">
                  {s.tags.map(t => <span className="skill-card__tag" key={t}>{t}</span>)}
                </div>
              </div>
              <div className="skill-card__glow" aria-hidden="true" />
            </div>
          ))}
        </div>
        <div className="skills__marquee" aria-hidden="true">
          <div className="skills__marquee-track">
            {[...techs, ...techs].map((t, i) => (
              <span className="skills__marquee-item" key={i}>{t}<span className="skills__marquee-sep">·</span></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
