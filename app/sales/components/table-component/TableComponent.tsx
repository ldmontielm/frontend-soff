'use client'

import React from 'react'
import { DataTable } from '../table/DataTable'
import {columns} from '../columns/Columns'
import useSWR from 'swr'
import { urlSales } from '../../services/sale.services'

export default function TableComponent() {
  const {data: sales, isLoading, error } = useSWR(urlSales)

  
  return (
    <div> 
      <DataTable columns={columns}  data={sales || []} isLoading={isLoading} error={error}/>  
    </div>
  )
}
