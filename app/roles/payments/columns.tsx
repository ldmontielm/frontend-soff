'use client'

import { ColumnDef } from "@tanstack/react-table"
import { Role } from "../models/roles.models"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import { Trash, Pencil } from "lucide-react"
import { Button } from "@/components/ui/button"
// import SwitchDemo from "../components/switch/SwitchButton"
import { Switch } from "@radix-ui/react-switch"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"


export const columns: ColumnDef<Role>[] = [
  
    {
      accessorKey: "name", 
      header: "Nombre",
      
    },
    {
      accessorKey: "status",
      header: "Estado",
      cell: ({ row }) => {
        return <Badge>{row.getValue("status") ? "Activo": "Inactivo"}</Badge>
      }
    },
    {
      header: "Acciones",
      id: "actions",
      cell: ({ row }) => {
        const payment = row.original
   
        return (
          <div className="flex ">
            <Switch/>
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
  