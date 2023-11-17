'use client'

import { Supply } from '../models/supply.models'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Switch } from '@/components/ui/switch'
import { useEffect } from 'react'
import { RoutesApi } from '@/models/routes.models'
import useSWR, { mutate} from 'swr'
import { fetcherPut } from '@/context/swr-context-provider/SwrContextProvider'
// import {
//     Tooltip,
//     TooltipContent,
//     TooltipProvider,
//     TooltipTrigger,
//   } from "@/components/ui/tooltip"

  import {Tooltip} from "@mui/material"

  const DisableProviderFetch = async (url: string, arg: Supply) => {
    return await fetcherPut(url, arg)
}

interface Props {
    supply: Supply
  }

export default function DisableProvider({supply}: Props) {
    const [active, setActive] = useState(true)
    async function onSubmit() {
        const res = await DisableProviderFetch(`${RoutesApi.SUPPLIES}/${supply.id}/status_update_supply`, supply)
        mutate (`${RoutesApi.SUPPLIES}?status=${supply.status ? active : !active}`)
    }

    return (

        <Tooltip placement="top" title={`Cambiar el insumo a : ${!supply.status ? "Activo" : "Inactivo"}`} arrow>
        <Button className={`h-5 w-20 text-xs font-semibold bg-${supply.status ? "green" : "red"}-500 hover:bg-gray-700`} onClick={onSubmit}>{supply.status ? "Activo" : "Inactivo"}</Button>
        </Tooltip>
    )
}