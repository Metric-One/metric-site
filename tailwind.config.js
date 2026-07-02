/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        elev: 'var(--elev)',
        surface: 'var(--surface)',
        'surface-2': 'var(--surface-2)',
        fg: 'var(--fg)',
        'fg-muted': 'var(--fg-muted)',
        'fg-subtle': 'var(--fg-subtle)',
        line: 'var(--line)',
        'line-strong': 'var(--line-strong)',
        primary: 'var(--primary)',
        'primary-2': 'var(--primary-2)',
        'on-primary': 'var(--on-primary)',
        profit: 'var(--profit)',
        loss: 'var(--loss)',
        ai: 'var(--ai)',
        roas: 'var(--roas)',
        ring: 'var(--ring)'
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace']
      },
      fontSize: {
        '2xs': ['0.6875rem', { lineHeight: '1rem' }]
      },
      boxShadow: {
        glow: 'var(--glow)',
        card: 'var(--glass-shadow)'
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        glowPulse: {
          '0%,100%': { boxShadow: '0 0 0 rgba(47,107,255,0)' },
          '50%': { boxShadow: '0 0 22px rgba(47,107,255,0.35)' }
        },
        drift: {
          '0%,100%': { transform: 'translate(0,0) scale(1)' },
          '50%': { transform: 'translate(3%,-4%) scale(1.06)' }
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' }
        }
      },
      animation: {
        fadeUp: 'fadeUp 0.5s cubic-bezier(0.16,1,0.3,1) both',
        glowPulse: 'glowPulse 2s ease-in-out infinite',
        drift: 'drift 22s ease-in-out infinite',
        shimmer: 'shimmer 1.6s infinite'
      }
    }
  },
  plugins: []
}
