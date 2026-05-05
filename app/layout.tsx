import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.nmcconsulting.co.uk'),
  title: {
    default: 'NMC Consulting | Cloud & MSP Product Strategy',
    template: '%s | NMC Consulting',
  },
  description:
    'NMC Consulting helps cloud, MSP, and technology founders turn their technical platform into a scalable, margin-rich product business. Based in the UK.',
  keywords: [
    'MSP product strategy',
    'cloud consulting UK',
    'platform commercialisation',
    'MSP business consultant',
    'cloud MSP advisor',
    'technology product strategy',
    'MSP pricing model',
    'managed service product consultant',
  ],
  authors: [{ name: 'Nathan Carroll', url: 'https://www.nmcconsulting.co.uk/about' }],
  creator: 'Nathan Carroll',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://www.nmcconsulting.co.uk',
    siteName: 'NMC Consulting',
    title: 'NMC Consulting | Cloud & MSP Product Strategy',
    description:
      'Helping cloud, MSP, and technology founders turn their technical platform into a scalable product business.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NMC Consulting | Cloud & MSP Product Strategy',
    description:
      'Helping cloud, MSP, and technology founders turn their technical platform into a scalable product business.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GB" className={inter.variable}>
      <body className="font-sans antialiased">
        <Nav />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
