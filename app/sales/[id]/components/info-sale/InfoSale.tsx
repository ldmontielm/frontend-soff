'use client'
import { Order, Sale, SaleConfirm } from '@/app/sales/models/sale.models'
import { urlSales, fetcherPut, fetcherDelete } from '@/app/sales/services/sale.services'
import { convertToCOP } from '@/app/sales/utils'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { BanknotesIcon, CreditCardIcon, HashtagIcon } from '@heroicons/react/24/outline'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import useSWR from 'swr'
import * as z from 'zod'
import { InfoSaleHeader } from '..'
import { useToast } from "@/components/ui/use-toast"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

const formSaleSchema = z.object({
  payment_method: z.enum(['transferencia', 'efectivo']),
  type_sale: z.enum(['pedido', 'fisico']),
  name: z.string().optional(),
  email: z.string().optional(),
  direction: z.string().optional(),
  phone: z.string().optional()
})

interface Props{
  id: string
}

const clculateTotal = (orders: Array<Order>) => {
  let total = 0
  if(orders !== undefined){
    orders.map(order => {
      total += order.total
    })
  }
  return total
}

const ConfirmSaleFetch = async (url: string, arg: SaleConfirm) => {
  return await fetcherPut(url, arg)
}

const CancelSaleFetch = async (url: string) => {
  return await fetcherDelete(url)
}

export default function InfoSale({id}:Props) {
  const {data:orders} = useSWR(`${urlSales}/${id}/orders`)
  const {data: sale} = useSWR<Sale>(`${urlSales}/${id}`)
  const router = useRouter()
  const { toast } = useToast()

  const formSale = useForm<z.infer<typeof formSaleSchema>>({
    resolver: zodResolver(formSaleSchema),
    defaultValues: {
      payment_method: 'efectivo',
      type_sale: 'fisico',
      name: '',
      direction: '',
      phone: '',
      email: ''
    }
  })

  async function onSubmitSale(values: z.infer<typeof formSaleSchema>){
    const sale = {
      payment_method: values.payment_method,
      type_sale: values.type_sale,
      client: {
        name: values.name,
        direction: values.direction,
        phone: values.phone,
        email: values.email
      }
    }

  
    if(values.type_sale === 'pedido' &&  (values.name === '' || values.direction === '' || values.email === '' || values.phone === '' )){
      toast({variant: 'destructive', title: "Campos del cliente requeridos", description: "Todos los campos de cliente son necesarios para realizar el pedido."})
    }else{
      const res = await ConfirmSaleFetch(`${urlSales}/${id}/confirm-sale`, sale)
      toast({variant: 'default', title: "Venta confirmada correctamente", description: "Se ha confirmado con exito la venta, mira el historial en la sección de ventas."})
      router.push('/sales')
    }
  }
  
  return (
    <div className='w-full'>
      <InfoSaleHeader />
      <hr />
      <div className='p-4'>
        <Alert>
          <HashtagIcon className="h-4 w-4" />
          <AlertTitle>Factura</AlertTitle>
          <AlertDescription>
            {sale?.invoice_number}
          </AlertDescription>
        </Alert>
      </div>
      <Form {...formSale}>
        <form onSubmit={formSale.handleSubmit(onSubmitSale)} className='p-4 h-full flex flex-col justify-between'>
          <div>
          <div className='mb-5'>
          <FormField
            control={formSale.control}
            name="type_sale"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tipo de venta</FormLabel>
                <FormControl>
                <Select defaultValue={field.value} onValueChange={field.onChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Tipo de venta" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fisico">Física</SelectItem>
                    <SelectItem value="pedido">Pedido</SelectItem>
                  </SelectContent>
                </Select>
                </FormControl>
                <FormDescription>Agrega tipo de venta.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          {
            (formSale.getValues().type_sale === 'pedido' && (formSale.getValues().name === "" || formSale.getValues().email === ""
            || formSale.getValues().phone === "" || formSale.getValues().direction === "")
            ) ? ( 
              <div>
                <FormField 
                  control={formSale.control}
                  name='name'
                  render ={({field}) => (
                    <FormItem>
                      <FormLabel>Nombre</FormLabel>
                      <FormControl>
                        <Input placeholder='nombre' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField 
                  control={formSale.control}
                  name='email'
                  render ={({field}) => (
                    <FormItem>
                      <FormLabel>Correo</FormLabel>
                      <FormControl>
                        <Input placeholder='correo' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField 
                  control={formSale.control}
                  name='direction'
                  render ={({field}) => (
                    <FormItem>
                      <FormLabel>Dirección</FormLabel>
                      <FormControl>
                        <Input placeholder='dirección' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField 
                  control={formSale.control}
                  name='phone'
                  render ={({field}) => (
                    <FormItem>
                      <FormLabel>Teléfono</FormLabel>
                      <FormControl>
                        <Input placeholder='dirección' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            ) : <></>
          }
          </div>
            <div className='my-3 w-full text-center'>
              <p className='font-bold text-4xl'>${convertToCOP(clculateTotal(orders !== undefined ? orders : [] ))}</p>
              <p className='text-sm text-gray-400'>Total</p>
            </div>
            <div>
              <FormField
              control={formSale.control}
              name="payment_method"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Método de pago</FormLabel>
                  <FormControl>
                    <RadioGroup defaultValue={field.value} onValueChange={field.onChange} className='grid grid-cols-6 gap-2'>
                      <Label className='border rounded w-full col-span-3 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-black' htmlFor='fisico'>
                        <RadioGroupItem value='transferencia' id='fisico' className='hidden'/>
                        <div className='flex flex-col items-center space-y-2'>
                          <CreditCardIcon className='h-6 w-6' />
                          <Label>Transferencia</Label>
                        </div>
                      </Label>
                      <Label className='border rounded w-full col-span-3 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-black' htmlFor='trans'>
                        <RadioGroupItem value='efectivo' id='trans' className='hidden' />
                        <div className='flex flex-col items-center space-y-2'>
                          <BanknotesIcon className='h-6 w-6 ' />
                          <Label>Efectivo</Label>
                        </div>
                      </Label>
                    </RadioGroup>
                  </FormControl>
                  <FormDescription>Elige el método de pago.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
              />
            </div>
          </div>
          
          <div className='mt-4 space-y-2'>
            <Button className="w-full" type='submit' >
              Consolidar venta
            </Button>
          </div>

        </form>
      </Form>
      <div className='space-y-2 px-4 pb-4'>
        <Button className="w-full" variant='outline' onClick={async () => {
          const res = await CancelSaleFetch(`${urlSales}/${id}/cancel-sale`)
          toast({variant: 'default', title: "Venta eliminada correctamente", description: "Se ha eliminado la venta con éxito."})
          router.push("/sales")
        }}>
          Cancelar venta
        </Button>
      </div>

    </div>
  )
}
