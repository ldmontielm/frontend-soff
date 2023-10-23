"use client"

import { RoutesApi } from "@/models/routes.models"
import { fetcherPost } from "@/context/swr-context-provider/SwrContextProvider"
import { urlSupply } from "@/app/supplies/services/supply.services"
import { Supply } from "@/app/supplies/models/supply.models"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { PlusIcon } from "@heroicons/react/24/outline"
import { zodResolver } from "@hookform/resolvers/zod"
import { useParams, useRouter } from 'next/navigation'
import { useState } from "react"
import { useForm } from "react-hook-form"
import useSWR, {mutate} from 'swr'
import * as z from 'zod'
import { Check, ChevronsUpDown } from "lucide-react"
import * as React from "react"
 
import { cn } from "@/lib/utils"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {HeadTable as HeadTableSupply} from "@/app/supplies/components"
import { DetailCreate } from "@/app/products/models/product.models"
// import {HeadTable} from "@/app/supplies/components"

// const formSchema = z.object({
//   product_id: z.string(),
//   supply_id: z.string({
//     required_error: "Please select a supply.",
//   }),
//   // amount_supply: z.number().min(1, {message:'Mínimo debes ingresar un numero'}).nonnegative({message: 'No se aceptan valores negativos'}),
//   amount_supply: z.string().transform(Number),
//   // unit_measure: z.string().min(2, {message: 'La unidad debe tener más de 2 caracteres'})
// })

const formSchema = z.object({
  product_id: z.string(),
  supply_id: z.string().uuid({message: 'Debe seleccionar un insumo'}),
  amount_supply: z.number({required_error: "Este campo es requerido", invalid_type_error: "Se espera un número"}).min(1, {message: "Como mínimo debe usar un insumo"}).max(999, {message: "Como máximo solo puedes usar 900 de cada insumo"})
})

const AddDetailFetch = async (url: string, body: DetailCreate) => {
  return await fetcherPost<DetailCreate>(url, body)
}

interface Props {
  id: string
}

export default function HeadTable({id}:Props) {
  // const params = useParams()
  // const {data:supplies} = useSWR(urlSupply)
  // const {data} = useSWR(`${urlProducts}/${params.id}/details`)
  // const [open, setOpen] = useState(false)
  // const [value, setValue] = useState("")

  // const [supply, setSupply] = useState(false)
  // const [amountSuply, setAmountSupply] = useState<number>()
  // const [value, setValue] = useState("")
  // const router = useRouter()
  
  
  // const [open, setOpen] = React.useState(false)
  // const [value, setValue] = React.useState("")

  const {data:supplies} = useSWR(RoutesApi.SUPPLIES)
  const {data} = useSWR(`${RoutesApi.PRODUCTS}/${id}/details`)
  const [open, setOpen] = useState(false)
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      product_id: "",
      supply_id: "",
      amount_supply: 0,
    }
  })


  // async function onSubmit(values: z.infer<typeof formSchema>){
  //   values.product_id = params.id.toString()
  //   toast.promise(addDetail(values), {
  //     loading: 'Agreagando detalle...',
  //     success: 'Detalle agregado correctamente',
  //     error: 'Error when fetching'
  //   })
  //   router.refresh()
  // }

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    values.product_id = id
    const data = await AddDetailFetch(`${RoutesApi.PRODUCTS}/${id}/add_detail`, values)
    mutate(`${RoutesApi.PRODUCTS}/${id}/details`)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-wrap lg:flex-nowrap items-end  justify-between gap-2">
        <div className="w-full flex flex-wrap lg:flex-nowrap items-center gap-2">
          <FormField 
            control={form.control}
            name="supply_id"
            render = {({field}) => (
            <FormItem className="w-full md:w-[200px]">
              <FormLabel>Insumo</FormLabel>
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
                          ? supplies?.find((supply:Supply)=>supply.id === field.value)?.name
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
                          {Array.isArray(supplies) && supplies.map((supply) => (
                            <CommandItem
                              value={supply.name}
                              key={supply.id}
                              onSelect={() => {
                                form.setValue("supply_id", supply.id)
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
            name="amount_supply"
            render={({ field }) => (
              <FormItem className="w-full md:w-[200px]">
                <FormLabel>Cantidad</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="Cantidad de insumo" min="1" {...form.register('amount_supply', {valueAsNumber: true})} className="lg:w-fit"/>
                  {/* <Input type="number" placeholder="Cantidad de insumo" min="1" max="4" {...field} className="lg:w-fit"/> */}
                </FormControl>
                <FormMessage />
              </FormItem>
            )
          }
          />
           {/* <FormField
            control={form.control}
            name="unit_measure"
            render={({ field }) => (
              <FormItem className="w-full md:w-[200px]">
                <FormLabel className="ml-6">Unidad de medida</FormLabel>
                <FormControl>
                  <Input placeholder="Unidad de medida" {...field} className="ml-6 lg:w-fit"/>
                </FormControl>
                <FormMessage />
              </FormItem> */}
            {/* ) */}
          {/* } */}
          {/* /> */}

        </div>
        <Button type="submit" className="w-full md:w-fit">
          <PlusIcon className="w-4 h-4 mr-2" />
          <span>Agregar</span>
        </Button>
      </form>
    </Form>
  )
}