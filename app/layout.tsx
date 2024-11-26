import type { Metadata } from 'next'
import './globals.css'

import Header from '@/components/utils/Header'

export const metadata: Metadata = {
  title: 'knowledge',
  description: 'TypeScriptの知識を問題形式で学ぶサービスです。',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ja'>
      <head>
        <link
          rel='icon'
          type='image/png'
          href='/favicon-96x96.png'
          sizes='96x96'
        />
        <link rel='icon' type='image/svg+xml' href='/favicon.svg' />
        <link rel='shortcut icon' href='/favicon.ico' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <meta name='apple-mobile-web-app-title' content='KnowLedge' />
        <link rel='manifest' href='/site.webmanifest' />
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
