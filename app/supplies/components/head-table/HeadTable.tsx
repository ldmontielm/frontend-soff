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
import { Routes, RoutesApi  } from "@/models/routes.models";
import { ToastAction } from "@/components/ui/toast"
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import useSWR, { mutate, useSWRConfig } from "swr";

const AddSupplyFetch = async (url: string, body: SupplyCreate) => {
  return await fetcherPost<SupplyCreate>(url, body)
}


const fromSchema = z.object({
  supply_id: z.string(),
  name: z.string({required_error: "El campo es requerido"}).min(2, {message: 'Ingrese el nombre del Insumo'}).max(255, {message: 'El nombre del insumo es demasiado largo'}),
  price: z.number({required_error: "El campo es requerido"}).min(3, {message: 'Ingrese el precio del insumo'}).max(999999, {message: 'El precio es demasiado alto'}),
  quantity_stock: z.number({required_error: "El campo es requerido"}).min(1, {message: 'Ingrese la cantidad'}).max(999999, {message: 'La cantidad es demasiado alta'}),
  unit_measure: z.string({required_error: "El campo es requerido"}).min(1, {message: 'Seleccioné una opción'}).max(50, {message: 'La unidad de medida es demasiado larga'}),
});


export default function HeadTable() {
  const [open, setOpen] = useState(false)
  const routes  = useRouter()
  const { toast } = useToast()
  const {data:supply} = useSWR(`{RoutesApi.SUPPLIES}`)
  const form = useForm<z.infer<typeof fromSchema>>({
    resolver: zodResolver(fromSchema),
    defaultValues: {
      supply_id: '',
      name: '',
      price: 0,
      quantity_stock: 0,
      unit_measure: ''
    }
  });
  // const {mutate } = useSWRConfig()

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

    const onSubmit = async (values: z.infer<typeof fromSchema>) => {
      if (values.unit_measure === 'Kilogramos') {
        values.quantity_stock *= 1000; 
      }
    
      await AddSupplyFetch(`${RoutesApi.SUPPLIES}/create_supply`, values);
      setOpen(false);
      toast({ variant: 'default', title: "Insumo creado correctamente", description: "Se ha creado correctamente el Insumo." });
      form.reset();
      mutate(`${RoutesApi.SUPPLIES}`);
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
                <Input placeholder="Ingrese el precio" type="number" {...form.register("price", {valueAsNumber: true})} />
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
              <Input placeholder="Ingrese la cantidad en stock" type="number" {...form.register("quantity_stock", {valueAsNumber: true})} />
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
            <SelectItem value="Kilogramos">Kilogramos</SelectItem>
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