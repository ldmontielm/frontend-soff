'use client'

import React, {useState} from 'react'
import { Bars3BottomLeftIcon } from '@heroicons/react/24/outline'
import { Button } from "@/components/ui/button"
import { Routes } from '@/models/routes.models'
import SoffLogo from "@/public/logo.svg"
import Image from 'next/image'
import { Sheet, SheetContent,  SheetHeader, SheetTrigger } from "@/components/ui/sheet"
import {ChartPieIcon, BanknotesIcon, Cog6ToothIcon,  LockClosedIcon, ArrowLongRightIcon, ChevronDownIcon,BriefcaseIcon, UserGroupIcon, SwatchIcon, ShoppingBagIcon, CakeIcon} from '@heroicons/react/24/outline'
import Link from 'next/link'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { useSession } from 'next-auth/react'

const menuItems = [
  {
    id: 2,
    name: "Ventas",
    icon: <BanknotesIcon className='w-6 h-6' />,
    url: Routes.CREATESALE,
    permission: 'ventas'
  },
  {
    id: 3,
    name: "Compras",
    icon: <ShoppingBagIcon className='w-6 h-6' />,
    url: Routes.CREATEPURCHASE,
    permission: 'compras'
  },
  {
    id: 4,
    name: "Productos",
    icon: <CakeIcon className='w-6 h-6' />,
    url: Routes.CREATEPRODUCT,
    permission: 'productos'
  },
  {
    id: 5,
    name: "Insumos",
    icon: <SwatchIcon className='w-6 h-6' />,
    url: Routes.SUPPLIES,
    permission: 'insumos'
  },
  {
    id: 6,
    name: "Proveedores",
    icon: <BriefcaseIcon className='w-6 h-6' />,
    url: Routes.CREATEPROVIDER,
    permission: 'proveedores'
  }
]


export default function SheetNavbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [drawer, setDrawer] = useState(false)
  const {data: session} = useSession()

  return (
    <div className={`bg-blue-600 px-4 relative transition ${isOpen ? 'w-[500px]': ''} hidden md:block`}>
         <div className='flex flex-row items-start gap-4 text-white pt-5'>
            <Image src={SoffLogo} alt='logo soff'/>
            <div>
               <p className={`text-1xl font-bold ${isOpen ? 'block': 'hidden'}`}>SOFF</p>
               <p className={`text-[12px] ${isOpen ? 'block': 'hidden'}`}>Systematization Of Fast Food</p>
            </div>
        </div>
        <Button variant='outline' size='icon' className='absolute top-4 -right-4 w-8 h-8 rounded-full shadow-md border-none' onClick={() => setIsOpen(!isOpen)}>
            <ArrowLongRightIcon className={`transition-all w-4 ${isOpen ? 'rotate-180': ''}`} />
        </Button>
        <div className='flex flex-col justify-between w-full text-white mt-6'>
         {
            session && session.user ? (
               <Link href={Routes.DASHBOARD} className='flex items-center gap-4 p-3 rounded hover:bg-blue-800'>
                  <ChartPieIcon className='w-6 h-6' />
                  <p className={`${isOpen ? 'block': 'hidden'}`}>Dashboard</p>
               </Link>
            ): ""
         }
            {
              menuItems.map((item) => {
                if(session && session.user && session?.user.permissions.includes(item.permission)){
                  return (
                     <Link key={item.id} href={item.url} className='flex items-center gap-4 p-3 rounded hover:bg-blue-800'>
                        {item.icon}
                        <p className={`${isOpen ? 'block': 'hidden'}`}>{item.name}</p>
                     </Link>
                  )
                }
                return null
              })
            }
            {
              session && session.user && session?.user.permissions.includes("configuraciones") ? (
                <Collapsible
                  open={drawer}
                  onOpenChange={setDrawer}
                  className="w-full space-y-2"
                >
                  <CollapsibleTrigger asChild>
                      <div className='w-full cursor-pointer flex items-center justify-between gap-4 p-3 rounded hover:bg-blue-800'>
                        <div className='flex items-center gap-4'>
                          <Cog6ToothIcon className='w-6 h-6' />
                          <p className={`${isOpen ? 'block': 'hidden'}`}>Configuración</p>
                        </div>
                        <ChevronDownIcon className={`transition ease-in-out w-4 h-4 ${isOpen ?  'rotate-180': 'rotate-0 hidden'}`} />
                      </div>
                    </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-2">
                    <Link href={Routes.ROLES} className='flex items-center gap-4 p-3 rounded hover:bg-blue-800'><LockClosedIcon className={`${isOpen ? 'ml-6': ''} w-6 h-6`} /><p className={`${isOpen ? 'block': 'hidden'}`}>Roles</p></Link>
                    <Link href={Routes.USERS} className='flex items-center gap-4 p-3 rounded hover:bg-blue-800'><UserGroupIcon className={`${isOpen ? 'ml-6': ''} w-6 h-6`} /><p className={`${isOpen ? 'block': 'hidden'}`}>Usuarios</p></Link>
                  </CollapsibleContent>
                </Collapsible>
              ) : ""
            }
        </div>
    </div>
  )
}
