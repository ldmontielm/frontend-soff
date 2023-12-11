'use client'

import React from 'react'
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import Image from 'next/image'
import ImageProfile from '@/public/profile.png'
import Link from 'next/link'
import { UserCircleIcon, ArrowLeftOnRectangleIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation'
import { signOut, useSession } from 'next-auth/react'
import { deleteCookie } from 'cookies-next'
import { Separator } from '@/components/ui/separator'


export default function Profile() {
  const {data: session} = useSession()
  const router = useRouter()

  return (
    <Popover>
        <PopoverTrigger>
            <div className='flex items-center gap-2 p-2 rounded'>
                <Image src={ImageProfile} alt='image profile' width={32} height={32}/>
            </div>
        </PopoverTrigger>
        <PopoverContent align='end' className='dark:bg-neutral-900 sm:w-64 mt-4 text-sm pt-4'>
            <div className='flex items-center gap-4'>
              <div>
                <p className='font-semibold capitalize'>{session?.user?.name}</p>
                <p className='text-neutral-700'>{session?.user?.email}</p>
              </div>
            </div>
            <div className='mt-4'>
              <Link href={'/profile'}>
                <span className={`flex w-full items-center gap-2 rounded cursor-pointer py-3 hover:text-gray-500`}>
                  <p>Perfil</p>
                </span>
              </Link>
              <Link href={'/help-center'}>
                <span className={`flex w-full items-center gap-2 rounded cursor-pointer py-3 hover:text-gray-500`}>
                  <p>Centro de Ayuda</p>
                </span>
              </Link>
              <Separator className='my-2' orientation='horizontal'/>
              <div onClick={() => {
                signOut()
                deleteCookie("token")
                router.push('/api/auth/signin')
              }}>
                <span className={`flex w-full items-center gap-2 rounded cursor-pointer py-3 hover:text-gray-500`}>
                  <p>Cerrar sesión</p>
                </span>
              </div>
            </div>
        </PopoverContent>
    </Popover>
  )
}
