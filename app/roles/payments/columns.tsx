'use client'

import { ColumnDef } from "@tanstack/react-table"
import { Role } from "../models/roles.models"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import { Trash, Pencil } from "lucide-react"
import { Button } from "@/components/ui/button"
import { urlRoles, getRole, getPermissionsRole, deleteRole } from "../services/roles.services"
import SwitchDemo from "../components/swicht/SwichtDemo"
import { useState } from "react"
import useSWR from "swr"
import { useEffect } from "react"
import { useRouter } from "next/router"
import PermissionModal from "../components/permission-modal/PermissionModal"
import toast from 'react-hot-toast';
import Delete from "../components/delete/Delete"


import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { useSWRConfig } from "swr"



export default function statusnew() {
  const { data: roles, isLoading, error } = useSWR(urlRoles, getRole)
  const [localRoles, setLocalRoles] = useState<Role[]>([])


  useEffect(() => {
    if (roles) {
      setLocalRoles(roles)
    }
  }, [roles]);



  const updateProductStatus = (id_role: string, newStatus: boolean) => {
    const updateRole = localRoles?.map((role) => {
      if (role.id === id_role) {
        return { ...role, status: newStatus };
      }
      return role
    });
    setLocalRoles(updateRole)
  };

}


export const columns: ColumnDef<Role>[] = [

  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nombre
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },

  },
  {
    accessorKey: "Permissions",
    header: "permisos",
    cell: ({ row }) => {
      const role = row.original
      return (
        <PermissionModal id_role={role.id} />        
      )
    }

  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Estado
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },

    cell: ({ row }) => {
      const role = row.original
      return (

        <Badge className={`bg-${role.status === true ? "green": "red"}-500`}>{role.status === true ? "Activo": "Inactivo"}</Badge>
      )
      
    }
  },
  {
    id: "actions",
    header: "Acciones",
    cell: ({ row }) => {
      const role = row.original
      return (
        <div>
          <DropdownMenu>

          <DropdownMenuTrigger asChild>
            <Button variant='ghost' size='icon' className="ml-4">
              <MoreHorizontal className="h-4 w-4 " />
            </Button>
          </DropdownMenuTrigger>
         <DropdownMenuContent align="end" className="flex flex-col">
           <DropdownMenuLabel>Acciones</DropdownMenuLabel>
           {role.name !== "Administrador" && role.name !== "Base" ? (
             <div className=" flex flex-col">
               <SwitchDemo
                 id_role={role.id}
                 role={role}
                 onUpdateStatus={() => statusnew()}
               />
              {
                role.status === true ?(
                  
                  <Delete id_role={role.id}/>
                  
                ): null
              }

             </div>

           ) : null
           }

         </DropdownMenuContent>
       </DropdownMenu>
        </div>
      )
    } 
  }

];


