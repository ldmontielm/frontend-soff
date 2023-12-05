import React from 'react'
import Clock from '@/app/(protected)/supplies/components/header-module/Clock'
export default function HeaderModule() {
  return (
    <div className='mb-5'>
      <p className='scroll-m-20 text-3xl font-extrabold tracking-tight transition-colors first:mt-0'>Roles</p>
      <div className='flex justify-between items-center'>
      <p className="leading-7 [&:not(:first-child)]:mt-1 text-gray-500">¡Aquí tienes una lista de todos los roles registrados!</p>
      <span className='text-right text-3xl'><Clock/></span>
      </div>
    </div>
  )
}
