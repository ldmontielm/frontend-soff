'use client'
import { Provider } from '@/app/purchases/models/provider.models'
import { ConfirmPurchase, getGeneralProvider, urlPurchases, getProviders, DeletePurchase } from '@/app/purchases/services/purchase.services'
import { HeadTable } from '@/app/providers/components'
import { convertToCOP } from '@/app/purchases/utils'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { BanknotesIcon, CreditCardIcon, UserPlusIcon } from '@heroicons/react/24/outline'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import useSWR from 'swr'
import * as z from 'zod'
import { Input } from '@/components/ui/input'
import { type } from 'os'
import { Check, ChevronsUpDown } from "lucide-react"
import * as React from "react"
import { cn } from "@/lib/utils"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {HeadTable as HeadTableSupply} from "@/app/supplies/components"

const formPurchaseSchema = z.object({
  provider: z.string(),
  invoice_number: z.string()
})

interface Props{
  total: number,
  id: string
}

export default function InfoPurchase({total, id}:Props) {
  const {data:general} = useSWR(urlPurchases, getGeneralProvider)
  const {data:providers} = useSWR('http://localhost:8000/providers', getProviders)
  const router = useRouter()
  const [open, setOpen] = React.useState(false)
  
  const formPurchase = useForm<z.infer<typeof formPurchaseSchema>>({
    resolver: zodResolver(formPurchaseSchema),
    defaultValues: {
      provider: '',
      invoice_number: ''
    }
  })

  async function onSubmitPurchase(values: z.infer<typeof formPurchaseSchema>){

    const purchase = {
      provider: values.provider,
      invoice_number: values.invoice_number
    }
    
    toast.promise(ConfirmPurchase(id, values.provider, values.invoice_number),{
      loading: 'Agregando compra...',
      success: 'Compra confirmada',
      error: 'No se puedo consolidar la compra'
    })
    router.push('/purchases')

}
  async function cancelarCompra(){
    toast.promise(DeletePurchase(id),{
      loading: 'Eliminando compra...',
      success: (data) => `Successfully saved ${data}`,
      error: (err) => `This just happened: ${err.detail.toString()}`
    })
    router.push('/purchases')
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
      <Form {...formPurchase}>
        <form onSubmit={formPurchase.handleSubmit(onSubmitPurchase)} className='p-4 h-full flex flex-col justify-between'>
          <div>
          <div className='mb-5'>
          <FormField 
            control={formPurchase.control}
            name="invoice_number"
            render ={({field}) => (
              <FormItem>
                <FormLabel>Número de Factura:</FormLabel>
                <FormControl >
                    <Input placeholder='Número de factura'{...field} required/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={formPurchase.control}
            name="provider"
            render={({ field }) => (
              <FormItem className="w-full md:w-[260px]">
              <FormLabel>Proveedor</FormLabel>
              
              <div className="w-full xl:w-[260px]">
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        role="combobox"
                        className={cn(
                          "w-[260px] justify-between",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value
                          ? providers?.find((provider)=>provider.id === field.value)?.name
                          : "Seleccione proveedor"}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-[250px] p-0">
                      <Command>
                        <CommandInput placeholder="Buscar proveedor..." />
                        <CommandEmpty>Sin resultados.</CommandEmpty>
                        <CommandGroup>
                          {Array.isArray(providers) && providers.map((provider) => (
                            <CommandItem
                              value={provider.name}
                              key={provider.id}
                              onSelect={() => {
                                formPurchase.setValue("provider", provider.id)
                              }}
                            >
                              <Check
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  provider.id === field.value ? "opacity-100" : "opacity-0"
                                )}
                              />
                              {provider.name}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </Command>
                    </PopoverContent>
                  </Popover>
                  </div>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* <div className='mt-4 space-y-2'>
            <UserPlusIcon className="h-4 w-4" />
            <HeadTable/>
          </div>  */}

          </div>
            <div className='my-3 w-full text-center'>
              <p className='font-bold text-4xl'>${convertToCOP(total)}</p>
              <p className='text-sm text-gray-400'>Total</p>
            </div>
          </div>
          
          <div className='mt-4 space-y-2'>
            <Button className="w-full" type='submit' >
              Consolidar compra
            </Button>
          </div>

          <div className='mt-4 space-y-2'>
            <Button className="w-full" type='button' variant='outline' onClick={()=>cancelarCompra()}>
              Cancelar compra
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
