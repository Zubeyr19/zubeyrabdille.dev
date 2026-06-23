<template>
  <main>
    <!-- HERO -->
    <section class="hero">
      <div class="container">
        <p class="hero-label">Software Engineer</p>
        <h1>Zubeyr Abdille</h1>
        <p class="hero-sub">
          Backend and fullstack developer based in Denmark.
          Production experience in Java, PHP, Python and TypeScript.
          Currently relocating to Copenhagen.
        </p>
        <div class="hero-links">
          <a href="https://github.com/ZubeyrAbdille" target="_blank" class="btn-outline">GitHub</a>
          <a href="https://www.linkedin.com/in/zubeyrabdille-6b8665311/" target="_blank" class="btn-outline">LinkedIn</a>
          <a href="mailto:zubeyrabdille@gmail.com" class="btn-primary">Get in touch</a>
        </div>
      </div>
    </section>

    <hr class="divider" />

    <!-- EXPERIENCE -->
    <section id="experience">
      <div class="container">
        <h2>Experience</h2>
        <div class="timeline">

          <div class="timeline-item">
            <div class="timeline-meta">
              <span class="timeline-year">2026</span>
            </div>
            <div class="timeline-body">
              <h3>Fullstack Developer</h3>
              <p class="timeline-company">BuildSOM I/S &mdash; Odense</p>
              <p>Developed PoC software solutions and modern UI/UX frontends for clients. Direct client contact from initial dialogue through requirements specification to delivery.</p>
              <div class="tag-row">
                <span class="tag">JavaScript</span>
                <span class="tag">Frontend</span>
                <span class="tag">Client work</span>
              </div>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-meta">
              <span class="timeline-year">2025 – 2026</span>
            </div>
            <div class="timeline-body">
              <h3>Software Developer – Bachelor Thesis</h3>
              <p class="timeline-company">VemcoGroup &mdash; Fredericia</p>
              <p>Designed and built a production multi-tenant IoT data platform in Java Spring Boot with Elasticsearch. Processed real-world event streams from enterprise IoT devices across isolated tenants. Triple-layer security model with JWT, RBAC and tenant filtering. Live enterprise customer data from first deployment.</p>
              <div class="tag-row">
                <span class="tag">Java</span>
                <span class="tag">Spring Boot</span>
                <span class="tag">Elasticsearch</span>
                <span class="tag">Docker</span>
                <span class="tag">MySQL</span>
              </div>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-meta">
              <span class="timeline-year">2025</span>
            </div>
            <div class="timeline-body">
              <h3>Software Developer – Internship</h3>
              <p class="timeline-company">VemcoGroup &mdash; Fredericia</p>
              <p>Built a LangChain AI chatbot integrated against live business APIs, giving customers self-service access to business data. Developed automated PHP and Laravel data pipelines on AWS S3 with integrity validation. Delivered Vue.js and TypeScript frontend features in production including a real-time notification system with infinite scroll.</p>
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

        </div>
      </div>
    </section>

    <hr class="divider" />

    <!-- PROJECTS -->
    <section id="projects">
      <div class="container">
        <h2>Projects</h2>
        <div class="projects-grid">

          <div class="project-card">
            <h3>Multi-tenant IoT Data Platform</h3>
            <p>Production platform processing real-world sensor data from enterprise IoT devices. Built from scratch in Java Spring Boot with Elasticsearch. Triple-layer security, concurrent multi-tenant queries and live enterprise data from day one.</p>
            <div class="tag-row">
              <span class="tag">Java</span>
              <span class="tag">Spring Boot</span>
              <span class="tag">Elasticsearch</span>
              <span class="tag">Docker</span>
            </div>
          </div>

          <div class="project-card">
            <h3>LangChain AI Chatbot</h3>
            <p>Production AI chatbot built with Python, TypeScript and LangChain, integrated against internal business APIs. Gave customers self-service access to live business data. Deployed and maintained in production at VemcoGroup.</p>
            <div class="tag-row">
              <span class="tag">Python</span>
              <span class="tag">LangChain</span>
              <span class="tag">TypeScript</span>
              <span class="tag">OpenAI API</span>
            </div>
          </div>

          <div class="project-card">
            <h3>Automated Data Pipeline</h3>
            <p>Event-driven pipeline in PHP and Laravel managing sensor configuration data against AWS S3. Includes integrity validation, retention management and continuous operation against live sensor data streams.</p>
            <div class="tag-row">
              <span class="tag">PHP</span>
              <span class="tag">Laravel</span>
              <span class="tag">AWS S3</span>
              <span class="tag">MySQL</span>
            </div>
          </div>

        </div>
      </div>
    </section>

    <hr class="divider" />

    <!-- SKILLS -->
    <section id="skills">
      <div class="container">
        <h2>Skills</h2>
        <div class="skills-grid">
          <div class="skill-group">
            <h3>Languages</h3>
            <ul>
              <li>TypeScript / JavaScript</li>
              <li>PHP</li>
              <li>Java</li>
              <li>Python</li>
              <li>SQL</li>
            </ul>
          </div>
          <div class="skill-group">
            <h3>Backend</h3>
            <ul>
              <li>Laravel</li>
              <li>Spring Boot</li>
              <li>LangChain</li>
              <li>REST APIs</li>
              <li>Event-driven architecture</li>
            </ul>
          </div>
          <div class="skill-group">
            <h3>Frontend</h3>
            <ul>
              <li>Vue.js / Nuxt</li>
              <li>HTML / CSS</li>
              <li>React (familiar)</li>
            </ul>
          </div>
          <div class="skill-group">
            <h3>Databases</h3>
            <ul>
              <li>MySQL</li>
              <li>PostgreSQL</li>
              <li>Elasticsearch</li>
            </ul>
          </div>
          <div class="skill-group">
            <h3>DevOps & Cloud</h3>
            <ul>
              <li>Docker</li>
              <li>GitLab CI/CD</li>
              <li>AWS S3</li>
              <li>Linux</li>
            </ul>
          </div>
          <div class="skill-group">
            <h3>AI Tools</h3>
            <ul>
              <li>LangChain</li>
              <li>OpenAI API</li>
              <li>RAG architecture</li>
              <li>Claude Code</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <hr class="divider" />

    <!-- CONTACT -->
    <section id="contact">
      <div class="container contact-section">
        <h2>Contact</h2>
        <p>Open to new opportunities in Denmark. Currently relocating to Copenhagen.</p>
        <div class="contact-links">
          <a href="mailto:zubeyrabdille@gmail.com">zubeyrabdille@gmail.com</a>
          <a href="https://www.linkedin.com/in/zubeyrabdille-6b8665311/" target="_blank">LinkedIn</a>
          <a href="https://github.com/ZubeyrAbdille" target="_blank">GitHub</a>
        </div>
      </div>
    </section>

    <footer>
      <div class="container">
        <p>Built with Nuxt 3. Zubeyr Abdille &copy; 2026.</p>
      </div>
    </footer>

  </main>
</template>

<style scoped>
/* HERO */
.hero {
  padding: 160px 0 100px;
}

.hero-label {
  color: var(--accent);
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 16px;
}

.hero h1 {
  font-size: clamp(2.4rem, 6vw, 4rem);
  margin-bottom: 20px;
}

.hero-sub {
  color: var(--text-muted);
  font-size: 1.05rem;
  max-width: 520px;
  margin-bottom: 36px;
}

.hero-links {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.btn-outline {
  padding: 10px 20px;
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

.btn-primary {
  padding: 10px 20px;
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

/* TIMELINE */
.timeline {
  display: flex;
  flex-direction: column;
  gap: 48px;
}

.timeline-item {
  display: grid;
  grid-template-columns: 110px 1fr;
  gap: 24px;
}

.timeline-year {
  font-size: 0.8rem;
  color: var(--text-muted);
  font-weight: 500;
  padding-top: 4px;
  white-space: nowrap;
}

.timeline-body h3 {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 4px;
}

.timeline-company {
  color: var(--accent);
  font-size: 0.875rem;
  margin-bottom: 10px;
}

.timeline-body p {
  color: var(--text-muted);
  font-size: 0.9rem;
  margin-bottom: 12px;
}

/* PROJECTS */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

.project-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 24px;
}

.project-card h3 {
  font-size: 0.95rem;
  font-weight: 600;
  margin-bottom: 10px;
}

.project-card p {
  color: var(--text-muted);
  font-size: 0.875rem;
  margin-bottom: 14px;
}

/* SKILLS */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 32px;
}

.skill-group h3 {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--accent);
  margin-bottom: 12px;
  font-weight: 600;
}

.skill-group ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.skill-group ul li {
  color: var(--text-muted);
  font-size: 0.875rem;
}

/* TAGS */
.tag-row {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

/* CONTACT */
.contact-section p {
  color: var(--text-muted);
  margin-bottom: 24px;
}

.contact-links {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
}

.contact-links a {
  font-size: 0.95rem;
  font-weight: 500;
}

/* FOOTER */
footer {
  padding: 32px 0;
  border-top: 1px solid var(--border);
}

footer p {
  color: var(--text-muted);
  font-size: 0.8rem;
}
</style>
