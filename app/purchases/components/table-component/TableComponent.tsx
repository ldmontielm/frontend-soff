'use client'

import React from 'react'
import { DataTable } from '../table/DataTable'
import { columns } from '../columns/Columns'
import useSWR from 'swr'
import { getPurchases, urlPurchases } from '../../services/purchase.services'

export default function TableComponent() {
  const {data: purchases, isLoading, isValidating, error} = useSWR(urlPurchases, getPurchases)
  return (
    <div>
      <DataTable columns={columns}  data={purchases || []} isLoading={isLoading} error={error}/>
    </div>
  )
}