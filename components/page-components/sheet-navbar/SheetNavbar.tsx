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
import { LayoutDashboard, Wallet, ShoppingBag, Pizza, Beef, Briefcase, Fingerprint, Users, Settings } from 'lucide-react'
import { useAuth } from '@/context/auth-context/AuthContextProvider'
import { Tooltip } from '@mui/material'


const menuItems = [
  {
    id: 2,
    name: "Ventas",
    icon: <Wallet size={18} />,
    url: Routes.CREATESALE,
    permission: 'ventas'
  },
  {
    id: 3,
    name: "Compras",
    icon: <ShoppingBag size={18} />,
    url: Routes.CREATEPURCHASE,
    permission: 'compras'
  },
  {
    id: 4,
    name: "Productos",
    icon: <Pizza size={18} />,
    url: Routes.CREATEPRODUCT,
    permission: 'productos'
  },
  {
    id: 5,
    name: "Insumos",
    icon: <Beef size={18} />,
    url: Routes.SUPPLIES,
    permission: 'insumos'
  },
  {
    id: 6,
    name: "Proveedores",
    icon: <Briefcase size={18} />,
    url: Routes.CREATEPROVIDER,
    permission: 'proveedores'
  }
]


export default function SheetNavbar() {
  const [drawer, setDrawer] = useState(false)
  const {data: session} = useSession()
  const {isDrawer, SetDrawer} = useAuth()

  return (
    <div className={`bg-blue-600 px-3 transition ${isDrawer ? 'w-[400px]': ''} hidden md:block`}>
         <div className='flex flex-row items-start gap-4 text-white pt-5'>
            <Image src={SoffLogo} alt='logo soff'/>
            <div className={`${isDrawer ? 'block': 'hidden'}`}>
               <p className={`text-1xl font-bold`}>SOFF</p>
               <p className={`text-[12px] `}>Systematization Of Fast Food</p>
            </div>
        </div>
        <div className='flex flex-col justify-between w-full text-white mt-6'>
         {
            session && session.user ? (
              <Tooltip placement="right" title="Dashboard" arrow>
               <Link href={Routes.DASHBOARD} className='flex items-center gap-4 p-3 rounded hover:bg-blue-800'>
                  <LayoutDashboard size={18} />
                  <p className={`${isDrawer ? 'block': 'hidden'} text-[14px]`}>Dashboard</p>
               </Link>
              </Tooltip>
            ): ""
         }
            {
              menuItems.map((item) => {
                if(session && session.user && session?.user.permissions.includes(item.permission)){
                  return (
                    <Tooltip placement="right" key={item.id} title={item.name} arrow>
                      <Link key={item.id} href={item.url} className='flex items-center gap-4 p-3 rounded hover:bg-blue-800'>
                        {item.icon}
                        <p className={`${isDrawer ? 'block': 'hidden'} text-[14px]`}>{item.name}</p>
                      </Link>
                    </Tooltip>
                  )
                }
                return null
              })
            }
            {
              session && session.user && session?.user.permissions.includes("configuracion") ? (
                <Collapsible
                  open={drawer}
                  onOpenChange={setDrawer}
                  className="w-full space-y-2"
                >
                  <CollapsibleTrigger asChild>
                      <Tooltip  placement="right" title="Configuración" arrow>
                        <div className='w-full cursor-pointer flex items-center justify-between gap-4 p-3 rounded hover:bg-blue-800'>
                            <div className='flex items-center gap-4'>
                              <Settings size={18} />
                              <p className={`${isDrawer ? 'block': 'hidden'} text-[14px]`}>Configuración</p>
                            </div>
                          <ChevronDownIcon className={`transition ease-in-out w-4 h-4 ${isDrawer ?  'rotate-180': 'rotate-0 hidden'}`} />
                        </div>
                      </Tooltip>
                    </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-2">
                    <Tooltip  placement="right" title="Roles" arrow>
                      <Link href={Routes.ROLES} className='flex items-center gap-4 p-3 rounded hover:bg-blue-800'>
                        <Fingerprint size={18} />
                        <p className={`${isDrawer ? 'block': 'hidden'} text-[14px]`}>Roles</p>
                      </Link>
                    </Tooltip>
                    <Tooltip  placement="right" title="Usuarios" arrow>
                      <Link href={Routes.USERS} className='flex items-center gap-4 p-3 rounded hover:bg-blue-800'>
                        <Users size={18} />
                        <p className={`${isDrawer ? 'block': 'hidden'} text-[14px]`}>Usuarios</p>
                      </Link>
                    </Tooltip>
                  </CollapsibleContent>
                </Collapsible>
              ) : ""
            }
        </div>
    </div>
  )
}
