'use client'

import React from 'react'
import { SheetNavbar } from '..'
import { useAuth } from '@/context/auth-context/AuthContextProvider'
import { Button } from '@/components/ui/button'
import { BellIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation'
import {Profile} from '../profile'

export default function Navbar() {
  const { isAuthenticated , logout, user } = useAuth()
  const router = useRouter()

  return (
    <div className='border py-5'  >
      <div className='mx-auto flex items-center gap-4 justify-between  px-4'>
        <div className='flex items-center gap-2'>
          <SheetNavbar />
          <p className='font-medium capitalize'>{`Hola ${user.name} 👋`}</p>
        </div>
        <div className='flex items-center gap-2'>
          <Button variant='ghost' size='icon'>
            <BellIcon className='w-4 h-4' />
          </Button>
          <Profile />
        </div>
      </div>
    </div>
  )
}
