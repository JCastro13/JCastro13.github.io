import { ArrowDownRight, ArrowUpRight, Linkedin, Shield, Terminal, Crosshair, Radio, Menu, X } from 'lucide-react'
import { useState } from 'react'

const projects = [
  {
    number: '01',
    type: 'THREAT INTELLIGENCE',
    title: 'APT Campaign Analysis',
    description: 'A structured research report examining an adversary campaign, its tactics and techniques, intelligence gaps, and defensive opportunities.',
    tags: ['OSINT', 'MITRE ATT&CK', 'Threat Research'],
    status: 'PLANNED',
  },
  {
    number: '02',
    type: 'SECURITY ENGINEERING',
    title: 'Threat Intelligence Toolkit',
    description: 'A Python-based toolkit for enriching and contextualising observables, correlating intelligence sources, and producing investigation-ready reports.',
    tags: ['Python', 'APIs', 'IOC Enrichment'],
    status: 'PLANNED',
  },
  {
    number: '03',
    type: 'DETECTION & RESPONSE',
    title: 'Detection Engineering Lab',
    description: 'A collection of documented detection use cases, Sigma rules, test data, ATT&CK mappings, and false-positive considerations.',
    tags: ['Sigma', 'SIEM', 'MITRE ATT&CK'],
    status: 'PLANNED',
  },
  {
    number: '04',
    type: 'DFIR',
    title: 'Windows Incident Investigation',
    description: 'A lab-based investigation focused on evidence handling, event reconstruction, timeline analysis, and defensible incident reporting.',
    tags: ['Windows', 'DFIR', 'Timeline Analysis'],
    status: 'PLANNED',
  },
]

const focus = [
  { icon: Crosshair, title: 'Threat Intelligence', detail: 'Researching threat actors, campaigns, infrastructure, and indicators to turn observations into actionable intelligence.' },
  { icon: Shield, title: 'Detection & Response', detail: 'Investigating security signals, understanding adversary behaviour, and improving detection and response capabilities.' },
  { icon: Terminal, title: 'Security Engineering', detail: 'Building practical tools, integrations, and automations that make security workflows more effective.' },
]

const experience = [
  {
    date: 'FEB 2026 — PRESENT',
    role: 'Security Engineer',
    company: 'Flywire',
    team: 'Detection & Response',
    description: 'Part of Flywire’s Detection & Response team, focusing on security operations, detection, and automation.',
    current: true,
  },
  {
    date: 'JUL 2024 — DEC 2025',
    role: 'Security Intern',
    company: 'Flywire',
    team: 'Security',
    description: 'Earlier security experience at Flywire before moving into the full-time Security Engineer role.',
    current: false,
  },
]

const LINKEDIN_URL = 'https://www.linkedin.com/in/jesus-castrejon-castro'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <div className="top-line" />
      <header className="nav-wrap">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="J Castro home">
          <span className="brand-mark">JC<span>.</span></span>
          <span className="brand-caption">SECURITY / RESEARCH</span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          <a href="#focus" onClick={closeMenu}>Focus</a>
          <a href="#work" onClick={closeMenu}>Selected work</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Get in touch <ArrowUpRight size={14} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-grid" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="pulse" /> INDEPENDENT SECURITY PORTFOLIO <span className="eyebrow-line" /></div>
            <h1>Understanding threats.<br /><em>Engineering</em> security.</h1>
            <p className="hero-lead">I’m a Security Engineer at Flywire, working across Detection & Response with a focus on security operations, detection, and automation. My professional interests include Threat Intelligence, incident investigation, and practical security engineering.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore selected work <ArrowDownRight size={16} /></a>
              <a className="text-link" href={LINKEDIN_URL} target="_blank" rel="noreferrer">Connect on LinkedIn <ArrowUpRight size={15} /></a>
            </div>
            <div className="hero-meta">
              <div><span className="meta-label">CURRENT ROLE</span><span className="meta-value">Security Engineer · Flywire</span></div>
              <div><span className="meta-label">LOCATION / MOBILITY</span><span className="meta-value">Spain · Open to relocate across Europe</span></div>
              <div><span className="meta-label">FOCUS</span><span className="meta-value">TI / D&R / Automation</span></div>
            </div>
          </div>
          <div className="hero-visual" aria-label="Abstract security telemetry illustration">
            <div className="visual-top"><span>FIELD NOTES / 001</span><span>SECURITY RESEARCH</span></div>
            <div className="visual-core">
              <div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit orbit-three" />
              <div className="core-cross">+</div>
              <div className="core-icon"><Radio size={34} strokeWidth={1.2} /></div>
              <span className="orbit-label label-a">OBSERVE</span><span className="orbit-label label-b">ANALYSE</span><span className="orbit-label label-c">RESPOND</span>
              <span className="coordinate coord-a">39°28' N</span><span className="coordinate coord-b">00°22' W</span>
            </div>
            <div className="visual-bottom"><span>THREAT LANDSCAPE</span><span className="visual-status"><i /> SYSTEMS THINKING / ACTIVE</span></div>
          </div>
          <div className="hero-index"><span>SCROLL TO EXPLORE</span><span className="index-rule" /><span>01 — 05</span></div>
        </section>

        <section className="intro-strip">
          <span className="strip-label">APPROACH</span>
          <p>Curiosity is the starting point. <strong>Evidence, context, and engineering</strong> turn it into useful security outcomes.</p>
          <span className="strip-mark">↘</span>
        </section>

        <section className="content-section" id="focus">
          <div className="section-heading">
            <div><span className="section-kicker">01 / AREAS OF INTEREST</span><h2>Where I focus.</h2></div>
            <p className="section-aside">A hybrid perspective across intelligence, investigation, and implementation.</p>
          </div>
          <div className="focus-grid">
            {focus.map((item, i) => {
              const Icon = item.icon
              return <article className="focus-card" key={item.title}>
                <div className="focus-card-top"><span>0{i + 1}</span><Icon size={20} strokeWidth={1.5} /></div>
                <h3>{item.title}</h3><p>{item.detail}</p>
                <span className="card-arrow"><ArrowUpRight size={17} /></span>
              </article>
            })}
          </div>
        </section>

        <section className="content-section work-section" id="work">
          <div className="section-heading">
            <div><span className="section-kicker">02 / SELECTED WORK</span><h2>Built on curiosity.</h2></div>
            <p className="section-aside">Research and engineering projects. Each project will include its methodology, evidence, findings, and lessons learned.</p>
          </div>
          <div className="project-list">
            {projects.map(project => <article className="project-row" key={project.number}>
              <div className="project-number">{project.number}</div>
              <div className="project-main">
                <span className="project-type">{project.type}</span><h3>{project.title}</h3><p>{project.description}</p>
                <div className="tag-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
              </div>
              <div className="project-side"><span className="project-status"><i /> {project.status}</span></div>
            </article>)}
          </div>
          <p className="work-note"><span>NOTE</span> Project entries are placeholders for work in progress. No findings or completed research are claimed here.</p>
        </section>

        <section className="content-section experience-section" id="experience">
          <div className="section-heading">
            <div><span className="section-kicker">03 / PROFESSIONAL EXPERIENCE</span><h2>Experience in security.</h2></div>
            <p className="section-aside">My professional path at Flywire, from an internship to a full-time engineering role.</p>
          </div>
          <div className="experience-list">
            {experience.map(item => <article className="experience-row" key={item.role}>
              <div className="experience-date">{item.date}</div>
              <div className="experience-main">
                <div className="experience-title-line"><h3>{item.role}</h3>{item.current && <span className="current-tag">CURRENT</span>}</div>
                <div className="experience-company">{item.company}<span>·</span>{item.team}</div>
                <p>{item.description}</p>
              </div>
            </article>)}
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="about-label"><span className="section-kicker">04 / A LITTLE ABOUT ME</span><span className="about-symbol">[ JC ]</span></div>
          <div className="about-copy">
            <h2>Research-minded.<br /><em>Engineering-driven.</em></h2>
            <p>I’m a Security Engineer at Flywire and a member of its Detection & Response team. My current work focuses on security operations, detection, and automation.</p>
            <p>Alongside my professional role, I’m developing my interests in Threat Intelligence and incident investigation through independent research, hands-on labs, and practical engineering projects. This portfolio documents that learning process and the work I choose to share publicly.</p>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div><span className="section-kicker">05 / CONTACT</span><h2>Let's connect.</h2><p>Interested in security research, detection, incident investigation, or practical security engineering? Find me on LinkedIn.</p></div>
          <div className="contact-links">
            <a href={LINKEDIN_URL} target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn <ArrowUpRight size={15} /></a>
          </div>
        </section>
      </main>

      <footer><a className="footer-brand" href="#home">JC<span>.</span></a><span>INDEPENDENT SECURITY RESEARCH & ENGINEERING</span><span>© {new Date().getFullYear()} J. CASTRO</span></footer>
    </div>
  )
}

export default App