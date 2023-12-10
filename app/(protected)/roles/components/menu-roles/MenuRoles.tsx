'use client'

import React from "react"
import { Role } from "../../models/roles.models"
import { Button } from "@/components/ui/button"
import Delete from "../delete/Delete"
import { UpdateTable } from "../update-table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Tooltip } from "@mui/material"
interface Props{
    role: Role
}

export function MenuRoles({role}:Props){


    return(
        <div>
        <DropdownMenu>
        <DropdownMenuTrigger asChild>
        <Tooltip title="Acciones para el rol" arrow placement="top">
                <Button variant='ghost' size='icon' className="bg-transparent border border-transparent">
                    <MoreHorizontal className="h-4 w-4" />
                </Button>
            </Tooltip>
        </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="flex flex-col">
            <DropdownMenuLabel className="flex justify-center items-center">{role.name !== "Administrador" && role.name !== "Base" && role.status === true  ? "Acciones":"Sin acciones"}</DropdownMenuLabel>
        {
            role.name !== "Administrador" && role.name !== "Base" ? (
                <div className=" flex flex-col">
                {
                    role.status === true ?(
                    <div>
                        <div key="update" className=" flex items-center justify-left mb-2">
                        <UpdateTable id_role={role.id} role={role}/>
                        </div>
                        <div key="delete" className=" flex items-center justify-left mb-2">
                        <Delete id_role={role.id}/>
                        </div>
                    </div>
                    ): <h4 key="no-actions" className="flex justify-center items-center m-2">...</h4>
                }
                </div>
        ) : <span className="flex justify-center items-center m-2">...</span>
        }
        </DropdownMenuContent>
    </DropdownMenu>
        </div>
    )
}