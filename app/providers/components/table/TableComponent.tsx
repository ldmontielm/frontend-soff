'use client'
import React from 'react'
import { DataTable } from './DataTable'
import { columns } from '..'
import useSWR from 'swr'
import { getProviders, urlProvider } from '../../services/provider.services'
export default function TableComponent() {
    const {data: providers, isLoading, isValidating,error} = useSWR(urlProvider, getProviders)
    return (
      <div>
        {
          Array.isArray(providers) && (
            <DataTable columns={columns} data={providers}/>
          )
        }
      </div>
  )
}