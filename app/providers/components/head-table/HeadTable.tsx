"use client";

import { zodResolver } from "@hookform/resolvers/zod"
import { fetcherPost } from "@/context/swr-context-provider/SwrContextProvider";
import { useToast } from "@/components/ui/use-toast"


import * as z from 'zod'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// import { createProvider, getProviders, urlProvider } from "../../services/provider.services";
import { ProviderCreate } from "../../models/provider.models";
import {useRouter} from "next/navigation"
// import { Routes } from "@/models/routes.models";
import { Routes, RoutesApi } from "@/models/routes.models";
import { ToastAction } from "@/components/ui/toast"
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import useSWR, { mutate, useSWRConfig } from "swr";

const AddProviderFetch = async (url: string, body: ProviderCreate) => {
  return await fetcherPost<ProviderCreate>(url, body)
}



const fromSchema = z.object({
  provider_id: z.string(),
  nit: z.string({required_error: "El campo es requerido"}).min(2, {message: 'Ingrese el nit de la empresa'}).max(15, {message: 'El nit es demasiado largo'}),
  name: z.string({required_error: "El campo es requerido"}).min(2, {message: 'Ingrese el nombre del proveedor'}).max(35, {message: 'El nombre del proveedor es demasiado largo'}),
  company: z.string({required_error: "El campo es requerido"}).min(2, {message: 'Ingrese el nombre de la empresa'}).max(30, {message: 'El nombre de la empresa es demasiado largo'}),
  address: z.string({required_error: "El campo es requerido"}).min(2, {message: 'Ingrese una dirección'}).max(35, {message: 'La dirección es demasiado larga'}),
  phone: z.string({required_error: "El campo es requerido"}).min(2, {message: 'Ingrese un teléfono'}).max(15, {message: 'El teléfono es demasiado largo'}),
  city: z.string({required_error: "El campo es requerido"}).min(2, {message: 'Ingrese una ciudad'}).max(20, {message: 'La ciudad es demasiado larga'}),
});


interface Props {
  id: string
}

export default function HeadTable() {
  const [open, setOpen] = useState(false)
  const routes  = useRouter()
  const { toast } = useToast()
  const {data:provider} = useSWR(`{RoutesApi.PROVIDERS}`)
  const form = useForm<z.infer<typeof fromSchema>> ({
    resolver: zodResolver(fromSchema),
    defaultValues: {
      provider_id: "",
      nit: '',
      name: '',
      company: '',
      address: '',
      phone: '',
      city: ''
    }
  })

  
  const onSubmit = async (values: z.infer<typeof fromSchema>) => {
    // values.provider_id = id
    await AddProviderFetch(`${RoutesApi.PROVIDERS}/create_provider`, values)
    form.reset()
    toast({variant: 'default', title: "Proveedor creado correctamente", description: "Se ha creado correctamente el proveedor."})
    
    setOpen(false)
    mutate(`${RoutesApi.PROVIDERS}`)
  }


    // function onSubmit(values: z.infer<typeof fromSchema>){
    //   toast.promise(createProvider(values), {
    //     success: "Proveedor agregado",
    //     error: "Algo ocurrio",
    //     loading: 'Cargando información...'
    //   }).then(() => {
    //     form.setValue("nit", "");
    //     form.setValue("name", "");
    //     form.setValue("company", "");
    //     form.setValue("address", "");
    //     // form.setValue("email", "");
    //     form.setValue("phone", "");
    //     form.setValue("city", "");

    //   setOpen(false)
    //   mutate(`${urlProvider}`)
    //   });
    // }
      
      
    // const {data: proveedor} = useSWR(urlProvider, getProviders)
return (
  <div>
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
      <Button variant="default"className="w-full md:w-[180px]">Registrar Proveedor</Button>
      </DialogTrigger>
      <DialogContent >

        <DialogHeader>
          <DialogTitle>Agregar Nuevo Proveedor</DialogTitle>
        <DialogDescription>Añadir nuevo proveedor</DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
              control={form.control}
              name ="nit"
              render={({ field }) => (
                <FormItem>
                <FormLabel>NIT </FormLabel>
                <FormControl>
                  <Input placeholder="Ingrese el nit" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
              )}
              />
          <FormField
              control={form.control}
              name ="name"
              render={({ field }) => (
                <FormItem>
                <FormLabel>Nombre </FormLabel>
                <FormControl>
                  <Input placeholder="Ingrese el Nombre" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
              )}
              />
            <FormField
              control={form.control}
              name ="company"
              render={({ field }) => (
                <FormItem>
                <FormLabel>Empresa </FormLabel>
                <FormControl>
                  <Input placeholder="Ingrese la empresa" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
              )}
              />
            <FormField
              control={form.control}
              name ="address"
              render={({ field }) => (
                <FormItem>
                <FormLabel>Dirección</FormLabel>
                <FormControl>
                  <Input placeholder="Ingrese la direccion" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
              )}
              />
            {/* <FormField
              control={form.control}
              name ="email"
              render={({ field }) => (
                <FormItem>
                <FormLabel>Correo </FormLabel>
                <FormControl>
                  <Input placeholder="Ingrese el correo" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
              )}
              /> */}
            <FormField
              control={form.control}
              name ="phone"
              render={({ field }) => (
                <FormItem>
                <FormLabel>Teléfono </FormLabel>
                <FormControl>
                  <Input placeholder="Ingrese el telefono" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
              )}
              />
            <FormField
              control={form.control}
              name ="city"
              render={({ field }) => (
                <FormItem>
                <FormLabel>Ciudad</FormLabel>
                <FormControl>
                  <Input placeholder="Ingrese la ciudad" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
              )}
              />
            <DialogFooter>
              <Button type="submit">Guardar Proveedor</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  </div>
)


}