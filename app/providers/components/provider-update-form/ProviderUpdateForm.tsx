'use client'

import { Provider } from '../../models/provider.models'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from "@/components/ui/input"
import { PencilIcon } from '@heroicons/react/24/outline'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import toast from 'react-hot-toast'
import { updateProvider } from '../../services/provider.services'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useContext } from "react"
import { urlProvider } from '../../services/provider.services'
import { OrderContextInterface } from "@/app/sales/models/sale.models"
import useSWR, { mutate, useSWRConfig } from "swr";



const formSchema = z.object({
  name: z.string().min(2, {message: 'El nombre debe tener más de dos caracteres'}),
  company: z.string().min(2, {message: 'Debe tener mas de dos caracteres'}),
  address: z.string().min(2, {message: 'Debe tener mas de dos caracteres'}),
  email: z.string().email({message: "Correo no valido"}),
  phone: z.string().min(2, {message: 'Debe tener mas de dos caracteres'}),
  city: z.string().min(2, {message: 'Debe tener mas de dos caracteres'}),
  id_provider:z.string().optional(),
})

interface Props{
  provider: Provider
  id_provider: string
}


export default function ProviderUpdateForm({provider, id_provider}: Props) {
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const {} = useSWR(`{urlProvider}`)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id_provider:provider.id,
      name: provider.name,
      company: provider.company,
      address: provider.address,
      email: provider.email,
      phone: provider.phone,
      city: provider.city,
    },
  })
  const {mutate } = useSWRConfig()


  function onSubmit(values: z.infer<typeof formSchema>) {
    values.id_provider = provider.id

    toast.promise(updateProvider(id_provider, values), {
      loading: 'Updated detail...',
      success: 'Insumo Actualizado correctamente',
      error: 'Error al actualizar'
    })
    router.refresh()
    setOpen(false)
    mutate(`${urlProvider}`)
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
          <DialogTitle>Editar proveedor</DialogTitle>
          <DialogDescription>
            Puedes cambiar la informacion del proveedor <span className="capitalize font-semibold text-gray-600">{provider.name}</span>
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
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Empresa</FormLabel>
                  <FormControl>
                    <Input id="company" type="string" placeholder="" {...field} className="col-span-3" />
                  </FormControl>
                  <FormDescription>
                    Digite la empresa del proveedor.
                  </FormDescription>
                  <FormMessage />
              </FormItem>
              )}
            />
            <FormField 
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Dirección</FormLabel>
                  <FormControl>
                    <Input id="address" type="string" placeholder="" {...field} className="col-span-3" />
                  </FormControl>
                  <FormDescription>
                    Digite la dirección del proveedor.
                  </FormDescription>
                  <FormMessage />
              </FormItem>
              )}
            />
            <FormField 
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Correo</FormLabel>
                  <FormControl>
                    <Input id="email" type="string" placeholder="" {...field} className="col-span-3" />
                  </FormControl>
                  <FormDescription>
                    Digite el correo del proveedor.
                  </FormDescription>
                  <FormMessage />
              </FormItem>
              )}
            />
            <FormField 
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Telefono</FormLabel>
                  <FormControl>
                    <Input id="phone" type="string" placeholder="" {...field} className="col-span-3" />
                  </FormControl>
                  <FormDescription>
                    Digite el telefono del proveedor.
                  </FormDescription>
                  <FormMessage />
              </FormItem>
              )}
            />
            <FormField 
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ciudad</FormLabel>
                  <FormControl>
                    <Input id="city" type="string" placeholder="" {...field} className="col-span-3" />
                  </FormControl>
                  <FormDescription>
                    Digite la ciudad del proveedor.
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
