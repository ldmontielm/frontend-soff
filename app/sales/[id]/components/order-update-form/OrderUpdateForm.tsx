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
import { fetcherPut } from '@/context/swr-context-provider/SwrContextProvider'
import { useState } from 'react'
import useSWR, { mutate} from 'swr'
import { RoutesApi } from '@/models/routes.models'

const formSchema = z.object({
  amount_product: z.number({invalid_type_error: "Debes ingresar un número, no un texto", required_error: "El campo es requerido"}).min(1, {message: "El valor de la cantidad debe ser diferente de 0"}),
  id_order:z.string().optional(),
})

interface Props{
  order: Order,
  id_sale: string | string[]
}

const UpdateAmountOrderFetch = async (url: string) => {
  return await fetcherPut(url, undefined)
}

export default function OrderUpdateForm({order, id_sale}: Props) {
  const [open, setOpen] = useState(false)
  const {data} = useSWR(`${RoutesApi.SALES}/${id_sale}/orders`)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id_order:"",
      amount_product: order.amount_product
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    values.id_order = order.id
    const data = await UpdateAmountOrderFetch(`${RoutesApi.SALES}/update-amount-order?id_order=${values.id_order}&amount_product=${values.amount_product}`)
    mutate(`${RoutesApi.SALES}/${id_sale}/orders`)
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
                <FormItem >
                  <FormLabel>Cantidad</FormLabel>
                  <FormControl>
                    <Input id="amount_product" type="number" {...form.register("amount_product", {valueAsNumber: true})} className="col-span-3" onChange={field.onChange} defaultValue={order.amount_product} placeholder={order.amount_product.toString()}/>
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
                    <Input id="id_order" type="text" placeholder="0" {...field} className="col-span-3 hidden" value={order.id} defaultValue={order.id} />
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
