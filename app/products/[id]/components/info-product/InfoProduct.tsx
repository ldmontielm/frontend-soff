'use client'

import { RoutesApi } from '@/models/routes.models'
import { fetcherPut, fetcherDelete } from '@/context/swr-context-provider/SwrContextProvider'
// import { confirmProduct,urlProducts, deleteProduct } from '@/app/products/services/products.services'
import { convertToCOP } from '@/app/sales/utils'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
// import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import useSWR from 'swr'
import * as z from 'zod'
// import { CardClient } from '..'
import { Input } from '@/components/ui/input'
import { DetailsRecipe, Product, ProductConfim } from '@/app/products/models/product.models'
import { useToast } from "@/components/ui/use-toast"


const formProductSchema = z.object({
    name: z.string(),
    sale_price: z.string().transform(Number)
})

interface Props{
  // subtotal: number,
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
  const {data: product} = useSWR<Product>(`${RoutesApi.PRODUCTS}/${id}`)
  const router = useRouter()
  const { toast } = useToast()
  // const router = useRouter()
  // const {data:product} = useSWR(urlProducts)

  console.log(product)

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

      if(values.name === '' || values.sale_price === 0){
        toast({variant: 'destructive', title: "Campos del producto requeridos", description: "Todos los campos del producto son necesarios para crear el producto."})
      }else{
        const res = await ConfirmProductFetch(`${RoutesApi.PRODUCTS}/${id}/confirm_product`, product)
        toast({variant: 'default', title: "Registro guardado correctamente", description: "Se ha guardado con exito el producto, mira el historial en la sección de productos."})
        router.push('/products')
      }
    }
    
    // if (values.name === '' || values.sale_price === 0){
    //   toast.error('La información del producto es necesaria.')
    // }else{
    //     toast.promise(confirmProduct(id, values), {
    //       loading: 'Registrando producto...',
    //       success: 'Producto registrado',
    //       error: 'Error when fetching'
    //     })
    //     router.push('/products')
    //   }
    // }

    // async function cancelProduct(){
    //   toast.promise(deleteProduct(id),{
    //     loading: 'Cancelando Registro...',
    //     success: 'Registro cancelado',
    //     error: (err) => `This just happened: ${err.detail.toString()}`
    //   })
    //   router.push('/products')
    // }

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
                         <Input placeholder='Nombre'{...field} />
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
                        <Input placeholder='Precio'{...field} />
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
          </form>
          </Form>
          <div className='mt-4 space-y-2'>
            <Button className="w-full" type='button' variant='outline' onClick={async()=>{
              const res = await CancelProductFetch(`${RoutesApi.PRODUCTS}/${id}/delete_product`)
              toast({variant: 'default', title: "Producto Cancelado correctamente", description: "Se ha cancelado el producto con éxito."})
              router.push("/products")
            }}>
              Cancelar
            </Button>
          </div>
       
      

    </div>
  )
}
