import React from 'react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import useSWR from 'swr'
import { useState } from 'react'
import { RoutesApi } from '@/models/routes.models'
import { Role } from '../../models/roles.models'
import { Tooltip } from "@mui/material"
interface Props {
  id_role: string
  role:Role
}

export default function PermissionModal({ id_role, role }: Props) {
  const [open, setOpen]= useState(false)
    const { data: permissionsroles, isValidating, error } = useSWR(`${RoutesApi.ROLES}/permissionrole_get/${id_role}`); 
    if (error) {
      return <p>ERROR</p>;
    }
  
  
    if (isValidating) {
      return <div>Cargando...</div>;
    }
    

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
      <Tooltip title="Ver los permisos asociados a este rol" arrow placement="top">
          <Button variant="outline">Permisos</Button>
        </Tooltip>

      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className='flex justify-center items-center'>Permisos</AlertDialogTitle>
          <AlertDialogDescription>
            A continuación, se presentan los permisos relacionados con el rol
          </AlertDialogDescription>
            {
              Array.isArray(permissionsroles) && permissionsroles.map((permissions) => (
                <span className='flex' key={permissions.id_permission}>{permissions.id_permission}</span>
              ))
              
            }
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction className='w-full'>Volver</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

