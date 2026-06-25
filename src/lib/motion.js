export const ease = [0.16, 1, 0.3, 1]
export const spring = { type: 'spring', stiffness: 260, damping: 24, mass: 0.9 }

export const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.2, ease } }
}

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.4, ease } },
  exit: { opacity: 0, transition: { duration: 0.2 } }
}

export const scaleIn = {
  initial: { opacity: 0, scale: 0.97 },
  animate: { opacity: 1, scale: 1, transition: spring },
  exit: { opacity: 0, scale: 0.98, transition: { duration: 0.15 } }
}

export const item = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.45, ease } }
}

export const stagger = {
  initial: {},
  animate: { transition: { staggerChildren: 0.06, delayChildren: 0.04 } }
}

export const tap = { whileTap: { scale: 0.97 } }
export const press = { whileHover: { scale: 1.02 }, whileTap: { scale: 0.97 } }
export const viewportOnce = { once: true, margin: '0px 0px -12% 0px' }
