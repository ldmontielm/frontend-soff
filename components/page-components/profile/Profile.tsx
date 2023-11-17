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

export default function Profile() {
  const {data: session} = useSession()
  const router = useRouter()

  return (
    <Popover>
        <PopoverTrigger>
            <div className='flex items-center gap-2 hover:bg-neutral-100 p-2 rounded relative'>
                <Image src={ImageProfile} alt='image profile' width={32} height={32}/>
                <div className='w-3 h-3 bg-green-500 rounded-full absolute bottom-1 right-2 ring ring-white'></div>
            </div>
        </PopoverTrigger>
        <PopoverContent align='end' className='dark:bg-neutral-900 sm:w-96 mt-2 text-sm pt-6'>
            <div className='flex items-center gap-4'>
              <div className='flex items-center gap-2 w-fit py-2 rounded relative'>
                  <Image src={ImageProfile} alt='image profile' width={46} height={46}/>
                  <div className='w-3 h-3 bg-green-500 rounded-full absolute bottom-1 right-2 ring ring-white'></div>
              </div>
              <div>
                <p className='font-semibold capitalize'>{session?.user?.name}</p>
                <p className='text-neutral-700'>{session?.user?.email}</p>
              </div>
            </div>
            <div className='mt-4'>
              <Link href={'/profile'}>
                <span className={`flex w-full items-center gap-2 rounded cursor-pointer px-3 py-3 hover:bg-gray-100 dark:hover:bg-neutral-700`}>
                  <UserCircleIcon className='w-5 h-5 stroke-gray-700' />
                  <p>Perfil</p>
                </span>
              </Link>
              <div onClick={() => {
                signOut()
                deleteCookie("token")
                router.push('/api/auth/signin')
              }}>
                <span className={`flex w-full items-center gap-2 rounded cursor-pointer px-3 py-3 hover:bg-gray-100 dark:hover:bg-neutral-700`}>
                  <ArrowLeftOnRectangleIcon className='w-5 h-5 stroke-gray-700' />
                  <p>Cerrar sesión</p>
                </span>
              </div>
            </div>
        </PopoverContent>
    </Popover>
  )
}
