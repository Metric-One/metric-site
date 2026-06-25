import { create } from 'zustand'

const KEY = 'mx-theme'

function apply(theme) {
  const el = document.documentElement
  el.classList.toggle('dark', theme === 'dark')
  el.classList.toggle('light', theme === 'light')
  el.style.colorScheme = theme
}

function initial() {
  try {
    const s = localStorage.getItem(KEY)
    if (s === 'dark' || s === 'light') return s
  } catch { /* ignore */ }
  return 'light'
}

export const useThemeStore = create((set, get) => ({
  theme: initial(),
  setTheme: (theme) => {
    apply(theme)
    try { localStorage.setItem(KEY, theme) } catch { /* ignore */ }
    set({ theme })
  },
  toggle: () => get().setTheme(get().theme === 'dark' ? 'light' : 'dark')
}))

apply(useThemeStore.getState().theme)
