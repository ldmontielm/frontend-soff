import React from 'react'
import {Profile} from '../profile'
import { Notification } from '../notification'
import { Sidebar } from '..'

export default function Navbar() {

  return (
    <div className='border-b  py-2 w-full bg-white'>
      <div className='mx-auto flex items-center gap-4 justify-between px-4'>
        <Sidebar />
        <p className='font-medium ml-2'>Hola, Bienvenido de nuevo.</p>
        <div className='flex items-center gap-4'>
          <Notification/>
          <Profile />
        </div>
      </div>
    </div>
  )
}
