'use client'

import React, {useState} from 'react'
import { Order, Purchase } from '@/app/(protected)/purchases/models/purchase.models'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { QueueListIcon } from '@heroicons/react/24/outline'
import useSWR from 'swr'
import { convertToCOP } from '../../utils'
import {RoutesApi} from '@/models/routes.models'
import {Table,TableBody,TableCell,TableHead,TableHeader,TableRow,} from "@/components/ui/table"
import { ScrollArea } from "@/components/ui/scroll-area"

interface Props {
  purchase: Purchase
  id: string
}

export default function SeeDetail({purchase,id}:Props) {
  const {data:orders} = useSWR(`${RoutesApi.PURCHASES}/${id}/orders`)
  const [open, setOpen] = useState(false)

const date = new Date(purchase.purchase_date)
const formatted = new Intl.DateTimeFormat(['ban', 'id']).format(date)


  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>  
          <div className='flex items-center px-2 w-full cursor-default rounded hover:bg-neutral-100 select-none text-sm py-1.5 transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50' onClick={() => setOpen(true)}>
            <QueueListIcon className="w-4 h-4 mr-2"/> Ver detalle
          </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
          <div className='relative w-full bg-white col-span-8'>
              <div className='w-full text-center mb-1 p-2'>
                <p className='font-bold'>Detalles de la compra</p>
                <p className='text-sm'>Aquí puedes ver el detalle de cada compra</p>
              </div>
              <hr />
              <div className='w-full'>
                <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 mt-2'>
                  <div className='w-full text-center'>
                    <p className='font-bold text-sm '>Factura</p>
                    <p className='text-sm text-gray-400'>{purchase.invoice_number}</p> 
                  </div>
                  <div className='w-full text-center'>
                    <p className='font-bold text-sm '>Proveedor</p>
                    <p className='text-sm text-gray-400'>{purchase.provider}</p>
                  </div>
                  <div className='w-full text-center'>
                    <p className='font-bold text-sm'>Total</p>
                    <p className=' text-sm text-gray-400'>${convertToCOP(purchase.total)}</p>
                  </div>
                  <div className='w-full text-center'>
                    <p className='font-bold text-sm'>Fecha</p>
                    <p className=' text-sm text-gray-400'>{formatted}</p>
                  </div>
              </div>
              </div>
            </div>
          <div className='relative w-full bg-white col-span-8 border rounded'>
            <ScrollArea className='h-[200px]'>
              <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Insumo</TableHead>
                      <TableHead>Cantidad</TableHead>
                      <TableHead>Precio</TableHead>
                      <TableHead>Subtotal</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {
                      Array.isArray(orders) && orders.map((order) => (
                        <TableRow key={order.supply_id}>
                          <TableCell className="font-medium capitalize">{order.supply}</TableCell>
                          <TableCell>{order.amount_supplies}</TableCell>
                          <TableCell>${convertToCOP(order.price_supplies)}</TableCell>
                          <TableCell>${convertToCOP(order.subtotal)}</TableCell>
                        </TableRow>
                      ))
                    }
                  </TableBody>
                </Table>
            </ScrollArea>
          </div>
        </DialogContent>
      </Dialog>
      
  )
}
