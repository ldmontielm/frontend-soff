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
import { convertToCOP, convertDate } from '../../utils'
import Link from 'next/link'
import { Routes } from '@/models/routes.models'
import { Purchase } from '../../models/purchase.models'
import { Provider } from '../../models/provider.models'
import { createPurchase } from '../../services/purchase.services'
import { getPurchases, urlPurchases } from '../../services/purchase.services'
import { HeadTable } from '..'
import useSWR from 'swr'


export default function TableComponent() {
  const {data: purchases, isLoading, error} = useSWR(urlPurchases, getPurchases)
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
              <TableHead>Fecha</TableHead>
              <TableHead>Ordenes</TableHead>
              <TableHead>Proveedor</TableHead>
              <TableHead>Total</TableHead>
              <TableHead className="text-right">Estado</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.isArray(purchases) && purchases.map((purchase) =>(
              <TableRow key={purchase.id}>
              <TableCell>{convertDate(purchase.purchase_date)}</TableCell>
              <TableCell>{purchase.amount_order}</TableCell>
              <TableCell className='text-left'>{purchase.provider}</TableCell>
              <TableCell>${convertToCOP(purchase.total)}</TableCell>
              <TableCell className='text-right'><Badge>{purchase.status ? "Activo": "Inactivo"}</Badge></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )}
