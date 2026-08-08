const researchThemes = [
  {
    code: "R·01",
    title: "Impact & dynamic mechanics",
    summary:
      "How materials and structures behave when loading happens fast—from high-rate deformation to ballistic and soft-impact protection.",
    methods: "High-rate testing · impact experiments · damage & failure",
    motif: "impact",
  },
  {
    code: "R·02",
    title: "Architected structures",
    summary:
      "Geometry-led design of lightweight, energy-absorbing and bio-inspired lattices with programmable mechanical response.",
    methods: "Horseshoe lattices · optimisation · additive manufacturing",
    motif: "lattice",
  },
  {
    code: "R·03",
    title: "Polymers across scales",
    summary:
      "Connecting molecular architecture, temperature, strain rate and environment to the mechanics of functional and biodegradable polymers.",
    methods: "TPU · epoxy · PLA/PCL · chemo-mechanics",
    motif: "polymer",
  },
  {
    code: "R·04",
    title: "Models that meet experiments",
    summary:
      "Constitutive and finite-element models grounded in full-field measurements, from digital image correlation to thermo-mechanical fields.",
    methods: "DIC · FE modelling · constitutive laws · machine learning",
    motif: "field",
  },
];

const publications = [
  {
    year: "2026",
    title:
      "Mechanical characterisation and prediction of thermal evolution in horseshoe microstructure lattices under soft impact",
    venue: "International Journal of Solids and Structures",
    note: "Dynamic architected materials · thermal evolution",
    href: "https://doi.org/10.1016/j.ijsolstr.2026.114134",
  },
  {
    year: "2026",
    title:
      "Stress-state and strain-rate dependency of fracture in SCFR-PEEK composites under biaxial loading",
    venue: "Composites Part A",
    note: "Composite fracture · biaxial mechanics",
    href: "https://doi.org/10.1016/j.compositesa.2026.109594",
  },
  {
    year: "2026",
    title:
      "Constitutive modelling of hydrolytic degradation and viscoplasticity in glassy polymers: An effective temperature approach",
    venue: "International Journal of Plasticity",
    note: "Degradation · constitutive modelling",
    href: "https://doi.org/10.1016/j.ijplas.2026.104690",
  },
  {
    year: "2025",
    title: "Response of shear thickening fluids to high velocity ballistic impact",
    venue: "International Journal of Impact Engineering",
    note: "Impact protection · non-Newtonian materials",
    href: "https://doi.org/10.1016/j.ijimpeng.2025.105248",
  },
  {
    year: "2025",
    title: "Nonlinear mechanics of horseshoe microstructure-based lattice design",
    venue: "International Journal of Mechanical Sciences",
    note: "Lattice design · nonlinear response",
    href: "https://doi.org/10.1016/j.ijmecsci.2024.109781",
  },
  {
    year: "2023",
    title: "Shear yielding and crazing in dry and wet amorphous PLA at body temperature",
    venue: "Polymer",
    note: "Biodegradable polymers · chemo-mechanics",
    href: "https://doi.org/10.1016/j.polymer.2023.126477",
  },
  {
    year: "2022",
    title:
      "Experimental characterisation and modelling of the strain rate dependent mechanical response of a filled thermo-reversible supramolecular polyurethane",
    venue: "International Journal of Impact Engineering",
    note: "Supramolecular polymers · high-rate response",
    href: "https://doi.org/10.1016/j.ijimpeng.2022.104239",
  },
  {
    year: "2020",
    title:
      "Application of linear viscoelastic continuum damage theory to the low and high strain rate response of thermoplastic polyurethane",
    venue: "Experimental Mechanics",
    note: "TPU · damage mechanics",
    href: "https://doi.org/10.1007/s11340-020-00608-2",
  },
];

const pathway = [
  {
    years: "2025—2026",
    role: "Teaching Associate",
    place: "Queen Mary University of London",
    detail: "Mechanical Engineering & Materials Science",
  },
  {
    years: "2025—2026",
    role: "Research Fellow & Visiting Research Associate",
    place: "University of Oxford",
    detail: "Machine-learning-driven structures and robotics dynamics",
  },
  {
    years: "2022—2025",
    role: "Postdoctoral Research Associate",
    place: "University of Oxford",
    detail: "Polymer chemo-mechanics, degradation and modelling",
  },
  {
    years: "2021—2022",
    role: "Postdoctoral Research Associate",
    place: "University of Oxford",
    detail: "Impact mechanics and high-rate polymer response",
  },
];

function ResearchMotif({ type }: { type: string }) {
  return (
    <div className={`research-motif motif-${type}`} aria-hidden="true">
      <span />
      <span />
      <span />
      <span />
      <span />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="site-header">
        <nav className="nav-shell" aria-label="Main navigation">
          <a className="wordmark" href="#top" aria-label="Jimmy H. Chen, home">
            <span className="wordmark-mark">HC</span>
            <span>
              Jimmy <b>H.</b> Chen
            </span>
          </a>
          <div className="nav-links">
            <a href="#research">Research</a>
            <a href="#publications">Publications</a>
            <a href="#teaching">Teaching</a>
            <a href="#pathway">Pathway</a>
            <a className="nav-contact" href="#contact">
              Contact ↗
            </a>
          </div>
          <details className="mobile-nav">
            <summary>Navigate</summary>
            <div>
              <a href="#research">Research</a>
              <a href="#publications">Publications</a>
              <a href="#teaching">Teaching</a>
              <a href="#pathway">Pathway</a>
              <a href="#contact">Contact</a>
            </div>
          </details>
        </nav>
      </header>

      <main id="main">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">
              <span>Mechanical Engineering</span>
              <span>Materials Science</span>
            </p>
            <h1 id="hero-title">
              Mechanics for
              <span> resilient futures.</span>
            </h1>
            <p className="hero-deck">
              I investigate how materials and structures deform, absorb energy,
              recover and evolve—then translate that understanding into better
              engineering and better learning.
            </p>
            <div className="hero-identity">
              <img
                src="/jimmy-chen.jpg"
                alt="Portrait of Dr Jimmy Huanming Chen"
                width="343"
                height="400"
              />
              <div>
                <strong>Dr Jimmy (Huanming) Chen</strong>
                <span>Assistant Professor in Mechanical Engineering</span>
                <span>NMITE · Hereford, UK</span>
              </div>
            </div>
            <div className="hero-actions">
              <a className="button button-primary" href="#research">
                Explore the research <span>↓</span>
              </a>
              <a
                className="button button-quiet"
                href="https://scholar.google.com/citations?user=J9IapUAAAAAJ&hl=en"
              >
                Google Scholar ↗
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <img
              src="/mechanics-hero.png"
              alt="Original illustration combining a curved lattice, polymer network, impact wave and finite-element field"
              width="1536"
              height="1024"
            />
            <div className="visual-legend" aria-hidden="true">
              <span>01 · ARCHITECTURE</span>
              <span>02 · IMPACT</span>
              <span>03 · FIELD</span>
            </div>
            <p className="visual-caption">
              Structure × rate × temperature × environment
            </p>
          </div>
        </section>

        <section className="signal-strip" aria-label="Profile highlights">
          <div>
            <span className="signal-code">01</span>
            <p>
              <strong>DPhil, Oxford</strong>
              <span>Solid Mechanics</span>
            </p>
          </div>
          <div>
            <span className="signal-code">02</span>
            <p>
              <strong>CEng · CSci · CPhys</strong>
              <span>Chartered professional</span>
            </p>
          </div>
          <div>
            <span className="signal-code">03</span>
            <p>
              <strong>FRSA · FHEA</strong>
              <span>Fellowships</span>
            </p>
          </div>
          <div>
            <span className="signal-code">04</span>
            <p>
              <strong>Experiment ↔ model</strong>
              <span>Across materials & scales</span>
            </p>
          </div>
        </section>

        <section className="about section-shell" aria-labelledby="about-title">
          <div className="section-index">
            <span>00</span>
            <p>Position</p>
          </div>
          <div className="about-heading">
            <p className="kicker">Materials that adapt. Structures that protect.</p>
            <h2 id="about-title">
              From polymer chains to full-scale impact, I work where mechanics
              becomes useful.
            </h2>
          </div>
          <div className="about-body">
            <p>
              My research connects advanced materials science, solid mechanics
              and structural design. I combine experiments, full-field
              measurements and modelling to understand rate-sensitive polymers,
              degradable systems, composites and architected lattices.
            </p>
            <p>
              The goal is practical: lightweight protection, controlled energy
              absorption, resilient products and manufacturing routes that make
              complex mechanical behaviour usable.
            </p>
          </div>
        </section>

        <section className="research" id="research" aria-labelledby="research-title">
          <div className="section-shell">
            <div className="section-index inverse">
              <span>01</span>
              <p>Research</p>
            </div>
            <div className="research-heading">
              <div>
                <p className="kicker cyan">A connected mechanics programme</p>
                <h2 id="research-title">Four lenses. One question.</h2>
              </div>
              <p>
                How can we design material–structure systems that remain light,
                predictable and safe under demanding real-world conditions?
              </p>
            </div>

            <div className="research-grid">
              {researchThemes.map((theme) => (
                <article key={theme.code}>
                  <div className="research-card-top">
                    <span>{theme.code}</span>
                    <ResearchMotif type={theme.motif} />
                  </div>
                  <h3>{theme.title}</h3>
                  <p>{theme.summary}</p>
                  <footer>{theme.methods}</footer>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="publications section-shell"
          id="publications"
          aria-labelledby="publications-title"
        >
          <div className="section-index">
            <span>02</span>
            <p>Selected work</p>
          </div>
          <div className="publication-heading">
            <div>
              <p className="kicker">Recent & representative</p>
              <h2 id="publications-title">Publications</h2>
            </div>
            <div className="publication-links">
              <a href="https://orcid.org/0000-0001-9864-1890">ORCID ↗</a>
              <a href="https://scholar.google.com/citations?user=J9IapUAAAAAJ&hl=en">
                Full record ↗
              </a>
            </div>
          </div>

          <ol className="publication-list">
            {publications.map((publication, index) => (
              <li key={publication.title}>
                <span className="pub-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <time>{publication.year}</time>
                <div>
                  <h3>{publication.title}</h3>
                  <p>
                    <strong>{publication.venue}</strong>
                    <span>{publication.note}</span>
                  </p>
                </div>
                <a href={publication.href} aria-label={`Open publication: ${publication.title}`}>
                  ↗
                </a>
              </li>
            ))}
          </ol>
        </section>

        <section className="teaching" id="teaching" aria-labelledby="teaching-title">
          <div className="section-shell teaching-grid">
            <div className="section-index inverse">
              <span>03</span>
              <p>Teaching</p>
            </div>
            <div className="teaching-intro">
              <p className="kicker lime">Engineering is learned by doing</p>
              <h2 id="teaching-title">
                Practice-based, inclusive and connected to the lab.
              </h2>
              <p>
                My teaching uses experiential learning and Universal Design for
                Learning to turn mechanics into something students can test,
                model, build and explain.
              </p>
            </div>
            <div className="teaching-map">
              <article>
                <span>FOUNDATIONS</span>
                <h3>Mathematics · statics · dynamics</h3>
                <p>Building physical intuition before abstraction.</p>
              </article>
              <article>
                <span>CORE MECHANICS</span>
                <h3>Materials · structures · heat & mass transfer</h3>
                <p>Linking equations to experiments and engineering judgement.</p>
              </article>
              <article>
                <span>DESIGN PRACTICE</span>
                <h3>FE modelling · optimisation · research projects</h3>
                <p>Moving from analysis to decisions, prototypes and evidence.</p>
              </article>
              <article className="teaching-note">
                <span>LAB EXPERIENCE</span>
                <p>
                  Materials testing, thermo-mechanics, impact engineering and 3D
                  printing—from Instron and DIC to SHPB and ballistic rigs.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="pathway section-shell" id="pathway" aria-labelledby="pathway-title">
          <div className="section-index">
            <span>04</span>
            <p>Pathway</p>
          </div>
          <div className="pathway-heading">
            <div>
              <p className="kicker">Research, teaching & professional practice</p>
              <h2 id="pathway-title">Built across disciplines.</h2>
            </div>
            <p>
              Currently Assistant Professor in Mechanical Engineering at NMITE,
              after research and teaching appointments at Oxford and Queen Mary.
            </p>
          </div>

          <div className="pathway-layout">
            <ol className="timeline">
              {pathway.map((item) => (
                <li key={`${item.years}-${item.role}`}>
                  <time>{item.years}</time>
                  <div>
                    <h3>{item.role}</h3>
                    <strong>{item.place}</strong>
                    <p>{item.detail}</p>
                  </div>
                </li>
              ))}
            </ol>

            <aside className="education-card" aria-labelledby="education-title">
              <span className="card-label">Education</span>
              <h3 id="education-title">Oxford-trained solid mechanician</h3>
              <dl>
                <div>
                  <dt>2017—2021</dt>
                  <dd>
                    <strong>DPhil, Engineering Science</strong>
                    <span>University of Oxford</span>
                    <small>Thermomechanical behaviour of thermoplastic polyurethane</small>
                  </dd>
                </div>
                <div>
                  <dt>2025—2026</dt>
                  <dd>
                    <strong>PGCert, Academic Practice</strong>
                    <span>Queen Mary University of London</span>
                  </dd>
                </div>
                <div>
                  <dt>2013—2016</dt>
                  <dd>
                    <strong>BEng (First Class Hons), Civil Engineering</strong>
                    <span>University of Nottingham</span>
                  </dd>
                </div>
              </dl>
            </aside>
          </div>
        </section>

        <section className="outreach" aria-labelledby="outreach-title">
          <div className="section-shell outreach-grid">
            <div className="section-index">
              <span>05</span>
              <p>Beyond the lab</p>
            </div>
            <div>
              <p className="kicker orange">Public scholarship</p>
              <h2 id="outreach-title">Making mechanics memorable.</h2>
            </div>
            <div className="spotlight-card">
              <span>OXFORD SPOTLIGHT ENGINEERING · 2025</span>
              <h3>How can pancake mix help us design body armour?</h3>
              <p>
                A public talk using oobleck to explain how shear-thickening fluids
                can stay flexible in motion and stiffen under impact.
              </p>
              <div>
                <a href="https://www.youtube.com/watch?v=Pip7AT0s8n8">Watch the talk ↗</a>
                <a href="https://eng.ox.ac.uk/news/engineering-research-shines-in-the-spotlight-at-oxford-s-old-fire-station">
                  Oxford feature ↗
                </a>
              </div>
            </div>
            <div className="honours">
              <article>
                <time>2026</time>
                <h3>Wolfson Interdisciplinary Award</h3>
              </article>
              <article>
                <time>2021</time>
                <h3>DYMAT thesis publication distinction</h3>
              </article>
              <article>
                <time>2018—2020</time>
                <h3>Entrepreneurship awards at Cambridge & Oxford</h3>
              </article>
            </div>
          </div>
        </section>

        <section className="contact" id="contact" aria-labelledby="contact-title">
          <div className="contact-grid section-shell">
            <div className="contact-copy">
              <p className="kicker cyan">Collaborate · teach · build</p>
              <h2 id="contact-title">Let’s put mechanics to work.</h2>
              <p>
                For research collaboration, industry partnerships, invited talks
                and engineering education.
              </p>
            </div>
            <div className="contact-actions">
              <a href="mailto:huanming.chen@qmul.ac.uk">
                <span>Teaching & academic</span>
                huanming.chen@qmul.ac.uk ↗
              </a>
              <a href="mailto:huanming.chen@eng.ox.ac.uk">
                <span>Research</span>
                huanming.chen@eng.ox.ac.uk ↗
              </a>
            </div>
            <div className="profile-links" aria-label="Academic profiles">
              <a href="https://orcid.org/0000-0001-9864-1890">ORCID</a>
              <a href="https://scholar.google.com/citations?user=J9IapUAAAAAJ&hl=en">
                Google Scholar
              </a>
              <a href="https://www.linkedin.com/in/chenhuanming">LinkedIn</a>
              <a href="https://www.sems.qmul.ac.uk/staff/h.chen/">QMUL profile</a>
              <a href="https://eng.ox.ac.uk/people/huanming-chen/">Oxford profile</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>© 2026 Jimmy H. Chen. Initial profile edition · August 2026.</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </>
  );
}
