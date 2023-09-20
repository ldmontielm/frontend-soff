'use client'

import { Supply } from '../../models/supply.models'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from "@/components/ui/input"
import { PencilIcon } from '@heroicons/react/24/outline'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import toast from 'react-hot-toast'
// import { updateAmountOrder } from '@/app/sales/services/sale.services'
// import { updateProvider } from '../../services/provider.services'
import { updatedSupply, getSupplies, urlSupply } from '../../services/supply.services'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useContext } from "react"
import { OrderContextInterface } from "@/app/sales/models/sale.models"
import useSWR, { mutate, useSWRConfig } from "swr";



const formSchema = z.object({
  name: z.string().min(2, {message: 'El nombre debe tener más de dos caracteres'}),
  price: z.number().min(2, {message: 'Debe tener mas de dos caracteres'}),
  quantity_stock: z.number().min(2, {message: 'Debe tener mas de dos caracteres'}),
  unit_measure: z.string().min(2, {message: 'El nombre debe tener más de dos caracteres'}),
  id_supply:z.string().optional(),
})

interface Props{
  supply: Supply
  id_supply: string
}


export default function SupplyUpdateForm({supply, id_supply}: Props) {
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const {} = useSWR(`{urlSupply}`,getSupplies)
  // const {updateProvider} = useContext(OrderContext) as OrderContextInterface
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id_supply:supply.id,
      name: supply.name,
      price: supply.price,
      quantity_stock: supply.quantity_stock,
      unit_measure: supply.unit_measure
    },
  })
  // function onSubmit(values: z.infer<typeof formSchema>) {
  //   values.id_provider = provider.id
  //   updateProvider(values.id_provider, provider )
  //   setOpen(false)
  // }

  function onSubmit(values: z.infer<typeof formSchema>) {
    values.id_supply = supply.id
    
    // const providers = {
    //     name: values.name,
    //     company: values.company,
    //     address: values.address,
    //     email: values.email,
    //     phone: values.phone,
    //     city: values.city
    //   }
    toast.promise(updatedSupply(id_supply, values), {
      loading: 'Updated detail...',
      success: 'Insumo Actualizado correctamente',
      error: 'Error al actualizar'
    })
    router.refresh()
    setOpen(false)
    mutate(`${urlSupply}`)
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
          <DialogTitle>Editar Insumo</DialogTitle>
          <DialogDescription>
            Puedes cambiar la informacion del insumo <span className="capitalize font-semibold text-gray-600">{supply.name}</span>
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}> 
            <FormField 
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre</FormLabel>
                  <FormControl>
                    <Input id="name" type="string" placeholder="" {...field} className="col-span-3" />
                  </FormControl>
                  <FormDescription>
                    Digite el nombre del proveedor.
                  </FormDescription>
                  <FormMessage />
              </FormItem>
              )}
            />
            <FormField 
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price</FormLabel>
                  <FormControl>
                    <Input id="price" type="number" {...form.register("price", {valueAsNumber: true})} />
                  </FormControl>
                  <FormDescription>
                    Digite El precio del insumo.
                  </FormDescription>
                  <FormMessage />
              </FormItem>
              )}
            />
            <FormField 
              control={form.control}
              name="quantity_stock"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cantidad en stock</FormLabel>
                  <FormControl>
                    <Input id="quantity_stock" type="number" {...form.register("quantity_stock", {valueAsNumber: true})} />
                  </FormControl>
                  <FormDescription>
                    Digite la cantidad en stock
                  </FormDescription>
                  <FormMessage />
              </FormItem>
              )}
            />
            <FormField 
              control={form.control}
              name="unit_measure"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Unidad de medida</FormLabel>
                  <FormControl>
                    <Input id="unit_measure" type="string" placeholder="" {...field} className="col-span-3" />
                  </FormControl>
                  <FormDescription>
                    Digite la unidad de medida del insumo.
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
