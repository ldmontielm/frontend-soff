'use client'

import React from 'react'
import { DataTable } from '../table/DataTable'
import { columns } from '..'
import useSWR from 'swr'
import { getSales, urlSales } from '../../services/sale.services'

export default function TableComponent() {
  const {data: sales, isLoading, isValidating, error} = useSWR(urlSales, getSales)

  return (
    <div>
      {
        Array.isArray(sales) && (
          <DataTable columns={columns}  data={sales}/>
        )
      }
    </div>
  )
}
