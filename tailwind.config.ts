import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: ['src/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: 'var(--ph-global-color-brand)',
          50: 'var(--ph-global-color-brand50)'
        },
        // Status tint triples mapped to utilities
        'status-success-100': 'var(--ph-semantic-color-status-success-bg100)',
        'status-success-200': 'var(--ph-semantic-color-status-success-border200)',
        'status-success-700': 'var(--ph-semantic-color-status-success-text700)',
        'status-warning-100': 'var(--ph-semantic-color-status-warning-bg100)',
        'status-warning-200': 'var(--ph-semantic-color-status-warning-border200)',
        'status-warning-700': 'var(--ph-semantic-color-status-warning-text700)',
        'status-error-100':   'var(--ph-semantic-color-status-error-bg100)',
        'status-error-200':   'var(--ph-semantic-color-status-error-border200)',
        'status-error-700':   'var(--ph-semantic-color-status-error-text700)'
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'ui-sans-serif', 'system-ui']
      },
      borderRadius: {
        xl: 'var(--ph-global-radius-control)',
        '2xl': 'var(--ph-global-radius-card)'
      },
      boxShadow: {
        pharos: 'var(--ph-global-shadow-pharos)',
        'pharos-sm': 'var(--ph-global-shadow-pharosSm)'
      },
      spacing: {
        0: '0px',
        1: 'var(--ph-global-spacing-4)',
        2: 'var(--ph-global-spacing-8)',
        3: 'var(--ph-global-spacing-12)',
        4: 'var(--ph-global-spacing-16)',
        5: 'var(--ph-global-spacing-24)',
        6: 'var(--ph-global-spacing-32)'
      }
    }
  },
  plugins: []
}
export default config
