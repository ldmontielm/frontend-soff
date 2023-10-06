'use client'

import {ColumnDef} from "@tanstack/react-table"
import { Product } from '../../models/product.models'
import { getProducts, urlProducts, getDetailsByProductId } from "../../services/products.services"
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
import { ViewDetailsByProduct } from ".."
import { DisableProduct } from "../../[id]/components/disable-product"
import {PencilIcon } from "@heroicons/react/24/outline"
import Link from 'next/link'
import { useState, useEffect } from "react"
import useSWR from "swr"

export const columns: ColumnDef<Product>[] = [
    {
        accessorKey: 'name',
        header: "Nombre",
        cell: ({row}) => {  
            return <div className="font-medium">{row.getValue("name")}</div>
        }
    },   
    {
        accessorKey: 'price',
        header: () => <div className="text-right">Costo</div>,
        cell: ({row}) => {
        const costo = parseFloat(row.getValue("price"))
        const formatted = new Intl.NumberFormat("en-US", {
            style: 'currency',
            currency: "USD",
            maximumFractionDigits: 0
        }).format(costo)

        return <div className="text-right font-medium">{formatted}</div>
        }
    },
    {
        accessorKey: 'sale_price',
        header: () => <div className="text-right">Precio de venta</div>,
        cell: ({row}) => {
        const sale_price = parseFloat(row.getValue("sale_price"))
        const formatted = new Intl.NumberFormat("en-US", {
            style: 'currency',
            currency: "USD",
            maximumFractionDigits: 0
        }).format(sale_price)

        return <div className="text-right font-medium">{formatted}</div>
        }
    },
    { 
        accessorKey: 'status',
        header: () => <div className="text-center mr-[45px]">Estado</div>,
        cell: ({row}) => {
        const product = row.original
        return <div className="text-center">
        { 
            row.getValue("status") ? (
            <>
              <Badge className="bg-green-500">Activo</Badge>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                    <Button variant='ghost' size='icon' className="ml-4">
                        <MoreHorizontal className="h-4 w-4 " />
                    </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="flex flex-col items-start">
                    <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                    <Link href={`/products/${product.id}/update_product`}>
                        <Button variant='ghost'>
                            <PencilIcon className=" h-4 w-4 mr-2" /> <span>Editar</span>
                        </Button>
                    </Link>
                    <ViewDetailsByProduct productId={product.id}/>
                    <DisableProduct productId={product.id}
                        product={product}/>
                    </DropdownMenuContent>
                </DropdownMenu>
            </>
            )
            : (
            <>
             <Badge className="bg-red-500">Inactivo</Badge>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                    <Button variant='ghost' size='icon' className="ml-2">
                        <MoreHorizontal className="h-4 w-4" />
                    </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="flex flex-col">
                    <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                    <DisableProduct productId={product.id}
                        product={product}/>
                    </DropdownMenuContent>
                </DropdownMenu>
            </>
            ) 
        }
        </div>
        }
    }
]
