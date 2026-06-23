<template>
  <nav class="navbar">
    <div class="container nav-inner">
      <span class="logo">ZA</span>

      <div class="nav-links">
        <a
          v-for="item in navItems"
          :key="item.id"
          :href="`#${item.id}`"
          :class="{ active: activeSection === item.id }"
        >{{ item.label }}</a>
      </div>

      <div class="nav-right">
        <a href="/Zubeyr_CV.pdf" target="_blank" class="nav-cv">CV</a>
        <button class="lang-btn" @click="toggleLang">
          {{ lang === 'en' ? 'Dansk' : 'English' }}
          <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
            <path d="M2 4l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <button class="theme-btn" @click="toggleTheme" :title="isDark ? 'Light mode' : 'Dark mode'">
          <svg v-if="isDark" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="5"/>
            <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
            <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
          </svg>
          <svg v-else width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
          </svg>
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const { lang, toggle: toggleLang } = useLang()
const { isDark, toggle: toggleTheme, init } = useTheme()

const navLabels = {
  en: ['About', 'Experience', 'Projects', 'Skills', 'Contact'],
  da: ['Om', 'Erfaring', 'Projekter', 'Kompetencer', 'Kontakt'],
}
const navIds = ['about', 'experience', 'projects', 'skills', 'contact']

const navItems = computed(() =>
  navIds.map((id, i) => ({ id, label: navLabels[lang.value][i] }))
)

const activeSection = ref('')

onMounted(() => {
  init()

  const sectionIds = ['about', 'experience', 'projects', 'skills', 'education', 'contact']

  const onScroll = () => {
    let current = ''
    for (const id of sectionIds) {
      const el = document.getElementById(id)
      if (el && el.getBoundingClientRect().top <= 80) {
        current = id
      }
    }
    activeSection.value = current
  }

  window.addEventListener('scroll', onScroll, { passive: true })
  onUnmounted(() => window.removeEventListener('scroll', onScroll))
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  background: var(--nav-bg);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid var(--border);
  transition: background 0.3s, border-color 0.3s;
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
  flex-shrink: 0;
}

.nav-links {
  display: flex;
  gap: 26px;
}

.nav-links a {
  color: var(--text-muted);
  font-size: 0.875rem;
  font-weight: 500;
  transition: color 0.2s;
}

.nav-links a:hover,
.nav-links a.active {
  color: var(--text);
  text-decoration: none;
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
}

.nav-cv {
  font-size: 0.78rem;
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

.lang-btn {
  display: flex;
  align-items: center;
  gap: 4px;
  background: none;
  border: 1px solid var(--border);
  color: var(--text-muted);
  font-size: 0.8rem;
  font-weight: 500;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: color 0.2s, border-color 0.2s;
  font-family: inherit;
}

.lang-btn:hover {
  color: var(--text);
  border-color: var(--text-muted);
}

.theme-btn {
  background: none;
  border: 1px solid var(--border);
  color: var(--text-muted);
  padding: 5px 7px;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s, border-color 0.2s;
  line-height: 0;
}

.theme-btn:hover {
  color: var(--text);
  border-color: var(--text-muted);
}

@media (max-width: 640px) {
  .nav-links {
    display: none;
  }
}
</style>
