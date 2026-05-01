import Link from 'next/link'

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/debashishsahu',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D4C4B0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: 'Dribbble',
    href: 'https://dribbble.com/debashishsahu',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D4C4B0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" />
      </svg>
    ),
  },
  {
    label: 'Medium',
    href: 'https://medium.com/@debashishsahu',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D4C4B0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M7 8h10M7 12h6M7 16h8" />
      </svg>
    ),
  },
]

const footerNav = [
  { href: '/', label: 'Home' },
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/resume/resume.pdf', label: 'Resume' },
]

export default function Footer() {
  return (
    <footer aria-label="Site footer">
      {/* Upper section */}
      <div className="bg-footer-dark py-16 px-page-sm md:px-page-md lg:px-page">
        <div className="max-w-content mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
            {/* Left: copy */}
            <div className="flex-1 max-w-[520px]">
              <p className="text-12 font-medium uppercase tracking-label text-amber mb-4">
                Get in touch
              </p>
              <h2 className="font-display text-[36px] md:text-[28px] font-medium text-canvas tracking-tighter leading-[1.1] mb-5">
                Let&apos;s have a good conversation.
              </h2>
              <p className="text-16 font-light text-mist leading-[1.7] mb-8">
                Design craft, interesting problems, or something you&apos;re building —
                I&apos;m always up for a good conversation. Reach out anytime.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="mailto:debashishsahu@outlook.com"
                  className="inline-flex items-center justify-center bg-amber-bright text-ink text-13 font-medium px-6 py-3 rounded-md hover:opacity-90 transition-opacity"
                >
                  Say hello ↗
                </a>
                <a
                  href="/resume/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center border-2 border-amber-bright text-amber-bright text-13 font-medium px-6 py-3 rounded-md hover:bg-amber-bright/10 transition-colors"
                >
                  View resume
                </a>
              </div>
            </div>

            {/* Right: social + name */}
            <div className="flex flex-col gap-6 lg:items-end">
              <div className="flex gap-3">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-10 h-10 flex items-center justify-center border border-ivory/35 bg-ivory/[0.08] rounded-lg hover:bg-ivory/20 transition-colors"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
              <div className="text-right">
                <p className="text-13 font-medium text-canvas">Debashish Sahu</p>
                <p className="text-12 text-mist">Sr. Staff Product Designer</p>
                <p className="text-12 text-mist">Singapore</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lower strip */}
      <div className="bg-footer-darker py-4 px-page-sm md:px-page-md lg:px-page">
        <div className="max-w-content mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-12 text-mist text-center md:text-left">
            © 2025 Debashish Sahu · All rights reserved
          </p>
          <nav aria-label="Footer navigation" className="flex gap-5">
            {footerNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-12 text-mist hover:text-canvas transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
