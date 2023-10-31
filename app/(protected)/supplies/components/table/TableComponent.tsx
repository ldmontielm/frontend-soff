'use client'
import React, { useState } from 'react'
import { DataTable } from './DataTable'
import { columns } from '..'
import { RoutesApi } from '@/models/routes.models'
import useSWR from 'swr'
export default function TableComponent() {
    const [active, setActive] = useState(true)
    const {data: supplies, isLoading,error} = useSWR(RoutesApi.SUPPLIES)
    return (
      <div>
          <DataTable consult={active} setActive={setActive} columns={columns}  data={supplies || []} isLoading={isLoading} error={error}/>
      </div>
  )
}