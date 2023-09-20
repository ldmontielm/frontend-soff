'use client'
import { deleteProduct, updateProduct, urlProducts, getProductById } from '@/app/products/services/products.services'
import { convertToCOP } from '@/app/sales/utils'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { BanknotesIcon, CreditCardIcon } from '@heroicons/react/24/outline'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
// import { useRouter } from 'next/router'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import useSWR from 'swr'
import * as z from 'zod'
// import { CardClient } from '..'
import { Input } from '@/components/ui/input'
import { type } from 'os'
import { NONAME } from 'dns'

const formProductSchema = z.object({
    name: z.string(),
    sale_price: z.string().transform(Number)
})

interface Props{
  subtotal: number,
  id: string
}

export default function InfoProduct({subtotal, id}:Props) {
  const router = useRouter()
  const {data:product} = useSWR(`${id}`, getProductById)

  console.log(product)
  const formProduct = useForm<z.infer<typeof formProductSchema>>({
    resolver: zodResolver(formProductSchema),
    defaultValues: {
      name: product?.name,
      sale_price: product?.sale_price
    }
  })

  

  async function onSubmit(values: z.infer<typeof formProductSchema>){

    const product = {
        name: values.name,
        sale_price: values.sale_price
      }
    
    // if (values.name === '' || values.sale_price === 0){
    //   toast.error('La información del producto es necesaria.')
    // }else{
        toast.promise(updateProduct(id, product), {
          loading: 'Actualizando producto...',
          success: 'Producto actualizado',
          error: 'Error when fetching'
        })
        router.push('/products')
      // }
    }

    async function cancelProduct(){
        toast.promise(deleteProduct(id),{
          loading: 'Cancelando registro...',
          success: 'Registro cancelado',
          error: (err) => `This just happened: ${err.detail.toString()}`
        })
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
                      <FormControl>
                         <Input placeholder='Nombre' defaultValue={product?.name} {...field} />
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
                        <Input placeholder='Precio' defaultValue={product?.sale_price} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
          </div>
            <div className='my-3 w-full text-center'>
              <p className='font-bold text-4xl'>${convertToCOP(subtotal)}</p>
              <p className='text-sm text-gray-400'>Costo</p>
            </div>
          </div>
          
          <div className='mt-4 space-y-2'>
            <Button className="w-full" type='submit' >
              Guardar producto
            </Button>
          </div>

          <div className='mt-4 space-y-2'>
            <Button className="w-full" type='submit' variant='outline' onClick={()=>cancelProduct()}>
              Cancelar
            </Button>
          </div>
        </form>
      </Form>

    </div>
  )
}
