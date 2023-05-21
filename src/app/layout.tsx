'use client'
import '../styles/globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import ScrollToTop from '@/components/ScrollToTop'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Territorios',
  description: 'Mapa de territorios de Congregación Ingleses de Floripa',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='es'>
      <body className="dark:bg-black" >
        <Providers>
          <Header/>
          {children}
          <ScrollToTop />
        </Providers>
 
      </body>
    </html>
  )
}

import { Providers } from './providers'