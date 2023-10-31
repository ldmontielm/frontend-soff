'use client'

import React from 'react'
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import Image from 'next/image'
import ImageProfile from '@/public/profile.png'
import { useAuth } from '@/context/auth-context/AuthContextProvider'
import Link from 'next/link'
import { Bars3BottomRightIcon, UserCircleIcon, InformationCircleIcon, ArrowLeftOnRectangleIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation'


const links = [
  {
    id: 1,
    name: "Perfil",
    link: '/profile',
    icon: <UserCircleIcon className='w-5 h-5 stroke-gray-700' />
  },
  {
    id: 4,
    name: "Centro de ayuda",
    link: '/helpcenter',
    icon: <InformationCircleIcon className='w-5 h-5 stroke-gray-700' />
  },
  {
    id: 5,
    name: "Cerrar sesión",
    link: '',
    icon: <ArrowLeftOnRectangleIcon className='w-5 h-5 stroke-gray-700' />
  }
]


export default function Profile() {
  const {user, logout} = useAuth()
  const router = useRouter()


  return (
    <Popover>
        <PopoverTrigger>
            <div className='flex items-center gap-2 hover:bg-neutral-100 p-2 rounded relative'>
                <Image src={ImageProfile} alt='image profile' width={32} height={32}/>
                <div className='w-3 h-3 bg-green-500 rounded-full absolute bottom-1 right-2 ring ring-white'></div>
            </div>
        </PopoverTrigger>
        <PopoverContent align='end' className='dark:bg-neutral-900 sm:w-96 mt-3 text-sm pt-6'>
            <div className='flex items-center gap-4'>
              <div className='flex items-center gap-2 w-fit py-2 rounded relative'>
                  <Image src={ImageProfile} alt='image profile' width={46} height={46}/>
                  <div className='w-3 h-3 bg-green-500 rounded-full absolute bottom-1 right-2 ring ring-white'></div>
              </div>
              <div>
                <p className='font-semibold capitalize'>{user.name}</p>
                <p className='text-neutral-700'>{user.email}</p>
              </div>
            </div>
            <hr className='mt-5' />
            <div className='mt-4'>
              <Link href={'/profile'}>
                <span className={`flex w-full items-center gap-2 rounded cursor-pointer px-3 py-3 hover:bg-gray-100 dark:hover:bg-neutral-700`}>
                  <UserCircleIcon className='w-5 h-5 stroke-gray-700' />
                  <p>Perfil</p>
                </span>
              </Link>
              <div onClick={() => {
                logout()
                router.push('/auth/login')
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
