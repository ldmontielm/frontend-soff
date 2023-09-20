'use client'

import { ColumnDef } from "@tanstack/react-table"
import { Role } from "../models/roles.models"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import { Trash, Pencil } from "lucide-react"
import { Button } from "@/components/ui/button"
import { urlRoles, getRole } from "../services/roles.services"
import SwitchDemo from "../components/swicht/SwichtDemo"
import { useState } from "react"
import useSWR from "swr"
import { useEffect } from "react"
import { useRouter } from "next/router"
import UpdateTable from "@/app/users/components/update-table/UpdateTable"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"



export default function statusnew(){
  const {data: roles, isLoading, error} = useSWR(urlRoles, getRole)
  const [localRoles, setLocalRoles] = useState<Role[]>([])

  useEffect(()=>{
    if(roles){
        setLocalRoles(roles)
    }
}, [roles]);

const updateProductStatus = (id_role:string, newStatus:boolean) =>{
    const updateRole = localRoles?.map((role)=>{
        if (role.id === id_role){
            return {...role, status: newStatus};
        }
        return role
    });
    setLocalRoles(updateRole)
};

}


export const columns: ColumnDef<Role>[] = [
    {
      accessorKey: "name", 
      header: "Nombre",
      
    },
    {
      accessorKey: "status",
      header: "Estado",
      cell: ({ row }) => {
        const role = row.original
        return <div className="text-center">
        { 
            row.getValue("status") ? (
            <>
              <Badge className="bg-green-500">Activo</Badge>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                    <Button variant='ghost' size='icon' className="ml-4">
                        <MoreHorizontal className="h-4 w-4 " />
                    </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="flex flex-col">
                    <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                    {/* <UpdateTable id_role={role.id}/> */}
                    <SwitchDemo 
                      id_role={role.id}
                      role={role}
                      onUpdateStatus={()=> statusnew()}/>
                    </DropdownMenuContent>
                </DropdownMenu>
            </>
            )
            : (
            <>
             <Badge className="bg-red-500">Inactivo</Badge>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                    <Button variant='ghost' size='icon' className="ml-2">
                        <MoreHorizontal className="h-4 w-4" />
                    </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="flex flex-col">
                    <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                    <SwitchDemo 
                        id_role={role.id}
                        role={role}
                        onUpdateStatus={()=> statusnew()}/>
                    </DropdownMenuContent>
                </DropdownMenu>
            </>
            ) 
        }
        </div>
      
      },
    },
    
  ];
  