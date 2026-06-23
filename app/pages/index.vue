<template>
  <main>

    <!-- HERO -->
    <section class="hero">
      <div class="container hero-container">
        <div class="avatar">
          <img src="/avatar.jpg" alt="Zubeyr Abdille" />
        </div>
        <h1>Zubeyr Abdille</h1>
        <p class="hero-title">{{ t.hero.title }}</p>
        <p class="hero-bio">{{ t.hero.bio }}</p>
        <p class="hero-status">
          <span class="status-dot"></span>
          {{ t.hero.location }} &nbsp;&bull;&nbsp; <span class="status-text">{{ t.hero.status }}</span>
        </p>
        <div class="hero-links">
          <a href="/Zubeyr_CV.pdf" target="_blank" class="btn-primary">{{ t.hero.downloadCv }}</a>
          <a href="#contact" class="btn-outline">{{ t.hero.contactMe }}</a>
        </div>
      </div>
    </section>

    <!-- ABOUT -->
    <section id="about">
      <div class="container">
        <p class="section-label">{{ t.about.label }}</p>
        <p class="about-text">{{ t.about.text }}</p>
      </div>
    </section>

    <!-- EXPERIENCE -->
    <section id="experience">
      <div class="container">
        <p class="section-label">{{ t.experience.label }}</p>
        <div class="exp-list">
          <div v-for="job in t.experience.jobs" :key="job.role" class="exp-card">
            <div class="exp-logo" :class="job.logoClass">{{ job.logoChar }}</div>
            <div class="exp-body">
              <div class="exp-header">
                <div>
                  <h3 class="exp-role">{{ job.role }}</h3>
                  <span class="exp-company">{{ job.company }}</span>
                </div>
                <span v-if="job.badge" class="badge-current">{{ job.badge }}</span>
              </div>
              <p class="exp-meta">{{ job.meta }}</p>
              <ul class="exp-bullets">
                <li v-for="bullet in job.bullets" :key="bullet">{{ bullet }}</li>
              </ul>
              <div class="tag-row">
                <span v-for="tag in job.tags" :key="tag" class="tag">{{ tag }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- PROJECTS -->
    <section id="projects">
      <div class="container">
        <p class="section-label">{{ t.projects.label }}</p>
        <p class="section-sub">{{ t.projects.sub }}</p>
        <div class="projects-grid">
          <div v-for="proj in t.projects.items" :key="proj.title" class="project-card">
            <div class="project-header" :class="proj.headerClass">
              <span class="project-type">{{ proj.type }}</span>
            </div>
            <div class="project-body">
              <h3>{{ proj.title }}</h3>
              <p>{{ proj.desc }}</p>
              <div class="tag-row">
                <span v-for="tag in proj.tags" :key="tag" class="tag">{{ tag }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SKILLS -->
    <section id="skills">
      <div class="container">
        <p class="section-label">{{ t.skills.label }}</p>
        <p class="section-sub">{{ t.skills.sub }}</p>
        <div class="skills-grid">
          <div v-for="group in t.skills.groups" :key="group.name" class="skill-group">
            <h3>{{ group.name }}</h3>
            <div class="tag-row">
              <span v-for="skill in group.skills" :key="skill" class="tag">{{ skill }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- EDUCATION -->
    <section id="education">
      <div class="container">
        <p class="section-label">{{ t.education.label }}</p>
        <div class="edu-list">
          <div class="edu-card">
            <div class="edu-left">
              <h3>{{ t.education.degree }}</h3>
              <p class="edu-school">{{ t.education.school }}</p>
            </div>
            <span class="edu-dates">{{ t.education.dates }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- CONTACT -->
    <section id="contact" class="contact-section">
      <div class="container">
        <h2>{{ t.contact.heading }}</h2>
        <p>{{ t.contact.sub }}</p>
        <div class="contact-links">
          <a href="mailto:zubeyrabdille@gmail.com">zubeyrabdille@gmail.com</a>
          <a href="https://www.linkedin.com/in/zubeyr-abdille-6b8665311/" target="_blank">LinkedIn</a>
          <a href="https://github.com/Zubeyr19" target="_blank">GitHub</a>
        </div>
      </div>
    </section>

    <footer>
      <div class="container footer-inner">
        <p>&copy; 2026 Zubeyr Abdille</p>
        <a href="https://github.com/Zubeyr19/zubeyrabdille.dev" target="_blank">{{ t.footer.source }}</a>
      </div>
    </footer>

  </main>
</template>

<script setup lang="ts">
const { lang } = useLang()

const translations = {
  en: {
    hero: {
      title: 'Software Engineer',
      location: 'Kolding, Denmark',
      bio: 'Backend and fullstack developer with production experience in Java, PHP, Python and TypeScript. Built real-world systems from IoT data platforms to AI chatbots, and delivered client-facing web solutions. Open to backend, fullstack, web developer and cloud roles across all of Denmark.',
      status: 'Open to opportunities',
      downloadCv: 'Download CV',
      contactMe: 'Contact me',
    },
    about: {
      label: 'About',
      text: 'Newly graduated Software Engineer (BEng Software Technology, SDU, 2026) with 2 years of production experience. At VemcoGroup I built a multi-tenant IoT data platform, an AI chatbot with LangChain and production PHP/Laravel pipelines on AWS S3. I have also worked as a web developer and fullstack developer, building client-facing applications and UI solutions from scratch. I write backend-first, think end-to-end, and ship things that actually run in production. Curious enough to learn what is new, ambitious enough to do it right.',
    },
    experience: {
      label: 'Experience',
      jobs: [
        {
          role: 'Fullstack Developer',
          company: 'BuildSOM I/S',
          meta: '2026 · Odense, Denmark · Startup',
          badge: 'Current',
          logoChar: 'B',
          logoClass: 'logo-b',
          bullets: [
            'Developed PoC software solutions and modern UI/UX frontends for clients.',
            'Direct client contact from initial dialogue through requirements specification to delivery.',
          ],
          tags: ['JavaScript', 'Rust', 'Frontend', 'Client work'],
        },
        {
          role: 'Software Developer – Bachelor Thesis',
          company: 'VemcoGroup',
          meta: '2025 – 2026 · Fredericia, Denmark · Industrial IoT',
          badge: null,
          logoChar: 'V',
          logoClass: 'logo-v',
          bullets: [
            'Designed and built a production multi-tenant IoT data platform in Java Spring Boot with Elasticsearch.',
            'Processed real-world event streams from enterprise IoT devices across isolated tenants.',
            'Triple-layer security model with JWT, RBAC and tenant filtering. Live enterprise customer data from first deployment.',
          ],
          tags: ['Java', 'Spring Boot', 'Elasticsearch', 'Docker', 'MySQL'],
        },
        {
          role: 'Software Developer – Internship',
          company: 'VemcoGroup',
          meta: '2025 · Fredericia, Denmark · Industrial IoT',
          badge: null,
          logoChar: 'V',
          logoClass: 'logo-v',
          bullets: [
            'Built a LangChain AI chatbot integrated against live business APIs, giving customers self-service access to business data.',
            'Developed automated PHP and Laravel data pipelines on AWS S3 with integrity validation.',
            'Delivered Vue.js and TypeScript frontend features in production, including a real-time notification system with infinite scroll.',
          ],
          tags: ['PHP', 'Laravel', 'Python', 'LangChain', 'Vue.js', 'TypeScript', 'AWS S3'],
        },
        {
          role: 'Web Developer',
          company: 'SDU – University of Southern Denmark',
          meta: '2023 – 2024 · Odense, Denmark · University',
          badge: null,
          logoChar: 'S',
          logoClass: 'logo-s',
          bullets: [
            'Built and maintained web applications as a student web developer at the university.',
            'Delivered web solutions using JavaScript and modern frontend tooling.',
          ],
          tags: ['JavaScript', 'HTML / CSS', 'Web Development'],
        },
      ],
    },
    projects: {
      label: 'Projects',
      sub: 'Selected projects from internship and bachelor thesis.',
      items: [
        {
          type: 'BACHELOR THESIS · BACKEND',
          headerClass: 'header-iot',
          title: 'Multi-tenant IoT Data Platform',
          desc: 'Production platform processing real-world sensor data from enterprise IoT devices. Built from scratch in Java Spring Boot with Elasticsearch. Triple-layer security, concurrent multi-tenant queries and live enterprise data from day one.',
          tags: ['Java', 'Spring Boot', 'Elasticsearch', 'Docker'],
        },
        {
          type: 'INTERNSHIP · AI',
          headerClass: 'header-ai',
          title: 'LangChain AI Chatbot',
          desc: 'Production AI chatbot built with Python and LangChain, integrated against internal business APIs. Gave customers self-service access to live business data. Deployed and in active use at VemcoGroup.',
          tags: ['Python', 'LangChain', 'TypeScript', 'OpenAI API'],
        },
        {
          type: 'INTERNSHIP · BACKEND',
          headerClass: 'header-pipeline',
          title: 'Automated Data Pipeline',
          desc: 'Event-driven pipeline in PHP and Laravel managing sensor configuration data against AWS S3. Integrity validation, retention management and continuous operation against live sensor data streams.',
          tags: ['PHP', 'Laravel', 'AWS S3', 'MySQL'],
        },
      ],
    },
    skills: {
      label: 'Skills',
      sub: 'Technologies I work with, grouped by where I spend most of my time.',
      groups: [
        { name: 'Backend', skills: ['Java', 'Spring Boot', 'PHP', 'Laravel', 'Python', 'REST APIs'] },
        { name: 'Frontend', skills: ['TypeScript', 'JavaScript', 'Vue.js', 'Nuxt', 'HTML / CSS'] },
        { name: 'Cloud & DevOps', skills: ['Docker', 'AWS S3', 'GitLab CI/CD', 'Linux'] },
        { name: 'Databases', skills: ['MySQL', 'PostgreSQL', 'Elasticsearch'] },
        { name: 'AI / LLM', skills: ['LangChain', 'OpenAI API', 'RAG'] },
      ],
    },
    education: {
      label: 'Education',
      degree: 'BEng Software Technology',
      school: 'University of Southern Denmark (SDU)',
      dates: '2022 – 2026 · Odense',
    },
    contact: {
      heading: 'Get in touch',
      sub: 'Open to backend, fullstack, web developer and cloud roles across all of Denmark.',
    },
    footer: {
      source: 'Source code on GitHub',
    },
  },

  da: {
    hero: {
      title: 'Softwareingeniør',
      location: 'Kolding, Danmark',
      bio: 'Backend- og fullstack-udvikler med produktionserfaring i Java, PHP, Python og TypeScript. Har bygget systemer fra IoT-dataplatforme til AI-chatbots og leveret kundevendte webløsninger. Åben for backend-, fullstack-, web- og cloud-stillinger i hele Danmark.',
      status: 'Åben for muligheder',
      downloadCv: 'Hent CV',
      contactMe: 'Kontakt mig',
    },
    about: {
      label: 'Om',
      text: 'Nyuddannet softwareingeniør (Diplomingeniør Software Teknologi, SDU, 2026) med 2 års produktionserfaring. Hos VemcoGroup byggede jeg en multi-tenant IoT-dataplatform, en AI-chatbot med LangChain og produktions-PHP/Laravel-pipelines på AWS S3. Jeg har også arbejdet som webudvikler og fullstack-udvikler og leveret kundeapplikationer og UI-løsninger fra bunden. Jeg skriver backend-first, tænker end-to-end og shipper ting der rent faktisk kører i produktion. Nysgerrig nok til at lære det nye, ambitiøs nok til at gøre det rigtigt.',
    },
    experience: {
      label: 'Erfaring',
      jobs: [
        {
          role: 'Fullstack-udvikler',
          company: 'BuildSOM I/S',
          meta: '2026 · Odense, Danmark · Startup',
          badge: 'Nuværende',
          logoChar: 'B',
          logoClass: 'logo-b',
          bullets: [
            'Udviklede PoC-softwareløsninger og moderne UI/UX-frontends til kunder.',
            'Direkte kundekontakt fra første dialog over kravspecifikation til levering.',
          ],
          tags: ['JavaScript', 'Rust', 'Frontend', 'Kundeprojekter'],
        },
        {
          role: 'Softwareudvikler – Bachelorprojekt',
          company: 'VemcoGroup',
          meta: '2025 – 2026 · Fredericia, Danmark · Industriel IoT',
          badge: null,
          logoChar: 'V',
          logoClass: 'logo-v',
          bullets: [
            'Designede og byggede en produktions-multi-tenant IoT-dataplatform i Java Spring Boot med Elasticsearch.',
            'Behandlede real-world event streams fra enterprise IoT-enheder på tværs af isolerede lejere.',
            'Trelags sikkerhedsmodel med JWT, RBAC og lejerfiltrering. Levende enterprise-kundedata fra første deployment.',
          ],
          tags: ['Java', 'Spring Boot', 'Elasticsearch', 'Docker', 'MySQL'],
        },
        {
          role: 'Softwareudvikler – Praktik',
          company: 'VemcoGroup',
          meta: '2025 · Fredericia, Danmark · Industriel IoT',
          badge: null,
          logoChar: 'V',
          logoClass: 'logo-v',
          bullets: [
            "Byggede en LangChain AI-chatbot integreret mod levende business-API'er, der gav kunderne self-service adgang til forretningsdata.",
            'Udviklede automatiserede PHP- og Laravel-datapipelines på AWS S3 med integritetssikring.',
            'Leverede Vue.js- og TypeScript-frontend-features i produktion, herunder et realtids-notifikationssystem med uendelig scroll.',
          ],
          tags: ['PHP', 'Laravel', 'Python', 'LangChain', 'Vue.js', 'TypeScript', 'AWS S3'],
        },
        {
          role: 'Webudvikler',
          company: 'SDU – Syddansk Universitet',
          meta: '2023 – 2024 · Odense, Danmark · Universitet',
          badge: null,
          logoChar: 'S',
          logoClass: 'logo-s',
          bullets: [
            'Byggede og vedligeholdt webapplikationer som studenter-webudvikler ved universitetet.',
            'Leverede webløsninger med JavaScript og moderne frontend-teknologier.',
          ],
          tags: ['JavaScript', 'HTML / CSS', 'Webudvikling'],
        },
      ],
    },
    projects: {
      label: 'Projekter',
      sub: 'Udvalgte projekter fra praktik og bachelorprojekt.',
      items: [
        {
          type: 'BACHELORPROJEKT · BACKEND',
          headerClass: 'header-iot',
          title: 'Multi-tenant IoT-dataplatform',
          desc: 'Produktionsplatform der behandler real-world sensordata fra enterprise IoT-enheder. Bygget fra bunden i Java Spring Boot med Elasticsearch. Trelags sikkerhed, samtidige multi-tenant forespørgsler og levende enterprise-data fra dag ét.',
          tags: ['Java', 'Spring Boot', 'Elasticsearch', 'Docker'],
        },
        {
          type: 'PRAKTIK · AI',
          headerClass: 'header-ai',
          title: 'LangChain AI-chatbot',
          desc: "Produktions AI-chatbot bygget med Python og LangChain, integreret mod interne business-API'er. Gav kunderne self-service adgang til levende forretningsdata. Deployeret og i aktiv brug hos VemcoGroup.",
          tags: ['Python', 'LangChain', 'TypeScript', 'OpenAI API'],
        },
        {
          type: 'PRAKTIK · BACKEND',
          headerClass: 'header-pipeline',
          title: 'Automatiseret datapipeline',
          desc: 'Event-drevet pipeline i PHP og Laravel til håndtering af sensorkonfigurationsdata mod AWS S3. Integritetssikring, retentionsstyring og kontinuerlig drift mod levende sensordatastrømme.',
          tags: ['PHP', 'Laravel', 'AWS S3', 'MySQL'],
        },
      ],
    },
    skills: {
      label: 'Kompetencer',
      sub: 'Teknologier jeg arbejder med, gruperet efter hvor jeg bruger mest tid.',
      groups: [
        { name: 'Backend', skills: ['Java', 'Spring Boot', 'PHP', 'Laravel', 'Python', 'REST API\'er'] },
        { name: 'Frontend', skills: ['TypeScript', 'JavaScript', 'Vue.js', 'Nuxt', 'HTML / CSS'] },
        { name: 'Cloud & DevOps', skills: ['Docker', 'AWS S3', 'GitLab CI/CD', 'Linux'] },
        { name: 'Databaser', skills: ['MySQL', 'PostgreSQL', 'Elasticsearch'] },
        { name: 'AI / LLM', skills: ['LangChain', 'OpenAI API', 'RAG'] },
      ],
    },
    education: {
      label: 'Uddannelse',
      degree: 'Diplomingeniør – Software Teknologi',
      school: 'Syddansk Universitet (SDU)',
      dates: '2022 – 2026 · Odense',
    },
    contact: {
      heading: 'Tag fat i mig',
      sub: 'Åben for backend-, fullstack-, web- og cloud-stillinger i hele Danmark.',
    },
    footer: {
      source: 'Kildekode på GitHub',
    },
  },
}

const t = computed(() => translations[lang.value])
</script>

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
  width: 220px;
  height: 220px;
  border-radius: 50%;
  border: 2px solid var(--accent);
  margin-bottom: 24px;
  overflow: hidden;
  position: relative;
  background: var(--accent-dim);
  display: flex;
  align-items: center;
  justify-content: center;
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  border-radius: 50%;
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
  animation: pulse 2.5s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
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
  transition: border-color 0.2s, background 0.3s;
}

.exp-card:hover {
  border-color: #444;
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

.logo-b { background: rgba(74, 222, 128, 0.08); color: #4ade80; border: 1px solid rgba(74, 222, 128, 0.2); }
.logo-v { background: rgba(129, 140, 248, 0.08); color: #818cf8; border: 1px solid rgba(129, 140, 248, 0.2); }
.logo-s { background: rgba(251, 146, 60, 0.08); color: #fb923c; border: 1px solid rgba(251, 146, 60, 0.2); }

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
  border: 1px solid rgba(34, 197, 94, 0.25);
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
  transition: border-color 0.2s, background 0.3s;
}

.project-card:hover {
  border-color: #444;
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
  transition: background 0.3s, border-color 0.3s;
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
