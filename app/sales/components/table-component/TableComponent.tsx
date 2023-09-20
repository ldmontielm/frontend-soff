'use client'

import React from 'react'
import { DataTable } from '../table/DataTable'
import {columns} from '../columns/Columns'
import useSWR from 'swr'
import { getSales, urlSales } from '../../services/sale.services'

export default function TableComponent() {
  const {data: sales} = useSWR(urlSales, getSales)

  return (
    <div>
      {
        Array.isArray(sales) && (<DataTable columns={columns}  data={sales}/>)
      }
    </div>
  )
}
