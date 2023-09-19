'use client'

import { Purchase } from '@/app/purchases/models/purchase.models'
import { Button } from '@/components/ui/button'
import { changeStatus, urlPurchases } from '@/app/purchases/services/purchase.services'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Switch } from '@/components/ui/switch'
import { useEffect } from 'react'
import { useSWRConfig } from 'swr'

export default function DisablePurchase({purchaseId, purchase, onUpdateStatus}: {purchaseId:string, purchase: Purchase, onUpdateStatus:(purchaseId:string, newStatus:boolean)=>void}){
    const [state, setState] = useState(true)
    const router = useRouter()
    const {mutate} = useSWRConfig()

    useEffect(()=>{
        if(purchase){
            setState(purchase.status)
        }
    }, [purchase]);

    async function onSubmit(){
        try{
            const res = await changeStatus(purchaseId)
            if (res.status !== undefined){
                setState(res.status)
                onUpdateStatus(purchaseId, res.status)
            }
        } catch (error){
            console.log(error)
        }
        mutate (`${urlPurchases}`)
    }

    return(
        <Button variant='ghost' onClick={onSubmit}>
            <Switch id="airplane-mode" className='mr-2'
                checked={state}
                onCheckedChange={(newStatus)=>{
                    setState(newStatus);
                }}/>
                <span>Cambiar estado</span>

        </Button>
    )
}