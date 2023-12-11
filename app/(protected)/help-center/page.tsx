import React from 'react'
import { BanknotesIcon, LockClosedIcon, BriefcaseIcon, UserGroupIcon, SwatchIcon, ShoppingBagIcon, CakeIcon, ArrowLeftOnRectangleIcon} from '@heroicons/react/24/outline'
import Link from 'next/link'
import { Routes } from '@/models/routes.models'

export default function page() {
  return (
    <div className="mx-auto max-w-7xl p-4">
      <div className='mb-5'>
        <p className='scroll-m-20 text-3xl font-extrabold tracking-tight transition-colors first:mt-0'>Centro de ayuda</p>
        <p className="leading-7 [&:not(:first-child)]:mt-1 text-gray-500">¡Aquí encontrarás los manuales de usuario de cada módulo!</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-10">
        <div>
          <Link href={`${Routes.CREATESALE}/manual`}
          className="flex flex-col items-center justify-between border rounded bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary shadow-md [&:has([data-state=checked])]:border-primary"
          >
            <BanknotesIcon className='w-20 h-20'/>
            <p className='font-bold'>Ventas</p>
          </Link>
        </div>
        <div>
          <Link href={`${Routes.CREATEPURCHASE}/manual`}
          className="flex flex-col items-center justify-between border rounded bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary shadow-md [&:has([data-state=checked])]:border-primary"
          >
            <ShoppingBagIcon className='w-20 h-20'/>
            <p className='font-bold'>Compras</p>
          </Link>
          
        </div>
        <div>
          <Link href={`${Routes.CREATEPRODUCT}/manual`}
          className="flex flex-col items-center justify-between border rounded bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary shadow-md [&:has([data-state=checked])]:border-primary"
          >
            <CakeIcon className='w-20 h-20' />
            <p className='font-bold'>Productos</p>
          </Link>
        </div>
        <div>
        <Link href={`${Routes.SUPPLIES}/manual`}
          className="flex flex-col items-center justify-between border rounded bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary shadow-md [&:has([data-state=checked])]:border-primary"
          >
            <SwatchIcon className='w-20 h-20' />
            <p className='font-bold'>Insumos</p>
          </Link>
        </div>
        <div>
        <Link href={`${Routes.CREATEPROVIDER}/manual`}
          className="flex flex-col items-center justify-between border rounded bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary shadow-md [&:has([data-state=checked])]:border-primary"
          >
            <BriefcaseIcon className='w-20 h-20' />
            <p className='font-bold'>Proveedores</p>
          </Link>
        </div>
        <div>
        <Link href={`${Routes.ROLES}/manual`}
          className="flex flex-col items-center justify-between border rounded bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary shadow-md [&:has([data-state=checked])]:border-primary"
          >
            <LockClosedIcon className='w-20 h-20' />
            <p className='font-bold'>Roles</p>
          </Link>
        </div>
        <div>
        <Link href={`${Routes.USERS}/manual`}
          className="flex flex-col items-center justify-between border rounded bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary shadow-md [&:has([data-state=checked])]:border-primary"
          >
            <UserGroupIcon className='w-20 h-20' />
            <p className='font-bold'>Usuarios</p>
          </Link>
        </div>
        <div>
        <Link href={'/help-center/manual'}
          className="flex flex-col items-center justify-between border rounded bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary shadow-md [&:has([data-state=checked])]:border-primary"
          >
            <ArrowLeftOnRectangleIcon className='w-20 h-20 ' />
            <p className='font-bold'>Iniciar sesión</p>
          </Link>
        </div>
      </div>
    </div>
  )
}