'use client'

import {ColumnDef} from "@tanstack/react-table"
import { Purchase } from '../../models/purchase.models'
import { Receipt } from "../receipt"
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel,DropdownMenuTrigger,} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { MoreHorizontal, PencilIcon } from "lucide-react"
import { SeeDetail } from "../see-detail"
import { ChevronUpDownIcon } from "@heroicons/react/24/outline"
import {
  Tooltip
} from "@mui/material"

export const columns: ColumnDef<Purchase>[] = [
    {
      accessorKey: 'invoice_number',
      header: 'Factura',
      cell: ({row}) => {
        return <div>{row.getValue('invoice_number')}</div>
      }
    },
    {
      accessorKey: 'purchase_date',
      header: ({column})=>{
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
          Fecha
          <ChevronUpDownIcon className="ml-2 h-4 w-4" />
        </Button>
        )
      },
      cell: ({row}) => {
        const date = new Date(row.getValue("purchase_date"))
        const formatted = new Intl.DateTimeFormat(['ban', 'id']).format(date)
  
        return <div className="font-medium">{formatted}</div>
      }
    },
    {
      accessorKey: 'amount_order',
      header: ({column})=>{
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Ordenes
            <ChevronUpDownIcon className="ml-2 h-4 w-4" />
          </Button>
        )
      },
      cell: ({row}) => {
        return <div className="text-left font-medium">{row.getValue('amount_order')}</div>
      }
    },
    {
      accessorKey: 'provider',
      header: ({column}) => {
        return (
          <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Proveedor
          <ChevronUpDownIcon className="ml-2 h-4 w-4" />
        </Button>
        )
      },
      cell: ({row}) => { 
        return <div className="capitalize">{row.original.provider}</div>
      }
    },
    {
      accessorKey: 'total',
      header: ({column}) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Total
            <ChevronUpDownIcon className="ml-2 h-4 w-4" />
          </Button>
        )
      },
      cell: ({row}) => {
        const total = parseFloat(row.getValue("total"))
        const formatted = new Intl.NumberFormat("en-US", {
          style: 'currency',
          currency: "USD",
          maximumFractionDigits: 0
        }).format(total)

        return <div className="text-left font-medium">{formatted}</div>
      }
    },
    {
      id: "actions",
      header: "Acciones",
      cell: ({row}) => {
        const purchase = row.original
        return(
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
            <Tooltip placement="top" title="Aqui podrás ver las acciones de las compras" arrow>
              <Button variant='ghost' size='icon'>
                <MoreHorizontal className="h-4 w-4"/>
              </Button> 
            </Tooltip>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="flex flex-col items-start">
              <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                <SeeDetail purchase={purchase} id={purchase.id}/>
                <Receipt id={purchase.id} />
            </DropdownMenuContent>
          </DropdownMenu>
        )
      }      
    }
]