'use client'

import { ColumnDef } from "@tanstack/react-table"
import { User, createUser } from "../models/users.models"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import { Trash, Pencil } from "lucide-react"
import { Button } from "@/components/ui/button"
import SwitchDemo from "../components/switch/SwitchButton"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"


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
      header: "Document",
      
    },
    {
      accessorKey: "phone", 
      header: "Tel",
      
    },
    {
      accessorKey: "email", 
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Email
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
    },
    {
      accessorKey: "status",
      header: "Estado",
      cell: ({ row }) => {
        return <Badge>{row.getValue("status") ? "Activo": "Inactivo"}</Badge>
      }
    },
    {
      accessorKey: "role", 
      header: "Rol", 
    },
    {
      header: "Acciones",
      id: "actions",
      cell: ({ row }) => {
        const payment = row.original
   
        return (
          <div className="flex ">
            <SwitchDemo/>
            <Button className="ml-2" variant='outline' size='icon'><Pencil className="w-4 h-4"/></Button>
          </div>
          )
        //   <DropdownMenu>
        //     <DropdownMenuTrigger asChild>
        //       <Button variant="ghost" className="h-8 w-8 p-0">
        //         <span className="sr-only">Open menu</span>
        //         <MoreHorizontal className="h-4 w-4" />
        //       </Button>
        //     </DropdownMenuTrigger>
        //     <DropdownMenuContent align="end">
        //       <DropdownMenuLabel>Actions</DropdownMenuLabel>
        //       <DropdownMenuItem><Switch/></DropdownMenuItem>
        //       <DropdownMenuItem><Button><Pencil></Pencil></Button></DropdownMenuItem>
        //     </DropdownMenuContent>
        //   </DropdownMenu>

      },
    },
    
  ];
  