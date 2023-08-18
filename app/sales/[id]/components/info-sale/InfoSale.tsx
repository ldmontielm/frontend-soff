'use client'
import { Client } from '@/app/sales/models/sale.models'
import { confirmSale, getGeneralClient, urlSales } from '@/app/sales/services/sale.services'
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
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import useSWR from 'swr'
import * as z from 'zod'
import { CardClient } from '..'
import { Input } from '@/components/ui/input'
import { type } from 'os'

const formSaleSchema = z.object({
  payment_method: z.enum(['transferencia', 'efectivo']),
  type_sale: z.enum(['pedido', 'fisico']),
  name: z.string().optional(),
  email: z.string().optional(),
  direction: z.string().optional(),
  phone: z.string().optional()
})

interface Props{
  total: number,
  id: string
}





export default function InfoSale({total, id}:Props) {
  const [client, setClient] = useState(localStorage.getItem('client') || '{}')
  const {data:general} = useSWR(urlSales, getGeneralClient)
  const router = useRouter()

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

    // const emailValidator = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
    // const directionValidator = /^(Autopista|Avenida|Avenida Calle|Avenida Carrera|Avenida|Carrera|Calle|Carrera|Circunvalar|Diagonal|Kilometro|Transversal|AUTOP|AV|AC|AK|CL|KR|CCV|DG|KM|TV)(\s)?([a-zA-Z]{0,15}|[0-9]{1,3})(\s)?[a-zA-Z]?(\s)?(bis)?(\s)?(Este|Norte|Occidente|Oeste|Sur)?(\s)?(#(\s)?[0-9]{1,2}(\s)?[a-zA-Z]?(\s)?(bis)?(\s)?(Este|Norte|Occidente|Oeste|Sur)?(\s)?(-)?(\s)?[0-9]{1,3}(\s)?(Este|Norte|Occidente|Oeste|Sur)?)?((\s)?(Agrupación|Altillo|Apartamento|Apartamento Sótano|Barrio|Bloque|Bodega|Cabecera Municipal|Callejón|Camino|Carretera|Casa|Caserio|Célula|Centro|Centro Comercial|Centro Urbano|Circular|Condominio|Conjunto|Consultorio|Corregimiento|Deposito|Deposito |Sótano|Edificio|Entrada|Esquina|Etapa|Finca|Garaje|Garaje Sótano|Grada|Inferior|Inspección de Policia|Interior|Kilometro|Local|Local Mezzanine|Local Sótano|Lote|Manzana|Manzanita|Mejora|Mezzanine|Módulo|Municipio|Núcleo|Oficina|Oficina Sótano|Parcela|Parcelación|Pasaje|Penthouse|Piso|Porteria|Predio|Principal|Puente|Quebrada|Salon|Sector|Semisótano|Suite|Supermanzana|Terraza|Torre|Troncal|Unidad|Urbanización|Vereda|Via|Zona|AGN|AL|APTO|AS|BR|BL|BG|CM|CLJ|CN|CT|CA|CAS|CEL|CE|CECO|CEUR|CIR|CDM|CONJ|CS|CO|DP|DS|ED|EN|ESQ|ET|FCA|GJ|GS|GR|INF|IP|IN|KM|LC|LM|LS|LT|MZ|MZTA|MJ|MN|MD|MUN|NCO|OF|OS|PA|PCN|PSJ|PH|PI|PT|PD|PPAL|PN|QDA|SA|SEC|SS|SU|SMZ|TZ|TO|TRL|UN|URB|VDA|VIA|ZN)?(\s)?[1-9][0-9]{0,3})*$/i
    // const phoneValidator = /^3\d{2}[-\s]?\d{3}[-\s]?\d{4}$/g

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
      toast.error('La información del cliente es necesaria.')
    }else{
      if (values.type_sale === 'fisico'){
        toast.promise(confirmSale(id, sale), {
          loading: 'Add order...',
          success: 'Sale confirmed!',
          error: 'Error when fetching'
        })
        router.push('/sales')
      }else{
        toast.promise(confirmSale(id, sale), {
          loading: 'Add order...',
          success: 'Sale confirmed!',
          error: 'Error when fetching'
        })
        router.push('/sales')
      }
    }

   


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
            (formSale.getValues().type_sale === 'pedido' && client === '{}') ? ( 
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
              <p className='font-bold text-4xl'>${convertToCOP(total)}</p>
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

          <div className='mt-4 space-y-2'>
            <Button className="w-full" type='submit' variant='outline' >
              Cancelar venta
            </Button>
          </div>
        </form>
      </Form>

    </div>
  )
}
