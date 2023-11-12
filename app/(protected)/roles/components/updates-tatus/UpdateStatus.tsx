// 'use client'
import { mutate } from 'swr'
import { Role } from '../../models/roles.models'
import { RoutesApi } from '@/models/routes.models'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { fetcherPut } from '@/context/swr-context-provider/SwrContextProvider'
import { Tooltip } from "@mui/material"
import { useToast } from "@/components/ui/use-toast"
import React, { useState } from "react"


interface Props{
    id_role :string,
    role:Role
}

const UpdateStatusFetcher = async(url:string, role:Role)=>{
    return await fetcherPut(url, role)
}

export default function UpdateStatus({id_role, role}:Props) {
    // const [active, setActive] = useState(true)
    const [active, setActive] = useState(true)
    const { toast } = useToast()


    async function onSubmit(id_role:string, role:Role){
        
        if(role.name !== "Administrador" && role.name !== "Base" ){
            const res = await UpdateStatusFetcher(`${RoutesApi.ROLES}/${id_role}/status-update-role`, role)
            mutate(`${RoutesApi.ROLES}/get-role?status=${role.status ? active : !active}`)
        }else{
            toast({
                title: "El rol "+role.name+" es inmutable",
                description: "Este rol no permite modificaciones por parte de los usuarios.",
            })
        }

    }
        


    return (
        
    <Tooltip title="Cambiar el estado del rol" arrow placement="top">
        <Button onClick={()=>onSubmit(id_role, role)} className={`bg-${role.status === true ? "green": "red"}-500 w-[35%] h-[25px] hover:bg-gray-700`}>{role.status === true ? "Activo": "Inactivo"}</Button>
    </Tooltip>
    )
}
