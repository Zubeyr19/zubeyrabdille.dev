export const useTheme = () => {
  const isDark = useState('isDark', () => true)

  const toggle = () => {
    isDark.value = !isDark.value
    if (import.meta.client) {
      document.documentElement.classList.toggle('light', !isDark.value)
    }
  }

  const init = () => {
    if (import.meta.client) {
      document.documentElement.classList.toggle('light', !isDark.value)
    }
  }

  return { isDark, toggle, init }
}
