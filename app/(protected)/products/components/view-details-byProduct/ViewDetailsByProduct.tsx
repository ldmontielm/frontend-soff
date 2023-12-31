'use client'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { QueueListIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import useSWR from 'swr'
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table"
import { RoutesApi } from '@/models/routes.models'
import { ScrollArea } from "@/components/ui/scroll-area"
import { formattedNumber, formattedPriceSupply } from '../../utils'
  interface Props {
    id: string
  }

export default function ViewDetailsByProduct({id}: Props) {
  const [open, setOpen] = useState(false)
  const {data: product} = useSWR(`${RoutesApi.PRODUCTS}/${id}`)
  const {data: details} = useSWR(`${RoutesApi.PRODUCTS}/${id}/details`)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>  
      <Button variant='ghost' className='w-full'>
        <QueueListIcon className="w-4 h-4 mr-2" onClick={() => setOpen(true)}/>
        <span>Ver detalle</span>
      </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] sm:max-h-[500px]">
        <div className='relative w-full bg-white col-span-8'>
          <div className='w-full text-center mb-1 p-2'>
            <p className='font-bold'>Detalles del producto</p>
            <p className='text-sm'>Aquí puedes ver el detalle de cada producto</p>
          </div>
          <hr />
          <div className='w-full'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mt-2'>
              <div className=' w-full text-center'>
                <p className='font-bold text-sm '>Nombre</p>
                <p className='text-sm text-gray-400'>{product?.name}</p>  
              </div>
              <div className=' w-full text-center'>
                <p className='font-bold text-sm'>Costo</p>
                <p className=' text-sm text-gray-400'>{formattedNumber(product?.price)}</p>
              </div>
              <div className=' w-full text-center'>
                <p className='font-bold text-sm'>Precio de venta</p>
                <p className=' text-sm text-gray-400'>{formattedNumber(product?.sale_price)}</p>
              </div>
            </div>
          </div>
        </div>

        <div className='relative w-full bg-white col-span-8 border rounded'>
            <ScrollArea className='h-[200px]'>
          <Table >
            <TableHeader>
              <TableRow>
                <TableHead>Insumo</TableHead>
                <TableHead>Cantidad</TableHead>
                <TableHead>Unidad de medida</TableHead>
                <TableHead>Precio Unitario</TableHead>
                <TableHead>Subtotal</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {
                Array.isArray(details) && details.map((detail) => (
                  <TableRow key={detail.supply_id}>
                    <TableCell className="font-medium capitalize">{detail.supply}</TableCell>
                    <TableCell>{detail.amount_supply}</TableCell>
                    <TableCell>{detail.unit_measure}</TableCell>
                    <TableCell>{formattedPriceSupply(detail.supply_price)}</TableCell>
                    <TableCell>{formattedNumber(detail.subtotal)}</TableCell>
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