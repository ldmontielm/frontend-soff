import React from 'react'
import Clock from './Clock'
import { ArrowSmallLeftIcon } from '@heroicons/react/24/outline'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Tooltip } from '@mui/material'
import { Routes } from '@/models/routes.models'

export default function HeaderModule() {
  return (
    <div className='mb-5'>
      <p className='scroll-m-20 text-3xl font-extrabold tracking-tight transition-colors first:mt-0'>Productos</p>
      <div className='flex justify-between items-center'>
        <p className="leading-7 [&:not(:first-child)]:mt-1 text-gray-500">¡Aquí tienes una lista de todos los productos registrados!</p>
        <span className='text-right text-3xl'><Clock/></span>
      </div>
    </div>
  )
}

export function HeaderModuleDetail() {
  return (
    <div className='mb-5'>
      <p className='scroll-m-20 text-3xl font-extrabold tracking-tight transition-colors first:mt-0'>Productos</p>
      <p className="leading-7 [&:not(:first-child)]:mt-1 text-gray-500">¡Aquí puedes registrar tu producto y agregar los detalles para la receta!</p>
    </div>
  )
}

export function HeaderModuleManual() {
  return (
    <div className='w-full flex justify-between items-center'>
      <div className='mb-5'>
        <p className='scroll-m-20 text-3xl font-extrabold tracking-tight transition-colors first:mt-0'>Manual de usuario</p>
        <p className="leading-7 [&:not(:first-child)]:mt-1 text-gray-500">Este manual le guiará en la navegación del módulo de productos.</p>
      </div>
      <div className='flex justify-end mr-5'>
        <Tooltip placement="top" title="Volver a productos." arrow>
          <Link href={`${Routes.CREATEPRODUCT}`} >  
            <Button variant="outline">
              <ArrowSmallLeftIcon className='w-5 h-5'/>
            </Button>
          </Link>
        </Tooltip>
      </div>
    </div>
  )
}