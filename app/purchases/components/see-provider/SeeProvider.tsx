'use client'
import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import {UserIcon, QueueListIcon } from "@heroicons/react/24/outline"
import useSWR from 'swr'
import { getProviderById } from '../../services/purchase.services'
import { convertToCOP } from '../../utils'
import { ScrollArea } from '@/components/ui/scroll-area'
import { urlProvider } from '@/app/providers/services/provider.services'


interface Props {
  id: string
}

export default function SeeProvider({id}: Props) {
  const {data:provider} = useSWR(`${urlProvider}/${id}/get_provider`, getProviderById)
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='ghost' className=""><UserIcon className="w-4 h-4 mr-2"/> <span>Ver Proveedor</span></Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Proveedor de la compra</DialogTitle>
          <DialogDescription>
            Adelante información relacionada con el proveedor.
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[200px] w-[350px] rounded-md border p-2">
          <div className="grid gap-4">


            {   
            provider!==undefined ? (
                <div key={provider.id} className='p-2 border rounded'>
                    <div>
                        <p className='capitalize font-medium'>{provider.supply.name}</p>
                        <p className='text-sm'>Empresa:  {provider.supply.company}</p>
                        <p className='text-sm'>Correo: {provider.supply.email}</p>
                        <p className='text-sm'>Telefono:  {provider.supply.phone}</p>
                    </div>
                </div>
          ):''
                
            }
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}