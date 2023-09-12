'use client'

import { Product } from '@/app/products/models/product.models'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from "@/components/ui/input"
import { PencilIcon } from '@heroicons/react/24/outline'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import toast from 'react-hot-toast'
import { changeStatus, getProductById } from '@/app/products/services/products.services'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Switch } from '@/components/ui/switch'
import useSWR from 'swr'
import { useEffect } from 'react'

export default function DisableProduct({productId, product, onUpdateStatus}: {productId:string, product: Product, onUpdateStatus: (productId:string, newStatus:boolean)=>void}) {
    const [state, setState] = useState(true)
    const router = useRouter()

    useEffect(()=>{
        if(product){
            setState(product.status)
        }
    }, [product]);

    async function onSubmit() {
        try{
            const res = await changeStatus(productId)
            if (res.status !== undefined){
                setState(res.status)
                onUpdateStatus(productId, res.status)
            }
        }catch(error){
            console.log(error)
        }
        router.refresh()
    }

    return (
        <Button variant='outline' size='icon' onClick={onSubmit}>
            <Switch id="airplane-mode"
                checked={state}
                onCheckedChange={(newStatus)=>{
                    setState(newStatus);
                }}
            />
        </Button>
    )
}

