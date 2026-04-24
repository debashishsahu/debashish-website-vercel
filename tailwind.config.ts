import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        canvas:   '#F7F5F2',
        ink:      '#1A2530',
        slate:    '#5C6B7A',
        amber:    '#D4882A',
        'amber-bright': '#E8943A',
        mist:     '#8FA0AE',
        linen:    '#E4DDD5',
        ivory:    '#D4C4B0',
        'footer-dark':   '#1A2530',
        'footer-darker': '#111B24',
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        sans:    ['Outfit', 'sans-serif'],
      },
      fontSize: {
        '12': ['12px', { lineHeight: '1.5' }],
        '14': ['14px', { lineHeight: '1.65' }],
        '16': ['16px', { lineHeight: '1.75' }],
        '18': ['18px', { lineHeight: '1.4' }],
        '20': ['20px', { lineHeight: '1.4' }],
        '22': ['22px', { lineHeight: '1.5' }],
        '24': ['24px', { lineHeight: '1.25' }],
        '32': ['32px', { lineHeight: '1.15' }],
        '56': ['56px', { lineHeight: '1.05' }],
      },
      letterSpacing: {
        tight:   '-0.03em',
        tighter: '-0.02em',
        snug:    '-0.01em',
        label:   '0.08em',
      },
      screens: {
        sm:  '320px',
        md:  '768px',
        lg:  '1280px',
      },
      maxWidth: {
        content: '1200px',
      },
      spacing: {
        section:        '80px',
        'section-md':   '60px',
        'section-sm':   '40px',
        page:           '80px',
        'page-md':      '40px',
        'page-sm':      '20px',
      },
    },
  },
  plugins: [],
}

export default config
