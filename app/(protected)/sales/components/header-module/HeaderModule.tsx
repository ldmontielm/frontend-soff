'use client'
import React from 'react'
import { Clock } from '@/app/(protected)/purchases/components'

export default function HeaderModule() {
  return (
    <div className='mb-5'>
      <p className='scroll-m-20 text-3xl font-extrabold tracking-tight transition-colors first:mt-0'>Ventas</p>
      <div className='flex justify-between items-center'>
        <p className="leading-7 [&:not(:first-child)]:mt-1 text-gray-500">¡Aquí tienes una lista de todas las ventas realizadas!</p>
        <span className='text-right text-3xl'><Clock/></span>
      </div>
    </div>
  )
}

export function HeaderModuleOrders() {
  return (
    <div className='mb-5'>
      <p className='scroll-m-20 text-3xl font-extrabold tracking-tight transition-colors first:mt-0'>Ventas</p>
      <p className="leading-7 [&:not(:first-child)]:mt-1 text-gray-500">¡Aquí puedes registrar una venta y agregar ordenes!</p>
    </div>
  )
}