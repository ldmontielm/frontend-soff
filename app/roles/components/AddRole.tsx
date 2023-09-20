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
import { getPermissions, createRole, getRoles } from '@/app/sales/services/sale.services';
const steps = [
  {
    label: 'Select campaign settings',
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: 'Create an ad group',
    description:
      'An ad group contains one or more ads which target a shared set of keywords.',
  },
  {
    label: 'Create an ad',
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
];

export default function AddRole() {
  const {data:permissions} = useSWR('http://localhost:8000/permission/get-permision', getPermissions)
  const {data:roles} = useSWR('http://localhost:8000/role/get-role', getRoles)
  const [activeStep, setActiveStep] = useState(0);
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
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Crear rol</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you sure absolutely sure?</DialogTitle>
          </DialogHeader>
          <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        <Step>
          <StepLabel>Crear Rol</StepLabel>
          <StepContent>
            <Input type="email" placeholder="Email" onChange={(e) => setRolname(e.target.value)}/>
            <Box sx={{ mb: 2 }} className="mt-2">
              <div>
                <Button
                  disabled={rolename === ""}
                  variant='outline'
                  onClick={handleNext}
                  size='sm'
                >
                  Continue
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
            <div>
              <Button
                disabled={assingPermissions.length === 0}
                variant='outline'
                onClick={() => {
                  toast.promise(createRole(rolename, assingPermissions), {
                    success: "Rol agregado",
                    error: "No se pudo agregar el rol",
                    loading: "Agregando rol"
                  })
                  mutate('http://localhost:8000/role/get-role')
                }}
                size='sm'
              >
                Finalizar
              </Button>
            </div>
          </Box>
        </Step>
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} size='sm'>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
        </DialogContent>
      </Dialog>
    </div>
  )
}
