"use client";

import { zodResolver } from "@hookform/resolvers/zod"
import { fetcherPost } from "@/context/swr-context-provider/SwrContextProvider";
import { useToast } from "@/components/ui/use-toast"
import {Tooltip} from "@mui/material"
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
import { PlusIcon } from "@heroicons/react/24/outline";
const AddSupplyFetch = async (url: string, body: SupplyCreate) => {
  return await fetcherPost<SupplyCreate>(url, body)
}


const fromSchema = z.object({
  supply_id: z.string(),
  name: z.string({required_error: "El campo es requerido"}).min(2, {message: 'Ingrese el nombre del Insumo'}).max(50, {message: 'El nombre del insumo es demasiado largo'}),
  price: z.number({required_error: "El campo es requerido"}).min(3, {message: 'Ingrese el precio del insumo'}).max(999999, {message: 'El precio es demasiado alto'}), 
  quantity_stock: z.number({required_error: "El campo es requerido"}).min(1, {message: 'Ingrese la cantidad'}).max(999999, {message: 'La cantidad es demasiado alta'}),
  unit_measure: z.string({required_error: "El campo es requerido"}).min(1, {message: 'Seleccione una opción'}).max(50, {message: 'La unidad de medida es demasiado larga'}),
});

interface Props {
  location?:string
}

export default function HeadTable({location}: Props) {
  const [open, setOpen] = useState(false)
  const routes  = useRouter()
  const [active, setActive] = useState(true)
  const { toast } = useToast()
  const {data:supply} = useSWR(`${RoutesApi.SUPPLIES}?status=${active}`)
  const form = useForm<z.infer<typeof fromSchema>>({
    resolver: zodResolver(fromSchema),
    defaultValues: {
      supply_id: '',
      name: '',
      price: 0.0,
      quantity_stock: 0.0,
      unit_measure: ''
    }
  });
  const handleCancelar = () => {
    // Cierra el diálogo y Reinicia los campos del formulario
    setOpen(false);
    form.reset({
      name: '',
      price: 0,
      quantity_stock: 0,
      unit_measure: ''
    });
  };

    const onSubmit = async (values: z.infer<typeof fromSchema>) => {
      


      await AddSupplyFetch(`${RoutesApi.SUPPLIES}/create_supply`, values);
      setOpen(false);
      toast({ variant: 'default', title: "Insumo creado correctamente", description: "Se ha creado correctamente el Insumo." });
      form.reset();
      mutate(`${RoutesApi.SUPPLIES}?status=${active}`);
      
    }


return (
  <div>
  <Dialog open={open} onOpenChange={setOpen}>
    <DialogTrigger asChild>
    <Tooltip placement="top" title="Aquí puedes registrar un insumo." arrow>
    <Button variant={`${location === 'purchases' ? 'outline' : 'default'}`} size={`${location === 'purchases' ? 'icon' : 'default'}`} className={`${location === 'purchases' ? '' : 'w-full md:w-[180px]'}`}>
        {
        location === 'purchases' ? (
          <PlusIcon className="w-4 h-4" />
        ): "Registrar Insumo"
        }
      </Button>
      </Tooltip>
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
                <Input placeholder="Ingrese el precio" type="number" step="any" {...form.register("price", {valueAsNumber: true})} />
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
              <Input placeholder="Ingrese la cantidad en stock" type="number" step="any" {...form.register("quantity_stock", {valueAsNumber: true})} />
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
            <SelectValue placeholder="Seleccione" />
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
        <div className=" mt-4 flex justify-between">
          <div>
            <Button type="button" onClick={handleCancelar} className="mr-6 bg-white-500 border border-2 border-black hover:bg-gray-100 text-black">
              Cancelar
            </Button>
          </div>
          <div>
            <Button type="submit" >
              Registrar Insumo
            </Button>
          </div>
        </div>
        </DialogFooter>
        </form>
      </Form>
    </DialogContent>
  </Dialog>
  </div>
)


}