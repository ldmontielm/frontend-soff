// 'use client'

// import { Product, ProductCreate } from '@/app/products/models/product.models'
// import { Button } from '@/components/ui/button'
// import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
// import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
// import { Input } from "@/components/ui/input"
// import { PencilIcon } from '@heroicons/react/24/outline'
// import { zodResolver } from "@hookform/resolvers/zod"
// import { useForm } from "react-hook-form"
// import * as z from "zod"
// import toast from 'react-hot-toast'
// import { updateProduct } from '@/app/products/services/products.services'
// import { useParams, useRouter } from 'next/navigation'
// import { useState } from 'react'

// const formSchema = z.object({
//   id_product:z.string().optional(),
// })

// interface Props{
//   product: Product
// }


// export default function ProductUpdateForm({product}: Props) {
//   const [open, setOpen] = useState(false)
//   const router = useRouter()
//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//         id_product:""
//     },
//   })

//   function onSubmit(values: z.infer<typeof formSchema>) {
//     values.id_product = product.id
//     toast.promise(updateProduct(values.id_product, product), {
//       loading: 'Updated detail...',
//       success: 'Detalle Actualizado correctamente',
//       error: 'Error al actualizar'
//     })
//     router.refresh()
//     setOpen(false)
//   }


//   return (
    
    
//   )
// }
