'use client'

import {ColumnDef} from "@tanstack/react-table"
import { Product } from '../../models/product.models'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { MoreHorizontal } from "lucide-react"
import { ViewDetailsByProduct } from ".."
import { DisableProduct } from "../../[id]/components/disable-product"
import {PencilIcon } from "@heroicons/react/24/outline"
import Link from 'next/link'
import { ChevronUpDownIcon } from "@heroicons/react/24/outline"
import { Routes } from "@/models/routes.models"
import {Tooltip} from "@mui/material"

export const columns: ColumnDef<Product>[] = [
    {
        accessorKey: 'name',
        header: ({ column }) => {
            return (
              <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              >
                Nombre
                <ChevronUpDownIcon className="ml-2 h-4 w-4" />
              </Button>
            )
        },
        cell: ({row}) => {  
            return <div className="capitalize">{row.original.name}</div>
        }
    },   
    {
        accessorKey: 'price',
        header: ({ column }) => {
            return (
              <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              >
                Costo
                <ChevronUpDownIcon className="ml-2 h-4 w-4" />
              </Button>
            )
        },
        cell: ({row}) => {
        const costo = parseFloat(row.getValue("price"))
        const formatted = new Intl.NumberFormat("en-US", {
            style: 'currency',
            currency: "USD",
            maximumFractionDigits: 0
        }).format(costo)

        return <div className="text-left font-medium">{formatted}</div>
        }
    },
    {
        accessorKey: 'sale_price',
        header: ({column}) => {
            return (
                <Button
                  variant="ghost"
                  onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                  Precio de venta
                  <ChevronUpDownIcon className="ml-2 h-4 w-4" />
                </Button>
            )
        }, 
        cell: ({row}) => {
        const sale_price = parseFloat(row.getValue("sale_price"))
        const formatted = new Intl.NumberFormat("en-US", {
            style: 'currency',
            currency: "USD",
            maximumFractionDigits: 0
        }).format(sale_price)

        return <div className="text-left font-medium">{formatted}</div>
        }
    },
    {
        accessorKey: 'register_date',
        header: ({column}) => {
            return (
                <Button
                  variant="ghost"
                  onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                  Fecha de registro
                  <ChevronUpDownIcon className="ml-2 h-4 w-4" />
                </Button>
            )
        }, 
        cell: ({row}) => {
          const date = new Date(row.getValue("register_date"))
          const formatted = new Intl.DateTimeFormat(['ban', 'id']).format(date)
    
          return <div className="font-medium">{formatted}</div>
        }
      },
    { 
        accessorKey: 'status',
        header: "Estado",
        cell: ({row}) => {
            const product = row.original;
            return <DisableProduct id={product.id}/>
        }
    },
    {
        id: "actions",
        header: "Acciones",
        cell: ({row}) => {
            const product = row.original
            return(
                <div className="text-left">
                    {  
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Tooltip placement="top" title="Acciones para el producto" arrow>
                                    <Button variant='ghost' size='icon' className="ml-2">
                                        <MoreHorizontal className="h-4 w-4 " />
                                    </Button>
                                </Tooltip>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="flex flex-col">
                                {
                                    row.getValue("status") ? (
                                        <>
                                            <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                                            <Link href={`${Routes.CREATEPRODUCT}/${product.id}/update_product`}>
                                                <Button variant='ghost' className="w-full">
                                                    <PencilIcon  className=" h-4 w-4 mr-2"  /> <span className="mr-8">Editar</span>
                                                </Button>
                                            </Link>
                                            <ViewDetailsByProduct id={product.id}/>
                                        </>
                                    ):
                                    ( 
                                        <>
                                            <DropdownMenuLabel>Sin acciones</DropdownMenuLabel>
                                            <span className="p-2 text-center">...</span>
                                        </>
                                    )
                                }
                            </DropdownMenuContent>
                        </DropdownMenu>
                    }
                </div>
            )
        }
    }
]