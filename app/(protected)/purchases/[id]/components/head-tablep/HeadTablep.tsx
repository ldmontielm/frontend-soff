"use client"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { PlusIcon } from "@heroicons/react/24/outline"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { OrderCreate } from "@/app/(protected)/purchases/models/purchase.models"
import useSWR, {mutate} from 'swr'
import { HeadTable } from "@/app/(protected)/supplies/components"
import * as z from 'zod'
import { Check, ChevronsUpDown } from "lucide-react"
import * as React from "react"
import { cn } from "@/lib/utils"
import {Command,CommandEmpty,CommandGroup,CommandInput,CommandItem,} from "@/components/ui/command"
import {Popover,PopoverContent,PopoverTrigger,} from "@/components/ui/popover"
import { RoutesApi } from "@/models/routes.models"
import { fetcherPost } from "@/context/swr-context-provider/SwrContextProvider"
import { Supply } from "@/app/(protected)/supplies/models/supply.models"
import {Tooltip} from "@mui/material"
import { useToast } from "@/components/ui/use-toast"
import { ScrollArea } from "@/components/ui/scroll-area"

const formSchema = z.object({
  purchase_id: z.string(),
  supply_id: z.string().uuid({message: 'Debe seleccionar un insumo'}),
  amount_supplies: z.number({required_error: "Este campo es requerido", invalid_type_error: "Se espera un número"}).min(1, {message: "La cantidad mínima es 1"}).max(200, {message: "La cantidad máxima es 200"}),
  price_supplies: z.number({required_error: "Este campo es requerido", invalid_type_error: "Se espera un número"}).min(1, {message: "La cantidad mínima es 200"}).max(100000, {message: "La cantidad máxima es 100.000"})
}
  )

const AddOrderFetch = async (url: string, body: OrderCreate) => {
  return await fetcherPost<OrderCreate>(url, body)
}

interface Props {
  id: string
}


export default function HeadTablep({id}: Props) {
  const {data:supplies} = useSWR(RoutesApi.SUPPLIES)
  const {data} = useSWR(`${RoutesApi.PURCHASES}/${id}/orders`)
  const [open, setOpen] = useState(false)
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      purchase_id: "",
      supply_id: "",
      amount_supplies: 0,
      price_supplies: 0
    }
  })

  async function onSubmit(values: z.infer<typeof formSchema>){
    values.purchase_id = id
    const data = await AddOrderFetch(`${RoutesApi.PURCHASES}/${id}/add-order`, values)
    form.reset()
    mutate(`${RoutesApi.PURCHASES}/${id}/orders`)
    toast({variant: 'default', title: "Agregando orden", description: "Se ha agregado la orden correctamente."})

  }


  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-wrap lg:flex-nowrap items-end  justify-between gap-2">
        <div className="w-full flex flex-wrap lg:flex-nowrap items-center gap-2">
          <FormField
            control={form.control}
            name="supply_id"
            render = {({field}) => (
              <FormItem className="w-full md:w-[230px]">
              <FormLabel>Insumo</FormLabel>
              <div className="w-full flex items-center justify-content">
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        role="combobox"
                        className={cn(
                          "w-full justify-between mr-1",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value
                          ? supplies.find((supply:Supply)=>supply.id === field.value)?.name
                          : "Seleccione insumo"}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-[200px] p-0">
                      <Command>
                        <CommandInput placeholder="Buscar insumo..." />
                        <CommandEmpty>Sin resultados.</CommandEmpty>
                        <CommandGroup>
                        <ScrollArea className={`h-[200px] w-48 ${open ? 'open' : ''}`}>
                          {Array.isArray(supplies) && supplies.map((supply) => (
                            <CommandItem
                              value={supply.name}
                              key={supply.id}
                              onSelect={() => {
                                form.setValue("supply_id", supply.id)
                                setOpen(!open)
                              }}
                            >
                              <Check
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  supply.id === field.value ? "opacity-100" : "opacity-0"
                                )}
                              />
                              {supply.name}
                            </CommandItem>
                          ))}
                          </ScrollArea>
                        </CommandGroup>
                      </Command>
                    </PopoverContent>
                  </Popover>
                  <HeadTable location='purchases'/>
                  </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="amount_supplies"
            render={({ field }) => (
              <FormItem className="w-full md:w-fit">
                <FormLabel>Cantidad</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="Cantidad del insumo" {...form.register('amount_supplies', {valueAsNumber: true})} className="lg:w-fit"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )
          }
          />
          <FormField
            control={form.control}
            name="price_supplies"
            render={({ field }) => (
              <FormItem className="w-full md:w-fit">
                <FormLabel>Precio</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="Precio del insumo" {...form.register('price_supplies', {valueAsNumber: true})} className="lg:w-fit"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )
          }
          />

        </div>
        <Tooltip placement="top" title="Aqui podrás agregar ordenes a la compra" arrow>
          <Button type="submit" className="w-full md:w-fit">
            <span>Agregar</span>
          </Button>
        </Tooltip>
      </form>
    </Form>
  )
}