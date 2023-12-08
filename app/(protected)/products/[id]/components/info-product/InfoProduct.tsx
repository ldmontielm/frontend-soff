'use client'

import { RoutesApi } from '@/models/routes.models'
import { fetcherPut, fetcherDelete } from '@/context/swr-context-provider/SwrContextProvider'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import useSWR from 'swr'
import * as z from 'zod'
import { Input } from '@/components/ui/input'
import { DetailsRecipe, Product, ProductConfim } from '../../../models/product.models'
import { useToast } from "@/components/ui/use-toast"
import { formattedNumber } from '../../../utils'
const formProductSchema = z.object({
  name: z.string({required_error: "El campo es requerido"})
  .min(3, {message: "Ingrese mínimo 3 caracteres"})
  .max(40, {message: 'El nombre es demasiado largo'}),
  sale_price: z.number({required_error: "El campo es requerido",
  invalid_type_error: "Se espera un número"})
  .max(9999999, {message: 'El precio es demasiado largo'})
  .refine(value => value !== 0, { message: "El precio no puede ser igual 0" })
  .refine(value => value > 0, { message: "No se aceptan números negativos" })
  .refine(value => value >= 50, { message: "El precio debe ser mayor o igual a $50" })
});

interface Props{
  id: string
}

const calculateSubtotal = (details: Array<DetailsRecipe>) => {
  let subtotal = 0
  if(details !== undefined){
    details.map(detail => {
      subtotal += detail.subtotal
    })
  }
  return subtotal
}

const ConfirmProductFetch = async (url: string, arg: ProductConfim) => {
  return await fetcherPut(url, arg)
}

const CancelProductFetch = async (url: string) => {
  return await fetcherDelete(url)
}

export default function InfoProduct({id}:Props) {
  const {data:details} = useSWR(`${RoutesApi.PRODUCTS}/${id}/details`)
  const router = useRouter()
  const { toast } = useToast()

  const formProduct = useForm<z.infer<typeof formProductSchema>>({
    resolver: zodResolver(formProductSchema),
    defaultValues: {
      name: '',
      sale_price: 0
    }
  })

  async function onSubmit(values: z.infer<typeof formProductSchema>){
    const product = {
        name: values.name,
        sale_price: values.sale_price
      }
        const res = await ConfirmProductFetch(`${RoutesApi.PRODUCTS}/${id}/confirm_product`, product)
        toast({variant: 'default', title: "Registro guardado correctamente", description: "Se ha guardado con exito el producto, mira el historial en la sección de productos."})
        router.push('/products')
    }

  return (
    <div className='w-full'>
      <div className='w-full text-center mt-1 mb-1 p-4'>
        <h3 className='font-bold'>MANDISA</h3>
        <p className='text-sm text-gray-400'>NIT 71227771-4</p>
        <p className='text-sm text-gray-400'>Navarra/Bello</p>
        <p className='text-sm text-gray-400'>(+57) 3146486791</p>
      </div>
      <hr />
      <Form {...formProduct}>
        <form onSubmit={formProduct.handleSubmit(onSubmit)} className='p-4 h-full flex flex-col justify-between'>
          <div>
            <div className='mb-5'>
                <FormField 
                  control={formProduct.control}
                  name='name'
                  render ={({field}) => (
                    <FormItem>
                      <FormLabel>Nombre</FormLabel>
                      <FormControl >
                         <Input placeholder='Ingrese el nombre del producto'{...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField 
                  control={formProduct.control}
                  name='sale_price'
                  render ={({field}) => (
                    <FormItem>
                      <FormLabel>Precio</FormLabel>
                      <FormControl>
                        <Input type='number' placeholder='Ingrese el precio de venta'{...formProduct.register("sale_price", {valueAsNumber: true})}/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
          </div>
            <div className='my-3 w-full text-center'>
              <p className='font-bold text-4xl'>{formattedNumber(calculateSubtotal(details !== undefined ? details : []))}</p>
              <p className='text-sm text-gray-400'>Costo</p>
            </div>
          </div>
          
          <div className='mt-4 space-y-2'>
            <Button className="w-full" type='submit' >
              Guardar producto
            </Button>
          </div>
          </form>
          </Form>
          <div className=' space-y-2 pl-4 pr-4 pb-4'>
            <Button className="w-full" type='button' variant='outline' onClick={async()=>{
              const res = await CancelProductFetch(`${RoutesApi.PRODUCTS}/${id}/delete_product`)
              toast({variant: 'default', title: "Producto cancelado correctamente", description: "Se ha cancelado el producto con éxito."})
              router.push("/products")
            }}>
              Cancelar
            </Button>
          </div>
    </div>
  )
}