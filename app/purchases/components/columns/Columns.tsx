'use client'

import {ColumnDef} from "@tanstack/react-table"
import { Purchase } from '../../models/purchase.models'
import { Provider } from '../../models/provider.models'
import { Badge } from "@/components/ui/badge"
import { Receipt } from "../receipt"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { MoreHorizontal, PencilIcon } from "lucide-react"
import { SeeDetail } from "../see-detail"
import { SeeProvider} from "../see-provider"
import {UserIcon, QueueListIcon } from "@heroicons/react/24/outline"
import { getPurchases, urlPurchases } from "../../services/purchase.services"
import useSWR from "swr"
import { useEffect, useState } from "react"
import Link from "next/link"

export default function updateStatus(){
  const{data: purchases, isLoading, error} = useSWR(urlPurchases, getPurchases)
  const [localPurchases, setLocalPurchases] = useState<Purchase[]>([])

  useEffect(()=>{
    if(purchases){
      setLocalPurchases(purchases)
    }
  }, [purchases]);
}

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
    id: "actions",
    cell: ({row}) => {
      const purchase = row.original
      return(
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='ghost' size='icon'>
              <MoreHorizontal className="h-4 w-4"/>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="flex flex-col items-start">
            <DropdownMenuLabel>Acciones</DropdownMenuLabel>
              <SeeDetail purchase={purchase} purchaseId={purchase.id}/>
              <Receipt purchase={purchase} purchaseId={purchase.id} />
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }      
  }
]