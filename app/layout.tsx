import './globals.css'
import type { Metadata } from 'next'
import { Inter, Roboto,Poppins } from 'next/font/google'
import { SwrContextProvider, AuthContextProvider, NextAuthContext } from '@/context'
import {Toaster} from '@/components/ui/toaster'


export const metadata: Metadata = {
  title: 'SOFF',
  description: 'Generated by create next app',
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <NextAuthContext>
          <AuthContextProvider>
            <SwrContextProvider>
              {children}  
              <Toaster />
            </SwrContextProvider>
          </AuthContextProvider>
        </NextAuthContext>
      </body>
    </html>
  )
}
