'use client'
import React from 'react'
import { DataTable } from './DataTable'
import { columns } from '..'
import useSWR from 'swr'
import { RoutesApi } from '@/models/routes.models'
export default function TableComponent() {
    const {data: providers, isLoading,error} = useSWR(RoutesApi.PROVIDERS)
    return (
      <div>
        <DataTable columns={columns}  data={providers || []} isLoading={isLoading} error={error}/>  
      </div>
  )
}