'use client'

import React from 'react'
import { DataTable } from '../table/DataTable'
import {columns} from '../columns/Columns'
import useSWR from 'swr'
import { RoutesApi } from '@/models/routes.models'

export default function TableComponent() {
  const {data: products, isLoading, error} = useSWR(RoutesApi.PRODUCTS)

  return (
    <div>
      <DataTable columns={columns}  data={products || []} isLoading={isLoading} error={error}/>
    </div>
  )
}