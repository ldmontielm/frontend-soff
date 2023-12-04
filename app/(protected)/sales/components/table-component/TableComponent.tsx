'use client'

import React from 'react'
import { DataTable } from '../table/DataTable'
import {columns} from '../columns/Columns'
import useSWR from 'swr'
import { RoutesApi } from '@/models/routes.models'


export default function TableComponent() {

  const {data: sales, isLoading, error } = useSWR(RoutesApi.SALES)

  return (
      <DataTable columns={columns}  data={sales || []} isLoading={isLoading} error={error}/>  
  )
}
