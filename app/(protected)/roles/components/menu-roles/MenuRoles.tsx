'use client'

import React from "react"
import { Role } from "../../models/roles.models"
import { Button } from "@/components/ui/button"
import Delete from "../delete/Delete"
import { UpdateTable } from "../update-table/UpdateTable"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface Props{
    role: Role
}

export function MenuRoles({role}:Props){


    return(
        <div>
        <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant='ghost' size='icon' className="ml-4">
            {/* <Button variant='ghost' size='icon' className="ml-4">1 */}
            <MoreHorizontal className="h-4 w-4 " />
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="flex flex-col">
        <DropdownMenuLabel className="flex justify-center items-center">Acciones</DropdownMenuLabel>
        {role.name !== "Administrador" && role.name !== "Base" ? (
            <div className=" flex flex-col">
            {
                role.status === true ?(
                <div>
                    <div className=" flex items-center justify-left mb-2">
                    <Delete id_role={role.id}/>
                    <span className="ml-2">Eliminar</span>
                    </div>
                    <div className=" flex items-center justify-left mb-2">
                    <UpdateTable id_role={role.id} role={role}/> <span className="ml-2">Editar</span>
                    </div>
                </div>
                ): <h4 className="m-2 ">Sin Acciones</h4>
            }
            </div>
        ) : null
        }
        </DropdownMenuContent>
    </DropdownMenu>
        </div>
    )
}