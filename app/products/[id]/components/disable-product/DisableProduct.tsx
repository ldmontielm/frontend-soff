'use client'

import { Product } from '@/app/products/models/product.models'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Switch } from '@/components/ui/switch'
import { useEffect } from 'react'
import { RoutesApi } from '@/models/routes.models'
import useSWR, { mutate} from 'swr'
import { fetcherPut } from '@/context/swr-context-provider/SwrContextProvider'

const DisableProductFetch = async (url: string, arg: Product) => {
    return await fetcherPut(url, arg)
  }

interface Props {
    id: string
    product: Product
  }

export default function DisableProduct({id, product}: Props) {
    const [state, setState] = useState(true)
    const router = useRouter()

    useEffect(()=>{
        if(product){
            setState(product.status)
        }
    }, [product]);

    async function onSubmit() {
        const res = await DisableProductFetch(`${RoutesApi.PRODUCTS}/${id}/change_status`, product)
        if (res.status !== undefined){
            setState(res.status === 1)
        }
        mutate (RoutesApi.PRODUCTS)
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

