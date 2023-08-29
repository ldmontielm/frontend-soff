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
import { createSupply } from "../../services/supply.services";
import { SupplyCreate } from "../../models/supply.models";
import {useRouter} from "next/navigation"
import { Routes } from "@/models/routes.models";
import { ToastAction } from "@/components/ui/toast"
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";




const fromSchema = z.object({
  name: z.string().min(2, {message: 'El nombre debe tener más de dos caracteres'}),
  price: z.number({
    required_error: "el precio es requerida",
    invalid_type_error: "campo requerido",
  }),
  quantity_stock: z.number({
    required_error: "la cantidad es requerida",
    invalid_type_error: "campo requerido",
  }),
  unit_measure: z.string({
    required_error: "la unidad es requerida",
    invalid_type_error: "campo requerido",
  }).min(2, {message: 'Debe tener mas de dos caracteres'})
})


export default function HeadTable() {
  const router = useRouter()
  const form = useForm<z.infer<typeof fromSchema>> ({
    resolver: zodResolver(fromSchema),
    defaultValues: {
      name: '',
      price: 0,
      quantity_stock: 0,
      unit_measure: ''
    }

  })

    function onSubmit(values: z.infer<typeof fromSchema>){
      toast.promise(createSupply(values), {
        success: "Proveedor agregado",
        error: "Algo ocurrio",
        loading: 'Cargando info...'
      })
      router.refresh()
    }


return (
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="destructive">Agregar Insumo</Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Agregar Nuevo Insumo</DialogTitle>
      <DialogDescription>Añadir nuevo Insumo</DialogDescription>
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
                <Input placeholder="Ingrese el nombre" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
            )}
            />
          <FormField
            control={form.control}
            name ="price"
            render={({ field }) => (
              <FormItem>
              <FormLabel>Precio </FormLabel>
              <FormControl>
                <Input placeholder="Ingrese el precio" type="number" {...form.register('price', {valueAsNumber: true})} />
              </FormControl>
              <FormMessage />
            </FormItem>
            )}
            />
          <FormField
            control={form.control}
            name ="quantity_stock"
            render={({ field }) => (
              <FormItem>
              <FormLabel>Cantidad en stock</FormLabel>
              <FormControl>
                <Input placeholder="Ingrese la cantidad en stock" type="number" {...form.register('quantity_stock', {valueAsNumber: true})} />
              </FormControl>
              <FormMessage />
            </FormItem>
            )}
            />
          <FormField
            control={form.control}
            name ="unit_measure"
            render={({ field }) => (
              <FormItem>
              <FormLabel>Unidad de medida</FormLabel>
              <FormControl>
                <Input placeholder="Ingrese la unidad de medida" {...field} />
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