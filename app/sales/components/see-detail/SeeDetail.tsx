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
import { urlSales, getOrdersBySaleId } from '../../services/sale.services'
import { convertToCOP } from '../../utils'
import { ScrollArea } from '@/components/ui/scroll-area'


interface Props {
  id: string
}

export default function SeeDetail({id}: Props) {
  const {data:orders} = useSWR(`${urlSales}/${id}/orders`, getOrdersBySaleId)
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='ghost' className=""><QueueListIcon className="w-4 h-4 mr-2"/> <span>Ver detalle</span></Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Detalle de venta</DialogTitle>
          <DialogDescription>
            Adelante un detalle de todos los productos vendidos en esta venta.
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[200px] w-[350px] rounded-md border p-2">
          <div className="grid gap-4">
            {
              Array.isArray(orders) && orders.map((order) => (
                <div key={order.id} className='p-2 border rounded'>
                  <div>
                    <p className='capitalize font-medium'>{order.product}</p>
                    <p className='text-sm'>Cantidad: {order.amount_product}</p>
                    <p className='text-sm'>Total: ${convertToCOP(order.total)}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </ScrollArea>
        <DialogFooter>
          <Button type="submit">Save infor</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
