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
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { Routes } from '@/models/routes.models'
import { Supply } from '../../models/supply.models'
// import { HeadTable } from '..'
import { HeadTable } from '..'
import useSWR from 'swr'
// import { getProviders, urlProvider } from '../../services/provider.services'
import { getSupplies, urlSupply } from '../../services/supply.services'

export default function TableComponent() {
    const {data: supplies, isLoading, isValidating,error} = useSWR(urlSupply, getSupplies)
    return (
        <div >
          <div className="w-full flex flex-wrap md:flex-nowrap items-center justify-between md:space-x-2 space-y-2 md:space-y-0 mb-5">       
            <HeadTable/>
          </div>
          {isLoading ? "Cargando información...": <></>}
          <div className='border rounded'>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nombre</TableHead>
                  <TableHead>Precio</TableHead>
                  <TableHead>Cantidad_Stock</TableHead>
                  <TableHead>Unidad_Medida</TableHead>
                  <TableHead>Estado</TableHead>
                </TableRow>

              </TableHeader>
              <TableBody>
                {Array.isArray(supplies) && supplies.map((supply) => (
                  <TableRow key={supply.id}>
                    <TableCell>{supply.name}</TableCell>
                    <TableCell>{supply.price}</TableCell>
                    <TableCell>{supply.quantity_stock}</TableCell>
                    <TableCell>{supply.unit_measure}</TableCell>
                    
                    <Badge>{supply.status ? "Activo": "Inactivo"}</Badge>
                  </TableRow>

                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      )
}