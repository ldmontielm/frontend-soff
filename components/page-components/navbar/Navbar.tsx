import React from 'react'
import { SheetNavbar } from '..'
export default function Navbar() {
  return (
    <div className='border py-5'  >
      <div className='mx-auto flex items-center gap-4  px-4'>
        <SheetNavbar />
        <p className='font-medium'>Hola Marcus Levin 👋</p>
      </div>
    </div>
  )
}
