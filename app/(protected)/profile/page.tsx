'use client'

import React from 'react'
import { CardComponent } from './components'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useAuth } from '@/context/auth-context/AuthContextProvider'
import { EnvelopeIcon, BoltIcon, ArrowLongRightIcon, FingerPrintIcon } from '@heroicons/react/24/outline'
import {CheckBadgeIcon} from '@heroicons/react/24/solid'
import { Skeleton } from "@/components/ui/skeleton"


export default function page() {
    const {user} = useAuth()
    return (
      <div className='w-full mx-auto max-w-7xl p-4'>
          <div className='mt-5'>  
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-4'>
              <div className='md:col-span-3'>
                <Card className='border rounded-lg w-full'>
                    {
                        user.name === '' ? (
                            <div className='p-5'>
                                <div className='flex flex-col gap-2'>
                                    <div  className='flex items-center gap-2'>
                                        <Skeleton className="w-32 animate-pulse h-2 rounded-full" />
                                        <Skeleton className="w-3 animate-pulse h-2 rounded-full" />
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <Skeleton className="w-3 animate-pulse h-2 rounded-full" />
                                        <Skeleton className="w-[200px] animate-pulse h-2 rounded-full" />
                                    </div>
                                </div>
                                <div className='mt-6'>
                                    <div className='flex items-center gap-2'>
                                        <Skeleton className="w-3 animate-pulse h-2 rounded-full" />
                                        <Skeleton className="w-[150px] animate-pulse h-2 rounded-full" />
                                    </div>
                                    <div className='flex flex-col gap-2 ml-5 mt-5'>
                                        <Skeleton className="w-[150px] animate-pulse h-2 rounded-full" />
                                        <Skeleton className="w-[150px] animate-pulse h-2 rounded-full" />
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <>
                            <CardHeader className='text-sm'>
                                    <div className='flex items-center gap-2'>
                                        <CardTitle>{user.name}</CardTitle>
                                        <CheckBadgeIcon className='w-4 h-4 text-blue-500' />
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <EnvelopeIcon className='w-4 h-4' />
                                        <p className='text-neutral-700'>{user.email}</p>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <FingerPrintIcon className='w-4 h-4' />
                                        <p className='text-neutral-700'>{user.role}</p>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                        <div className='flex items-center gap-2 text-sm'>
                                            <BoltIcon className='w-4 h-4' />
                                            <p className='font-semibold capitalize '>Permisos asignados</p>
                                        </div>
                                    {
                                        user.permissions.map((permission, i) => (
                                            <div key={i} className='flex items-center gap-2 ml-4 text-sm my-1'>
                                                <ArrowLongRightIcon className='w-4 h-4' />
                                                <p className='capitalize' >{permission}{i}</p>
                                            </div>
                                        ))
                                    }
                                </CardContent>
                            </>
                        )
                    }
                </Card>
              </div>
              <div className='md:col-start-4 md:col-end-13'>
              <CardComponent />
              </div>
          </div>
          </div>
      </div>
    )
}