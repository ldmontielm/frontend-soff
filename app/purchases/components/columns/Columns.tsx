'use client'

import {ColumnDef} from "@tanstack/react-table"
import { Purchase } from '../../models/purchase.models'
import { Provider } from '../../models/provider.models'
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { MoreHorizontal } from "lucide-react"
import { SeeDetail } from "../see-detail"
import {UserIcon, QueueListIcon } from "@heroicons/react/24/outline"
export const columns: ColumnDef<Purchase>[] = [
    {
      accessorKey: 'purchase_date',
      header: "Fecha",
      cell: ({row}) => {
        const date = new Date(row.getValue("purchase_date"))
        const formatted = new Intl.DateTimeFormat(['ban', 'id']).format(date)
  
        return <div className="font-medium">{formatted}</div>
      }
    },
    {
      accessorKey: 'amount_order',
      header: 'Ordenes',
      cell: ({row}) => {
        return <div>{row.getValue('amount_order')}</div>
      }
    },
  {
    accessorKey: 'provider',
    header: ({column}) => {
      return (
        <span
          className="cursor-pointer"
          onClick={() => column.toggleSorting(column.getIsSorted() === "desc")}
        >
          Proveedor
        </span>
      )
    },
    cell: ({row}) => { 
      return <div className="capitalize">{row.getValue('provider')}</div>
    }
  },
  {
    accessorKey: 'total',
    header: () => <div className="text-right">Total</div>,
    cell: ({row}) => {
      const total = parseFloat(row.getValue("total"))
      const formatted = new Intl.NumberFormat("en-US", {
        style: 'currency',
        currency: "USD",
        maximumFractionDigits: 0
      }).format(total)

      return <div className="text-right font-medium">{formatted}</div>
    }
  },
  {
    accessorKey: 'status',
    header: () => <div className="text-right">Estado</div>,
    cell: ({row}) => {
      return <div className="text-right">
      {
        row.getValue("status") ? (
          <Badge className="bg-green-500">Activa</Badge>
        ): (
          <Badge className="bg-red-500">Cancelada</Badge>
          ) 
      }
    </div>
    }
  },
  {
    id: "actions",
    cell: ({row}) => {
      const purchase = row.original
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='ghost' size='icon'>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="flex flex-col">
            <DropdownMenuLabel>Acciones</DropdownMenuLabel>
            <SeeDetail id={purchase.id}/>
            <Button variant='ghost'>
              <UserIcon className="w-4 h-4 mr-2"/> <span>Ver Proveedor</span>
            </Button>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }
  }
]