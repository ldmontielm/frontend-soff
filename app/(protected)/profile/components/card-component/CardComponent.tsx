'use client'

import React from 'react'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import ImageProfile from '@/public/profile.png'
import { CheckBadgeIcon } from '@heroicons/react/24/solid'
import { BoltIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import { useSession } from 'next-auth/react'

export default function CardComponent() {
    const {data: session} = useSession()

    return (
        <div>
            <div className='h-52 relative rounded bg-gradient-to-r from-violet-700 to-indigo-700'>
                <div className='w-28 absolute h-28 rounded-full -bottom-10 ring-4 left-5 ring-white overflow-hidden'>
                    <Image width='700' height='700' src={ImageProfile} alt='foto de perfil' />
                </div>
            </div>
            <div>
                {
                    session?.user === undefined ? (
                      <div className='w-full h-28 flex  gap-4 items-center flex-col justify-center'> 
                        <svg aria-hidden="true" className="inline w-5 h-5 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                        </svg>
                        <span className='animate-pulse'>Cargando Usuario...</span>
                      </div>
                    ) : (
                        <>
                            <div className='mt-14 space-y-1'>
                                <div className='flex items-center gap-2'>
                                    <h2 className='font-bold text-2xl'>{session.user.name}</h2>
                                    <CheckBadgeIcon className="w-5 h-5 text-blue-500" />
                                </div>
                                <div className="flex items-center gap-2">
                                    <EnvelopeIcon className="w-4 h-4" />
                                    <p className="text-neutral-700">{session.user.email}</p>
                                </div>
                                <div>
                                    <p className='italic text-sm text-neutral-600'>@Administrador</p>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center gap-2 text-sm">
                                    <BoltIcon className="w-4 h-4" />
                                    <p className="font-semibold capitalize ">Permisos asignados</p>
                                </div>
                                <div className='my-4 gap-2 flex text-sm flex-wrap'>
                                    {
                                        session.user.permissions.map((permission, i) => (
                                            <p key={i} className='px-3 w py-2 font-medium text-neutral-700 capitalize rounded-full bg-neutral-100'>{permission}</p>
                                            ))
                                        }
                                </div>
                            </div>
                        </>
                    )
                }
                
            </div>
        </div>
    )
}