'use client'
import React from 'react'
import { DataTable } from './DataTable'
import { columns } from '..'
import { RoutesApi } from '@/models/routes.models'
import useSWR from 'swr'
export default function TableComponent() {
    const {data: supplies, isLoading,error} = useSWR(RoutesApi.SUPPLIES)
    return (
      <div>
        {
          <DataTable columns={columns}  data={supplies || []} isLoading={isLoading} error={error}/>
        }
      </div>
  )
}