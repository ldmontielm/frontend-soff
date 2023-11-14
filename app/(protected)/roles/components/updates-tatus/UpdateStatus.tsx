'use client'
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
    role:Role
}

const UpdateStatusFetcher = async(url:string, arg:Role)=>{
    return await fetcherPut(url, arg)
}

export default function UpdateStatus({role}:Props) {
    // const [active, setActive] = useState(true)
    const [active, setActive] = useState(true)
    const { toast } = useToast()


    async function onSubmit(){
        
        if(role.name !== "Administrador" && role.name !== "Base" ){
            const res = await UpdateStatusFetcher(`${RoutesApi.ROLES}/status_update_role/${role.id}`, role)
            mutate(`${RoutesApi.ROLES}?status=${role.status ? active : !active}`)
        }else{
            toast({
                title: "El rol "+role.name+" es inmutable",
                description: "Este rol no permite modificaciones por parte de los usuarios.",
            })
        }

    }
        


    return (
        
    // <Tooltip title="Cambiar el estado del rol" arrow placement="top">
    //     <Button onClick={()=>onSubmit(id_role, role)} className={`bg-${role.status === true ? "green": "red"}-500 w-[35%] h-[25px] hover:bg-gray-700`}>{role.status === true ? "Activo": "Inactivo"}</Button>
    // </Tooltip>
    <Tooltip placement="top" title={`Cambiar el rol a : ${!role.status ? "Activo" : "Inactivo"}`} arrow>
    <Button className={`h-5 w-20 text-xs font-semibold bg-${role.status ? "green" : "red"}-500 hover:bg-gray-700`} onClick={onSubmit}>{role.status ? "Activo" : "Inactivo"}</Button>
    </Tooltip>
    )
}
