'use client'

import { ColumnDef } from "@tanstack/react-table"
import { Role } from "../models/roles.models"
import PermissionModal from "../components/permission-modal/PermissionModal"
import { ChevronUpDownIcon } from "@heroicons/react/24/outline"
import { Button } from "@/components/ui/button"
import UpdateStatus from "../components/updates-tatus/UpdateStatus"
import { MenuRoles } from "../components/menu-roles"
import { Tooltip } from "@mui/material"



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
          <ChevronUpDownIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },

  },
  {
    accessorKey: "Permissions",
    header: "Permisos",
    cell: ({ row }) => {
      const role = row.original
      return (
        <PermissionModal id_role={role.id} role={role} />        
      )
    }

  },
  {
    accessorKey: "status",
    header:'Estado',
    cell: ({ row }) => {
      const role = row.original
      return (
      <UpdateStatus id_role={role.id} role={role}/>
      )
    }
  },
  {
    id: "actions",
    header: "Acciones",
    cell: ({ row }) => {
      const role = row.original
      return (
        <MenuRoles role={role}/>
      )
    } 
  }
];


