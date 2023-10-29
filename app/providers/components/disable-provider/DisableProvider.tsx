'use client'

// import { Product } from '@/app/products/models/product.models'
import { Provider } from '../../models/provider.models'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Switch } from '@/components/ui/switch'
import { useEffect } from 'react'
import { RoutesApi } from '@/models/routes.models'
import useSWR, { mutate} from 'swr'
import { fetcherPut } from '@/context/swr-context-provider/SwrContextProvider'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"

const DisableProviderFetch = async (url: string, arg: Provider) => {
    return await fetcherPut(url, arg)
}

interface Props {
    provider: Provider
  }

export default function DisableProvider({provider}: Props) {
    async function onSubmit() {
        const res = await DisableProviderFetch(`${RoutesApi.PROVIDERS}/${provider.id}/status_update_provider`, provider)
        mutate (RoutesApi.SUPPLIES)
    }

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                <Button className={`h-5 w-20 text-xs font-semibold bg-${provider.status ? "green" : "red"}-500 hover:bg-gray-700`} onClick={onSubmit}>{provider.status ? "Activo" : "Inactivo"}</Button>
                </TooltipTrigger>
                <TooltipContent className="bg-gray-500">
                <p className="text-xs font-semibold">Aquí puedes cambiar el estado a: {!provider.status ? "Activo" : "Inactivo"}.</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}