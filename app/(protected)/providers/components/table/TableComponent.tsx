'use client'
import React, { useState } from 'react'
import { DataTable } from './DataTable'
import { columns } from '..'
import useSWR from 'swr'
import { RoutesApi } from '@/models/routes.models'
export default function TableComponent() {
    const [active, setActive] = useState(true)
    const {data: providers, isLoading,error} = useSWR(`${RoutesApi.PROVIDERS}?status=${active}`)

    return (
      <div>
        <DataTable consult={active} setActive={setActive} columns={columns}  data={providers || []} isLoading={isLoading} error={error}/>  
      </div>
  )
}