'use client'

import React from 'react'
import {Profile} from '../profile'
import { Notification } from '../notification'
import { Sidebar } from '..'
import { Button } from '@/components/ui/button'
import { PanelLeftOpen, PanelLeftClose } from 'lucide-react'
import { useAuth } from '@/context/auth-context/AuthContextProvider'

export default function Navbar() {
  const {SetDrawer, isDrawer} = useAuth()
  return (
    <div className='border-b  py-2 w-full bg-white' >
      <div className='mx-auto flex items-center gap-4 justify-between px-4'>
        <div className='flex items-center gap-2'>
          <Sidebar />
          <Button size='icon' variant='outline' className='hidden md:flex' onClick={() => SetDrawer(!isDrawer)}>
            {
              !isDrawer ? (
                <PanelLeftOpen size={18} color='#6f6f6f' />
              ) : (
                <PanelLeftClose size={18} color='#6f6f6f' />
              )
            }
          </Button>
          <p className='font-medium ml-2'>Hola, Bienvenido de nuevo.</p>
        </div>
        <div className='flex items-center gap-4'>
          <Notification/>
          <Profile />
        </div>
      </div>
    </div>
  )
}
