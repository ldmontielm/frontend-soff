"use client" 
import { addOrder, getProducts, urlProducts } from "@/app/sales/services/sale.services"
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
import { useContext } from "react"
import { OrderContext } from "../../context/orders-context/orderContext"
import { OrderContextInterface } from "@/app/sales/models/sale.models"



const formSchema = z.object({
  sale_id: z.string(),
  product_id: z.string().uuid({message: 'Debe seleccionar un producto'}),
  amount_product: z.number().min(1, 'Como mínimo debe vender un producto').transform(Number)
})

export default function HeadTable() {
  const params = useParams()
  const router = useRouter()
  const {data:products} = useSWR(urlProducts, getProducts)
  const {AddOrder} = useContext(OrderContext) as OrderContextInterface


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
    const product: any = Array.isArray(products) && products.find((product) => product.id === values.product_id)
    if(product != undefined && product != false){
      const newOrder = {
        id: crypto.randomUUID(),
        sale_id: values.sale_id,
        product_id: values.product_id,
        product: product.name,
        price: product.sale_price,
        amount_product: values.amount_product,
        total: values.amount_product * product.sale_price
      }
      AddOrder(newOrder)
    }else{
      toast.error('El producto no se pudo encontrar')
    }
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