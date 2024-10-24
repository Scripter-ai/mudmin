import type { Metadata } from 'next'
import Head from 'next/head';
import { Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';
import '@/app/globals.css'
import { siteConfig } from '@/config/site'
import { Toaster } from 'sonner';

const inter = Space_Grotesk({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: [
    {
      url: "/opprfavicon.svg",
      href: "/opprfavicon.svg"
    }
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html 
      lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </head>
      <body className={inter.className}>
        {children}
        <Toaster richColors />
        <Analytics />
      </body>
    </html>
  )
}
