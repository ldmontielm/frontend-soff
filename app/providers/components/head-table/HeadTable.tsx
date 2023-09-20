"use client";

import { zodResolver } from "@hookform/resolvers/zod"

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
import { createProvider, getProviders, urlProvider } from "../../services/provider.services";
import { ProviderCreate } from "../../models/provider.models";
import {useRouter} from "next/navigation"
import { Routes } from "@/models/routes.models";
import { ToastAction } from "@/components/ui/toast"
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import useSWR, { mutate, useSWRConfig } from "swr";



const fromSchema = z.object({
  name: z.string().min(2, {message: 'El nombre debe tener más de dos caracteres'}),
  company: z.string().min(2, {message: 'Debe tener mas de dos caracteres'}),
  address: z.string().min(2, {message: 'Debe tener mas de dos caracteres'}),
  email: z.string().email({message: "Correo no valido"}),
  phone: z.string().min(2, {message: 'Debe tener mas de dos caracteres'}),
  city: z.string().min(2, {message: 'Debe tener mas de dos caracteres'}),
})


export default function HeadTable() {
  const [open, setOpen] = useState(false)
  const routes  = useRouter()
  const {data:provider} = useSWR(`{urlProvider}`,getProviders)
  const form = useForm<z.infer<typeof fromSchema>> ({
    resolver: zodResolver(fromSchema),
    // defaultValues: {
    //   name: '',
    //   company: '',
    //   address: '',
    //   email: '',
    //   phone: '',
    //   city: ''
    // }

  })
  const {mutate } = useSWRConfig()

  

    function onSubmit(values: z.infer<typeof fromSchema>){
      toast.promise(createProvider(values), {
        success: "Proveedor agregado",
        error: "Algo ocurrio",
        loading: 'Cargando información...'
      }).then(() => {
        form.setValue("name", "");
        form.setValue("company", "");
        form.setValue("address", "");
        form.setValue("email", "");
        form.setValue("phone", "");
        form.setValue("city", "");

      setOpen(false)
      mutate(`${urlProvider}`)
      });
    }
      
      
    // const {data: proveedor} = useSWR(urlProvider, getProviders)
return (
  
  <Dialog open={open} onOpenChange={setOpen}>
    <DialogTrigger asChild>
    <Button variant="default" className="px-4 py-2 m-2">Registrar</Button>
    </DialogTrigger>
    <DialogContent className="sm:min-w-[415px]">
      <DialogHeader>
        <DialogTitle>Agregar Nuevo Proveedor</DialogTitle>
      <DialogDescription>Añadir nuevo proveedor</DialogDescription>
      </DialogHeader>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
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
              <FormLabel>Direccion</FormLabel>
              <FormControl>
                <Input placeholder="Ingrese la direccion" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
            )}
            />
          <FormField
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
            />
          <FormField
            control={form.control}
            name ="phone"
            render={({ field }) => (
              <FormItem>
              <FormLabel>Telefono </FormLabel>
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
              <FormLabel>Ciudad </FormLabel>
              <FormControl>
                <Input placeholder="Ingrese la ciudad" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
            )}
            />
          <DialogFooter>
            <Button type="submit">Guardar cambios</Button>
          </DialogFooter>
        </form>
      </Form>
    </DialogContent>
  </Dialog>
)


}