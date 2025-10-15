import type { Metadata } from 'next'
import './globals.css'
import ScrollToTop from '@/components/scroll-to-top'

export const metadata: Metadata = {
  title: 'B2BCTRL — Automate B2B Growth',
  description: 'Business-card one-pager for B2BCTRL.',
  openGraph: { title: 'B2BCTRL — Automate B2B Growth', description: 'Business-card one-pager', url: 'https://b2bctrl.com', siteName: 'B2BCTRL', type: 'website' },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ScrollToTop />
        {children}
      </body>
    </html>
  )
}
