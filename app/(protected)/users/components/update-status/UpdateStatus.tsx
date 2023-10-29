'use client'

import React from "react"
import { RoutesApi } from "@/models/routes.models"
import { User} from "../../models/users.models"
import { Button } from "@/components/ui/button"
import { fetcherPut } from "@/context/swr-context-provider/SwrContextProvider"
import { mutate } from "swr"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { url } from "inspector"


interface Props{
    id_user:string
    user: User
}

export function UpdateStatusUser({id_user, user}:Props){

    const updateStatusfecher = async(url:string, user:User)=>{
        const res = await fetcherPut(url, user)
        mutate(`${RoutesApi.USERS}/get-users`)
    }

    const onSubmit = async(id_user:string, user:User)=>{
        const res = updateStatusfecher(`${RoutesApi.USERS}/${id_user}/status-update`, user)


    }


    return(
        <TooltipProvider>
        <Tooltip>
            <TooltipTrigger asChild>
                <Button onClick={()=>onSubmit(id_user, user)} className={`bg-${user.status === true ? "green": "red"}-500 w-[60%] h-[25px]`}>{user.status === true ? "Activo": "Inactivo"}</Button>
            </TooltipTrigger>
            <TooltipContent>
            <p>Cambiar de estado</p>
            </TooltipContent>
        </Tooltip>
        </TooltipProvider>
    )
}