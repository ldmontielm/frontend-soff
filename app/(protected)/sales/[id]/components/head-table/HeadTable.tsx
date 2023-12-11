"use client" 
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { PlusIcon } from "@heroicons/react/24/outline"
import { zodResolver } from "@hookform/resolvers/zod"
import { useToast } from "@/components/ui/use-toast"
import {Tooltip} from "@mui/material"
import { useForm } from "react-hook-form"
import useSWR, { mutate} from 'swr'
import * as z from 'zod'
import { OrderCreate } from "../../../models/sale.models"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Check, ChevronsUpDown } from "lucide-react"
import { Product } from "@/app/(protected)/products/models/product.models"
import { RoutesApi } from "@/models/routes.models"
import { fetcherPost } from "@/context/swr-context-provider/SwrContextProvider"


const formSchema = z.object({
  sale_id: z.string(),
  product_id: z.string().uuid({message: 'Debe seleccionar un producto'}),
  amount_product: z.number({required_error: "Este campo es requerido", invalid_type_error: "Se espera un número"}).min(1, {message: "Como mínimo debe vender un producto"}).max(99, {message: "Como máximo solo puedes vender 10 de cada producto"})
})


const AddOrderFetch = async (url: string, body: OrderCreate) => {
  return await fetcherPost<OrderCreate>(url, body)
}

interface Props {
  id: string
}

export default function HeadTable({id}: Props) {
  const {data:products} = useSWR(RoutesApi.PRODUCTS)
  const {data} = useSWR(`${RoutesApi.SALES}/${id}/orders`)
  const [open, setOpen] = useState(false)
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      sale_id: "",
      product_id: "",
      amount_product: 0
    }
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    values.sale_id = id
    const data = await AddOrderFetch(`${RoutesApi.SALES}/${id}/add-order`, values)
    mutate(`${RoutesApi.SALES}/${id}/orders`)
    toast({variant: 'default', title: "Agregando orden", description: "Se ha agregado la orden correctamente."})
  }


  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-wrap lg:flex-nowrap items-end  justify-between gap-2">
        <div className="w-full flex flex-wrap lg:flex-nowrap items-start gap-2">
          <FormField 
            control={form.control}
            name="product_id"
            render = {({field}) => (
              <FormItem className="w-full md:w-[200px]">
                <FormLabel>Producto</FormLabel>
                <div className="w-full xl:w-[200px]">
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        role="combobox"
                        className={cn(
                          "w-[200px] justify-between",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value
                          ? products.find((product:Product)=>product.id === field.value)?.name
                          : "Seleccione producto"}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-[200px] p-0">
                      <Command>
                        <CommandInput placeholder="Buscar insumo..." />
                        <CommandEmpty>Sin resultados.</CommandEmpty>
                        <CommandGroup>
                          {Array.isArray(products) && products.map((product) => (
                            <CommandItem
                              value={product.name}
                              key={product.id}
                              onSelect={() => {
                                form.setValue("product_id", product.id)
                                setOpen(!open)
                              }}
                            >
                              <Check
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  product.id === field.value ? "opacity-100" : "opacity-0"
                                )}
                              />
                              {product.name}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </Command>
                    </PopoverContent>
                  </Popover>
                  </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="amount_product"
            render={({ field }) => (
              <FormItem className="w-full md:w-[200px]">
                <FormLabel>Cantidad</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="Cantidad del producto" min="1" {...form.register('amount_product', {valueAsNumber: true})} className="lg:w-fit"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )
          }
          />
        </div>
        <Tooltip placement="top" title="Aqui podrás agregar ordenes a la venta" arrow>
          <Button type="submit" className="w-full md:w-fit">
            <span>Agregar</span>
          </Button>
        </Tooltip>
      </form>
    </Form>
  )
}