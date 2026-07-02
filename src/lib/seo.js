import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Site-wide SEO identity. Origin is env-driven like every cross-repo link;
// falls back to the live deployment so canonical/OG stay absolute.
export const SITE_ORIGIN = (import.meta.env.VITE_SITE_ORIGIN || 'https://metric-site.vercel.app').replace(/\/+$/, '')
export const SITE_NAME = 'Metric One'
export const DEFAULT_DESCRIPTION = 'Metric One — AI growth engine.'

function upsertMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

export function useSeo({ title, description = DEFAULT_DESCRIPTION }) {
  const { pathname } = useLocation()
  useEffect(() => {
    const full = title ? `${title}` : SITE_NAME
    const url = `${SITE_ORIGIN}${pathname === '/' ? '/' : pathname}`
    document.title = full
    upsertMeta('name', 'description', description)
    upsertMeta('property', 'og:title', full)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:type', 'website')
    upsertMeta('property', 'og:url', url)
    upsertMeta('property', 'og:site_name', SITE_NAME)
    upsertMeta('name', 'twitter:card', 'summary')
    upsertMeta('name', 'twitter:title', full)
    upsertMeta('name', 'twitter:description', description)
    upsertLink('canonical', url)
  }, [title, description, pathname])
}
