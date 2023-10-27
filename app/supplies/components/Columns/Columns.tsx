'use client'
import {ColumnDef} from "@tanstack/react-table"
import { Supply } from "../../models/supply.models"
import { convertToCOP } from "@/app/purchases/utils"
import { Badge } from "@/components/ui/badge"
import SupplyUpdateForm from "../supply-update-form/SupplyUpdateForm" 
import SupplyByIdDeleteForm from "../supply-delete-form/SupplyDeleteForm"
import useSWR from "swr"
import { useState } from "react"
import { useEffect } from "react"
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
// import { getSupplies, urlSupply } from "../../services/supply.services"
import { Column } from "jspdf-autotable"
import { RoutesApi } from '@/models/routes.models'

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
      const supply = row.original
      return (
        <Badge className={`bg-${supply.status === true ? "green": "red"}-500`}>{supply.status === true ? "Activo": "Inactivo"}</Badge>
      )
    }
  },
      { 
        id: "actions",
        header: "Acciones",
        cell: ({ row }) => {
          const supply = row.original
          return (
            <div>
              <>
              <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                  <Button variant='ghost' size='icon' className="ml-3">
                      <MoreHorizontal className="h-4 w-4 " />
                  </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="flex flex-col">
                  <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                  {/* <TableCell className="flex items-center gap-2">
                
                </TableCell> */}
                  {/* <SwitchDemo 
                    id_supply={supply.id}
                    supply={supply}
                    onUpdateStatus={()=> Statusnew()}/> */}
                    {supply.status == true ? (
                      <div className="flex flex-col">
                        <div className="flex justify-left items-center ml-4 mb-2">
                          <SupplyUpdateForm supply={supply} id_supply={supply.id} /><span className="ml-2">Editar</span>
                        </div>
                        <div className="flex justify-left items-center ml-4 mb-2">
                          <SupplyByIdDeleteForm supply={supply} id_supply={supply.id}/><span className="ml-2">Eliminar</span>
                        </div>
                      </div>
                    ): null}
                  </DropdownMenuContent>
              </DropdownMenu>
          </>

          {/* ) : (
            <>
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
          </> */}
            </div>
          )
    }
  },
];