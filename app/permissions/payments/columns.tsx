'use client'
import { ColumnDef } from "@tanstack/react-table"
import { Trash, Pencil } from "lucide-react"
import { Button } from "@/components/ui/button"
import SwitchDemo from "@/app/users/components/switch/SwitchButton"
import { Badge } from "@/components/ui/badge"
import { Permission } from "../models/permissions.model"


export const columns: ColumnDef<Permission>[] = [
    {
      accessorKey: "name", 
      header: "Nombre",
      
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
  