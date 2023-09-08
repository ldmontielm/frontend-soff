'use client'
import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
// import { convertToCOP, convertDate } from '../../utils'
// import Link from 'next/link'
import { Routes } from '@/models/routes.models'
import { Product } from '../../models/product.models'
import { createProduct } from '../../services/products.services'
import { getProducts, urlProducts } from '../../services/products.services'
import { HeadTable } from '..'
import useSWR from 'swr'
import { TrashIcon, PencilIcon } from '@heroicons/react/24/outline'

export default function TableComponent() {
    const {data: products, isLoading, error} = useSWR(urlProducts, getProducts)
    console.log(products)
    return (
        <div >
            <div className="w-full flex flex-wrap md:flex-nowrap items-center justify-between md:space-x-2 space-y-2 md:space-y-0 mb-5">
                <HeadTable />
            </div>
            {isLoading ? "Cargando información...": <></>}
            <div className='border rounded'>
                <Table>
                    <TableHeader>
                        <TableRow>
                        <TableHead>Nombre</TableHead>
                        <TableHead>Costo</TableHead>
                        <TableHead>Precio de venta</TableHead>
                        <TableHead>Estado</TableHead>
                        <TableHead className="text-right">Acciones</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {Array.isArray(products) && products.map((product) => (
                            <TableRow key={product.id}>
                                <TableCell className="font-medium capitalize">{product.name}</TableCell>
                                <TableCell>{product.price}</TableCell>
                                <TableCell className='capitalize'>{product.sale_price}</TableCell>
                                <TableCell><Badge>{product.status ? "Activo" : "Inactivo"}</Badge></TableCell>
                                <TableCell className="flex items-center gap-2 justify-end">
                                    <Link href={`/products/${product.id}`}><PencilIcon className=" h-4 w-4" /></Link>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}