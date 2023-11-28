'use client'
import { Product } from '../../../models/product.models'
import { Button } from '@/components/ui/button'
import { RoutesApi } from '@/models/routes.models'
import useSWR, { mutate} from 'swr'
import { fetcherPut } from '@/context/swr-context-provider/SwrContextProvider'
import { Tooltip } from '@mui/material'
import React, {useState, useEffect} from 'react'

const DisableProductFetch = async (url: string, arg: Product) => {
    return await fetcherPut(url, arg)
}

interface Props {
    id:string
}

export default function DisableProduct({id}: Props) {
    const [active, setActive] = useState(true)
    const {data: product} = useSWR(`${RoutesApi.PRODUCTS}/${id}`)

    async function onSubmit() {
        const res = await DisableProductFetch(`${RoutesApi.PRODUCTS}/${id}/change_status`, product)
        mutate(`${RoutesApi.PRODUCTS}?status=${product?.status ? active : !active}`)
    }

    return (
        <Tooltip placement="top" title={`Cambiar el producto a : ${!product?.status ? "Activo" : "Inactivo"}`} arrow>
        <Button 
            className={`h-5 w-20 text-xs font-semibold bg-${product?.status ? "green" : "red"}-500 hover:bg-gray-700`} 
            onClick={onSubmit}>
            {product?.status ? "Activo" : "Inactivo"}
        </Button>
    </Tooltip>

    )
}