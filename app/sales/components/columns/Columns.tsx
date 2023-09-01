'use client'

import {ColumnDef} from "@tanstack/react-table"
import { Client, Sale } from '../../models/sale.models'
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { MoreHorizontal } from "lucide-react"




export const columns: ColumnDef<Sale>[] = [
  {
    accessorKey: 'client',
    header: ({column}) => {
      return (
        <span
          className="cursor-pointer"
          onClick={() => column.toggleSorting(column.getIsSorted() === "desc")}
        >
          Cliente
        </span>
      )
    },
    cell: ({row}) => { 
      return <div className="capitalize">{row.getValue('client')}</div>
    }
  },
  {
    accessorKey: 'sale_date',
    header: "Fecha",
    cell: ({row}) => {
      const date = new Date(row.getValue("sale_date"))
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
    accessorKey: 'payment_method',
    header: 'Método',
    cell: ({row}) => {
      return <div className="capitalize">{row.getValue('payment_method') !== "" ? row.getValue('payment_method') === "transferencia" ? `💳 ${row.getValue('payment_method')}` : `💵 ${row.getValue('payment_method')}` : "🔒 N/A" }</div>
    }
  },
  {
    accessorKey: 'type_sale',
    header: 'Tipo',
    cell: ({row}) => {
      return <div className="capitalize">{row.getValue('type_sale') !== "" ?  row.getValue('type_sale') : "🔒 N/A" }</div>
    }
  },
  {
    accessorKey: 'total',
    header: () => <div className="text-right">Total</div>,
    cell: ({row}) => {
      const total = parseFloat(row.getValue("total"))
      const formatted = new Intl.NumberFormat("en-US", {
        style: 'currency',
        currency: "USD"
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
        row.getValue("status") === "pending" ? (
          <Badge className="bg-purple-500">Pendiente</Badge>
        ): row.getValue("status") === "paid" ? (
          <Badge className="bg-green-500">Pagada</Badge>
          ) : row.getValue("status") === "cancel" ? (
          <Badge className="bg-red-500">Cancelada</Badge>
          ) : row.getValue("status") === "open" ? (
          <Badge className="bg-blue-500">Abierta</Badge>
        ) : <></>
      }
    </div>
    }
  },
  {
    id: "actions",
    cell: ({row}) => {
      const sale = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='ghost' size='icon'>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Acciones</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(sale.id)}
            >
              Marcar pagada
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }
  }
]
