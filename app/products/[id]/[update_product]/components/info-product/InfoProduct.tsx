'use client'

import { Routes, RoutesApi } from '@/models/routes.models'
import { fetcherPut, fetcherDelete } from '@/context/swr-context-provider/SwrContextProvider'
import { convertToCOP } from '@/app/sales/utils'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import useSWR from 'swr'
import * as z from 'zod'
import { Input } from '@/components/ui/input'
import { DetailsRecipe, Product, ProductCreate } from '@/app/products/models/product.models'
import { useToast } from "@/components/ui/use-toast"

const formProductSchema = z.object({
    name: z.string({required_error: "El campo es requerido"}).min(2, {message: 'Ingrese el nombre del Producto'}),
    sale_price: z.number({required_error: "El campo es requerido", invalid_type_error: "Se espera un número"}).min(1, {message: "El valor del precio debe ser diferente de 0"})
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

const ConfirmProductFetch = async (url: string, arg: ProductCreate) => {
  return await fetcherPut(url, arg)
}

export default function InfoProduct({id}:Props) {
  const {data:details} = useSWR(`${RoutesApi.PRODUCTS}/${id}/details`)
  const {data: product} = useSWR<ProductCreate>(`${RoutesApi.PRODUCTS}/${id}`)
  const router = useRouter()
  const { toast } = useToast()

  
  const formProduct = useForm<z.infer<typeof formProductSchema>>({
    resolver: zodResolver(formProductSchema),
    defaultValues: {
      name: product?.name,
      sale_price: product?.sale_price
    }
  })
  console.log(product)
  async function onSubmit(values: z.infer<typeof formProductSchema>){
    const product = {
      name: values.name,
      sale_price: values.sale_price
    }
    
    if (product.name === '' || product.sale_price === 0){
      toast({variant: 'destructive', title: "Campos del producto requeridos", description: "Todos los campos del producto son necesarios para editar el producto."})
    }else{
      const res = await ConfirmProductFetch(`${RoutesApi.PRODUCTS}/${id}/update_product`, product)
        toast({variant: 'default', title: "Registro guardado correctamente", description: "Se ha guardado con exito el producto, mira el historial en la sección de productos."})
        router.push(Routes.CREATEPRODUCT)
      }
    }

    async function cancelProduct(){
      router.push(Routes.CREATEPRODUCT)
    }

  return (
    <div className='w-full'>
      <div className='w-full text-center mt-1 mb-1 p-4'>
        <h3 className='font-bold'>MANDISAaaaa</h3>
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
                         <Input defaultValue={product?.name} {...field} />
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
                        <Input type='number' defaultValue={product?.sale_price} {...formProduct.register("sale_price", {valueAsNumber: true})}/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
          </div>
            <div className='my-3 w-full text-center'>
              <p className='font-bold text-4xl'>${convertToCOP(calculateSubtotal(details !== undefined ? details : []))}</p>
              <p className='text-sm text-gray-400'>Costo</p>
            </div>
          </div>
          
          <div className='mt-4 space-y-2'>
            <Button className="w-full" type='submit' >
              Guardar producto
            </Button>
          </div>

          <div className='mt-4 space-y-2'>
            <Button className="w-full" type='button' variant='outline' onClick={()=> (cancelProduct())}>
              Cancelar
            </Button>
          </div>
        </form>
      </Form>

    </div>
  )
}
