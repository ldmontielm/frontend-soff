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
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { Routes } from '@/models/routes.models'
import { Provider } from '../../models/provider.models'
import { HeadTable } from '..'
import useSWR from 'swr'
import { getProviders, urlProvider } from '../../services/provider.services'

export default function TableComponent() {
    const {data: providers, isLoading, isValidating,error} = useSWR(urlProvider, getProviders)
    return (
        <div >
          <div className="w-full flex flex-wrap md:flex-nowrap items-center justify-between md:space-x-2 space-y-2 md:space-y-0 mb-5">       
            <HeadTable/>
          </div>
          {isLoading ? "Cargando información...": <></>}
          <div className='border rounded'>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nombre</TableHead>
                  <TableHead>Empresa</TableHead>
                  <TableHead>Direccion</TableHead>
                  <TableHead>Fecha_registro</TableHead>
                  <TableHead>Correo</TableHead>
                  <TableHead>Telefono</TableHead>
                  <TableHead>Ciudad</TableHead>
                  <TableHead>Estado</TableHead>
                </TableRow>

              </TableHeader>
              <TableBody>
                {Array.isArray(providers) && providers.map((provider) => (
                  <TableRow key={provider.id}>
                    <TableCell>{provider.name}</TableCell>
                    <TableCell>{provider.company}</TableCell>
                    <TableCell>{provider.address}</TableCell>
                    <TableCell>{provider.date_registration}</TableCell>
                    {/* <TableCell>{convertDate(provider.date_registration)}</TableCell> */}
                    <TableCell>{provider.email}</TableCell>
                    <TableCell>{provider.phone}</TableCell>
                    <TableCell>{provider.city}</TableCell>
                    
                    <Badge>{provider.status ? "Activo": "Inactivo"}</Badge>
                  </TableRow>

                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      )
}