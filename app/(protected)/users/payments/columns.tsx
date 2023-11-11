'use client'

import { ColumnDef } from "@tanstack/react-table"
import { User, createUser } from "../models/users.models"
import { Button } from "@/components/ui/button"
import { ChevronUpDownIcon } from "@heroicons/react/24/outline"
import { UpdateStatusUser } from "../components/update-status/UpdateStatus"
import { MenuUsers } from "../components/menu-users"



export const columns: ColumnDef<User>[] = [
  
  
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
      accessorKey: "document_type", 
            header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Tipo
            <ChevronUpDownIcon className="ml-2 h-4 w-4" />
          </Button>
        )
      },
      
    },
    {
      accessorKey: "document", 
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Documento
            <ChevronUpDownIcon className="ml-2 h-4 w-4" />
          </Button>
        )
      },
      
    },
    {
      accessorKey: "phone", 
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Telefono
            <ChevronUpDownIcon className="ml-2 h-4 w-4" />
          </Button>
        )
      },
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
            <ChevronUpDownIcon className="ml-2 h-4 w-4" />
          </Button>
        )
      },
    },
    {
      accessorKey: "role", 
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Rol
          <ChevronUpDownIcon className="ml-2 h-4 w-4" />
          </Button>
        )
      },
    },
    {
      accessorKey: "status",
      header: 'Estado',
      cell: ({ row }) => {
        const user = row.original
        return(
          <UpdateStatusUser id_user={user.id} user={user}/>
        )
      },
    },
    {
      id: "id",
      header: 'Acciones',
      cell: ({ row }) => {
        const user = row.original
        return (
          <MenuUsers id_user={user.id} user={user}/>
        )
      },
    },
    
  ];
  