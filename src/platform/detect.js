const ua = typeof navigator !== 'undefined' ? navigator.userAgent : ''

export const isCapacitor = typeof window !== 'undefined' && !!window.Capacitor
export const isTauri = typeof window !== 'undefined' && !!window.__TAURI__
export const isDesktop = isTauri
export const isMobile = isCapacitor || /Android|iPhone|iPad|iPod/i.test(ua)
export const isWeb = !isCapacitor && !isTauri

export function getDownloadTarget() {
  if (/Macintosh|Mac OS X/i.test(ua)) return { os: 'macos', kind: 'dmg' }
  if (/Windows/i.test(ua)) return { os: 'windows', kind: 'msi' }
  if (/Android/i.test(ua)) return { os: 'android', kind: 'play' }
  if (/iPhone|iPad|iPod/i.test(ua)) return { os: 'ios', kind: 'appstore' }
  return { os: 'web', kind: 'pwa' }
}

export const platform = { isWeb, isMobile, isDesktop, isCapacitor, isTauri, getDownloadTarget }
