'use client'

import React from 'react'
import { DataTable } from '../table/DataTable'
import {columns} from '../columns/Columns'
// import { columns } from '../columns/Columns'
import useSWR from 'swr'
import { getProducts, urlProducts } from '../../services/products.services'

export default function TableComponent() {
  const {data: products, isLoading, isValidating, error} = useSWR(urlProducts, getProducts)

  return (
    <div>
      <DataTable columns={columns}  data={products || []} isLoading={isLoading} error={error}/>
    </div>
  )
}