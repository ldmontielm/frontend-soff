'use client'

import { Order } from '@/app/sales/models/sale.models'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from "@/components/ui/input"
import { PencilIcon } from '@heroicons/react/24/outline'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import toast from 'react-hot-toast'
import { updateAmountOrder } from '@/app/sales/services/sale.services'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useContext } from "react"
import { OrderContext } from "../../context/orders-context/orderContext"
import { OrderContextInterface } from "@/app/sales/models/sale.models"



const formSchema = z.object({
  amount_product: z.string().transform((val) => parseInt(val)),
  id_order:z.string().optional(),
})

interface Props{
  order: Order
}


export default function OrderUpdateForm({order}: Props) {
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const {UpdateAmountOrders} = useContext(OrderContext) as OrderContextInterface
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id_order:"",
      amount_product: 0
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    values.id_order = order.id
    UpdateAmountOrders(values.id_order, values.amount_product)
    setOpen(false)
  }


  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>  
        <Button variant='outline' size='icon' onClick={() => setOpen(true)}>
          <PencilIcon className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Editar cantidad</DialogTitle>
          <DialogDescription>
            Puedes cambiar la cantidad del producto <span className="capitalize font-semibold text-gray-600">{order.product}</span>
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}> 
            <FormField 
              control={form.control}
              name="amount_product"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cantidad</FormLabel>
                  <FormControl>
                    <Input id="amount_product" type="number" placeholder="0" {...field} className="col-span-3" />
                  </FormControl>
                  <FormDescription>
                    Digite la cantidad del producto.
                  </FormDescription>
                  <FormMessage />
              </FormItem>
              )}
            />
            <FormField 
              control={form.control}
              name="id_order"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input id="amount_product" type="number" placeholder="0" {...field} className="col-span-3 hidden" value={order.id} defaultValue={order.id} />
                  </FormControl>
                  <FormMessage />
              </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="submit">Actualizar cambios</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
