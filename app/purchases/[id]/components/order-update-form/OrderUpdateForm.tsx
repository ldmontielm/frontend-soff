'use client'

import { Order } from '@/app/purchases/models/purchase.models'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from "@/components/ui/input"
import { PencilIcon } from '@heroicons/react/24/outline'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import toast from 'react-hot-toast'
import { UpdateAmountOrder } from '@/app/purchases/services/purchase.services'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const formSchema = z.object({
  amount_supplies: z.string().transform((val) => parseInt(val)),
  id_order:z.string().optional(),
})

interface Props{
  order: Order
}


export default function OrderUpdateForm({order}: Props) {
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id_order:"",
      amount_supplies: 0
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    values.id_order = order.id_order
    toast.promise(UpdateAmountOrder(values.id_order, values.amount_supplies), {
      loading: 'Updated order...',
      success: 'Orden Actualizada correctamente',
      error: 'Error al actualizar'
    })
    router.refresh()
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
            Puedes cambiar la cantidad del insumo <span className="capitalize font-semibold text-gray-600">{order.supply_id}</span>
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}> 
            <FormField 
              control={form.control}
              name="amount_supplies"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cantidad</FormLabel>
                  <FormControl>
                    <Input id="amount_supplies" type="number" placeholder="0" {...field} className="col-span-3" />
                  </FormControl>
                  <FormDescription>
                    Digite la cantidad del insumo.
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
                    <Input id="amount_supplies" type="number" placeholder="0" {...field} className="col-span-3 hidden" value={order.id_order} defaultValue={order.id_order} />
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
