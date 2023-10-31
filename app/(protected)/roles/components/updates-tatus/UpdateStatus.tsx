// 'use client'
import { mutate } from 'swr'
import { Role } from '../../models/roles.models'
import { RoutesApi } from '@/models/routes.models'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { fetcherPut } from '@/context/swr-context-provider/SwrContextProvider'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { useToast } from "@/components/ui/use-toast"

interface Props{
    id_role :string,
    role:Role
}


export default function UpdateStatus({id_role, role}:Props) {

    const { toast } = useToast()

    const UpdateStatus = async(url:string, role:Role)=>{
        const res = await fetcherPut(url, role)
    }
    const onSubmit = async(id_role:string, role:Role)=>{
        if(role.name !== "Administrador" && role.name !== "Base" ){
            const res = await UpdateStatus(`${RoutesApi.ROLES}/${id_role}/status-update-role`, role)
            mutate(`${RoutesApi.ROLES}/get-role`)
        }else{
            toast({
                title: "El rol "+role.name+" es inmutable",
                description: "Este rol no permite modificaciones por parte de los usuarios.",
            })
        }

    }
        


    return (
        <TooltipProvider>
        <Tooltip>
            <TooltipTrigger asChild>
                <Button onClick={()=>onSubmit(role.id, role)} className={`bg-${role.status === true ? "green": "red"}-500 w-[20%] h-[25px]`}>{role.status === true ? "Activo": "Inactivo"}</Button>
            </TooltipTrigger>
            <TooltipContent>
            <p>Cambiar de estado</p>
            </TooltipContent>
        </Tooltip>
        </TooltipProvider>
    )
}
