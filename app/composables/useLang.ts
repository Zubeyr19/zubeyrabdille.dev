export type Lang = 'en' | 'da'

export const useLang = () => {
  const lang = useState<Lang>('lang', () => 'en')
  const toggle = () => {
    lang.value = lang.value === 'en' ? 'da' : 'en'
  }
  return { lang, toggle }
}
