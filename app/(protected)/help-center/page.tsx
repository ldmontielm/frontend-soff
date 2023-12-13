import React from 'react'
import { BanknotesIcon, LockClosedIcon, BriefcaseIcon, UserGroupIcon, SwatchIcon, ShoppingBagIcon, CakeIcon, ArrowLeftOnRectangleIcon} from '@heroicons/react/24/outline'
import Link from 'next/link'
import { Routes } from '@/models/routes.models'
import {
  Wallet,
  ShoppingBag,
  Pizza,
  Beef,
  Briefcase,
  Fingerprint,
  Users,
  ShieldCheck,
} from "lucide-react";


const listManuales = [
  {
    "id": 1,
    "name": "Ventas",
    "icon": <Wallet size={20} color='#6f6f6f' />,
    "text": "",
    "link": `${Routes.CREATESALE}/manual`
  },
  {
    "id": 2,
    "name": "Compras",
    "icon": <ShoppingBag size={20} color='#6f6f6f' />,
    "text": "",
    "link": `${Routes.CREATEPURCHASE}/manual`
  },
  {
    "id": 3,
    "name": "Productos",
    "icon": <Pizza size={20} color='#6f6f6f' />,
    "text": "",
    "link": `${Routes.CREATEPRODUCT}/manual`
  },
  {
    "id": 4,
    "name": "Insumos",
    "icon": <Beef size={20} color='#6f6f6f' />,
    "text": "",
    "link": `${Routes.SUPPLIES}/manual`
  },
  {
    "id": 5,
    "name": "Proveedores",
    "icon": <Briefcase size={20} color='#6f6f6f' />,
    "text": ""
  },
  {
    "id": 6,
    "name": "Roles",
    "icon": <Fingerprint size={20} color='#6f6f6f' />,
    "text": "",
    "link": `${Routes.ROLES}/manual`
  },
  {
    "id": 7,
    "name": "Usuarios",
    "icon": <Users size={20} color='#6f6f6f' />,
    "text": "",
    "link": `${Routes.USERS}/manual`
  },
  {
    "id": 8,
    "name": "Autenticación",
    "icon": <ShieldCheck size={20} color='#6f6f6f' />,
    "text": "",
    "link": `${Routes.HELPCENTER}/manual`
  },
]

export default function page() {
  return (
    <div className="mx-auto max-w-7xl p-4">
      <div className='mb-5'>
        <p className='scroll-m-20 text-3xl font-extrabold tracking-tight transition-colors first:mt-0'>Centro de ayuda</p>
        <p className="leading-7 [&:not(:first-child)]:mt-1 text-gray-500">¡Aquí encontrarás los manuales de usuario de cada módulo!</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-10">
        {
          listManuales.map(manual => (
            <div key={manual.id}>
              <Link href={`${manual.link}`}
              className="flex flex-col space-y-2 justify-between border rounded bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary shadow-md [&:has([data-state=checked])]:border-primary"
              >
                {manual.icon}
                <p className='font-semibold'>{manual.name}</p>
                <p className='text-sm'>Ir al manual técnico de {manual.name}, aprender funcionalidades.</p>
              </Link>
            </div>
          ))
        }
        {/* <Link href={}
          className="flex flex-col space-y-2 justify-between border rounded bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary shadow-md [&:has([data-state=checked])]:border-primary"
          >
            <ShieldCheck size={20} color='#6f6f6f' />
            <p className='font-semibold'>Autenticación</p>
            <p className='text-sm'>Ir al manual técnico de Autenticación, aprender funcionalidades.</p>
          </Link> */}
      </div>
    </div>
  )
}