"use client"
 
import { addDetail, getSupplies} from "@/app/products/services/products.services"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { PlusIcon } from "@heroicons/react/24/outline"
import { zodResolver } from "@hookform/resolvers/zod"
import { redirect, useParams, useRouter } from 'next/navigation'
import { useState, useContext } from "react"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"
import useSWR from 'swr'
import * as z from 'zod'
import { DetailContext } from "../../context/detail-context/DetailContext"
import { DetailContextInterface } from "@/app/products/models/product.models"

const formSchema = z.object({
  product_id: z.string().uuid(),
  supply_id: z.string().uuid({message: 'Seleccione un producto'}),
  amount_supply: z.number().int().min(1, {message:'Mínimo debes ingresar un numero'}).nonnegative({message: 'No se aceptan valores negativos'}).transform(Number),
  unit_measure: z.string().min(2, {message: 'La unidad debe tener más de 2 caracteres'})
})

// async function fetchGetAllSuplies(){
//   return await getSupplies()
// }

export default function HeadTable() {
  const params = useParams()
  const [supply, setSupply] = useState(false)
  const [amountSuply, setAmountSupply] = useState<number>()
  const [value, setValue] = useState("")
  const router = useRouter()
  const {data:supplies} = useSWR('/supplies', getSupplies)
  const {AddDetail} = useContext(DetailContext) as DetailContextInterface
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      product_id: "",
      supply_id: "",
      amount_supply: 0,
      unit_measure: ""
    }
  })

  async function onSubmit(values: z.infer<typeof formSchema>){
    console.log(values)
    values.product_id = params.id.toString()
    const supply:any=Array.isArray(supplies) && supplies.find((item)=> item.id === values.supply_id)
    if (supply != undefined && supply != false){
      const newDetail = {
        id: crypto.randomUUID(),
        product_id: values.product_id,
        supply_id: values.supply_id,
        supply: supply.name,
        amount_supply: values.amount_supply,
        unit_measure: values.unit_measure,
        subtotal: values.amount_supply * supply.price
      }
      AddDetail(newDetail)
    }
    // toast.promise(addDetail(values), {
    //   loading: 'Agregando detalle...',
    //   success: 'Detalle agregado correctamente',
    //   error: 'Error when fetching'
    // })
    // router.refresh()
    // console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-wrap lg:flex-nowrap items-end  justify-between gap-2">
        <div className="w-full flex flex-wrap lg:flex-nowrap items-center gap-2">
          <FormField 
            control={form.control}
            name="supply_id"
            render = {({field}) => (
              <FormItem className="w-full md:w-[200px]">
                <FormLabel>Insumo</FormLabel>
                <FormControl>
                  <div className="w-full xl:w-[200px]">
                    <Select onValueChange={field.onChange}>
                      <SelectTrigger className="uppercase">
                        <SelectValue  placeholder='Insumo' />
                      </SelectTrigger>
                      <SelectContent >
                        {
                          Array.isArray(supplies) && supplies.map((supply) => (
                            <SelectItem key={supply.id} value={supply.id} className="uppercase">{supply.name}</SelectItem>
                          ))
                        }
                      </SelectContent>
                    </Select>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}

          />
          <FormField
            control={form.control}
            name="amount_supply"
            render={({ field }) => (
              <FormItem className="w-full md:w-[200px]">
                <FormLabel>Cantidad</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="Cantidad de insumo" {...form.register('amount_supply', {valueAsNumber: true})} className="lg:w-fit"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )
          }
          />
           <FormField
            control={form.control}
            name="unit_measure"
            render={({ field }) => (
              <FormItem className="w-full md:w-[200px]">
                <FormLabel>Unidad de medida</FormLabel>
                <FormControl>
                  <Input placeholder="Unidad de medida" {...field} className="lg:w-fit"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )
          }
          />

        </div>
        <Button type="submit" className="w-full md:w-fit">
          <PlusIcon className="w-4 h-4 mr-2" />
          <span>Agregar</span>
        </Button>
      </form>
    </Form>
  )
}