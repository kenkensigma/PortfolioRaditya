export default function Workflow() {
  const steps = [
    { num:'01', title:'Planning',    icon:'◎',   desc:'Deep discovery of requirements, technical constraints, and business goals. Scoping the architecture before touching a keyboard.' },
    { num:'02', title:'Design',      icon:'◈',   desc:'Wireframes, system design, and UI decisions. Establishing a visual language and technical blueprint that guides every decision downstream.' },
    { num:'03', title:'Development', icon:'⟨⟩', desc:'Clean, documented, iterative code delivery. Feature branches, code reviews, and regular client check-ins keep everything on track.' },
    { num:'04', title:'Testing',     icon:'⊕',  desc:'Automated tests, QA, and performance audits. Nothing ships until it is battle-tested across devices and load scenarios.' },
    { num:'05', title:'Deployment',  icon:'⟳',  desc:'CI/CD pipelines, zero-downtime releases, monitoring setup, and post-launch support to ensure a smooth go-live.' },
  ]

  return (
    <section className="workflow section-reveal" id="workflow">
      <div className="container">
        <div className="section-label">
          <span className="section-label__num">04</span>
          <span className="section-label__text">Process</span>
        </div>
        <h2 className="section-title">How I<br /><em>work.</em></h2>
        <div className="workflow__steps">
          <div className="workflow__line" aria-hidden="true" />
          {steps.map((s, i) => (
            <div className="workflow__step" style={{ '--delay': `${i*120}ms` }} key={s.num}>
              <div className="workflow__step-num" aria-hidden="true"><span>{s.num}</span></div>
              <div className="workflow__step-body">
                <div className="workflow__step-icon" aria-hidden="true">{s.icon}</div>
                <h3 className="workflow__step-title">{s.title}</h3>
                <p className="workflow__step-desc">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
