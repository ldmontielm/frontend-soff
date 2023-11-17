'use client'

import { DetailsRecipe } from '@/app/(protected)/products/models/product.models'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from "@/components/ui/input"
import { PencilIcon } from '@heroicons/react/24/outline'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { useState } from 'react'
import { fetcherPut } from '@/context/swr-context-provider/SwrContextProvider'
import { RoutesApi } from '@/models/routes.models'
import useSWR,  {mutate} from 'swr'

const formSchema = z.object({
  amount_supply: z.number({ required_error: "El campo es requerido", 
  invalid_type_error: "Se espera un número"}).
  min(1, {message: "El valor de la cantidad debe ser diferente de 0"}).
  max(999999, {message: "La cantidad es demasiado larga"}),
  id_detail:z.string().optional(),
})

interface Props{
  detail: DetailsRecipe
  id_product: string | string[]
}

const UpdateAmountDetailFetch = async (url: string) => {
  return await fetcherPut(url, undefined)
}

export default function DetailUpdateForm({detail, id_product}: Props) {
  const [open, setOpen] = useState(false)
  const {data} = useSWR(`${RoutesApi.PRODUCTS}/${id_product}/details`)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id_detail:detail.id,
      amount_supply: detail.amount_supply
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    values.id_detail = detail.id
    const data = await UpdateAmountDetailFetch(`${RoutesApi.PRODUCTS}/update_detail?id_detail=${values.id_detail}&amount_supply=${values.amount_supply}`)
    mutate(`${RoutesApi.PRODUCTS}/${id_product}/details`)
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
            Puedes cambiar la cantidad del insumo <span className="capitalize font-semibold text-gray-600">{detail.supply}</span>
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}> 
            <FormField 
              control={form.control}
              name="amount_supply"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cantidad</FormLabel>
                  <FormControl>
                    <Input defaultValue={detail.amount_supply} className="col-span-3" {...form.register("amount_supply", {valueAsNumber: true})}/>
                  </FormControl>
                  <FormDescription>
                    Digite la cantidad del insumo.
                  </FormDescription>
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
