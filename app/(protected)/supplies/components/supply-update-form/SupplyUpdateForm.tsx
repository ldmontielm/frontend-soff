'use client'

import { Routes, RoutesApi } from "@/models/routes.models";
import { fetcherPut } from "@/context/swr-context-provider/SwrContextProvider";
import { Supply, SupplyCreate, SupplyUpdate } from '../../models/supply.models'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from "@/components/ui/input"
import { PencilIcon } from '@heroicons/react/24/outline'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import toast from 'react-hot-toast'
// import { updatedSupply, getSupplies, urlSupply } from '../../services/supply.services'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useContext } from "react"
import useSWR, { mutate, useSWRConfig } from "swr";
import { useToast } from "@/components/ui/use-toast"



const UpdateSupplyFetch = async (url: string, body: SupplyCreate) => {
  return await fetcherPut<SupplyCreate>(url, body)
}

const formSchema = z.object({
  id_supply:z.string().optional(),
  name: z.string({required_error: "El campo es requerido"}).min(2, {message: 'Ingrese el nombre del Insumo'}).max(50, {message: 'El nombre del insumo es demasiado largo'}),
  price: z.number({required_error: "El campo es requerido"}).min(3, {message: 'Ingrese el precio del insumo'}).max(999999, {message: 'El precio es demasiado alto'}),
  quantity_stock: z.number({required_error: "El campo es requerido"}).min(1, {message: 'Ingrese la cantidad'}).max(999999, {message: 'La cantidad es demasiado alta'}),
  unit_measure: z.string().refine((value) => {
    // Agrega tu lógica de validación personalizada para el campo unit_measure aquí
    // Por ejemplo, puedes verificar si el valor seleccionado es válido.
    return value === 'Gramos' || value === 'Unidades';
  }, {
    message: 'Seleccione una opción válida para la unidad de medida',
  }),
});


interface Props{
  supply: Supply
  id_supply: string
}




export default function SupplyUpdateForm({supply, id_supply}: Props) {
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const [active, setActive] = useState(true)
  const { toast } = useToast()
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
  const {mutate } = useSWRConfig()


  const onSubmit = async (values: z.infer<typeof formSchema>) => {

    if (values.unit_measure == 'Gramos'){
      values.price = (values.price / 1000)
    }

    values.id_supply = supply.id
    await UpdateSupplyFetch(`${RoutesApi.SUPPLIES}/update_supply/${id_supply}`, values)
    toast({variant: 'default', title: "Insumo actualizado correctamente", description: "Se ha actualizado correctamente el Insumo."})
    mutate(`${RoutesApi.SUPPLIES}?status=${true}`);
    form.reset()
    setOpen(false)
  }

  const handleCancelar = () => {
    // Cierra el diálogo y Reinicia los campos del formulario
    setOpen(false);
    
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>  
        <Button variant='ghost'>
          <PencilIcon className="h-4 w-4 mr-2" onClick={() => setOpen(true)}/><span>Editar</span>
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
                  {/* <FormDescription>
                    Digite el nombre del proveedor.
                  </FormDescription> */}
                  <FormMessage />
              </FormItem>
              )}
            />
            <FormField 
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Precio</FormLabel>
                  <FormControl>
                    <Input placeholder="Ingrese el precio" type="number" step="any" {...form.register("price", {valueAsNumber: true})} />
                  </FormControl>
                  {/* <FormDescription>
                    Digite El precio del insumo.
                  </FormDescription> */}
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
                    <Input placeholder="Ingrese la cantidad en stock" type="number" step="any" {...form.register("quantity_stock", {valueAsNumber: true})} />
                  </FormControl>
                  {/* <FormDescription>
                    Digite la cantidad en stock
                  </FormDescription> */}
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
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger className="w-default">
                        <SelectValue>
                          {field.value}
                        </SelectValue>
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Gramos">Gramos</SelectItem>
                        <SelectItem value="Unidades">Unidades</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage>{form.formState.errors.unit_measure?.message}</FormMessage>
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
                    Actualizar cambios
                  </Button>
                </div>
            </div>
              </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
