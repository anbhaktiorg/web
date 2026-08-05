import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair'
});

export const metadata: Metadata = {
  title: 'AN Bhakti | Budaya, Pengabdian, dan Inovasi Nusantara',
  description: 'Gerakan budaya dan pengabdian sosial berbasis nilai Nusantara, gotong royong, pendidikan budaya, dan inovasi kreatif. Cultural and social service movement based on Nusantara values.',
  keywords: ['Indonesian culture', 'Pancasila', 'Nusantara', 'cultural preservation', 'heritage', 'foundation', 'yayasan', 'gotong royong', 'pengabdian sosial', 'pasar tradisional gratis'],
  authors: [{ name: 'AN Bhakti' }],
  openGraph: {
    title: 'AN Bhakti | Budaya, Pengabdian, dan Inovasi Nusantara',
    description: 'Gerakan budaya dan pengabdian sosial berbasis nilai Nusantara, gotong royong, pendidikan budaya, dan inovasi kreatif.',
    url: 'https://anbhakti.org',
    siteName: 'AN Bhakti',
    locale: 'id_ID',
    alternateLocale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AN Bhakti',
    description: 'Gerakan budaya dan pengabdian sosial berbasis nilai Nusantara',
  },
  generator: 'Next.js',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
