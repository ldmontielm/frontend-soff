'use client'

import { ColumnDef } from "@tanstack/react-table"
import { Sale } from '../../models/sale.models'
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { MoreHorizontal} from "lucide-react"
import { ChevronUpDownIcon } from "@heroicons/react/24/outline"
import { Receipt, UploadFile } from ".."
import { SeeDetail } from "../see-detail"
export const columns: ColumnDef<Sale>[] = [
  {
    accessorKey: "invoice_number",
    header: "# Factura"
  },
  {
    accessorKey: 'client',
    header: ({column}) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Cliente
          <ChevronUpDownIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({row}) => { 
      return <div className="capitalize">{row.original.client}</div>
    }
  },
  {
    accessorKey: 'sale_date',
    header: ({column}) => {
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
      const date = new Date(row.getValue("sale_date"))
      const formatted = new Intl.DateTimeFormat(['ban', 'id']).format(date)

      return <div className="font-medium">{formatted}</div>
    }
  },
  {
    accessorKey: 'amount_order',
    header: ({column}) => {
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
      return <div>{row.getValue('amount_order')}</div>
    }
  },
  {
    accessorKey: 'payment_method',
    header: ({column}) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Métodos
          <ChevronUpDownIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({row}) => {
      return <div className="capitalize">{row.getValue('payment_method') !== "" ? row.getValue('payment_method') === "transferencia" ? `💳 ${row.getValue('payment_method')}` : `💵 ${row.getValue('payment_method')}` : "🔒 N/A" }</div>
    }
  },
  {
    accessorKey: 'type_sale',
    header: ({column}) => {
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
    cell: ({row}) => {
      return <div className="capitalize">{row.getValue('type_sale') !== "" ?  row.getValue('type_sale') : "🔒 N/A" }</div>
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
    accessorKey: 'status',
    header: ({column}) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Estado
          <ChevronUpDownIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({row}) => {
      return <div className="text-left">
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
    header: "Acciones",
    cell: ({row}) => {
      const sale = row.original
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='ghost' size='icon'>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="flex flex-col">
            <DropdownMenuLabel>Acciones</DropdownMenuLabel>
            {
              row.getValue("status") === "pending" ?
                (
                  <UploadFile id={sale.id} />
                ): ""
            }
            <SeeDetail id={sale.id}/>
            <Receipt id={sale.id} sale={sale} />
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }
  }
]
