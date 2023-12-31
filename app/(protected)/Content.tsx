'use client'
import React from 'react'
import { useAuth } from '@/context/auth-context/AuthContextProvider'
import { Navbar, Footer } from '@/components/page-components'

interface Props {
    children: React.ReactNode
}

export default function Content({children}: Props) {
  const {isDrawer} = useAuth()

  return (
    <div className={`w-full  ${isDrawer ? 'md:ml-[400px]': 'md:ml-[68px]'} min-h-screen flex-col`}>
        <Navbar />
        {children}
        <Footer />
    </div>
  )
}
