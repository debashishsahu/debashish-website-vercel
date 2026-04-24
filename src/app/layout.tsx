import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Debashish Sahu — Sr. Staff Product Designer',
    template: '%s | Debashish Sahu',
  },
  description:
    'Portfolio of Debashish Sahu, Sr. Staff Product Designer at ServiceNow. 15+ years designing enterprise and consumer products.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Debashish Sahu Portfolio',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="bg-canvas text-ink font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
