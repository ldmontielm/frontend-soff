"use client"
 
import { addOrder, getProducts } from "@/app/sales/services/sale.services"
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

const formSchema = z.object({
  sale_id: z.string(),
  product_id: z.string(),
  amount_product: z.string().transform(Number)
})

async function fetchGetAllProducts(){
  return await getProducts()
}

// eslint-disable-next-line @next/next/no-async-client-component
export default function HeadTable() {
  const params = useParams()
  const [producto, setProducto] = useState(false)
  const [amountProduct, setAmountProduct] = useState<number>()
  const [value, setValue] = useState("")
  const router = useRouter()
  const {data:products} = useSWR('/products', getProducts)


  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      sale_id: "",
      product_id: "",
      amount_product: 0
    }
  })

  async function onSubmit(values: z.infer<typeof formSchema>){
    values.sale_id = params.id.toString()
    toast.promise(addOrder(values), {
      loading: 'Add order...',
      success: 'Orde agregada correctamente',
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
            name="product_id"
            render = {({field}) => (
              <FormItem className="w-full md:w-[200px]">
                <FormLabel>Producto</FormLabel>
                <FormControl>
                  <div className="w-full xl:w-[200px]">
                    <Select defaultValue={field.value} onValueChange={field.onChange}>
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
                  <Input type="number" placeholder="Cantidad del producto" min="1" {...field} className="lg:w-fit"/>
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