'use client'
import {ColumnDef} from "@tanstack/react-table"
import { Supply } from "../../models/supply.models"
import { convertToCOP } from "@/app/(protected)/purchases/utils"
import { Badge } from "@/components/ui/badge"
import SupplyUpdateForm from "../supply-update-form/SupplyUpdateForm" 
import SupplyDeleteForm from "../supply-delete-form/SupplyDeleteForm"
import { ChevronUpDownIcon } from "@heroicons/react/24/outline"

import { ArrowUpDown} from "lucide-react"
import DisableSupply from "../../disable-supply/DisableSupply"
import {Tooltip} from "@mui/material"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { MoreHorizontal } from "lucide-react"
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Switch } from '@/components/ui/switch'
import { useEffect } from 'react'
import { RoutesApi } from '@/models/routes.models'
import useSWR, { mutate} from 'swr'
import { fetcherPut } from '@/context/swr-context-provider/SwrContextProvider'
import { Column } from "jspdf-autotable"

export default function Statusnew(){
  const {data: supplies, isLoading, error} = useSWR(RoutesApi.SUPPLIES)
  const [localSupplies, setLocalSupplies] = useState<Supply[]>([])
  // const [menuOpen, setMenuOpen] = useState(false);


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
          <ChevronUpDownIcon className="ml-2 h-4 w-4" />
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
        Precio
        <ChevronUpDownIcon className="ml-2 h-4 w-4" />
      </Button>
    );
  },
  cell: ({row}) => {
    const price: number = row.getValue('price'); // Especifica el tipo como número
    const formattedPrice = parseFloat(price.toFixed(2)).toLocaleString('es-ES',{

    });

    return <div>{formattedPrice}</div>
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
          <ChevronUpDownIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const quantity: number = row.getValue('quantity_stock');
      // Limitar la cantidad de decimales a 2
      const formattedQuantity = quantity.toFixed(0);
      return <div>{formattedQuantity}</div>;
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
          <ChevronUpDownIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const unitMeasure: string = row.getValue('unit_measure');
      // Aquí, verificamos si la unidad de medida es "Kilogramos" y la mostramos como "gramos" si es así
      const displayUnitMeasure = unitMeasure === 'Kilogramos' ? 'Gramos' : unitMeasure;
      return <div>{displayUnitMeasure}</div>; // Agregamos "as string" para ayudar a TypeScript a inferir el tipo
    }
  },
  {
    accessorKey: 'total',
  header: ({ column }) => {
    return (
      <Button className="w-fit"
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Total
        <ChevronUpDownIcon className="ml-2 h-4 w-4" />
      </Button>
    );
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
//   cell: ({row}) => {
//     const total: number = row.getValue('total'); // Especifica el tipo como número

//     const formattedTotal = parseFloat(total.toFixed(2)).toLocaleString('es-ES', {
//       style: 'currency',
//       currency: 'COP',
//     });

//     return <div className="font-medium">{formattedTotal}</div>
//   }
// },
  
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <div 
        className="ml-4">
          Estado
        </div>
      )
    },

    cell: ({ row }) => {
      const supply = row.original;
      return <DisableSupply supply={supply}/>
    }
    },
      {
        id: "actions",
        header: "Acciones",
        cell: ({row}) => {
            const supply = row.original
            return(
                <div className="text-left">
                    {
            row.getValue("status") ? (
                <>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Tooltip placement="top" title="Acciones para el insumo." arrow>
                            <Button variant='ghost' size='icon' className="ml-2">
                                <MoreHorizontal className="h-4 w-4 " />
                            </Button>
                          </Tooltip>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="flex flex-col items-start p-2 space-y-2">
                          <DropdownMenuLabel >Acciones</DropdownMenuLabel>
                          <SupplyUpdateForm supply={supply} id_supply={supply.id} />
                          <SupplyDeleteForm supply={supply} id_supply={supply.id}/>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </>
            ):
            (
                <>
                </>
            ) 
        }
        </div>
        )
      }
    }
];