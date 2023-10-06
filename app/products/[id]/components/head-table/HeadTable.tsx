"use client"

import { addDetail, getSupplies} from "@/app/products/services/products.services"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { PlusIcon } from "@heroicons/react/24/outline"
import { zodResolver } from "@hookform/resolvers/zod"
import { useParams, useRouter } from 'next/navigation'
import { useState } from "react"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"
import useSWR from 'swr'
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

const formSchema = z.object({
  product_id: z.string(),
  supply_id: z.string(),
  amount_supply: z.number().min(1, {message:'Mínimo debes ingresar un numero'}).nonnegative({message: 'No se aceptan valores negativos'}),
  // amount_supply: z.string().transform(Number),
  unit_measure: z.string().min(2, {message: 'La unidad debe tener más de 2 caracteres'})
})

export default function HeadTable() {
  const params = useParams()
  const [supply, setSupply] = useState(false)
  const [amountSuply, setAmountSupply] = useState<number>()
  // const [value, setValue] = useState("")
  const router = useRouter()
  const {data:supplies} = useSWR('http://localhost:8000/supplies', getSupplies)
  
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      product_id: "",
      supply_id: "",
      amount_supply: 0,
      unit_measure: ""
    }
  })


  async function onSubmit(values: z.infer<typeof formSchema>){
    values.product_id = params.id.toString()
    toast.promise(addDetail(values), {
      loading: 'Agreagando detalle...',
      success: 'Detalle agregado correctamente',
      error: 'Error when fetching'
    })
    router.refresh()
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
                <FormControl>
                  <div className="w-full xl:w-[200px]">
                  <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        className="w-[200px] justify-between"
                      >
                        {value
                          ? Array.isArray(supplies) && supplies.map((supply) => supply.id === value)
                          : "Insumo"}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[200px] p-0">
                      <Command>
                        <CommandInput placeholder="Buscar insumo..." />
                        <CommandEmpty>Sin resultados.</CommandEmpty>
                        <CommandGroup>
                          {Array.isArray(supplies) && supplies.map((supply) => (
                            <CommandItem
                              key={supply.id}
                              onSelect={(currentValue) => {
                                setValue(currentValue === value ? "" : currentValue)
                                setOpen(false)
                              }}
                            >
                              <Check
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  value === supply.id ? "opacity-100" : "opacity-0"
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
                </FormControl>
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
                  {/* <Input type="number" placeholder="Cantidad de insumo" {...form.register('amount_supply', {valueAsNumber: true})} className="lg:w-fit"/> */}
                  <Input type="number" placeholder="Cantidad de insumo" min="1" {...field} className="lg:w-fit"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )
          }
          />
           <FormField
            control={form.control}
            name="unit_measure"
            render={({ field }) => (
              <FormItem className="w-full md:w-[200px]">
                <FormLabel className="ml-6">Unidad de medida</FormLabel>
                <FormControl>
                  <Input placeholder="Unidad de medida" {...field} className="ml-6 lg:w-fit"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )
          }
          />

        </div>
        <Button type="submit" className="w-full md:w-fit">
          <PlusIcon className="w-4 h-4 mr-2" />
          <span>Agregar</span>
        </Button>
      </form>
    </Form>
  )
}