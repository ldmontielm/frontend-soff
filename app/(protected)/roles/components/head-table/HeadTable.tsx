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
import { Tooltip } from "@mui/material"

import { Input } from "@/components/ui/input";
// import switch
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { RoutesApi } from "@/models/routes.models";
import useSWR from "swr";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { mutate } from "swr";
import { fetcherPost } from "@/context/swr-context-provider/SwrContextProvider";

import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"
import { ArrowLeft } from "lucide-react"
import { motion } from "framer-motion"
import { Role } from "../../models/roles.models";

const AddRoleFecher = async(url:string, body: any[])=>{
    return await fetcherPost(url, body)
}

export default function  HeadTable() {
    const [formStep, setFormStep] = React.useState(0)
    const [assingPermissions, setAssingPermission] = useState<any[]>([])
    const {data:Permissions}= useSWR(`${RoutesApi.PERMISSIONS}/`)
    const {toast} = useToast()
    const [open, setOpen] = useState(false)
    const [rolenameInput, setRolenameInput] = useState("");
    const [active, setActive] = useState(true)

async function  onSubmit (){
    const res = await AddRoleFecher(`${RoutesApi.ROLES}/create_role/${rolenameInput}`, assingPermissions)
    toast({variant: "default", title: "Rol Registrado",
    description:"Se ha registrado el rol con exito"})
    setOpen(false)
    setAssingPermission([])
    setFormStep(0)
    setRolenameInput("")
    mutate(`${RoutesApi.ROLES}?status=${active}`)
}





    return (
    <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
            <Tooltip title="Agregar un nuevo rol" arrow placement="top" >
                <Button>Registrar Rol</Button>
            </Tooltip>
        </DialogTrigger>
        <DialogContent>

        <DialogHeader>
            <DialogTitle>
                Registar Rol
            </DialogTitle>
            <DialogDescription>
                Ahora puedes registrar un rol. Por favor, ten en cuenta que todos los campos a continuación son obligatorios.
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
                Array.isArray(Permissions) && Permissions.map((permission,index)=>(

                    <div key={index} className="grid grid-cols-2">
                        
                        <label>{permission.name}</label>
                        <div className="flex justify-end">
                            <Switch
                            defaultChecked={assingPermissions.includes(permission)}
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
                    disabled={assingPermissions.length === 0}
                    onClick={()=> {
                        onSubmit()
                    }}
                    className={
                        cn("mt-4 w-full",{hidden: formStep == 0,})
                    }
                    type="submit">
                        Registrar
                </Button>

                <Button className={
                    cn("mt-4 w-full",{hidden: formStep == 1,})
                } type="button" 
                // variant={"ghost"} 
                disabled={rolenameInput === ""}
                onClick={()=>{
                    
                    setFormStep(1)
                    }}>
                    Siguiente
                    <ArrowRight className="w-4 h-4 ml-2"/>
                </Button>

                <Button 
                type="button"
                onClick={()=>{
                    setFormStep(0)
                }}
                className={
                    cn("mt-4 w-full",{hidden: formStep == 0,})
                } 
                    >
                    Volver <ArrowLeft className="h-4 w-4 ml-2"/>
                </Button>
            </div>
        </DialogContent>
    </Dialog>
    );
}