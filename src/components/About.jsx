export default function About() {
  const values = [
    { icon: '⟳', title: 'Iterative Thinking', desc: 'Continuous improvement in every build cycle.' },
    { icon: '◈', title: 'Systems Design',     desc: 'Architecture that scales without compromise.' },
    { icon: '◉', title: 'Clean Code',         desc: 'Readable, maintainable, intentional.' },
  ]
  const tags = [
    { cls: '1', icon: 'devicon-php-plain colored',        label: 'PHP' },
    { cls: '2', icon: 'devicon-laravel-plain colored',    label: 'Laravel' },
    { cls: '3', icon: 'devicon-mysql-plain colored',      label: 'MySQL' },
    { cls: '4', icon: 'devicon-javascript-plain colored', label: 'JS' },
  ]

  return (
    <section className="about section-reveal" id="about">
      <div className="container">
        <div className="section-label">
          <span className="section-label__num">01</span>
          <span className="section-label__text">About Me</span>
        </div>

        <div className="about__grid">
          <div className="about__text">
            <h2 className="about__title section-title">
              Crafting digital<br /><em>experiences</em> with<br />precision.
            </h2>
            <p className="about__body">
              I am a passionate full stack developer who focuses on building scalable systems,
              modern web applications, and clean user experiences. My work sits at the intersection
              of engineering and design — I care as much about how something looks as how it runs.
            </p>
            <p className="about__body">
              I enjoy working on complex problems and transforming ideas into powerful digital products.
              Whether it's architecting a robust backend API or crafting a pixel-perfect interface,
              I bring the same level of intentionality to every layer of the stack.
            </p>
            <ul className="about__values" role="list">
              {values.map(v => (
                <li className="about__value" key={v.title}>
                  <div className="about__value-icon" aria-hidden="true">{v.icon}</div>
                  <div><strong>{v.title}</strong><p>{v.desc}</p></div>
                </li>
              ))}
            </ul>
          </div>

          <div className="about__visual">
            <div className="about__image-frame">
              <div className="about__image-placeholder">
                <img src="/images/profile.jpeg" alt="Raditya Putra"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }} />
                {tags.map(t => (
                  <div key={t.cls} className={`about__tech-tag about__tech-tag--${t.cls}`}>
                    <i className={t.icon} />
                    <span>{t.label}</span>
                  </div>
                ))}
              </div>
              <div className="about__frame-corner about__frame-corner--tl" aria-hidden="true" />
              <div className="about__frame-corner about__frame-corner--br" aria-hidden="true" />
            </div>
            <div className="about__badge">
              <strong className="about__badge-num">5+</strong>
              <span className="about__badge-label">Years of<br />Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
