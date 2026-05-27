import type { Metadata } from 'next'
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
  themeColor: '#111B24',
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
        <meta name="theme-color"     content="#111B24" />
        {/* FOUC prevention — runs synchronously before first paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('portfolio-theme');if(t&&['sand','light','midnight'].includes(t)){document.documentElement.setAttribute('data-theme',t);}}catch(e){}})();`,
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
