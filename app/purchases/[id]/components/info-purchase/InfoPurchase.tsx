'use client'
import { Provider } from '@/app/purchases/models/provider.models'
import { ConfirmPurchase, getGeneralProvider, urlPurchases, getProviders } from '@/app/purchases/services/purchase.services'
import { convertToCOP } from '@/app/purchases/utils'
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
import { Input } from '@/components/ui/input'
import { type } from 'os'

const formPurchaseSchema = z.object({
  provider: z.string()
})

interface Props{
  total: number,
  id: string
}

export default function InfoPurchase({total, id}:Props) {
  const [provider, setProvider] = useState(localStorage.getItem('provider') || '{}')
  const {data:general} = useSWR(urlPurchases, getGeneralProvider)
  const {data:providers} = useSWR('http://localhost:8000/providers', getProviders)
  const router = useRouter()

  const formPurchase = useForm<z.infer<typeof formPurchaseSchema>>({
    resolver: zodResolver(formPurchaseSchema),
    defaultValues: {
      provider: ''
    }
  })

  async function onSubmitPurchase(values: z.infer<typeof formPurchaseSchema>){

    const purchase = {
      provider: values.provider
    }
    
    toast.promise(ConfirmPurchase(id, values.provider),{
      loading: 'Add order...',
      success: 'Purchase confirmed!',
      error: 'Error when fetching'
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
            name="provider"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Proveedor</FormLabel>
                <FormControl>
                <Select defaultValue={field.value} onValueChange={field.onChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Proveedor" />
                  </SelectTrigger>
                  <SelectContent>
                    {
                      Array.isArray(providers) && providers.map((provider) => (
                        <SelectItem value={provider.id}>{provider.name}</SelectItem>
                      ))
                    }
                  </SelectContent>
                </Select>
                </FormControl>
                <FormDescription>Agrega proveedor.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />


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
            <Button className="w-full" type='submit' variant='outline' >
              Cancelar compra
            </Button>
          </div>
        </form>
      </Form>

    </div>
  )
}
