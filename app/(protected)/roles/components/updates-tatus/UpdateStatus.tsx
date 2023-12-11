'use client'
import { mutate } from 'swr'
import { Role } from '../../models/roles.models'
import { RoutesApi } from '@/models/routes.models'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { fetcherPut } from '@/context/swr-context-provider/SwrContextProvider'
import { Tooltip } from "@mui/material"
import React, { useState } from "react"


interface Props{
    id_role: string
    role:Role
}

// const UpdateStatusFetcher = async(url:string, arg:Role)=>{
//     return await fetcherPut(url, arg)
// }

export default function UpdateStatus({id_role, role}:Props) {
    const [active, setActive] = useState(true)

    const UpdateStatusFetcher = async(url:string, role:Role)=>{
            const res =  await fetcherPut(url, role)
            mutate(`${RoutesApi.ROLES}?status=${role.status ? active : !active}`)
        }

    async function onSubmit(id_role:string, role:Role){
        const res = await UpdateStatusFetcher(`${RoutesApi.ROLES}/status_update_role/${id_role}`, role)
        // mutate(`${RoutesApi.ROLES}?status=${role.status ? active : !active}`)

    }
        


    return (
        
    <Tooltip title="Cambiar el estado del rol" arrow placement="top">
        <Button onClick={()=>onSubmit(id_role, role)} className={`bg-${role.status === true ? "green": "red"}-500 w-fit h-[25px] hover:bg-gray-700`}>{role.status === true ? "Activo": "Inactivo"}</Button>
    </Tooltip>
    )
}
