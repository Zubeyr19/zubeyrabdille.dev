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

        <!-- Language dropdown -->
        <div class="dropdown" ref="langRef">
          <button class="dropdown-btn" @click.stop="langOpen = !langOpen; themeOpen = false">
            {{ lang === 'en' ? 'English' : 'Dansk' }}
            <svg class="chevron" :class="{ open: langOpen }" width="11" height="11" viewBox="0 0 12 12" fill="none">
              <path d="M2 4l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <div v-if="langOpen" class="dropdown-menu">
            <button @click="setLang('en')" :class="{ selected: lang === 'en' }">
              <svg v-if="lang === 'en'" class="check" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              <span v-else class="check-spacer"></span>
              English
            </button>
            <button @click="setLang('da')" :class="{ selected: lang === 'da' }">
              <svg v-if="lang === 'da'" class="check" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              <span v-else class="check-spacer"></span>
              Dansk
            </button>
          </div>
        </div>

        <!-- Theme dropdown -->
        <div class="dropdown" ref="themeRef">
          <button class="dropdown-btn icon-btn" @click.stop="themeOpen = !themeOpen; langOpen = false" :title="isDark ? 'Switch theme' : 'Switch theme'">
            <svg v-if="isDark" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="5"/>
              <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
              <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            </svg>
            <svg v-else width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
            </svg>
            <svg class="chevron" :class="{ open: themeOpen }" width="11" height="11" viewBox="0 0 12 12" fill="none">
              <path d="M2 4l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <div v-if="themeOpen" class="dropdown-menu">
            <button @click="setTheme(false)" :class="{ selected: !isDark }">
              <svg v-if="!isDark" class="check" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              <span v-else class="check-spacer"></span>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
              Light
            </button>
            <button @click="setTheme(true)" :class="{ selected: isDark }">
              <svg v-if="isDark" class="check" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              <span v-else class="check-spacer"></span>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
              </svg>
              Dark
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const { lang } = useLang()
const { isDark, toggle: toggleTheme, init } = useTheme()

const langOpen = ref(false)
const themeOpen = ref(false)
const langRef = ref<HTMLElement | null>(null)
const themeRef = ref<HTMLElement | null>(null)

const navLabels = {
  en: ['About', 'Experience', 'Projects', 'Skills', 'Contact'],
  da: ['Om', 'Erfaring', 'Projekter', 'Kompetencer', 'Kontakt'],
}
const navIds = ['about', 'experience', 'projects', 'skills', 'contact']

const navItems = computed(() =>
  navIds.map((id, i) => ({ id, label: navLabels[lang.value][i] }))
)

const setLang = (l: 'en' | 'da') => {
  lang.value = l
  langOpen.value = false
}

const setTheme = (dark: boolean) => {
  if (isDark.value !== dark) toggleTheme()
  themeOpen.value = false
}

const activeSection = ref('')

onMounted(() => {
  init()

  const sectionIds = ['about', 'experience', 'projects', 'skills', 'education', 'contact']
  const onScroll = () => {
    let current = ''
    for (const id of sectionIds) {
      const el = document.getElementById(id)
      if (el && el.getBoundingClientRect().top <= 80) current = id
    }
    activeSection.value = current
  }
  window.addEventListener('scroll', onScroll, { passive: true })

  const onOutsideClick = () => {
    langOpen.value = false
    themeOpen.value = false
  }
  document.addEventListener('click', onOutsideClick)

  onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
    document.removeEventListener('click', onOutsideClick)
  })
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
  gap: 8px;
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

/* DROPDOWNS */
.dropdown {
  position: relative;
}

.dropdown-btn {
  display: flex;
  align-items: center;
  gap: 5px;
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
  white-space: nowrap;
}

.dropdown-btn:hover {
  color: var(--text);
  border-color: var(--text-muted);
}

.icon-btn {
  padding: 5px 8px;
}

.chevron {
  transition: transform 0.2s;
  flex-shrink: 0;
}

.chevron.open {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 4px;
  min-width: 130px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.3);
  z-index: 200;
}

.dropdown-menu button {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  background: none;
  border: none;
  color: var(--text-muted);
  font-size: 0.82rem;
  font-weight: 500;
  padding: 8px 10px;
  border-radius: 5px;
  cursor: pointer;
  text-align: left;
  font-family: inherit;
  transition: background 0.15s, color 0.15s;
}

.dropdown-menu button:hover {
  background: var(--accent-dim);
  color: var(--text);
}

.dropdown-menu button.selected {
  color: var(--text);
}

.check {
  color: var(--accent);
  flex-shrink: 0;
}

.check-spacer {
  display: inline-block;
  width: 13px;
  flex-shrink: 0;
}

@media (max-width: 640px) {
  .nav-links { display: none; }
}
</style>
