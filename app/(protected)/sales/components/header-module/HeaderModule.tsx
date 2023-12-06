'use client'
import React from 'react'
import { Clock } from '@/app/(protected)/purchases/components'
import { ArrowSmallLeftIcon } from '@heroicons/react/24/outline'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Tooltip } from '@mui/material'
import { Routes } from '@/models/routes.models'

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

export function HeaderModuleManual() {
  return (
    <div className='w-full flex justify-between items-center'>
      <div className='mb-5'>
        <p className='scroll-m-20 text-3xl font-extrabold tracking-tight transition-colors first:mt-0'>Manual de usuario</p>
        <p className="leading-7 [&:not(:first-child)]:mt-1 text-gray-500">Este manual le guiará en la navegación del módulo de Ventas.</p>
      </div>
      <div className='flex justify-end mr-5'>
        <Tooltip placement="top" title="Volver a ventas." arrow>
          <Link href={`${Routes.CREATESALE}`} >  
            <Button variant="outline">
              <ArrowSmallLeftIcon className='w-5 h-5'/>
            </Button>
          </Link>
        </Tooltip>
      </div>
    </div>
  )
}