'use client'
import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { DataTable } from './DataTable'
import { columns } from '..'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { Routes } from '@/models/routes.models'
import { Supply } from '../../models/supply.models'
import { HeadTable } from '..'
// import ProviderDeleteForm from '../provider-delete-form/ProviderDeleteForm'
// import ProviderUpdateForm from '../provider-update-form/ProviderUpdateForm'
import useSWR from 'swr'
import { getSupplies, urlSupply } from '../../services/supply.services'
export default function TableComponent() {
    const {data: supplies, isLoading, isValidating,error} = useSWR(urlSupply, getSupplies)
    return (
      <div>
        <DataTable columns={columns} data={supplies || []} isLoading={isLoading} error={error}/>
      </div>
  )
}