import React from 'react'
import { Navbar, Footer } from '@/components/page-components'
import {SheetNavbar} from '@/components/page-components'

interface Props {
    children: React.ReactNode
}

export default function layout({children}: Props) {
  return (
    <div className='flex w-full'>
      <div className='flex w-full'>
        <div className='flex w-full'>
          <SheetNavbar />
          <div className='w-full min-h-screen flex-col'>
            <Navbar />
            {children}
            <Footer />
          </div>
        </div>
      </div>
    </ div>
  )
}
