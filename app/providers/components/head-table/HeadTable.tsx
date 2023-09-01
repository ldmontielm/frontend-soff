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

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createProvider } from "../../services/provider.services";
import { ProviderCreate } from "../../models/provider.models";
import {useRouter} from "next/navigation"
import { Routes } from "@/models/routes.models";
import { ToastAction } from "@/components/ui/toast"
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";



const fromSchema = z.object({
  name: z.string().min(2, {message: 'El nombre debe tener más de dos caracteres'}),
  company: z.string().min(2, {message: 'Debe tener mas de dos caracteres'}),
  address: z.string().min(2, {message: 'Debe tener mas de dos caracteres'}),
  email: z.string().email({message: "Correo no valido"}),
  phone: z.string().min(2, {message: 'Debe tener mas de dos caracteres'}),
  city: z.string().min(2, {message: 'Debe tener mas de dos caracteres'}),
})


export default function HeadTable() {
  const routes  = useRouter()
  const form = useForm<z.infer<typeof fromSchema>> ({
    resolver: zodResolver(fromSchema),
    defaultValues: {
      name: '',
      company: '',
      address: '',
      email: '',
      phone: '',
      city: ''
    }

  })

    function onSubmit(values: z.infer<typeof fromSchema>){
      toast.promise(createProvider(values), {
        success: "Proveedor agregado",
        error: "Algo ocurrio",
        loading: 'Cargando info...'
      })
      routes.refresh()
    }


return (
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="destructive">Agregar Proveedor</Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[425px]">
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