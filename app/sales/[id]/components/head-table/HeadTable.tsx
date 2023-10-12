"use client" 
import { getProducts, urlProducts, urlSales, getOrdersBySaleId, fetcherPost } from "@/app/sales/services/sale.services"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { PlusIcon } from "@heroicons/react/24/outline"
import { zodResolver } from "@hookform/resolvers/zod"
import { useParams } from 'next/navigation'
import { useForm } from "react-hook-form"
import useSWR, { mutate} from 'swr'
import * as z from 'zod'
import useSWRMutation from 'swr/mutation'
import { useToast } from "@/components/ui/use-toast"
import { OrderCreate } from "@/app/sales/models/sale.models"
import { useState } from "react"
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
import { Check, ChevronsUpDown } from "lucide-react"


const formSchema = z.object({
  sale_id: z.string(),
  product_id: z.string().uuid({message: 'Debe seleccionar un producto'}),
  amount_product: z.number().min(1, 'Como mínimo debe vender un producto').transform(Number)
})


const AddOrderFetch = async (url: string, body: OrderCreate) => {
  return await fetcherPost<OrderCreate>(url, body)
}

export default function HeadTable() {
  const params = useParams()
  const {data:products} = useSWR(urlProducts, getProducts)
  const {data} = useSWR(`${urlSales}/${params.id}/orders`)
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      sale_id: "",
      product_id: "",
      amount_product: 0
    }
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    values.sale_id = params.id.toString()
    const data = await AddOrderFetch(`${urlSales}/${params.id}/add-order`, values)
    mutate(`${urlSales}/${params.id}/orders`)
  }


  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-wrap lg:flex-nowrap items-center  justify-between gap-2">
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
                          ? products?.find((product)=>product.id === field.value)?.name
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
        <Button type="submit" className="w-full md:w-fit">
          <PlusIcon className="w-4 h-4 mr-2" />
          <span>Agregar</span>
        </Button>
      </form>
    </Form>
  )
}