<template>
  <main>

    <!-- HERO -->
    <section class="hero">
      <div class="container hero-container">
        <div class="avatar">ZA</div>
        <h1>Zubeyr Abdille</h1>
        <p class="hero-title">Software Engineer</p>
        <p class="hero-bio">
          Backend and fullstack developer with production experience in Java, PHP, Python and TypeScript.
          Built real-world systems from IoT data platforms to AI chatbots, and delivered client-facing web solutions.
          Open to backend, fullstack and web developer roles across all of Denmark.
        </p>
        <p class="hero-status">
          <span class="status-dot"></span>
          Denmark &nbsp;&bull;&nbsp; <span class="status-text">Open to opportunities</span>
        </p>
        <div class="hero-links">
          <a href="/Zubeyr_CV.pdf" target="_blank" class="btn-primary">Download CV</a>
          <a href="#contact" class="btn-outline">Contact me</a>
        </div>
      </div>
    </section>

    <!-- ABOUT -->
    <section id="about">
      <div class="container">
        <p class="section-label">About</p>
        <p class="about-text">
          Newly graduated Software Engineer (BEng Software Technology, SDU, 2026) with 2 years of production experience.
          At VemcoGroup I built a multi-tenant IoT data platform, an AI chatbot with LangChain and production PHP/Laravel pipelines on AWS S3.
          I have also worked as a web developer and fullstack developer, building client-facing applications and UI solutions from scratch.
          I write backend-first, think end-to-end, and ship things that actually run in production.
          Curious enough to learn what is new, ambitious enough to do it right.
        </p>
      </div>
    </section>

    <!-- EXPERIENCE -->
    <section id="experience">
      <div class="container">
        <p class="section-label">Experience</p>
        <div class="exp-list">

          <div class="exp-card">
            <div class="exp-logo logo-b">B</div>
            <div class="exp-body">
              <div class="exp-header">
                <div>
                  <h3 class="exp-role">Fullstack Developer</h3>
                  <span class="exp-company">BuildSOM I/S</span>
                </div>
                <span class="badge-current">Current</span>
              </div>
              <p class="exp-meta">2026 &bull; Odense, Denmark &bull; Startup</p>
              <ul class="exp-bullets">
                <li>Developed PoC software solutions and modern UI/UX frontends for clients.</li>
                <li>Direct client contact from initial dialogue through requirements specification to delivery.</li>
              </ul>
              <div class="tag-row">
                <span class="tag">JavaScript</span>
                <span class="tag">Frontend</span>
                <span class="tag">Client work</span>
              </div>
            </div>
          </div>

          <div class="exp-card">
            <div class="exp-logo logo-v">V</div>
            <div class="exp-body">
              <div class="exp-header">
                <div>
                  <h3 class="exp-role">Software Developer &ndash; Bachelor Thesis</h3>
                  <span class="exp-company">VemcoGroup</span>
                </div>
              </div>
              <p class="exp-meta">2025 &ndash; 2026 &bull; Fredericia, Denmark &bull; Industrial IoT</p>
              <ul class="exp-bullets">
                <li>Designed and built a production multi-tenant IoT data platform in Java Spring Boot with Elasticsearch.</li>
                <li>Processed real-world event streams from enterprise IoT devices across isolated tenants.</li>
                <li>Triple-layer security model with JWT, RBAC and tenant filtering. Live enterprise customer data from first deployment.</li>
              </ul>
              <div class="tag-row">
                <span class="tag">Java</span>
                <span class="tag">Spring Boot</span>
                <span class="tag">Elasticsearch</span>
                <span class="tag">Docker</span>
                <span class="tag">MySQL</span>
              </div>
            </div>
          </div>

          <div class="exp-card">
            <div class="exp-logo logo-v">V</div>
            <div class="exp-body">
              <div class="exp-header">
                <div>
                  <h3 class="exp-role">Software Developer &ndash; Internship</h3>
                  <span class="exp-company">VemcoGroup</span>
                </div>
              </div>
              <p class="exp-meta">2025 &bull; Fredericia, Denmark &bull; Industrial IoT</p>
              <ul class="exp-bullets">
                <li>Built a LangChain AI chatbot integrated against live business APIs, giving customers self-service access to business data.</li>
                <li>Developed automated PHP and Laravel data pipelines on AWS S3 with integrity validation.</li>
                <li>Delivered Vue.js and TypeScript frontend features in production, including a real-time notification system with infinite scroll.</li>
              </ul>
              <div class="tag-row">
                <span class="tag">PHP</span>
                <span class="tag">Laravel</span>
                <span class="tag">Python</span>
                <span class="tag">LangChain</span>
                <span class="tag">Vue.js</span>
                <span class="tag">TypeScript</span>
                <span class="tag">AWS S3</span>
              </div>
            </div>
          </div>

          <div class="exp-card">
            <div class="exp-logo logo-s">S</div>
            <div class="exp-body">
              <div class="exp-header">
                <div>
                  <h3 class="exp-role">Web Developer</h3>
                  <span class="exp-company">SDU &ndash; University of Southern Denmark</span>
                </div>
              </div>
              <p class="exp-meta">2023 &ndash; 2024 &bull; Odense, Denmark &bull; University</p>
              <ul class="exp-bullets">
                <li>Built and maintained web applications as a student web developer at the university.</li>
                <li>Delivered web solutions using JavaScript and modern frontend tooling.</li>
              </ul>
              <div class="tag-row">
                <span class="tag">JavaScript</span>
                <span class="tag">HTML / CSS</span>
                <span class="tag">Web Development</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- PROJECTS -->
    <section id="projects">
      <div class="container">
        <p class="section-label">Projects</p>
        <p class="section-sub">Selected projects from internship and bachelor thesis.</p>
        <div class="projects-grid">

          <div class="project-card">
            <div class="project-header header-iot">
              <span class="project-type">BACHELOR THESIS &middot; BACKEND</span>
            </div>
            <div class="project-body">
              <h3>Multi-tenant IoT Data Platform</h3>
              <p>Production platform processing real-world sensor data from enterprise IoT devices. Built from scratch in Java Spring Boot with Elasticsearch. Triple-layer security, concurrent multi-tenant queries and live enterprise data from day one.</p>
              <div class="tag-row">
                <span class="tag">Java</span>
                <span class="tag">Spring Boot</span>
                <span class="tag">Elasticsearch</span>
                <span class="tag">Docker</span>
              </div>
            </div>
          </div>

          <div class="project-card">
            <div class="project-header header-ai">
              <span class="project-type">INTERNSHIP &middot; AI</span>
            </div>
            <div class="project-body">
              <h3>LangChain AI Chatbot</h3>
              <p>Production AI chatbot built with Python and LangChain, integrated against internal business APIs. Gave customers self-service access to live business data. Deployed and in active use at VemcoGroup.</p>
              <div class="tag-row">
                <span class="tag">Python</span>
                <span class="tag">LangChain</span>
                <span class="tag">TypeScript</span>
                <span class="tag">OpenAI API</span>
              </div>
            </div>
          </div>

          <div class="project-card">
            <div class="project-header header-pipeline">
              <span class="project-type">INTERNSHIP &middot; BACKEND</span>
            </div>
            <div class="project-body">
              <h3>Automated Data Pipeline</h3>
              <p>Event-driven pipeline in PHP and Laravel managing sensor configuration data against AWS S3. Integrity validation, retention management and continuous operation against live sensor data streams.</p>
              <div class="tag-row">
                <span class="tag">PHP</span>
                <span class="tag">Laravel</span>
                <span class="tag">AWS S3</span>
                <span class="tag">MySQL</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- SKILLS -->
    <section id="skills">
      <div class="container">
        <p class="section-label">Skills</p>
        <p class="section-sub">Technologies I work with, grouped by where I spend most of my time.</p>
        <div class="skills-grid">
          <div class="skill-group">
            <h3>Backend</h3>
            <div class="tag-row">
              <span class="tag">Java</span>
              <span class="tag">Spring Boot</span>
              <span class="tag">PHP</span>
              <span class="tag">Laravel</span>
              <span class="tag">Python</span>
              <span class="tag">REST APIs</span>
            </div>
          </div>
          <div class="skill-group">
            <h3>Frontend</h3>
            <div class="tag-row">
              <span class="tag">TypeScript</span>
              <span class="tag">JavaScript</span>
              <span class="tag">Vue.js</span>
              <span class="tag">Nuxt</span>
              <span class="tag">HTML / CSS</span>
            </div>
          </div>
          <div class="skill-group">
            <h3>Cloud &amp; DevOps</h3>
            <div class="tag-row">
              <span class="tag">Docker</span>
              <span class="tag">AWS S3</span>
              <span class="tag">GitLab CI/CD</span>
              <span class="tag">Linux</span>
            </div>
          </div>
          <div class="skill-group">
            <h3>Databases</h3>
            <div class="tag-row">
              <span class="tag">MySQL</span>
              <span class="tag">PostgreSQL</span>
              <span class="tag">Elasticsearch</span>
            </div>
          </div>
          <div class="skill-group">
            <h3>AI / LLM</h3>
            <div class="tag-row">
              <span class="tag">LangChain</span>
              <span class="tag">OpenAI API</span>
              <span class="tag">RAG</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- EDUCATION -->
    <section id="education">
      <div class="container">
        <p class="section-label">Education</p>
        <div class="edu-list">
          <div class="edu-card">
            <div class="edu-left">
              <h3>BEng Software Technology</h3>
              <p class="edu-school">University of Southern Denmark (SDU)</p>
            </div>
            <span class="edu-dates">2022 &ndash; 2026 &bull; Odense</span>
          </div>
        </div>
      </div>
    </section>

    <!-- CONTACT -->
    <section id="contact" class="contact-section">
      <div class="container">
        <h2>Get in touch</h2>
        <p>Open to backend, fullstack and web developer roles across all of Denmark.</p>
        <div class="contact-links">
          <a href="mailto:zubeyrabdille@gmail.com">zubeyrabdille@gmail.com</a>
          <a href="https://www.linkedin.com/in/zubeyrabdille-6b8665311/" target="_blank">LinkedIn</a>
          <a href="https://github.com/Zubeyr19" target="_blank">GitHub</a>
        </div>
      </div>
    </section>

    <footer>
      <div class="container footer-inner">
        <p>&copy; 2026 Zubeyr Abdille</p>
        <a href="https://github.com/Zubeyr19/zubeyrabdille.dev" target="_blank">Source code on GitHub</a>
      </div>
    </footer>

  </main>
</template>

<style scoped>
/* HERO */
.hero {
  padding: 130px 0 90px;
}

.hero-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: var(--accent-dim);
  border: 2px solid var(--accent);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--accent);
  margin-bottom: 24px;
  letter-spacing: 0.05em;
}

.hero h1 {
  font-size: clamp(1.8rem, 5vw, 2.4rem);
  margin-bottom: 6px;
}

.hero-title {
  color: var(--text-muted);
  font-size: 1rem;
  margin-bottom: 20px;
}

.hero-bio {
  max-width: 560px;
  color: var(--text-muted);
  font-size: 0.925rem;
  line-height: 1.8;
  margin-bottom: 20px;
}

.hero-status {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.875rem;
  color: var(--text-muted);
  margin-bottom: 32px;
}

.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #22c55e;
  flex-shrink: 0;
}

.status-text {
  color: #22c55e;
  font-weight: 500;
}

.hero-links {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
}

.btn-primary {
  padding: 10px 22px;
  background: var(--accent);
  border-radius: 6px;
  color: #0f0f0f;
  font-size: 0.875rem;
  font-weight: 600;
  transition: opacity 0.2s;
}

.btn-primary:hover {
  opacity: 0.85;
  text-decoration: none;
}

.btn-outline {
  padding: 10px 22px;
  border: 1px solid var(--border);
  border-radius: 6px;
  color: var(--text);
  font-size: 0.875rem;
  font-weight: 500;
  transition: border-color 0.2s, color 0.2s;
}

.btn-outline:hover {
  border-color: var(--accent);
  color: var(--accent);
  text-decoration: none;
}

/* SECTION LABELS */
.section-label {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-muted);
  font-weight: 600;
  margin-bottom: 28px;
}

.section-sub {
  color: var(--text-muted);
  font-size: 0.9rem;
  margin-top: -18px;
  margin-bottom: 32px;
}

/* ABOUT */
.about-text {
  color: var(--text-muted);
  font-size: 0.95rem;
  line-height: 1.85;
  max-width: 680px;
}

/* EXPERIENCE */
.exp-list {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.exp-card {
  display: grid;
  grid-template-columns: 52px 1fr;
  gap: 18px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 22px;
  transition: border-color 0.2s;
}

.exp-card:hover {
  border-color: #333;
}

.exp-logo {
  width: 52px;
  height: 52px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.1rem;
  flex-shrink: 0;
}

.logo-b { background: rgba(74, 222, 128, 0.08); color: #4ade80; border: 1px solid rgba(74, 222, 128, 0.15); }
.logo-v { background: rgba(129, 140, 248, 0.08); color: #818cf8; border: 1px solid rgba(129, 140, 248, 0.15); }
.logo-s { background: rgba(251, 146, 60, 0.08); color: #fb923c; border: 1px solid rgba(251, 146, 60, 0.15); }

.exp-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 3px;
}

.exp-role {
  font-size: 0.95rem;
  font-weight: 600;
  margin-bottom: 2px;
}

.exp-company {
  color: var(--accent);
  font-size: 0.83rem;
}

.exp-meta {
  color: var(--text-muted);
  font-size: 0.78rem;
  margin-bottom: 14px;
  margin-top: 4px;
}

.badge-current {
  font-size: 0.7rem;
  padding: 3px 10px;
  border-radius: 20px;
  background: rgba(34, 197, 94, 0.1);
  color: #22c55e;
  border: 1px solid rgba(34, 197, 94, 0.2);
  white-space: nowrap;
  flex-shrink: 0;
}

.exp-bullets {
  list-style: none;
  margin-bottom: 14px;
}

.exp-bullets li {
  color: var(--text-muted);
  font-size: 0.875rem;
  padding-left: 14px;
  position: relative;
  margin-bottom: 6px;
  line-height: 1.6;
}

.exp-bullets li::before {
  content: '\2022';
  position: absolute;
  left: 0;
  color: var(--accent);
}

/* PROJECTS */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 16px;
}

.project-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 10px;
  overflow: hidden;
  transition: border-color 0.2s;
}

.project-card:hover {
  border-color: #333;
}

.project-header {
  height: 110px;
  display: flex;
  align-items: flex-end;
  padding: 14px 18px;
}

.header-iot      { background: linear-gradient(135deg, #071f1f 0%, #0d3030 100%); }
.header-ai       { background: linear-gradient(135deg, #130a1f 0%, #1e0a2e 100%); }
.header-pipeline { background: linear-gradient(135deg, #071219 0%, #0a1e0d 100%); }

.project-type {
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  color: var(--accent);
}

.project-body {
  padding: 18px;
}

.project-body h3 {
  font-size: 0.95rem;
  font-weight: 600;
  margin-bottom: 10px;
}

.project-body p {
  color: var(--text-muted);
  font-size: 0.875rem;
  line-height: 1.65;
  margin-bottom: 14px;
}

/* SKILLS */
.skills-grid {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.skill-group h3 {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 10px;
}

/* EDUCATION */
.edu-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.edu-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 20px 24px;
  gap: 16px;
  flex-wrap: wrap;
}

.edu-card h3 {
  font-size: 0.95rem;
  font-weight: 600;
  margin-bottom: 4px;
}

.edu-school {
  color: var(--accent);
  font-size: 0.85rem;
}

.edu-dates {
  color: var(--text-muted);
  font-size: 0.8rem;
  white-space: nowrap;
}

/* CONTACT */
.contact-section {
  text-align: center;
}

.contact-section h2 {
  font-size: 1.7rem;
  font-weight: 700;
  margin-bottom: 12px;
  color: var(--text);
}

.contact-section p {
  color: var(--text-muted);
  margin-bottom: 28px;
  font-size: 0.95rem;
}

.contact-links {
  display: flex;
  gap: 24px;
  justify-content: center;
  flex-wrap: wrap;
}

.contact-links a {
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--accent);
}

/* FOOTER */
footer {
  padding: 24px 0;
  border-top: 1px solid var(--border);
}

.footer-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
}

footer p {
  color: var(--text-muted);
  font-size: 0.8rem;
}

footer a {
  color: var(--text-muted);
  font-size: 0.8rem;
}

footer a:hover {
  color: var(--accent);
  text-decoration: none;
}

/* SHARED */
.tag-row {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
</style>
