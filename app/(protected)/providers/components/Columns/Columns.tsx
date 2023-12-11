'use client'

import {ColumnDef} from "@tanstack/react-table"
import { Provider } from "../../models/provider.models"
import { Badge } from "@/components/ui/badge"
import ProviderDeleteForm from '../provider-delete-form/ProviderDeleteForm'
import ProviderUpdateForm from '../provider-update-form/ProviderUpdateForm'
import DisableProvider from "../disable-provider/DisableProvider"

import { ArrowUpDown} from "lucide-react"
import { ChevronUpDownIcon } from "@heroicons/react/24/outline"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { MoreHorizontal } from "lucide-react"
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Switch } from '@/components/ui/switch'
import { useEffect } from 'react'
import { RoutesApi } from '@/models/routes.models'
import useSWR, { mutate} from 'swr'
import { fetcherPut } from '@/context/swr-context-provider/SwrContextProvider'
import {Tooltip} from "@mui/material"
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "@/components/ui/tooltip"



export default function Statusnew(){
  const {data: providers, isLoading, error} = useSWR(RoutesApi.PROVIDERS)
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
    accessorKey: 'nit',
    header: ({ column }) => {
      return (
        <Button
        className="w-fit"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          NIT
          <ChevronUpDownIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({row}) => {
      return <div>{row.getValue('nit')}</div>
    }
  },
  {
    accessorKey: 'name',
    header: ({ column }) => {
      return (
        <Button
        className="w-fit"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nombre
          <ChevronUpDownIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({row}) => {
      return <div>{row.getValue('name')}</div>
    }
  },
  {
    accessorKey: 'company',
    header: ({ column }) => {
      return (
        <Button
        className="w-fit"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Empresa
          <ChevronUpDownIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({row}) => {
      return <div>{row.getValue('company')}</div>
    }
  },
  {
    accessorKey: 'address',
    header: ({ column }) => {
      return (
        <Button
        className="w-fit"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Dirección
          <ChevronUpDownIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({row}) => {
      return <div>{row.getValue('address')}</div>
    }
  },
  {
    accessorKey: 'date_registration',
    header: ({ column }) => {
      return (
        <Button
        className="w-fit"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Fecha
          <ChevronUpDownIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({row}) => {
      const date = new Date(row.getValue("date_registration"))
      const formatted = new Intl.DateTimeFormat(['ban', 'id']).format(date)

      return <div className="font-medium">{formatted}</div>
    }
  },
  {
    accessorKey: 'phone',
    header: ({ column }) => {
      return (
        <Button
        className="w-fit"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Teléfono
          <ChevronUpDownIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({row}) => {
      return <div>{row.getValue('phone')}</div>
    }
  },
  {
    accessorKey: 'city',
    header: ({ column }) => {
      return (
        <Button
        className="w-fit"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Ciudad
          <ChevronUpDownIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({row}) => {
      return <div>{row.getValue('city')}</div>
    }
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <div 
        className="ml-3">
          Estado
        </div>
      )
    },
    cell: ({row}) => {
      const provider = row.original;
      return <DisableProvider provider={provider}/>
    }
    },
    {
      id: "actions",
      header: "Acciones",
      cell: ({row}) => {
          const provider = row.original
          return(
              <div className="text-left">
                  {
          row.getValue("status") ? (
              <>

                  <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                      <Tooltip placement="top" title="Acciones para el proveedor" arrow>
                      <Button variant='ghost' size='icon' className="ml-2">
                          <MoreHorizontal className="h-4 w-4 " />
                      </Button>
                      </Tooltip>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="flex flex-col items-start p-2 space-y-2">
                          <DropdownMenuLabel >Acciones</DropdownMenuLabel>
                          <ProviderUpdateForm provider={provider} id_provider={provider.id} />
                          <ProviderDeleteForm provider={provider} id_provider={provider.id}/>
                      </DropdownMenuContent>
                  </DropdownMenu>
              </>
          ):
          (
              <>
              </>
          ) 
      }
      </div>
      )
    }
  }
]