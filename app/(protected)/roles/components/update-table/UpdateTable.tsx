"use client";
import React from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"; // import Dioalog
import { Button } from "@/components/ui/button";
// import form
import { Input } from "@/components/ui/input";
// import switch
import { Switch } from "@/components/ui/switch"
import { RoutesApi } from "@/models/routes.models";
import useSWR from "swr";
import { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import { mutate } from "swr";
import { fetcherPost, fetcherPut } from "@/context/swr-context-provider/SwrContextProvider";

import { cn } from "@/lib/utils"
import { ArrowRight, Pencil } from "lucide-react"
import { ArrowLeft } from "lucide-react"
import { motion } from "framer-motion"
import { Value } from "@radix-ui/react-select";
import { Role } from "../../models/roles.models"


interface Props{
    id_role:string,
    role:Role
}
interface Permission {
    id_permission: string;
}
interface AssingPermission {
    id_permission: string;
    // Add other properties if needed
}


export default function  UpdateTable({id_role,role}:Props) {
    const { data: permissionsroles} = useSWR<Permission[]>(`${RoutesApi.ROLES}/permissionrole_get/${id_role}`); 
    const [formStep, setFormStep] = React.useState(0)
    // const [assingPermissions, setAssingPermission] = useState<any[]>([])
    const [assingPermissions, setAssingPermission] = useState<AssingPermission[]>([]);
    const {data:Permissions}= useSWR(`${RoutesApi.PERMISSIONS}/`)
    const {toast} = useToast()
    const [open, setOpen] = useState(false)
    const [rolename, setRolname] = useState("")
    const [rolenameInput, setRolenameInput] = useState(role.name);
    const [active, setActive] = useState(true)













    const onSubmit = async(role:any, rolename:string ,assingPermissions: any[])=>{

        const datos={
            "name": rolename,
            "permissions": assingPermissions
        }
        console.log(assingPermissions)
        console.log(permissionsroles)

        id_role = role.id
        const res = await fetcherPut(`${RoutesApi.ROLES}/update_role/${id_role}`, datos)
        toast({variant: "default", title: "Rol Editado",
        description:"Se ha Editado el rol con exito"})
        setOpen(false)
        setFormStep(0)
        mutate(`${RoutesApi.ROLES}?status=${active}`)
}



    const ingresar = () => {
        // Check if permissionsroles is defined
        if (permissionsroles) {
            // Iterate over permissionsroles array
            permissionsroles.forEach(permission => {
                // Check if permission.id_permission is not already present in assingPermissions
                const isPermissionPresent = assingPermissions.some(
                    item => item.id_permission === permission.id_permission
                );

                // If not present, add it to assingPermissions
                if (!isPermissionPresent) {
                    setAssingPermission(prevPermissions => [
                        ...prevPermissions,
                        { id_permission: permission.id_permission }
                    ]);
                }
            });
        }
    };





    return (
        <Dialog  open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
            <Button variant="outline" className="border-none">
                <Pencil className="w-4 h-4"/>
                <span className="ml-4">Editar</span>
            </Button>
        </DialogTrigger>
        <DialogContent>

        <DialogHeader>
            <DialogTitle>
                Editar Rol
            </DialogTitle>
            <DialogDescription>
                Ahora puedes editar un rol. Por favor, ten en cuenta que todos los campos a continuación son obligatorios.
            </DialogDescription>
        </DialogHeader>

        
        <motion.div
        className={
            cn("space-y-3", {
                'hidden':formStep == 1,
            })}
            animate ={{
              translateX: `-${formStep * 100}%`
            }}
        
            transition={{
                ease: "easeInOut",
            }}
            
            style={{
            translateX:`-${formStep * 100}%`,
            }}

        >
            <div>
                <Input placeholder="Nombre " value={rolenameInput} onChange={(e) => setRolenameInput(e.target.value)}/>
            </div>
        </motion.div>

        <motion.div 
        className={
            cn("grid grid-cols-2 gap-2",{
            'hidden':formStep == 0,
            })}
        
            animate={{
              translateX:`${100 - formStep * 100}%`,
            }}
            style={{
              translateX:`${100 - formStep * 100}%`,
            }}
            transition={{
                ease: 'easeInOut'
            }}
        >
    
    {
                Array.isArray(Permissions) && Array.isArray(permissionsroles) && Permissions.map((permission, index) => (

                    <div key={index} className='grid grid-rows-1 grid-cols-2'>
                        <label className='flex justify-left items-center'>{permission.name}</label>
                        <div className='flex justify-end mr-4'>
                            
                            <Switch 
                            defaultChecked={permissionsroles.map((per) => per.id_permission).includes(permission.id)}
                            onCheckedChange={(e) => {
                            
                                if(e === true){
                                    setAssingPermission([...assingPermissions, {
                                        id_permission: permission.id
                                    }])
                                }else{
                                    let listaNewPermissions = assingPermissions.filter((id) => id.id_permission !== permission.id)
                                setAssingPermission(listaNewPermissions)
                                        }
                                        }}
                            />
                        </div>
                    </div>
                    ))
    }

        </motion.div>


            <div className="flex gap-2">


            <Button 
                type="button"
                variant={"outline"}
                onClick={()=>{
                    setFormStep(0)
                }}
                className={
                    cn("mt-4 w-full",{hidden: formStep == 0,})
                } 
                    >
                    <ArrowLeft className="h-4 w-4 ml-2"/>
                    Volver 
                </Button>


                
                <Button 
                    disabled={assingPermissions.length === 0}
                    onClick={()=> {
                        onSubmit(role,rolename,assingPermissions)
                    }}
                    className={
                        cn("mt-4 w-full",{hidden: formStep == 0,})
                    }
                    >
                    
                        Editar
                </Button>



            <Button
                variant={"outline"}
                className={
                    cn("mt-4 w-full",{hidden: formStep == 1,})
                } type="button" 
                onClick={() => {
                    setFormStep(0)
                    setOpen(false)
                    setRolenameInput(role.name)
                }}
                >
                Cancelar
            </Button>

                <Button className={
                    cn("mt-4 w-full",{hidden: formStep == 1,})
                } 
                type="button" 
                // variant={"ghost"} 
                onClick={()=>{
                    ingresar();
                    setRolname(rolenameInput);
                    setFormStep(1)
                    }}
                    >
                    Siguiente
                    <ArrowRight className="w-4 h-4 ml-2"/>
                </Button>

            
            </div>
        </DialogContent>
    </Dialog>
    );
}
