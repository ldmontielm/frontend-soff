'use client'

import { Button } from '@/components/ui/button'
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger } from "@/components/ui/dialog"
import { QueueListIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import useSWR from 'swr'
import { convertToCOP } from '@/app/products/utils'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { RoutesApi } from '@/models/routes.models'
import { Product } from '../../models/product.models'

  interface Props {
    id: string
    product: Product
  }

export default function ViewDetailsByProduct({id, product}: Props) {
  const [open, setOpen] = useState(false)
  const {data: details} = useSWR(`${RoutesApi.PRODUCTS}/${id}/details`)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>  
      <Button variant='ghost'>
        <QueueListIcon className="w-4 h-4 mr-2 " onClick={() => setOpen(true)}/> <span>Ver detalle</span>
      </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <div className='relative w-full bg-white col-span-8'>
          <div className='w-full text-center mb-1 p-2'>
            <p className='font-bold'>Detalles del producto</p>
            <p className='text-sm'>Aquí puedes ver el detalle de cada producto</p>
          </div>
          <hr />
          <div className='w-full'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mt-2'>
              <div className='my-3 w-full text-center'>
                <p className='font-bold text-sm '>Nombre</p>
                <p className='text-sm text-gray-400'>{product.name}</p>  
              </div>
              <div className='my-3 w-full text-center'>
                <p className='font-bold text-sm'>Costo</p>
                <p className=' text-sm text-gray-400'>${convertToCOP(product.price)}</p>
              </div>
              <div className='my-3 w-full text-center'>
                <p className='font-bold text-sm'>Precio de venta</p>
                <p className=' text-sm text-gray-400'>${convertToCOP(product.sale_price)}</p>
              </div>
            </div>
          </div>
        </div>

        <div className='relative w-full bg-white col-span-8 border rounded'>
          <Table>
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
                    <TableCell>${convertToCOP(detail.supply_price)}</TableCell>
                    <TableCell>${convertToCOP(detail.subtotal)}</TableCell>
                  </TableRow>
                ))
              }
            </TableBody>
          </Table>
        </div>
      </DialogContent>
    </Dialog>  
  )
}