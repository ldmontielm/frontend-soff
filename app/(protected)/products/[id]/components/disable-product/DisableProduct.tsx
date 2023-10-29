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
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"

const DisableProductFetch = async (url: string, arg: Product) => {
    return await fetcherPut(url, arg)
}

interface Props {
    product: Product
  }

export default function DisableProduct({product}: Props) {
    async function onSubmit() {
        const res = await DisableProductFetch(`${RoutesApi.PRODUCTS}/${product.id}/change_status`, product)
        mutate (RoutesApi.PRODUCTS)
    }

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                <Button className={`h-5 w-20 text-xs font-semibold bg-${product.status ? "green" : "red"}-500 hover:bg-gray-700`} onClick={onSubmit}>{product.status ? "Activo" : "Inactivo"}</Button>
                </TooltipTrigger>
                <TooltipContent className="bg-gray-500">
                <p className="text-xs font-semibold">Aquí puedes cambiar el estado a: {!product.status ? "Activo" : "Inactivo"}.</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}
