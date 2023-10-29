import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Navbar } from '@/components/page-components'
const inter = Inter({ subsets: ['latin'] })
import { Footer } from '@/components/page-components'
import { SwrContextProvider, AuthContextProvider } from '@/context'
import {Toaster} from '@/components/ui/toaster'


export const metadata: Metadata = {
  title: 'SOFF',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex min-h-screen flex-col`}>
        <AuthContextProvider>
          <SwrContextProvider>
            {children}  
            <Toaster />  
            <Footer />  
          </SwrContextProvider>
        </AuthContextProvider>
      </body>
    </html>
  )
}
