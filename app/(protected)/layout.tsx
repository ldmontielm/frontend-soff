import React from 'react'
import { Navbar, Footer } from '@/components/page-components'

interface Props {
    children: React.ReactNode
}

export default function layout({children}: Props) {
  return (
    <div className='flex w-full'>
      <div className='flex min-h-screen w-full flex-col'>
        <Navbar />
        <div className='mt-20'>

          {children}
        </div>
        <Footer />
      </div>
    </ div>
  )
}
