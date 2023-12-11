'use client'
import { Order, Sale, SaleConfirm } from '@/app/(protected)/sales/models/sale.models'
import { fetcherPut, fetcherDelete } from '@/context/swr-context-provider/SwrContextProvider'
import { RoutesApi } from '@/models/routes.models'
import { convertToCOP } from '@/app/(protected)/sales/utils'
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
import {
  Tooltip
} from "@mui/material"
import { InfoSaleHeader } from '..'
import { getValidationErrors } from '@/utilities'
import {FormClient} from '../form-client'
import { getInLocalStorage, clearLocalStorage } from '@/utilities'


const formSaleSchema = z.object({
  payment_method: z.enum(['transferencia', 'efectivo']),
  type_sale: z.enum(['pedido', 'fisico']),
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
  const client = getInLocalStorage('client')

  const formSale = useForm<z.infer<typeof formSaleSchema>>({
    resolver: zodResolver(formSaleSchema),
    defaultValues: {
      payment_method: 'efectivo',
      type_sale: client !== null ? 'pedido' : 'fisico' ,
    }
  })

  

  async function onSubmitSale(values: z.infer<typeof formSaleSchema>){
    const sale = {
      payment_method: values.payment_method,
      type_sale: values.type_sale,
      client: {
        name: client ? JSON.parse(client).name : "",
        direction: client ? JSON.parse(client).direction : "",
        phone: client ? JSON.parse(client).phone : "",
        email: client ? JSON.parse(client).email : ""
      }
    }

    if(Array.isArray(orders) && orders.length <= 0) {
      toast({variant: 'destructive', title: getValidationErrors("SALE_NOT_CONTENT").title, description: getValidationErrors("SALE_NOT_CONTENT").message})
    }else {
      if(formSale.getValues().type_sale === 'pedido' && client === null){
        toast({variant: 'destructive', title: "Información del cliente necesaria", description: "La información del cliente para realizar pedidos es de suma importancia, por favor digite dicha información."})
      }else {
        const res = await ConfirmSaleFetch(`${RoutesApi.SALES}/${id}/confirm-sale`, sale)
        toast({variant: 'default', title: "Venta confirmada correctamente", description: "Se ha confirmado con exito la venta, mira el historial en la sección de ventas."})
        clearLocalStorage()
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
          <AlertTitle>Recibo</AlertTitle>
          <AlertDescription>
            {sale?.invoice_number}
          </AlertDescription>
        </Alert>
      </div>
      <div className='px-4'>
        {
          client !== null && formSale.getValues().type_sale === 'pedido' ?  (
            <div className='p-2 border rounded text-sm'>
              <p className='font-semibold'>{JSON.parse(client).name}</p>
              <p>{JSON.parse(client).email}</p>
            </div>
          ) : ""
        }
        
        {
          formSale.getValues().type_sale !== 'pedido'  || client !== null ? "" : (
            <FormClient />
          )
        }

      </div>
      <Form {...formSale}>
        <form onSubmit={formSale.handleSubmit(onSubmitSale)} className='p-4 h-full flex flex-col justify-between'>
          <div>
          <div className='mb-5 space-y-2'>
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
            <Tooltip placement="top" title="Aqui podrás confirmar la venta" arrow>
              <Button className="w-full" type='submit' >
                Consolidar venta
              </Button>
            </Tooltip>
          </div>

        </form>
      </Form>
      <div className='space-y-2 px-4 pb-4'>
        <Tooltip placement="top" title="Aqui podrás cancelar la venta" arrow>
          <Button className="w-full" variant='outline' onClick={async () => {
            const res = await CancelSaleFetch(`${RoutesApi.SALES}/${id}/cancel-sale`)
            toast({variant: 'default', title: "Venta cancelada correctamente", description: "Se ha cancelado la venta con éxito."})
            clearLocalStorage()
            router.push("/sales")
          }}>
            Cancelar venta
          </Button>
        </Tooltip>
      </div>

    </div>
  )
}
