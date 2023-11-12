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
import { urlRoles, urlPermissionRole } from '../../services/roles.services'
import { useState } from 'react'
import { Trash } from 'lucide-react'
import { mutate } from 'swr'
import { RoutesApi } from '@/models/routes.models'
import { fetcherDelete } from '@/context/swr-context-provider/SwrContextProvider'
import { useToast } from '@/components/ui/use-toast'
import { TrashIcon } from 'lucide-react'

interface Props {
    id_role: string
}


export default function Delete({ id_role }: Props) {
    const [open, setOpen]= useState(false)
    const { toast } = useToast()
    
    const  DeleteRoleFecht = async(url:string)=>{
        const res = await fetcherDelete(url)
        mutate(`${RoutesApi.ROLES}/get-role?status=${true}`)
    }

    const  onSubmit = async(id_rol:string)=>{
        const res = await DeleteRoleFecht(`${RoutesApi.ROLES}/${id_role}/delete-role`)
        toast({variant: "default", title: "Rol Eliminado",
        description:"Se ha eliminado el rol con exito"})
        setOpen(false)
    }


    return (
        <AlertDialog open={open} onOpenChange={setOpen}>
            <AlertDialogTrigger asChild>
                <Button 
                variant="outline"
                size="icon"
                className="group hover:bg-red-500">
                <TrashIcon className="w-4 h-4 group-hover:text-white" />
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
                    <Button
                    variant='destructive'
                        onClick={() => onSubmit(id_role)}>
                            <span>Eliminar</span>
                        </Button>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

