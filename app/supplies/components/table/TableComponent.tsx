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
    // return (
    //     <div >
    //       <div className="w-full flex flex-wrap md:flex-nowrap items-center justify-between md:space-x-2 space-y-2 md:space-y-0 mb-5">       
    //         <HeadTable/>
    //       </div>
    //       {/* {isLoading ? "Cargando información...": <></>} */}
    //       <div className='border rounded'>
    //         <Table>
    //           <TableHeader>
    //             <TableRow>
    //               <TableHead>Nombre</TableHead>
    //               <TableHead>Empresa</TableHead>
    //               <TableHead>Direccion</TableHead>
    //               <TableHead>Fecha_registro</TableHead>
    //               <TableHead>Correo</TableHead>
    //               <TableHead>Telefono</TableHead>
    //               <TableHead>Ciudad</TableHead>
    //               <TableHead>Estado</TableHead>
    //               <TableHead className="text-right">Acciones</TableHead>

    //             </TableRow>

    //           </TableHeader>
    //           <TableBody>
    //           {isLoading ? "Cargando información...": <></>}
    //             {Array.isArray(providers) && providers.map((provider) => (
    //               <TableRow key={provider.id}>
    //                 <TableCell>{provider.name}</TableCell>
    //                 <TableCell>{provider.company}</TableCell>
    //                 <TableCell>{provider.address}</TableCell>
    //                 <TableCell>{provider.date_registration}</TableCell>
    //                 {/* <TableCell>{convertDate(provider.date_registration)}</TableCell> */}
    //                 <TableCell>{provider.email}</TableCell>
    //                 <TableCell>{provider.phone}</TableCell>
    //                 <TableCell>{provider.city}</TableCell>
    //                 <TableCell className="text-right"><Badge>{provider.status ? "Activo": "Inactivo"}</Badge></TableCell>
                    
    //                 <TableCell className="flex items-center gap-2 justify-end">
    //                   <ProviderUpdateForm provider={provider} />
    //                   <ProviderDeleteForm provider={provider} />
    //                 </TableCell>

                    
                    
    //               </TableRow>

    //             ))}
    //           </TableBody>
    //         </Table>
    //       </div>
    //     </div>
    //   )
    return (
      <div>
        {
          Array.isArray(supplies) && (
            <DataTable columns={columns} data={supplies}/>
          )
        }
      </div>
  )
}