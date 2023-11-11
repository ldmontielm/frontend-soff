'use client'

import React, {useState} from 'react'
import { DataTable } from '../table/DataTable'
import {columns} from '../columns/Columns'
import useSWR from 'swr'
import { RoutesApi } from '@/models/routes.models'

export default function TableComponent() {
  const [active, setActive] = useState(true)
  const {data: products, isLoading, error} = useSWR(`${RoutesApi.PRODUCTS}?status=${active}`)

  return (
    <div>
      <DataTable consult={active} setActive={setActive} columns={columns}  data={products || []} isLoading={isLoading} error={error}/>
    </div>
  )
}