'use client'

import React, { useState } from "react"
import { RoutesApi } from "@/models/routes.models"
import { User} from "../../models/users.models"
import { Button } from "@/components/ui/button"
import { fetcherPut } from "@/context/swr-context-provider/SwrContextProvider"
import { mutate } from "swr"
import { Tooltip } from "@mui/material"

import { url } from "inspector"
import { tuple } from "zod"


interface Props{
    id_user:string
    user: User
}

export function UpdateStatusUser({id_user, user}:Props){
    const [active, setActive] = useState(true)
    
    const updateStatusfecher = async(url:string, user:User)=>{
        const res = await fetcherPut(url, user)
        mutate(`${RoutesApi.USERS}/get-users/?status=${user.status ? active : !active}`)
    }

    const onSubmit = async(id_user:string, user:User)=>{
        const res = updateStatusfecher(`${RoutesApi.USERS}/${id_user}/status-update`, user)


    }


    return(
        <Tooltip title="Cambiar el estado del usuario" arrow placement="top">
            <Button onClick={()=>onSubmit(id_user, user)} className={`bg-${user.status === true ? "green": "red"}-500 w-[60%] h-[25px] hover:bg-gray-700`}>{user.status === true ? "Activo": "Inactivo"}</Button>
        </Tooltip>
    )
}