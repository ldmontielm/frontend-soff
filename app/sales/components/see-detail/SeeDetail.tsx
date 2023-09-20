'use client'
import React,{useState} from 'react'
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
import { DropdownMenuItem } from '@/components/ui/dropdown-menu'


interface Props {
  id: string
}

export default function SeeDetail({id}: Props) {
  const {data:orders} = useSWR(`${urlSales}/${id}/orders`, getOrdersBySaleId)
  const [open, setOpen] = useState(false)
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
          <div className='flex items-center px-2 cursor-default rounded hover:bg-neutral-100 select-none text-sm py-1.5 transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50' onClick={() => setOpen(true)}>
            <QueueListIcon className="w-4 h-4 mr-2"/> Ver detalle
          </div>
        {/* <div className="flex items-center gap-2 p-2"><QueueListIcon className="w-4 h-4 mr-2"/> <span>Ver detalle</span></div> */}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Detalle de venta</DialogTitle>
          <DialogDescription>
            Adelante un detalle de todos los productos vendidos en esta venta.
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[200px] w-full">
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
      </DialogContent>
    </Dialog>
  )
}
