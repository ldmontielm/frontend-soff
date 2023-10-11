"use client"
 
import { addOrder, getSupplies } from "@/app/purchases/services/purchase.services"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { PlusIcon } from "@heroicons/react/24/outline"
import { zodResolver } from "@hookform/resolvers/zod"
import { redirect, useParams, useRouter } from 'next/navigation'
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
import {HeadTable as HeadTableSupply} from "@/app/supplies/components"

const formSchema = z.object({
  purchase_id: z.string(),
  supply_id: z.string({
    required_error: "Please select a supply.",
  }),
  amount_supplies: z.string().transform(Number),
  price_supplies: z.string().transform(Number)
})


export default function HeadTable() {
  const params = useParams()
  const [insumo, setInsumo] = useState(false)
  const [amountSupply, setAmountSupply] = useState<number>()
  const [value, setValue] = useState("")
  const router = useRouter()
  const {data:supplies} = useSWR('http://localhost:8000/supplies', getSupplies)

  const [open, setOpen] = React.useState(false)

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
    values.purchase_id = params.id.toString()
    toast.promise(addOrder(values), {
      loading: 'Agregando orden...',
      success: 'Orden agregada correctamente',
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
                          ? supplies?.find((supply)=>supply.id === field.value)?.name
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
            name="amount_supplies"
            render={({ field }) => (
              <FormItem className="w-full md:w-[200px]">
                <FormLabel>Cantidad</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="Cantidad del insumo" min="1" {...field} className="lg:w-fit"/>
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
              <FormItem className="w-full md:w-[200px]">
                <FormLabel>Precio</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="Precio del insumo" min="100" {...field} className="lg:w-fit"/>
                </FormControl>
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