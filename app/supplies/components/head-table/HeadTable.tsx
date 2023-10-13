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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

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
import { createSupply, getSupplies, urlSupply } from "../../services/supply.services";
import { SupplyCreate } from "../../models/supply.models";
import {useRouter} from "next/navigation"
import { Routes } from "@/models/routes.models";
import { ToastAction } from "@/components/ui/toast"
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import useSWR, { mutate, useSWRConfig } from "swr";



const fromSchema = z.object({
  name: z.string({required_error: "El campo es requerido"}).min(2, {message: 'Ingrese el nombre del Insumo'}),
  price: z.string({required_error: "El campo es requerido"}).transform(Number),
  quantity_stock: z.string({required_error: "El campo es requerido"}).transform(Number),
  unit_measure: z.string({required_error: "Seleccioné una unidad de medida"}),
})


export default function HeadTable() {
  const [open, setOpen] = useState(false)
  const routes  = useRouter()
  const {data:supply} = useSWR(`{urlSupply}`,getSupplies)
  const form = useForm<z.infer<typeof fromSchema>>({
    resolver: zodResolver(fromSchema),
  });
  const {mutate } = useSWRConfig()

    // function onSubmit(values: z.infer<typeof fromSchema>){
    //   toast.promise(createSupply(values), {
    //     success: "Insumo agregado",
    //     error: "Algo ocurrio",
    //     loading: 'Cargando información...'
    //   })
    //   routes.refresh()
    //   setOpen(false)
    //   mutate(`${urlSupply}`)
    // }
    function onSubmit(values: z.infer<typeof fromSchema>) {
      toast.promise(createSupply(values), {
        success: "Insumo agregado",
        error: "Algo ocurrió",
        loading: 'Cargando información...'
      }).then(() => {
        form.setValue("name", ""); // Restablece el valor del campo "name" a una cadena vacía
        form.setValue("price", 0); // Restablece el valor del campo "price" a 0
        form.setValue("quantity_stock", 0); // Restablece el valor del campo "quantity_stock" a 0
        form.setValue("unit_measure", ""); // Restablece el valor del campo "unit_measure" a una cadena vacía
  
        setOpen(false);
        mutate(`${urlSupply}`);
      });
    }


return (
  <div>
  <Dialog open={open} onOpenChange={setOpen}>
    <DialogTrigger asChild>
    <Button variant="default" className="w-full md:w-[180px]">Registrar insumo</Button>
    </DialogTrigger>
    <DialogContent className="sm:min-w-[415px]">
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
                <Input placeholder="Ingrese el Nombre" {...field} />
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
                <Input placeholder="Ingrese el precio" type="number" {...field} />
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
              <FormLabel>Cantidad en stock </FormLabel>
              <FormControl>
              <Input placeholder="Ingrese la cantidad en stock" type="number" {...field} />
              </FormControl>
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
        <Select onValueChange={field.onChange}>
          <SelectTrigger className="w-default">
            <SelectValue placeholder="Seleccioné" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Kilosgramos">Kilogramos</SelectItem>
            <SelectItem value="Gramos">Gramos</SelectItem>
            <SelectItem value="Unidades">Unidades</SelectItem>
          </SelectContent>
        </Select>
        </FormControl>
        <FormMessage />
      </FormItem>
  )}
/>
          <DialogFooter>
            <Button type="submit" className="w-full mt-2">Registrar Insumo</Button>
          </DialogFooter>
        </form>
      </Form>
    </DialogContent>
  </Dialog>
  </div>
)


}