"use client" 
import { getProducts, urlProducts, urlSales, getOrdersBySaleId } from "@/app/sales/services/sale.services"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { PlusIcon } from "@heroicons/react/24/outline"
import { zodResolver } from "@hookform/resolvers/zod"
import { useParams } from 'next/navigation'
import { useForm } from "react-hook-form"
import useSWR, {useSWRConfig} from 'swr'
import * as z from 'zod'

const formSchema = z.object({
  sale_id: z.string(),
  product_id: z.string().uuid({message: 'Debe seleccionar un producto'}),
  amount_product: z.number().min(1, 'Como mínimo debe vender un producto').transform(Number)
})

export default function HeadTable() {
  const params = useParams()
  const {data:products} = useSWR(urlProducts, getProducts)
  const {data:orders} = useSWR(`${urlSales}/${params.id}/orders`, getOrdersBySaleId)
  const { mutate } = useSWRConfig()
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
    await fetch(`${urlSales}/${params.id}/add-order`, {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json'
      }
    })
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
                <FormControl>
                  <div className="w-full xl:w-[200px]">
                    <Select onValueChange={field.onChange}>
                      <SelectTrigger className="uppercase">
                        <SelectValue  placeholder='Producto' />
                      </SelectTrigger>
                      <SelectContent >
                        {
                          Array.isArray(products) && products.map((product) => (
                            <SelectItem key={product.id} value={product.id} className="uppercase">{product.name}</SelectItem>
                          ))
                        }
                      </SelectContent>
                    </Select>
                  </div>
                </FormControl>
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