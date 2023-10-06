'use client'
import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { QueueListIcon } from '@heroicons/react/24/outline'
import useSWR from 'swr'
import { urlPurchases, getOrdersByPurchaseId } from '../../services/purchase.services'
import { convertToCOP } from '../../utils'
import { ScrollArea } from '@/components/ui/scroll-area'


interface Props {
  id: string
}

export default function SeeDetail({id}: Props) {
  const {data:orders} = useSWR(`${urlPurchases}/${id}/orders`, getOrdersByPurchaseId)
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='ghost' className=""><QueueListIcon className="w-4 h-4 mr-2"/> <span>Ver detalle</span></Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Detalle de compra</DialogTitle>
          <DialogDescription>
            Adelante un detalle de todos los insumos comprados.
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[200px] w-[350px] rounded-md border p-2">
          <div className="grid gap-4">
            {
              Array.isArray(orders) && orders.map((order) => (
                <div key={order.id_order} className='p-2 border rounded'>
                  <div>
                    <p className='capitalize font-medium'>{order.supply}</p>
                    <p className='text-sm'>Cantidad: {order.amount_supplies}</p>
                    <p className='text-sm'>Total: ${convertToCOP(order.subtotal)}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}

// 'use client'

// import { Order} from '@/app/purchases/models/purchase.models'
// import { Button } from '@/components/ui/button'
// import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
// import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
// import { Input } from "@/components/ui/input"
// import { EyeIcon, QueueListIcon } from '@heroicons/react/24/outline'
// import { zodResolver } from "@hookform/resolvers/zod"
// import { useForm } from "react-hook-form"
// import * as z from "zod"
// import toast from 'react-hot-toast'
// import { getOrdersByPurchaseId, getPurchaseById, urlPurchases } from '@/app/purchases/services/purchase.services'
// import { useRouter } from 'next/navigation'
// import { useState } from 'react'
// import useSWR from 'swr'
// import { convertToCOP } from '@/app/products/utils'

// import {
//     Table,
//     TableBody,
//     TableCaption,
//     TableCell,
//     TableHead,
//     TableHeader,
//     TableRow,
//   } from "@/components/ui/table"


// export default function SeeDetail({purchaseId}:{purchaseId:string}) {
//   const [open, setOpen] = useState(false)
//   const router = useRouter()
//   const {data:purchase}= useSWR(`${urlPurchases}`,getPurchaseById)
//   const {data: orders, isLoading, error} = useSWR(`${purchaseId}`, getOrdersByPurchaseId)

//   return (
//     <Dialog open={open} onOpenChange={setOpen}>
//       <DialogTrigger asChild>  
//       <Button variant='ghost'>
//         <QueueListIcon className="w-4 h-4 mr-2 ml-0" onClick={() => setOpen(true)}/> <span>Ver detalle</span>
//       </Button>
//       </DialogTrigger>
//       <DialogContent className="sm:max-w-[700px]">
//         <DialogHeader>
//           <DialogTitle>Detalles de la compra</DialogTitle>
//           <DialogDescription>
//             Aquí puedes ver cada detalle de tu compra <span className="capitalize font-semibold text-gray-600">   </span>
//           </DialogDescription>
//         </DialogHeader>
//         <Table className="border rounded">
//             <TableHeader>
//               <TableRow>
//                 <TableHead>Insumo</TableHead>
//                 <TableHead>Cantidad</TableHead>
//                 <TableHead>Precio</TableHead>
//                 <TableHead>Subtotal</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               {
//                 Array.isArray(orders) && orders.map((order) => (
//                   <TableRow key={order.supply_id}>
//                     <TableCell className="font-medium capitalize">{order.supply}</TableCell>
//                     <TableCell>{order.amount_supplies}</TableCell>
//                     <TableCell>${order.price_supplies}</TableCell>
//                     <TableCell>${order.subtotal}</TableCell>
//                   </TableRow>
//                 ))
//               }
//             </TableBody>
//           </Table>
//       </DialogContent>
//     </Dialog>
//   )
// }
