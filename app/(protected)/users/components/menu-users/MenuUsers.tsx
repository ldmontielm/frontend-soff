'use client'

import React from "react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import UpdateTable from "../update-table/UpdateTable"
import { User } from "../../models/users.models"

interface Props{
    id_user:string
    user: User
}

export function MenuUsers({id_user, user}:Props){

    return(
        <DropdownMenu>
        <DropdownMenuTrigger className="w-full">...</DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuLabel className="flex justify-center items-center">Acciones</DropdownMenuLabel>
            {
            user.status ===  true ?(
            <div>
                <UpdateTable id_user={user.id} user={user}/>
                <span className="ml-2">Editar</span>
            </div>
            ):(
            <h4 className="flex justify-center items-center">Sin Acciones</h4>
            )
            }
            </DropdownMenuContent>
        </DropdownMenu>
    )
}