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
// import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Input } from "@/components/ui/input"
import { Switch } from '@/components/ui/switch';
import useSWR, {useSWRConfig} from 'swr';
import toast from 'react-hot-toast';
import { getPermissions } from '@/app/permissions/services/permissions';
import { createRole, getRole, urlRoles} from '../../services/roles.services';

export default function AddRole() {
  const {data:permissions} = useSWR('http://localhost:8000/permission/get-permision', getPermissions)
  const {data:roles} = useSWR('http://localhost:8000/role/get-role', getRole)
  const [activeStep, setActiveStep] = useState(0);
  const [open, setOpen]= useState(false)
  const [rolename, setRolname] = useState("")
  const [assingPermissions, setAssingPermission] = useState<any[]>([])
  const {mutate} = useSWRConfig()
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="default">Registrar rol</Button>
        </DialogTrigger>
        <DialogContent>
          
          <DialogHeader>
            <DialogTitle>Registrar Rol</DialogTitle>
          </DialogHeader>
          <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        <Step>
          <StepLabel>Nombre rol</StepLabel>
          <StepContent>
            <Input type="email" placeholder="Nombre " onChange={(e) => setRolname(e.target.value)}/>
            <Box sx={{ mb: 2 }} className="mt-2">
              <div>
                <Button
                  disabled={rolename === ""}
                  variant='default'
                  onClick={handleNext}
                  size='sm'
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
                Array.isArray(permissions) && permissions.map((permission) => (
                  <div key={permission.id}>
                    <Switch onCheckedChange={(e) => {
                      if(e === true){
                        setAssingPermission([...assingPermissions, {
                          id_permission: permission.id
                        }])
                      }else{
                        let listaNewPermissions = assingPermissions.filter((id) => id.id_permission !== permission.id)
                        setAssingPermission(listaNewPermissions)
                        // setAssingPermission()
                      }
                      // e ? setAssingPermission([...assingPermissions, permission.id]) : setAssingPermission([assingPermissions.filter(permission  => permission !== permission.id)])
                      }} />
                    <label htmlFor="">{permission.name}</label>
                  </div>
                ))
              }
            </div>
          </StepContent>
          <Box sx={{ mb: 2 }}>
            <div className='flex justify-center items-center w-full'>
              <Button
              className=' w-[80%]'
                disabled={assingPermissions.length === 0}
                variant='default'
                onClick={() => {
                  toast.promise(createRole(rolename, assingPermissions), {
                    success: "Rol agregado",
                    error: "No se pudo agregar el rol",
                    loading: "Agregando rol"
                  })
                  setOpen(false)
                  setRolname("")
                  setAssingPermission([])
                  setActiveStep(0)
                  mutate(`${urlRoles}/get-role`)

                }}
                size='sm'
              >
                Finalizar
              </Button>
            </div>
          </Box>
        </Step>
      </Stepper>
    </Box>
        </DialogContent>
      </Dialog>
    </div>
  )
}