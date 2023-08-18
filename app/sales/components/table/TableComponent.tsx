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
import { Sale } from '../../models/sale.models'
import { createSala } from '../../services/sale.services'
import { getSales, urlSales } from '../../services/sale.services'
import { HeadTable } from '..'
import useSWR from 'swr'


export default function TableComponent() {
  const {data: sales, isLoading, error} = useSWR(urlSales, getSales)
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
              <TableHead>Cliente</TableHead>
              <TableHead>Fecha</TableHead>
              <TableHead>Ordenes</TableHead>
              <TableHead>Método</TableHead>
              <TableHead>Tipo</TableHead>
              <TableHead>Total</TableHead>
              <TableHead className="text-right">Estado</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.isArray(sales) && sales.map((sale) => (
              <TableRow key={sale.id}>
                <TableCell className="font-medium capitalize">{sale.client.name}</TableCell>
                <TableCell>{convertDate(sale.sale_date)}</TableCell>
                <TableCell>{sale.amount_order}</TableCell>
                <TableCell className='capitalize'>{sale.payment_method}</TableCell>
                <TableCell className='capitalize'>{sale.type_sale}</TableCell>
                <TableCell>${convertToCOP(sale.total)}</TableCell>
                <TableCell className="text-right"><Badge variant={sale.status === 'open' ? "open": sale.status === 'paid' ? "paid" : sale.status === 'pending' ? "pending": "default"}>{sale.status}</Badge></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
