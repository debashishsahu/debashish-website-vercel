import type { Metadata, Viewport } from 'next'
import './globals.css'
import { ThemeProvider } from '@/context/ThemeContext'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'

export const metadata: Metadata = {
  title: {
    default: 'Debashish Sahu — Sr. Staff Product Designer',
    template: '%s | Debashish Sahu',
  },
  description:
    'Sr. Staff Product Designer at ServiceNow with 15+ years shaping complex enterprise products — now at the intersection of agentic AI, conversational UX, and design systems that scale.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Debashish Sahu Portfolio',
  },
  icons: {
    icon: [
      { url: '/favicon.svg',       type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'manifest', url: '/site.webmanifest' },
    ],
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F7F5F2' },
    { media: '(prefers-color-scheme: dark)', color: '#0F1923' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon"             href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon"             href="/favicon-32x32.png" sizes="32x32" />
        <link rel="icon"             href="/favicon-16x16.png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest"         href="/site.webmanifest" />
        {/* FOUC prevention — runs synchronously before first paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('portfolio-theme');if(t&&['sand','light','midnight'].includes(t)){document.documentElement.setAttribute('data-theme',t);}}catch(e){}})();`,
          }}
        />
        {/* Without JS, framer-motion never clears its pre-reveal inline
            opacity:0 — force all content visible so the page is readable. */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<style>[style*="opacity:0"],[style*="opacity: 0"]{opacity:1!important;transform:none!important}</style>`,
          }}
        />
      </head>
      <body className="bg-canvas text-ink font-sans antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
