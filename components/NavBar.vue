<template>
  <nav class="navbar">
    <div class="container nav-inner">
      <span class="logo">ZA</span>
      <div class="nav-links">
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>
      <a href="/Zubeyr_CV.pdf" target="_blank" class="nav-cv">CV</a>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  background: rgba(15, 15, 15, 0.88);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid var(--border);
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
}

.logo {
  font-weight: 700;
  font-size: 1rem;
  color: var(--accent);
  letter-spacing: 0.05em;
}

.nav-links {
  display: flex;
  gap: 28px;
}

.nav-links a {
  color: var(--text-muted);
  font-size: 0.875rem;
  font-weight: 500;
  transition: color 0.2s;
}

.nav-links a:hover {
  color: var(--text);
  text-decoration: none;
}

.nav-cv {
  font-size: 0.8rem;
  font-weight: 700;
  padding: 6px 16px;
  background: var(--accent);
  color: #0f0f0f;
  border-radius: 5px;
  letter-spacing: 0.04em;
  transition: opacity 0.2s;
}

.nav-cv:hover {
  opacity: 0.85;
  text-decoration: none;
}

@media (max-width: 600px) {
  .nav-links {
    display: none;
  }
}
</style>
