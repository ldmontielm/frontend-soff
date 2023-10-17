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
import { urlRoles, urlPermissionRole } from '../../services/roles.services'
import axios from 'axios'
import { getRole } from '../../services/roles.services'
import { getPermissionRole } from '../../services/roles.services'
import { useState } from 'react'

interface Props {
  id_role: string
}

export default function PermissionModal({ id_role }: Props) {
  const [open, setOpen]= useState(false)
  const { data: permissionsroles, isValidating, error } = useSWR(`${urlPermissionRole}/${id_role}/permissionrole-get`, getPermissionRole);

  if (error) {
    return <p>No tiene permisos</p>;
  }

  if (isValidating) {
    return <div>Cargando...</div>;
  }

  return (
    <AlertDialog open={open} onOpenChange={setOpen} >
      <AlertDialogTrigger asChild>
        <Button variant="outline">Permisos</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className='flex justify-center items-center'>Permisos</AlertDialogTitle>
          <AlertDialogDescription>

            {
              Array.isArray(permissionsroles) && permissionsroles.map((permission) => (
                <h4 key={permission.id_permission}>{permission.id_permission}</h4>
              ))
            }
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction className='w-full'>Volver</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
