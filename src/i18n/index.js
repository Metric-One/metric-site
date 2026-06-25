import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en.json'
import es from './locales/es.json'
import zh from './locales/zh.json'
import pt from './locales/pt.json'
import fr from './locales/fr.json'
import de from './locales/de.json'
import ru from './locales/ru.json'
import tr from './locales/tr.json'
import ar from './locales/ar.json'
import fa from './locales/fa.json'

export const SUPPORTED = [
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
  { code: 'zh', label: '中文' },
  { code: 'pt', label: 'Português' },
  { code: 'fr', label: 'Français' },
  { code: 'de', label: 'Deutsch' },
  { code: 'ru', label: 'Русский' },
  { code: 'tr', label: 'Türkçe' },
  { code: 'ar', label: 'العربية' },
  { code: 'fa', label: 'فارسی' }
]
export const RTL = ['ar', 'fa']

const resources = { en, es, zh, pt, fr, de, ru, tr, ar, fa }
const stored = (() => { try { return localStorage.getItem('mx-lang') } catch { return null } })()
const initial = SUPPORTED.some((s) => s.code === stored) ? stored : 'en'

i18n.use(initReactI18next).init({
  resources: Object.fromEntries(Object.entries(resources).map(([k, v]) => [k, { translation: v }])),
  lng: initial,
  fallbackLng: 'en',
  interpolation: { escapeValue: false }
})

function applyDir(lng) {
  document.documentElement.lang = lng
  document.documentElement.dir = RTL.includes(lng) ? 'rtl' : 'ltr'
}
applyDir(initial)

export function setLanguage(lng) {
  i18n.changeLanguage(lng)
  try { localStorage.setItem('mx-lang', lng) } catch { /* ignore */ }
  applyDir(lng)
}

export default i18n
