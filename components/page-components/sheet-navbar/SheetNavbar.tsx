'use client'
import React, {useState} from 'react'
import { Bars3BottomLeftIcon } from '@heroicons/react/24/outline'
import { Button } from "@/components/ui/button"
import { Routes } from '@/models/routes.models'
import SoffLogo from "@/public/soff.svg"
import { Separator } from "@/components/ui/separator"
import Image from 'next/image'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {ChartPieIcon, BanknotesIcon, Cog6ToothIcon, Square3Stack3DIcon, LockClosedIcon, ChevronRightIcon, ChevronDownIcon,BriefcaseIcon, UserGroupIcon, SwatchIcon, ShoppingBagIcon, CakeIcon} from '@heroicons/react/24/outline'
import Link from 'next/link'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

const menuItems = [
  {
    id: 1,
    name: "Dashboard",
    icon: <ChartPieIcon className='w-6 h-6' />,
    url: '/'
  },
  {
    id: 2,
    name: "Ventas",
    icon: <BanknotesIcon className='w-6 h-6' />,
    url: Routes.CREATESALE
  },
  {
    id: 3,
    name: "Compras",
    icon: <ShoppingBagIcon className='w-6 h-6' />,
    url: Routes.CREATEPURCHASE
  },
  {
    id: 4,
    name: "Productos",
    icon: <CakeIcon className='w-6 h-6' />,
    url: Routes.CREATEPRODUCT
  },
  {
    id: 5,
    name: "Insumos",
    icon: <SwatchIcon className='w-6 h-6' />,
    url: Routes.CREATEPRODUCT
  },
  {
    id: 6,
    name: "Proveedores",
    icon: <BriefcaseIcon className='w-6 h-6' />,
    url: Routes.CREATEPROVIDER
  },
  // {
  //   id: 7,
  //   name: "Usuarios",
  //   icon: <UserGroupIcon className='w-6 h-6' />,
  // }
]


export default function SheetNavbar() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant='outline' size='icon'>
          <Bars3BottomLeftIcon className='w-4 h-4' />
        </Button>
      </SheetTrigger>
      <SheetContent side='left'>
        <SheetHeader className='flex flex-row items-end gap-4'>
          <div>
            <Image src={SoffLogo} alt='logo soff' />
          </div>
          <div className='flex flex-col sm:items-start'>
            <p className='text-2xl font-bold'>SOFF</p>
            <p className='text-sm font-semibold'>System Optimized Fast Food</p>
          </div>
        </SheetHeader>
        <Separator className="my-4" />
        <div className='flex flex-col w-full'>
          {
            menuItems.map((item) => (
              <Link key={item.id} href={item.url} className='flex items-center gap-4 p-3 rounded hover:bg-gray-100'>{item.icon}<p>{item.name}</p></Link>
            ))
          }
          <Collapsible
            open={isOpen}
            onOpenChange={setIsOpen}
            className="w-full space-y-2 "
          >
            <CollapsibleTrigger asChild>
                <div className='w-full cursor-pointer flex items-center justify-between gap-4 p-3 rounded hover:bg-gray-100'>
                  <div className='flex items-center gap-4'>
                    <Cog6ToothIcon className='w-6 h-6' />
                    <p>Configuración</p>
                  </div>
                  <ChevronDownIcon className={`transition ease-in-out w-4 h-4 ${isOpen ?  'rotate-180': 'rotate-0'}`} />
                </div>
              </CollapsibleTrigger>
            <CollapsibleContent className="space-y-2">
              <Link href={Routes.CREATESALE} className='flex items-center gap-4 p-3 rounded hover:bg-gray-100'><LockClosedIcon className='ml-6 w-6 h-6' /><p>Roles</p></Link>
              <Link href={Routes.CREATESALE} className='flex items-center gap-4 p-3 rounded hover:bg-gray-100'><Square3Stack3DIcon className='ml-6 w-6 h-6' /><p>Permisos</p></Link>
              <Link href={Routes.CREATESALE} className='flex items-center gap-4 p-3 rounded hover:bg-gray-100'><UserGroupIcon className='ml-6 w-6 h-6' /><p>Usuarios</p></Link>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </SheetContent>
    </Sheet>
  )
}
