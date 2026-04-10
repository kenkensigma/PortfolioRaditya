export const faqCategories = [
  {
    icon: '⟨⟩', label: 'Tech & Stack',
    items: [
      { id: 'q1', q: 'What tech stack do you use?' },
      { id: 'q2', q: 'Do you work with React or Vue?' },
      { id: 'q3', q: 'Can you build a REST API?' },
      { id: 'q4', q: 'Do you know DevOps / deployment?' },
    ],
  },
  {
    icon: '◫', label: 'Projects & Work',
    items: [
      { id: 'q5', q: 'What kind of projects do you take?' },
      { id: 'q6', q: 'How long does a project take?' },
      { id: 'q7', q: 'Do you work with international clients?' },
      { id: 'q8', q: 'Can you work on an existing project?' },
    ],
  },
  {
    icon: '◉', label: 'Hiring & Rates',
    items: [
      { id: 'q9',  q: 'Are you available for freelance?' },
      { id: 'q10', q: 'What are your rates?' },
      { id: 'q11', q: 'Do you do full-time / remote work?' },
      { id: 'q12', q: 'How do I start a project with you?' },
    ],
  },
]

export const KB = {
  q1:  { q: 'What tech stack do you use?', a: 'My core stack is <strong>Laravel and PHP</strong> on the backend and <strong>vanilla JS with CSS</strong> on the frontend. For databases I use <strong>MySQL</strong> and <strong>PostgreSQL</strong>, with Redis for caching. I also work with Tailwind CSS, Alpine.js, Docker, and AR.js / Three.js for 3D and AR web experiences.' },
  q2:  { q: 'Do you work with React or Vue?', a: 'I primarily build with <strong>vanilla JS and Laravel Blade</strong>. I have working knowledge of Vue.js and can adapt to React projects if needed. For most web apps, a well-architected Laravel + Alpine.js stack delivers the same result with less overhead.' },
  q3:  { q: 'Can you build a REST API?', a: 'Absolutely — REST API development is one of my strongest areas. I\'ve built multi-tenant SaaS APIs with <strong>Laravel Sanctum</strong> authentication, rate limiting, webhook systems, and Swagger/OpenAPI documentation. Check out <em>OOP School</em> in my projects for an example.' },
  q4:  { q: 'Do you know DevOps / deployment?', a: 'Yes. I handle deployments using <strong>Docker</strong>, <strong>Linux servers</strong>, CI/CD pipelines via GitHub Actions, and cloud platforms. I can set up zero-downtime deployments, configure Nginx, manage SSL, and set up monitoring.' },
  q5:  { q: 'What kind of projects do you take?', a: 'I take on <strong>web applications</strong>, <strong>REST APIs & SaaS platforms</strong>, <strong>e-commerce sites</strong>, <strong>admin dashboards & CMS systems</strong>, <strong>product catalogs & landing pages</strong>, and <strong>3D/AR web experiences</strong>. Both greenfield projects and improvements to existing codebases.' },
  q6:  { q: 'How long does a project take?', a: 'Depends on scope. A landing page: <strong>1–2 weeks</strong>. A small web app: <strong>2–4 weeks</strong>. A full SaaS platform: <strong>4–8 weeks</strong>. I always give a detailed timeline estimate after the first discovery call.' },
  q7:  { q: 'Do you work with international clients?', a: 'Yes! I\'m based in <strong>Indonesia</strong> but work with clients worldwide. I\'m comfortable with async communication, different time zones, and tools like Slack, Notion, and Figma.' },
  q8:  { q: 'Can you work on an existing project?', a: 'Yes — I\'m comfortable jumping into existing codebases. I understand the architecture first before making changes, write clean commits, and never break what\'s already working.' },
  q9:  { q: 'Are you available for freelance?', a: 'Yes, I\'m currently <strong>open to freelance and contract work</strong> — both short-term and longer engagements. Reach out via the contact section below with a brief description of your project.' },
  q10: { q: 'What are your rates?', a: 'Rates vary based on project complexity and scope. I work with both <strong>fixed-price</strong> and <strong>hourly</strong> arrangements. Send your project details via the contact form and I\'ll reply with a custom quote — usually within 24 hours.' },
  q11: { q: 'Do you do full-time / remote work?', a: 'I\'m open to discussing <strong>long-term remote contracts</strong> and retainer arrangements. If you\'re looking for a dedicated developer for your team on a contract basis, feel free to reach out.' },
  q12: { q: 'How do I start a project with you?', a: 'Fill in the <strong>contact form below</strong> with: (1) a brief description of what you want to build, (2) your rough timeline, and (3) any designs or references. I\'ll reply within 24 hours.' },
}

export const faqKeywords = {
  q1:  ['stack','tech','language','php','laravel','use','tools'],
  q2:  ['react','vue','angular','frontend','framework','javascript'],
  q3:  ['api','rest','endpoint','sanctum','backend','swagger'],
  q4:  ['devops','deploy','docker','server','linux','cicd','hosting'],
  q5:  ['project','build','make','type','kind','what'],
  q6:  ['long','time','duration','weeks','days','deadline','timeline'],
  q7:  ['international','country','timezone','remote','abroad'],
  q8:  ['existing','legacy','old','fix','maintain','improve'],
  q9:  ['available','freelance','hire','open','work','contract'],
  q10: ['rate','price','cost','charge','pay','money','budget','fee'],
  q11: ['fulltime','full-time','permanent','ongoing','retainer'],
  q12: ['start','begin','contact','reach','how','process','step'],
}
