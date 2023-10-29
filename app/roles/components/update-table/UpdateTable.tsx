'use client'
import React, {useState} from 'react'
import { Button } from '@/components/ui/button'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Input } from "@/components/ui/input"
import { Switch } from '@/components/ui/switch';
import useSWR, {useSWRConfig} from 'swr';
import toast from 'react-hot-toast';
import { getPermissions } from '@/app/permissions/services/permissions';
import { getRole, urlRoles,UpdateRoles} from '../../services/roles.services';
import { createRole } from '../../models/roles.models';
import { Role } from '../../models/roles.models';
import { RoutesApi } from '@/models/routes.models';
import { fetcherPut } from '@/context/swr-context-provider/SwrContextProvider';
import { any, array } from 'zod';
import { mutate } from 'swr';
import { useToast } from '@/components/ui/use-toast';
import { Pencil } from 'lucide-react';



interface Props{
    id_role:string
    role:Role
}

export function UpdateTable({id_role, role}:Props) {
    const { data: permissionsroles, isValidating, error } = useSWR(`${RoutesApi.ROLES}/${id_role}/permissionrole-get`); 
    const {data:permissions} = useSWR(`${RoutesApi.PERMISSIONS}/get-permision`)
    const [activeStep, setActiveStep] = useState(0);
    const [open, setOpen]= useState(false)
    const [rolename, setRolname] = useState("")
    const [assingPermissions, setAssingPermission] = useState<any[]>([])
    const [rolenameInput, setRolenameInput] = useState(role.name);
    const { toast } = useToast()


    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
};

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
};

    const handleReset = () => {
        setActiveStep(0);
};


    const UpdateRolesFetch = async(url: string, assingPermissions: {})=>{
        return await fetcherPut<any>(url, assingPermissions)
}


    const onSubmit = async(role:any, rolename:string ,assingPermissions: any[])=>{
        const datos={
            "name": rolename,
            "permissions": assingPermissions
        }
        
    id_role = role.id
    const res = await UpdateRolesFetch(`${RoutesApi.ROLES}/update_role/${id_role}`, datos)
    toast({variant: "default", title: "Rol Editado",
    description:"Se ha Editado el rol con exito"})
    setOpen(false)
    mutate(`${RoutesApi.USERS}`)
    setOpen(false)
    setRolname("")
    setAssingPermission([])
    setActiveStep(0)
    setRolenameInput("")
    mutate(`${RoutesApi.ROLES}/get-role`)
}

return (
    <div>
    <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
        <Button variant="outline" size='icon'><Pencil className="w-4 h-4"/></Button>
        </DialogTrigger>
        <DialogContent>

        <DialogHeader>
            <DialogTitle>Editar Rol</DialogTitle>
        </DialogHeader>
        <Box sx={{ maxWidth: 400 }}>
    <Stepper activeStep={activeStep} orientation="vertical">
        <Step>
        <StepLabel>Nombre rol</StepLabel>
        <StepContent>
            <Input placeholder="Nombre " value={rolenameInput} onChange={(e) => setRolenameInput(e.target.value)}/>
            <Box sx={{ mb: 2 }} className="mt-2">
            <div>
                <Button
                disabled={rolenameInput === ""}
                variant="default"
                onClick={() => {
                    setRolname(rolenameInput);
                    handleNext();
                }}
                size="sm"
                >
                Siguiente
                </Button>
            </div>
            </Box>
        </StepContent>
        </Step>
        <Step>
        <StepLabel>Asignar Permisos</StepLabel>
        <StepContent>
            <div>
            {
                
                // Array.isArray(permissions) && permissions.map((permission) => ())
                Array.isArray(permissions) && Array.isArray(permissionsroles) && permissions.map((permission) => (
                <div key={permission.id}>
                    <Switch onCheckedChange={(e) => {
                    if(e === true){
                        setAssingPermission([...assingPermissions, {
                        id_permission: permission.id
                        }])
                        console.log(permissionsroles)
                        // console.log(permission.id_permission)
                    }else{
                        let listaNewPermissions = assingPermissions.filter((id) => id.id_permission !== permission.id)
                        setAssingPermission(listaNewPermissions)
                    }
                    }} />
                    <label htmlFor="">{permission.name}</label>
                </div>
                ))
                }</div>
        <Box sx={{ mb: 2 }}>
            <div className='flex justify-center items-center w-full mt-4'>
            <Button
            className='w-full m-2'
                disabled={assingPermissions.length === 0}
                variant='default'
                onClick={() => onSubmit(role, rolenameInput, assingPermissions)}
                size='sm'
            >
                Finalizar
            </Button>

                <Button
                    onClick={handleBack}
                    className='m-2'
                >
                    Volver
                </Button>
            </div>
        </Box>
        </StepContent>
        </Step>
    </Stepper>
    </Box>
        </DialogContent>
        {
        open === false ? "" : ""
        }
    </Dialog>
    </div>
    )
}
