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
import { QueueListIcon } from '@heroicons/react/24/outline'
import useSWR from 'swr'
import { urlPurchases, getOrdersByPurchaseId } from '../../services/purchase.services'
import { convertToCOP } from '../../utils'
import { ScrollArea } from '@/components/ui/scroll-area'


interface Props {
  id: string
}

export default function SeeDetail({id}: Props) {
  const {data:orders} = useSWR(`${urlPurchases}/${id}/orders`, getOrdersByPurchaseId)
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='ghost' className=""><QueueListIcon className="w-4 h-4 mr-2"/> <span>Ver detalle</span></Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Detalle de compra</DialogTitle>
          <DialogDescription>
            Adelante un detalle de todos los insumos comprados.
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[200px] w-[350px] rounded-md border p-2">
          <div className="grid gap-4">
            {
              Array.isArray(orders) && orders.map((order) => (
                <div key={order.id_order} className='p-2 border rounded'>
                  <div>
                    <p className='capitalize font-medium'>{order.supply}</p>
                    <p className='text-sm'>Cantidad: {order.amount_supplies}</p>
                    <p className='text-sm'>Total: ${convertToCOP(order.subtotal)}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}