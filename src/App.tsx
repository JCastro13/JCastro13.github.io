import { ArrowDownRight, ArrowUpRight, ArrowLeft, Linkedin, Shield, Terminal, Crosshair, Radio, Menu, X, Search, Workflow, Activity, FileText, Layers, Target, BookOpen } from 'lucide-react'
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
  { icon: Crosshair, title: 'Threat Intelligence', detail: 'Investigating suspicious domains and potential brand impersonation, assessing external infrastructure and identifying signs of phishing, malware and credential theft.' },
  { icon: Shield, title: 'Detection & Response', detail: 'Triaging security alerts, analysing supporting telemetry, documenting evidence and supporting effective operational response.' },
  { icon: Terminal, title: 'Security Engineering', detail: 'Improving security operations through workflow automation, integrations and scripting with tools such as Tines, Python and AWS Lambda.' },
]

const experienceAreas = [
  {
    icon: Search,
    title: 'Threat Intelligence & Digital Risk Protection',
    description: 'Investigate suspicious external domains and potential brand abuse surfaced through digital risk protection workflows. Assess domain registration and WHOIS data, hosting and provider relationships, and website evidence to understand whether activity may represent brand impersonation.',
    detail: 'When a case warrants deeper analysis, examine potential phishing, malware distribution and credential-harvesting activity. Distinguish actionable threats from false positives and document the evidence and reasoning behind each assessment.',
    tags: ['External threat monitoring', 'Domain investigations', 'Brand impersonation', 'Phishing analysis'],
  },
  {
    icon: Activity,
    title: 'Detection & Response',
    description: 'Contribute to security operations by investigating alerts, reviewing relevant security telemetry and maintaining clear investigation records. Support operational response and the handling of priority security issues across detection and response workflows.',
    detail: 'Work across SIEM, endpoint security and case-management processes, connecting technical observations with documented findings that can be used by the wider security team.',
    tags: ['Alert investigation', 'Security monitoring', 'Case management', 'P1 / P2 support'],
  },
  {
    icon: Workflow,
    title: 'Security Automation & Engineering',
    description: 'Build and improve repeatable security workflows through automation, integrations and scripting. Use orchestration and cloud-based tooling to reduce manual effort and make operational processes more consistent.',
    detail: 'Act as a subject-matter contact for Sumo Logic Scheduled Views and led a large-scale implementation, alongside working with automation and cloud technologies.',
    tags: ['SOAR workflows', 'Python', 'AWS Lambda', 'Detection operations'],
  },
]

const tools = ['ZeroFox', 'Sumo Logic', 'TheHive', 'SentinelOne', 'Tines', 'AWS Lambda', 'Python']

const LINKEDIN_URL = 'https://www.linkedin.com/in/jesus-castrejon-castro'


function ProjectDetail({ project, onBack }: { project: (typeof projects)[number]; onBack: () => void }) {
  const sections = [
    ['01', 'THE PROJECT', 'Overview'],
    ['02', 'START WITH THE WHY', 'Research question'],
    ['03', 'HOW THE WORK IS DONE', 'Scope & methodology'],
    ['04', 'SHOW THE WORK', 'Evidence & artifacts'],
    ['05', 'WHAT THE EVIDENCE SHOWS', 'Findings'],
    ['06', 'LOOKING BACK', 'Outcome & lessons learned'],
  ]
  return (
    <div className="site-shell project-page-shell">
      <div className="top-line" />
      <header className="nav-wrap project-nav">
        <a className="brand" href="#home" onClick={onBack}><span className="brand-mark">JC<span>.</span></span><span className="brand-caption">SECURITY / RESEARCH</span></a>
        <button className="back-to-work" onClick={onBack}><ArrowLeft size={16} /> Back to research roadmap</button>
      </header>
      <main className="project-detail">
        <div className="project-breadcrumb">PORTFOLIO <span>/</span> RESEARCH ROADMAP <span>/</span> PROJECT {project.number}</div>
        <section className="project-detail-hero">
          <div className="project-detail-copy">
            <div className="project-detail-eyebrow"><span className="project-kicker-dot" /> {project.type} <span className="eyebrow-divider">/</span> CASE STUDY TEMPLATE</div>
            <h1>{project.title}</h1>
            <p className="project-detail-lead">{project.description}</p>
            <div className="project-detail-pills"><span className="planned-pill">PLANNED PROJECT</span><span className="template-pill">PAGE DESIGN PREVIEW</span></div>
            <p className="template-disclaimer">This is a visual template. All sections below are placeholders, not completed research or findings.</p>
          </div>
          <aside className="project-cover-card">
            <div className="cover-card-top"><span>PROJECT FILE</span><span>NO. {project.number}</span></div>
            <div className="cover-graphic"><div className="cover-ring ring-a" /><div className="cover-ring ring-b" /><div className="cover-cross">+</div><div className="cover-icon"><Target size={34} strokeWidth={1.35} /></div></div>
            <div className="cover-card-bottom"><span>RESEARCH / ENGINEERING</span><span>STATUS: PLANNED</span></div>
          </aside>
        </section>
        <div className="project-detail-layout">
          <div className="project-detail-content">
            <section className="case-section" id="overview">
              <div className="case-section-heading"><span>01</span><div><small>THE PROJECT</small><h2>Overview</h2></div></div>
              <p className="case-intro-text">A concise explanation of the problem, why it matters, and what this project is intended to demonstrate.</p>
              <div className="placeholder-panel"><span className="placeholder-label"><FileText size={15} /> PROJECT SUMMARY</span><p>Placeholder — describe the context, motivation, objectives and expected outcome here once the project is underway.</p></div>
            </section>
            <section className="case-section" id="question">
              <div className="case-section-heading"><span>02</span><div><small>START WITH THE WHY</small><h2>Research question</h2></div></div>
              <div className="question-panel"><span>CORE QUESTION</span><p>What specific question should this investigation or engineering project answer?</p><small>To be defined before the work begins.</small></div>
            </section>
            <section className="case-section" id="methodology">
              <div className="case-section-heading"><span>03</span><div><small>HOW THE WORK IS DONE</small><h2>Scope & methodology</h2></div></div>
              <p className="case-body-copy">Document the boundaries of the work, data sources, tools and analytical steps. Keep the methodology reproducible and explain important decisions.</p>
              <div className="method-grid">
                <article><span>01</span><h3>Define</h3><p>Set the scope, objectives and constraints.</p></article>
                <article><span>02</span><h3>Collect</h3><p>Record relevant sources, data and evidence.</p></article>
                <article><span>03</span><h3>Analyse</h3><p>Explain the process, validation and reasoning.</p></article>
                <article><span>04</span><h3>Report</h3><p>Present supported findings and practical outcomes.</p></article>
              </div>
            </section>
            <section className="case-section" id="evidence">
              <div className="case-section-heading"><span>04</span><div><small>SHOW THE WORK</small><h2>Evidence & artifacts</h2></div></div>
              <p className="case-body-copy">This area is reserved for material that helps a reader verify and understand the work.</p>
              <div className="artifact-grid">
                <article><div className="artifact-icon"><Layers size={21} /></div><h3>Technical diagram</h3><p>Architecture, attack flow or investigation timeline.</p><span>PLACEHOLDER</span></article>
                <article><div className="artifact-icon"><BookOpen size={21} /></div><h3>Research notes</h3><p>Sanitised excerpts, observations or analysis tables.</p><span>PLACEHOLDER</span></article>
                <article><div className="artifact-icon"><FileText size={21} /></div><h3>Supporting files</h3><p>Rules, scripts, report extracts or test evidence.</p><span>PLACEHOLDER</span></article>
              </div>
            </section>
            <section className="case-section" id="findings">
              <div className="case-section-heading"><span>05</span><div><small>WHAT THE EVIDENCE SHOWS</small><h2>Findings</h2></div></div>
              <div className="findings-placeholder"><span>NO FINDINGS PUBLISHED</span><p>This section will contain only conclusions supported by the collected evidence. Nothing has been added yet.</p></div>
            </section>
            <section className="case-section" id="takeaways">
              <div className="case-section-heading"><span>06</span><div><small>LOOKING BACK</small><h2>Outcome & lessons learned</h2></div></div>
              <p className="case-body-copy">Summarise what was achieved, what changed as a result, what limitations remain and what you would improve next time.</p>
              <div className="placeholder-panel"><span className="placeholder-label"><Target size={15} /> FINAL TAKEAWAYS</span><p>Placeholder — complete this section after the project has been carried out and reviewed.</p></div>
            </section>
          </div>
          <aside className="project-detail-sidebar">
            <div className="sidebar-card sidebar-toc"><span className="sidebar-title">ON THIS PAGE</span>{sections.map((s, i) => <a key={s[0]} href={['#overview','#question','#methodology','#evidence','#findings','#takeaways'][i]}>{s[2]}</a>)}</div>
            <div className="sidebar-card"><span className="sidebar-title">PROJECT DETAILS</span><div className="sidebar-detail"><small>STATUS</small><strong>Planned</strong></div><div className="sidebar-detail"><small>TYPE</small><strong>{project.type}</strong></div><div className="sidebar-detail"><small>PUBLICATION</small><strong>Not published</strong></div><div className="sidebar-detail"><small>EVIDENCE</small><strong>Not added yet</strong></div></div>
            <div className="sidebar-card"><span className="sidebar-title">TOPICS & TOOLS</span><div className="sidebar-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div>
            <div className="sidebar-note">A good case study should show not just what was done, but how the reasoning and evidence led to the result.</div>
          </aside>
        </div>
        <div className="project-detail-footer"><button className="back-to-work" onClick={onBack}><ArrowLeft size={16} /> Back to all projects</button><span>PROJECT TEMPLATE / {project.number}</span></div>
      </main>
      <footer><a className="footer-brand" href="#home" onClick={onBack}>JC<span>.</span></a><span>INDEPENDENT SECURITY RESEARCH & ENGINEERING</span><span>© {new Date().getFullYear()} J. CASTRO</span></footer>
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[number] | null>(null)
  const closeMenu = () => setMenuOpen(false)

  if (selectedProject) return <ProjectDetail project={selectedProject} onBack={() => setSelectedProject(null)} />

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
            <p className="hero-lead">I’m a Security Engineer at Flywire working across Detection & Response, Threat Intelligence and security automation. My work includes investigating suspicious external domains and potential brand abuse, assessing phishing and malware risks, and improving security workflows through engineering.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore selected work <ArrowDownRight size={16} /></a>
              <a className="text-link" href={LINKEDIN_URL} target="_blank" rel="noreferrer">Connect on LinkedIn <ArrowUpRight size={15} /></a>
            </div>
            <div className="hero-meta">
              <div><span className="meta-label">CURRENT ROLE</span><span className="meta-value">Security Engineer · Flywire</span></div>
              <div><span className="meta-label">LOCATION / MOBILITY</span><span className="meta-value">Spain · Open to relocate across Europe</span></div>
              <div><span className="meta-label">FOCUS</span><span className="meta-value">Threat Intel / D&R / Automation</span></div>
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
            <div><span className="section-kicker">01 / AREAS OF PRACTICE</span><h2>Where I focus.</h2></div>
            <p className="section-aside">A practical mix of external threat investigation, defensive operations and security engineering.</p>
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
            <div><span className="section-kicker">02 / RESEARCH ROADMAP</span><h2>Ideas into evidence.</h2></div>
            <p className="section-aside">A preview of the research and engineering work I plan to publish. Open any entry to see the structure of a full project case study.</p>
          </div>
          <div className="project-list">
            {projects.map(project => <article className="project-row" key={project.number}>
              <div className="project-number">{project.number}</div>
              <div className="project-main">
                <span className="project-type">{project.type}</span><h3>{project.title}</h3><p>{project.description}</p>
                <div className="tag-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
              </div>
              <div className="project-side"><span className="project-status"><i /> {project.status}</span><button className="project-preview-link" onClick={() => setSelectedProject(project)}>Preview case study <ArrowUpRight size={15} /></button></div>
            </article>)}
          </div>
          <p className="work-note"><span>NOTE</span> These entries are planned projects. The case-study pages are structural previews only; no completed work or findings are claimed.</p>
        </section>

        <section className="content-section experience-section" id="experience">
          <div className="section-heading">
            <div><span className="section-kicker">03 / PROFESSIONAL EXPERIENCE</span><h2>Security work, in practice.</h2></div>
            <p className="section-aside">My current role spans external threat investigations, detection and response, and automation.</p>
          </div>
          <article className="current-role-card">
            <div className="current-role-header">
              <div>
                <span className="experience-date">FEB 2026 — PRESENT</span>
                <h3>Security Engineer <span className="at-company">at Flywire</span></h3>
                <p className="role-team">Detection & Response · Security Operations · Threat Intelligence</p>
              </div>
              <span className="current-tag">CURRENT ROLE</span>
            </div>
            <p className="role-overview">I work across Flywire’s Detection & Response function, combining operational security work with external threat research and security automation. A key part of my current scope is investigating suspicious online activity and potential abuse of the company’s brand, while also supporting the detection and response processes that protect the organisation.</p>
            <div className="experience-areas">
              {experienceAreas.map((area, i) => {
                const Icon = area.icon
                return <section className="experience-area" key={area.title}>
                  <div className="area-heading"><span className="area-index">0{i + 1}</span><Icon size={19} strokeWidth={1.5} /><h4>{area.title}</h4></div>
                  <p>{area.description}</p>
                  <p>{area.detail}</p>
                  <div className="tag-list">{area.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                </section>
              })}
            </div>
            <div className="experience-tools">
              <span className="tools-label">TOOLS & TECHNOLOGIES</span>
              <div className="tag-list">{tools.map(tool => <span key={tool}>{tool}</span>)}</div>
            </div>
            <div className="experience-contribution">
              <span className="tools-label">SELECTED ENGINEERING CONTRIBUTION</span>
              <p>Acted as a subject-matter contact for Sumo Logic Scheduled Views and led a large-scale implementation, alongside supporting high-priority operational issues.</p>
            </div>
          </article>
          <article className="previous-role">
            <div className="experience-date">JUL 2024 — DEC 2025</div>
            <div className="previous-role-copy">
              <h3>Security Intern <span className="at-company">at Flywire</span></h3>
              <p>Started my professional cybersecurity career at Flywire, building a foundation in security operations before progressing into the full-time Security Engineer role.</p>
            </div>
          </article>
        </section>

        <section className="about-section" id="about">
          <div className="about-label"><span className="section-kicker">04 / A LITTLE ABOUT ME</span><span className="about-symbol">[ JC ]</span></div>
          <div className="about-copy">
            <h2>Research-minded.<br /><em>Engineering-driven.</em></h2>
            <p>I’m a Security Engineer at Flywire working across Detection & Response, with hands-on responsibilities that now include Threat Intelligence and Digital Risk Protection. I investigate suspicious domains and potential brand impersonation, assess evidence for phishing, malware and credential-harvesting activity, and document findings to support accurate triage and follow-up.</p>
            <p>My work also includes security alert investigation, case workflows and automation. I’m particularly interested in the point where intelligence becomes operational: how external threat research can inform detection, response and practical defensive improvements.</p>
            <p>This portfolio is where I can go deeper than a résumé: explain investigation methodology, document technical decisions, publish independent research and show the engineering behind the work I choose to share.</p>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div><span className="section-kicker">05 / CONTACT</span><h2>Let's connect.</h2><p>Interested in security research, threat intelligence, detection, incident investigation or practical security engineering? Find me on LinkedIn.</p></div>
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