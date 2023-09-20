'use client'

import { Product } from '@/app/products/models/product.models'
import { Button } from '@/components/ui/button'
import { changeStatus, urlProducts } from '@/app/products/services/products.services'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Switch } from '@/components/ui/switch'
import { useEffect } from 'react'
import { useSWRConfig } from 'swr'

export default function DisableProduct({productId, product}: {productId:string, product: Product}) {
    const [state, setState] = useState(true)
    const router = useRouter()
    const {mutate} = useSWRConfig()

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
            }
        }catch(error){
            console.log(error)
        }
        mutate (`${urlProducts}`)
    }

    return (
        <Button variant='ghost'onClick={onSubmit} >
            <Switch id="airplane-mode" className='mr-2'
                checked={state}
                onCheckedChange={(newStatus)=>{
                    setState(newStatus);
                }}
            /><span>Cambiar estado</span>
        </Button>
    )
}

