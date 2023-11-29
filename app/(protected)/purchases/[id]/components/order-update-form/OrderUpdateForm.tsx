'use client'

import { Order } from '@/app/(protected)/purchases/models/purchase.models'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from "@/components/ui/input"
import { PencilIcon } from '@heroicons/react/24/outline'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { fetcherPut } from '@/context/swr-context-provider/SwrContextProvider'
import { useState } from 'react'
import useSWR, { mutate} from 'swr'
import { RoutesApi } from '@/models/routes.models'
import {
  Tooltip
} from "@mui/material"

const formSchema = z.object({
  amount_supplies: z.number({invalid_type_error: "Debes ingresar un número, no un texto", required_error: "El campo es requerido"}).min(1, {message: "El valor de la cantidad debe ser diferente de 0"}),
  id_order:z.string().optional(),
})

interface Props{
  order: Order
  id_purchase: string | string[]
}

const UpdateAmountOrderFetch = async (url: string) => {
  return await fetcherPut(url, undefined)
}

export default function OrderUpdateForm({order, id_purchase}: Props) {
  const [open, setOpen] = useState(false)
  const {data} = useSWR(`${RoutesApi.PURCHASES}/${id_purchase}/orders`)
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id_order:"",
      amount_supplies: order.amount_supplies
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    values.id_order = order.id_order
    const data = await UpdateAmountOrderFetch(`${RoutesApi.PURCHASES}/update-amount-order?id_order=${values.id_order}&amount_supplies=${values.amount_supplies}`)
    mutate(`${RoutesApi.PURCHASES}/${id_purchase}/orders`)
    setOpen(false)
  }


  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild> 
        <Tooltip placement="top" title="Aqui puede editar la orden" arrow>
          <Button variant='outline' size='icon' onClick={() => setOpen(true)}>
            <PencilIcon className="h-4 w-4" />
          </Button> 
        </Tooltip>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Editar cantidad</DialogTitle>
          <DialogDescription>
            Puedes cambiar la cantidad del insumo <span className="capitalize font-semibold text-gray-600">{order.supply}</span>
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
                    <Input id="amount_supplies" type="number" {...form.register("amount_supplies", {valueAsNumber: true})} className="col-span-3" onChange={field.onChange} defaultValue={order.amount_supplies} placeholder={order.amount_supplies.toString()} />
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
                    <Input id="amount_supplies" type="text"  {...field} className="col-span-3 hidden" value={order.id_order} defaultValue={order.id_order} />
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
