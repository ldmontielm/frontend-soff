'use client'
import {ColumnDef} from "@tanstack/react-table"
import { Supply } from "../../models/supply.models"
import { Badge } from "@/components/ui/badge"
import SupplyUpdateForm from "../supply-update-form/SupplyUpdateForm" 
import SupplyByIdDeleteForm from "../supply-delete-form/SupplyDeleteForm"
import useSWR from "swr"
import { useState } from "react"
import { useEffect } from "react"
import SwitchDemo from "../switcht/SwichtDemo"
import {
  ColumnFiltersState,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  
} from "@tanstack/react-table"

import { ArrowUpDown} from "lucide-react"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  
} from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { MoreHorizontal } from "lucide-react"
import { getSupplies, urlSupply } from "../../services/supply.services"
import { Column } from "jspdf-autotable"

export default function Statusnew(){
  const {data: supplies, isLoading, error} = useSWR(urlSupply, getSupplies)
  const [localSupplies, setLocalSupplies] = useState<Supply[]>([])

  useEffect(()=>{
    if(supplies){
        setLocalSupplies(supplies)
    }
}, [supplies]);

const updateSupplyStatus = (id_supply:string, newStatus:boolean) =>{
  const updateSupply = localSupplies?.map((supply)=>{
      if (supply.id === id_supply){
          return {...supply, status: newStatus};
      }
      return supply
  });
  setLocalSupplies(updateSupply)
}
}


export const columns: ColumnDef<Supply>[] = [
  
  
  {
    accessorKey: 'name',
    header: ({ column }) => {
      return (
        <Button
        className="w-fit"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nombre
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({row}) => {
      return <div>{row.getValue('name')}</div>
    }
  },
  {
    accessorKey: 'price',
    header: ({ column }) => {
      return (
        <Button className="w-fit"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          precio
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({row}) => {
      return <div>{row.getValue('price')}</div>
    }
  },
  {
    accessorKey: 'quantity_stock',
    header: ({ column }) => {
      return (
        <Button className="w-fit"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Cantidad
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({row}) => {
      return <div>{row.getValue('quantity_stock')}</div>
    }
  },
  {
    accessorKey: 'unit_measure',
    header: ({ column }) => {
      return (
        <Button className="w-fit"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Unidad de medida
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({row}) => {
      return <div>{row.getValue('unit_measure')}</div>
      
      
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
      const supply = row.original
      return <div>
      { 
          row.getValue("status") ? (
          <>
            <Badge className="bg-green-500">Activo</Badge>
              <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                  <Button variant='ghost' size='icon' className="ml-3">
                      <MoreHorizontal className="h-4 w-4 " />
                  </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="flex flex-col">
                  <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                  <TableCell className="flex items-center gap-2">
                <SupplyUpdateForm supply={supply} id_supply={supply.id} /><span>Editar</span>
                <SupplyByIdDeleteForm supply={supply} id_supply={supply.id}/><span>Eliminar</span>
                </TableCell>
                  <SwitchDemo 
                    id_supply={supply.id}
                    supply={supply}
                    onUpdateStatus={()=> Statusnew()}/>
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
                      id_supply={supply.id}
                      supply={supply}
                      onUpdateStatus={()=> Statusnew()}/>
                  </DropdownMenuContent>
              </DropdownMenu>
          </>
          ) 
      }
      </div>

    },
  },
]