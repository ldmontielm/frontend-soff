'use client'

import { ColumnDef } from "@tanstack/react-table"
import { User, createUser } from "../models/users.models"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import SwitchDemo from "../components/switch/SwitchButton"
import { useRouter } from "next/router"
import { Badge } from "@/components/ui/badge"
import useSWR from "swr"
import { useState } from "react"
import { getUser, getUsers, urlUser } from "../services/users.services"
import { urlRoles, getRole } from "@/app/roles/services/roles.services"
import UpdateTable from "../components/update-table/UpdateTable"
import { useEffect } from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"



export default function statusnew(){
  const {data: users, isLoading, error} = useSWR(urlUser, getUsers)
  const [localUsers, setLocalUsers] = useState<User[]>([])

  useEffect(()=>{
    if(users){
        setLocalUsers(users)
    }
}, [users]);

const updateProductStatus = (id_user:string, newStatus:boolean) =>{
    const updateUser = localUsers?.map((user)=>{
        if (user.id === id_user){
            return {...user, status: newStatus};
        }
        return user
    });
    setLocalUsers(updateUser)
};

}


export const columns: ColumnDef<User>[] = [
  
  
    {
      accessorKey: "name", 
      header: "Nombre",

      
    },
    {
      accessorKey: "document_type", 
      header: "Tipo",
      
    },
    {
      accessorKey: "document", 
      header: "Documento",
      
    },
    {
      accessorKey: "phone", 
      header: "Telefono",
    },
    {
      accessorKey: "email", 
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Correo
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
    },
    {
      accessorKey: "role", 
      header: "Rol", 
    },
    {
      accessorKey: "status",
      header: "Estado",
      cell: ({ row }) => {
        const user = row.original
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
                    <div>

                    <UpdateTable user={user} id_user={user.id} /> Actualizar
                    {/* <UpdateTable id_user={user.id} /> */}
                    </div>

                    <SwitchDemo 
                      id_user={user.id}
                      user={user}
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
                        id_user={user.id}
                        user={user}
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
  