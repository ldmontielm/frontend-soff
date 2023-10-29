'use client'
import {ColumnDef} from "@tanstack/react-table"
import { Supply } from "../../models/supply.models"
import { convertToCOP } from "@/app/purchases/utils"
import { Badge } from "@/components/ui/badge"
import SupplyUpdateForm from "../supply-update-form/SupplyUpdateForm" 
import SupplyByIdDeleteForm from "../supply-delete-form/SupplyDeleteForm"
// import SwitchDemo from "../switcht/SwichtDemo"
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
import DisableSupply from "../../disable-supply/DisableSupply"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
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
// import { getSupplies, urlSupply } from "../../services/supply.services"
import { Column } from "jspdf-autotable"

// const [menuOpen, setMenuOpen] = useState(false);


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
          Precio
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({row}) => {
      const price: number = row.getValue('price'); // Especifica el tipo como número
      const priceInCOP = convertToCOP(price); // Aplica la conversión

      return <div>{priceInCOP}</div>
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
                        {/* <TooltipProvider>
                        <Tooltip>
                        <TooltipTrigger asChild> */}
                        <Button variant='ghost' size='icon' className="ml-2">
                            <MoreHorizontal className="h-4 w-4 " />
                        </Button>
                        {/* </TooltipTrigger>
                            <TooltipContent className="bg-gray-500">
                            <p className="text-xs font-semibold">Aquí encuentras acciones adicionales relacionadas con cada producto.</p>
                            </TooltipContent>
                        </Tooltip>
                        </TooltipProvider> */}
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="flex flex-col items-start">
                        <DropdownMenuLabel >Acciones</DropdownMenuLabel>
                            
                        <SupplyUpdateForm supply={supply} id_supply={supply.id} />
                          
  
                        <SupplyByIdDeleteForm supply={supply} id_supply={supply.id}/>
                        {/* <DisableProduct id={product.id} product={product}/> */}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </>
            ):
            (
                <>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                        {/* <TooltipProvider>
                        <Tooltip>
                        <TooltipTrigger asChild> */}
                        <Button variant='ghost' size='icon' className="ml-2">
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                        {/* </TooltipTrigger>
                            <TooltipContent className="bg-gray-500 w-2 h-2">
                            <p className="text-xs font-semibold">Aquí encuentras acciones adicionales relacionadas con cada producto.</p>
                            </TooltipContent>
                        </Tooltip>
                        </TooltipProvider> */}
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="flex flex-col">
                        <DropdownMenuLabel>Sin acciones</DropdownMenuLabel>
                        <span className="p-2 text-center">...</span>
                        {/* <DisableProduct id={product.id} product={product}/> */}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </>
            ) 
        }
        </div>
        )
      }
    }
];