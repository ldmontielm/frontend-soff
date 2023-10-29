'use client'

import { Provider, ProviderCreate } from '../../models/provider.models'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from "@/components/ui/input"
import { PencilIcon } from '@heroicons/react/24/outline'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import toast from 'react-hot-toast'
// import { updateProvider } from '../../services/provider.services'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useContext } from "react"
import { OrderContextInterface } from "@/app/(protected)/sales/models/sale.models"
import useSWR, { mutate, useSWRConfig } from "swr";
import { fetcherPut } from "@/context/swr-context-provider/SwrContextProvider";
import { Routes, RoutesApi } from "@/models/routes.models";
import { useToast } from "@/components/ui/use-toast"




const formSchema = z.object({
  id_provider:z.string().optional(),
  nit: z.string({required_error: "El campo es requerido"}).min(2, {message: 'Ingrese el nit de la empresa'}).max(20, {message: 'El nit es demasiado largo'}),
  name: z.string({required_error: "El campo es requerido"}).min(2, {message: 'Ingrese el nombre del proveedor'}).max(255, {message: 'El nombre del proveedor es demasiado largo'}),
  company: z.string({required_error: "El campo es requerido"}).min(2, {message: 'Ingrese el nombre de la empresa'}).max(255, {message: 'El nombre de la empresa es demasiado largo'}),
  address: z.string({required_error: "El campo es requerido"}).min(2, {message: 'Ingrese una dirección'}).max(255, {message: 'La dirección es demasiado larga'}),
  // email: z.string({required_error: "El campo es requerido"}).email({message: "Correo no válido"}),
  phone: z.string({required_error: "El campo es requerido"}).min(2, {message: 'Ingrese un teléfono'}).max(20, {message: 'El teléfono es demasiado largo'}),
  city: z.string({required_error: "El campo es requerido"}).min(2, {message: 'Ingrese una ciudad'}).max(50, {message: 'La ciudad es demasiado larga'}),
});

const UpdateProviderFetch = async (url: string, body: ProviderCreate) => {
  return await fetcherPut<ProviderCreate>(url, body)
}

interface Props{
  provider: Provider
  id_provider: string
}


export default function ProviderUpdateForm({provider, id_provider}: Props) {
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const { toast } = useToast()
  // const {} = useSWR(RoutesApi.PROVIDERS)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id_provider:provider.id,
      nit: provider.nit,
      name: provider.name,
      company: provider.company,
      address: provider.address,
      // email: provider.email,
      phone: provider.phone,
      city: provider.city,
    },
  })
  const {mutate } = useSWRConfig()


  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    values.id_provider = provider.id
    const data = await UpdateProviderFetch(`${RoutesApi.PROVIDERS}/update_provider/${id_provider}`, values )
    toast({variant: 'default', title: "Proveedor actualizado correctamente", description: "Se ha actualizado correctamente el proveedor."})
    mutate(RoutesApi.PROVIDERS)
    form.reset()
    setOpen(false)
  }


  // function onSubmit(values: z.infer<typeof formSchema>) {
  //   values.id_provider = provider.id

  //   toast.promise(updateProvider(id_provider, values), {
  //     loading: 'Updated detail...',
  //     success: 'Insumo Actualizado correctamente',
  //     error: 'Error al actualizar'
  //   })
  //   router.refresh()
  //   setOpen(false)
  //   mutate(`${RoutesApi.PROVIDERS}`)
  // }



  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>  
        <Button variant='outline' size='icon' onClick={() => setOpen(true)}>
          <PencilIcon className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Editar Proveedor</DialogTitle>
          <DialogDescription>
            Puedes cambiar la información del proveedor <span className="capitalize font-semibold text-gray-600">{provider.name}</span>
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}> 
          <FormField 
              control={form.control}
              name="nit"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>NIT</FormLabel>
                  <FormControl>
                    <Input id="nit" type="string" placeholder="" {...field} className="col-span-3" />
                  </FormControl>
                  {/* <FormDescription>
                    Digite el NIT de la empresa.
                  </FormDescription> */}
                  <FormMessage />
              </FormItem>
              )}
            />
            <FormField 
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre</FormLabel>
                  <FormControl>
                    <Input id="name" type="string" placeholder="" {...field} className="col-span-3" />
                  </FormControl>
                  {/* <FormDescription>
                    Digite el nombre del proveedor.
                  </FormDescription> */}
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
                  {/* <FormDescription>
                    Digite el nombre de la empresa.
                  </FormDescription> */}
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
                  {/* <FormDescription>
                    Digite la dirección del proveedor.
                  </FormDescription> */}
                  <FormMessage />
              </FormItem>
              )}
            />
            {/* <FormField 
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
            /> */}
            <FormField 
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Telefono</FormLabel>
                  <FormControl>
                    <Input id="phone" type="string" placeholder="" {...field} className="col-span-3" />
                  </FormControl>
                  {/* <FormDescription>
                    Digite el telefono del proveedor.
                  </FormDescription> */}
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
                  {/* <FormDescription>
                    Digite la ciudad del proveedor.
                  </FormDescription> */}
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
