'use client'
import { Order, Sale, SaleConfirm } from '@/app/sales/models/sale.models'
import { fetcherPut, fetcherDelete } from '@/context/swr-context-provider/SwrContextProvider'
import { RoutesApi } from '@/models/routes.models'
import { convertToCOP } from '@/app/sales/utils'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useToast } from "@/components/ui/use-toast"
import { HashtagIcon } from '@heroicons/react/24/outline'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import useSWR from 'swr'
import * as z from 'zod'
import { InfoSaleHeader } from '..'
import { getValidationErrors } from '@/utilities'




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
  const {data:orders} = useSWR(`${RoutesApi.SALES}/${id}/orders`)
  const {data: sale} = useSWR<Sale>(`${RoutesApi.SALES}/${id}`)
  const router = useRouter()
  const { toast } = useToast()
  console.log(orders)

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

    if(Array.isArray(orders) && orders.length <= 0) {
      toast({variant: 'destructive', title: getValidationErrors("SALE_NOT_CONTENT").title, description: getValidationErrors("SALE_NOT_CONTENT").message})
    }else {
      if(values.type_sale === 'pedido' &&  (values.name === '' || values.direction === '' || values.email === '' || values.phone === '' )){
        toast({variant: 'destructive', title: "Campos del cliente requeridos", description: "Todos los campos de cliente son necesarios para realizar el pedido."})
      }else{
    
        const res = await ConfirmSaleFetch(`${RoutesApi.SALES}/${id}/confirm-sale`, sale)
        toast({variant: 'default', title: "Venta confirmada correctamente", description: "Se ha confirmado con exito la venta, mira el historial en la sección de ventas."})
        router.push('/sales') 
      
      }
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
            (formSale.getValues().type_sale === 'pedido'
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
                  <Select defaultValue={field.value} onValueChange={field.onChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Tipo de venta" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="efectivo">Efectivo</SelectItem>
                      <SelectItem value="transferencia">Transferencia</SelectItem>
                    </SelectContent>
                  </Select>
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
          const res = await CancelSaleFetch(`${RoutesApi.SALES}/${id}/cancel-sale`)
          toast({variant: 'default', title: "Venta eliminada correctamente", description: "Se ha eliminado la venta con éxito."})
          router.push("/sales")
        }}>
          Cancelar venta
        </Button>
      </div>

    </div>
  )
}
