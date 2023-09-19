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
import { MoreHorizontal, PencilIcon } from "lucide-react"
import { SeeDetail } from "../see-detail"
import {UserIcon, QueueListIcon } from "@heroicons/react/24/outline"
import { getPurchases, urlPurchases } from "../../services/purchase.services"
import useSWR from "swr"
import { useEffect, useState } from "react"
import Link from "next/link"
import { ViewDetailsByProduct } from "@/app/products/[id]/components"
import DisablePurchase from "../../[id]/components/Disable-Purchase/DisablePurchase"

export default function updateStatus(){
  const{data: purchases, isLoading, error} = useSWR(urlPurchases, getPurchases)
  const [localPurchases, setLocalPurchases] = useState<Purchase[]>([])

  useEffect(()=>{
    if(purchases){
      setLocalPurchases(purchases)
    }
  }, [purchases]);

  const updatePurchaseStatus = (purchaseId:string, newStatus:boolean) =>{
    const updatePurchases = localPurchases?.map((purchase)=>{
      if(purchase.id === purchaseId){
        return {...purchase, status: newStatus};
      }
      return purchase
    });
    setLocalPurchases(updatePurchases)
  };
}

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
    header: () => <div className="text-center mr-[45px]">Estado</div>,
    cell: ({row}) => {
      const purchase = row.original
      return <div className="text-center">
        {
          row.getValue("status") ? (
            <>
              <Badge className="bg-green-500">Activo</Badge>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant='ghost' size='icon' className="ml-4">
                          <MoreHorizontal className="h-4 w-4"/>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="flex flex-col">
                      <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                      <SeeDetail id={purchase.id}/>
                      <Button variant='ghost'>
                        <UserIcon className="w-4 h-4 mr-2"/> <span>Ver Proveedor</span>
                      </Button>
                      <DisablePurchase purchaseId={purchase.id} purchase={purchase} onUpdateStatus={()=>updateStatus()}/>
                    </DropdownMenuContent>
                </DropdownMenu>
            </>
          ):(
            <>
              <Badge className="bg-red-500">Cancelada</Badge>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant='ghost' size='icon' className="ml-2">
                      <MoreHorizontal className="h-4 w-4"/>
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
            </>
          )
        }
      </div>
    }
  }
]