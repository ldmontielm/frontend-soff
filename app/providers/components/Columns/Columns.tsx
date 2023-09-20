'use client'

import {ColumnDef} from "@tanstack/react-table"
import { Provider } from "../../models/provider.models"
import { Badge } from "@/components/ui/badge"
import ProviderDeleteForm from '../provider-delete-form/ProviderDeleteForm'
import ProviderUpdateForm from '../provider-update-form/ProviderUpdateForm'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { MoreHorizontal } from "lucide-react"
import SwitchDemo from "../switcht/SwichtDemo"
import useSWR from "swr"
import { useState } from "react"
import { useEffect } from "react"
import { getProviders, urlProvider } from "../../services/provider.services"
// import { UploadFile } from ".."

export default function Statusnew(){
  const {data: providers, isLoading, error} = useSWR(urlProvider, getProviders)
  const [localProviders, setLocalProviders] = useState<Provider[]>([])

  useEffect(()=>{
    if(providers){
        setLocalProviders(providers)
    }
}, [providers]);

const updateProviderStatus = (id_provider:string, newStatus:boolean) =>{
  const updateProvider = localProviders?.map((provider)=>{
      if (provider.id === id_provider){
          return {...provider, status: newStatus};
      }
      return provider
  });
  setLocalProviders(updateProvider)
}
}


export const columns: ColumnDef<Provider>[] = [
  {
    accessorKey: 'name',
    header: 'Nombre',
    cell: ({row}) => {
      return <div>{row.getValue('name')}</div>
    }
  },
  {
    accessorKey: 'company',
    header: 'Empresa',
    cell: ({row}) => {
      return <div>{row.getValue('company')}</div>
    }
  },
  {
    accessorKey: 'address',
    header: 'Dirección',
    cell: ({row}) => {
      return <div>{row.getValue('address')}</div>
    }
  },
  {
    accessorKey: 'date_registration',
    header: "Fecha",
    cell: ({row}) => {
      const date = new Date(row.getValue("date_registration"))
      const formatted = new Intl.DateTimeFormat(['ban', 'id']).format(date)

      return <div className="font-medium">{formatted}</div>
    }
  },
  {
    accessorKey: 'email',
    header: 'Correo',
    cell: ({row}) => {
      return <div>{row.getValue('email')}</div>
    }
  },
  {
    accessorKey: 'phone',
    header: 'Telefono',
    cell: ({row}) => {
      return <div>{row.getValue('phone')}</div>
    }
  },
  {
    accessorKey: 'city',
    header: 'Ciudad',
    cell: ({row}) => {
      return <div>{row.getValue('city')}</div>
    }
  },
  {
    accessorKey: "status",
    header: "Estado",
    cell: ({ row }) => {
      const provider = row.original
      return <div>
      { 
          row.getValue("status") ? (
          <>
            <Badge className="bg-green-500">Activo</Badge>
              <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                  <Button variant='ghost' size='icon' className="ml-4">
                      <MoreHorizontal className="h-4 w-4 " />
                  </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="flex flex-col">
                  <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                  <TableCell className="flex items-center gap-2 justify-end">
                <ProviderUpdateForm provider={provider} id_provider={provider.id} />
                <ProviderDeleteForm provider={provider} id_provider={provider.id}/>
                </TableCell>
                  <SwitchDemo 
                    id_provider={provider.id}
                    provider={provider}
                    onUpdateStatus={()=> Statusnew()}/>
                  </DropdownMenuContent>
              </DropdownMenu>
          </>
          )
          : (
          <>
           <Badge className="bg-red-500">Inactivo</Badge>
              <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                  <Button variant='ghost' size='icon' className="ml-2">
                      <MoreHorizontal className="h-4 w-4" />
                  </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="flex flex-col">
                  <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                  <SwitchDemo 
                      id_provider={provider.id}
                      provider={provider}
                      onUpdateStatus={()=> Statusnew()}/>
                  </DropdownMenuContent>
              </DropdownMenu>
          </>
          ) 
      }
      </div>

    },
  },
]