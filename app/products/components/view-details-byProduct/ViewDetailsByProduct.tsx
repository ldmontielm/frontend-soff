'use client'

import { DetailsRecipe } from '@/app/products/models/product.models'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from "@/components/ui/input"
import { EyeIcon, QueueListIcon } from '@heroicons/react/24/outline'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import toast from 'react-hot-toast'
import { getDetailsByProductId, getProductById, urlProducts } from '@/app/products/services/products.services'
import { useRouter } from 'next/navigation'
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


export default function ViewDetailsByProduct({productId}:{productId:string}) {
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const {data:product}= useSWR(`${urlProducts}`,getProductById)
  const {data: details, isLoading, error} = useSWR(`${productId}`, getDetailsByProductId)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>  
      <Button variant='ghost'>
        <QueueListIcon className="w-4 h-4 mr-2 ml-0" onClick={() => setOpen(true)}/> <span>Ver detalle</span>
      </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px]">
        <DialogHeader>
          <DialogTitle>Detalles del producto</DialogTitle>
          <DialogDescription>
            Aquí puedes ver cada detalle de tu producto <span className="capitalize font-semibold text-gray-600">   </span>
          </DialogDescription>
        </DialogHeader>
        <Table className="border rounded">
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
                    <TableCell>${detail.supply_price}</TableCell>
                    <TableCell>${detail.subtotal}</TableCell>
                  </TableRow>
                ))
              }
            </TableBody>
          </Table>
      </DialogContent>
    </Dialog>
  )
}
