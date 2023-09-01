'use client'

import { DetailsRecipe } from '@/app/products/models/product.models'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from "@/components/ui/input"
import { PencilIcon } from '@heroicons/react/24/outline'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import toast from 'react-hot-toast'
import { updateAmountDetail } from '@/app/products/services/products.services'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const formSchema = z.object({
  amount_supply: z.string().transform((val) => parseInt(val)),
  id_detail:z.string().optional(),
})

interface Props{
  detail: DetailsRecipe
}


export default function DetailUpdateForm({detail}: Props) {
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id_detail:"",
      amount_supply: 0
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    values.id_detail = detail.id
    toast.promise(updateAmountDetail(values.id_detail, values.amount_supply), {
      loading: 'Updated detail...',
      success: 'Detalle Actualizado correctamente',
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
            Puedes cambiar la cantidad del insumo <span className="capitalize font-semibold text-gray-600">{detail.supply_id}</span>
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
              name="id_detail"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input id="amount_supply" type="number" placeholder="0" {...field} className="col-span-3 hidden" value={detail.id} defaultValue={detail.id} />
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
