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
import { deleteRole } from '../../services/roles.services'
import toast from 'react-hot-toast'
// import { mutate } from 'swr'
import { Trash } from 'lucide-react'
import { describe } from 'node:test'
import { useSWRConfig } from 'swr'
interface Props {
    id_role: string
}


export default function Delete({ id_role }: Props) {
    const [open, setOpen]= useState(false)
    const { mutate } = useSWRConfig()



    return (
        <AlertDialog open={open} onOpenChange={setOpen}>
            <AlertDialogTrigger asChild>
                <Button variant="outline">
                    <Trash /><span>Eliminar</span>
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle className='flex justify-left items-center'>¿Estas seguro de eliminar este rol?</AlertDialogTitle>
                    <AlertDialogDescription>
                    ¿Estás seguro de que deseas eliminar este rol? Esta acción no se puede deshacer.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    {/* <AlertDialogAction>Continue</AlertDialogAction> */}
                    <Button
                    variant='destructive'
                        onClick={() => {
                            toast.promise(deleteRole(id_role), {
                                success: "Rol eliminado",
                                error: "No se pudo eliminar el rol",
                                loading: "Eliminando rol"
                            })
                            setOpen(false)
                            mutate(`${urlRoles}/get-role`)
                        }}>
                            <span>Eliminar</span>
                        </Button>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

