// 'use client'
// import React, {useState} from 'react'
// import { Button } from '@/components/ui/button'
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog"
// import Box from '@mui/material/Box';
// import Stepper from '@mui/material/Stepper';
// import Step from '@mui/material/Step';
// import StepLabel from '@mui/material/StepLabel';
// import StepContent from '@mui/material/StepContent';
// import Paper from '@mui/material/Paper';
// import Typography from '@mui/material/Typography';
// import { Input } from "@/components/ui/input"
// import { Switch } from '@/components/ui/switch';
// import useSWR, {useSWRConfig} from 'swr';
// import toast from 'react-hot-toast';
// import { getPermissions } from '@/app/permissions/services/permissions';
// import { getRole, urlRoles,UpdateRoles} from '../../services/roles.services';
// import { createRole } from '../../models/roles.models';

// interface Props{
//   role:createRole
//   id_role: string
// }

// export default function UpdateTable({role, id_role}: Props) {

//   const {data:permissions} = useSWR('http://localhost:8000/permission/get-permision', getPermissions)
//   const {data:roles} = useSWR('http://localhost:8000/role/get-role', getRole)
//   const [activeStep, setActiveStep] = useState(0);
//   const [open, setOpen]= useState(false)
//   const { mutate } = useSWRConfig()
//   const [rolename, setRolname] = useState(id_role)
//   const [assingPermissions, setAssingPermission] = useState<any[]>([])
//   const [rolenameInput, setRolenameInput] = useState("");

//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handleReset = () => {
//     setActiveStep(0);
//   };

//   return (
//     <div>
//       <Dialog open={open} onOpenChange={setOpen}>
//         <DialogTrigger asChild>
//           <Button variant="default">Registrar rol</Button>
//         </DialogTrigger>
//         <DialogContent>

//           <DialogHeader>
//             <DialogTitle>Registrar Rol</DialogTitle>
//           </DialogHeader>
//           <Box sx={{ maxWidth: 400 }}>
//       <Stepper activeStep={activeStep} orientation="vertical">
//         <Step>
//           <StepLabel>Nombre rol</StepLabel>
//           <StepContent>
//             <Input placeholder="Nombre " value={rolenameInput} onChange={(e) => setRolenameInput(e.target.value)}/>
//             <Box sx={{ mb: 2 }} className="mt-2">
//               <div>
//                 <Button
//                   disabled={rolenameInput === ""}
//                   variant="default"
//                   onClick={() => {
//                     setRolname(rolenameInput);
//                     handleNext();
//                   }}
//                   size="sm"
//                 >
//                   Siguiente
//                 </Button>
//               </div>
//             </Box>
//           </StepContent>
//         </Step>
//         <Step>
//           <StepLabel>Asignar Permisos</StepLabel>
//           <StepContent>
//             <div>
//               {
//                 Array.isArray(permissions) && permissions.map((permission) => (
//                   <div key={permission.id}>
//                     <Switch onCheckedChange={(e) => {
//                       if(e === true){
//                         setAssingPermission([...assingPermissions, {
//                           id_permission: permission.id
//                         }])
//                       }else{
//                         let listaNewPermissions = assingPermissions.filter((id) => id.id_permission !== permission.id)
//                         setAssingPermission(listaNewPermissions)
//                       }
//                       }} />
//                     <label htmlFor="">{permission.name}</label>
//                   </div>
//                 ))
//               }
//             </div>
//           <Box sx={{ mb: 2 }}>
//             <div className='flex justify-center items-center w-full mt-4'>
//               <Button
//               className='w-full m-2'
//                 disabled={assingPermissions.length === 0}
//                 variant='default'
//                 onClick={() => {
//                   toast.promise(UpdateRoles(rolename, assingPermissions), {
//                     success: "Rol agregado",
//                     error: "No se pudo agregar el rol",
//                     loading: "Agregando rol"
//                   })
//                   setOpen(false)
//                   setRolname("")
//                   setAssingPermission([])
//                   setActiveStep(0)
//                   setRolenameInput("")
//                   mutate(`${urlRoles}/get-role`)

//                 }}
//                 size='sm'
//               >
//                 Finalizar
//               </Button>

//                   <Button
//                     onClick={handleBack}
//                     className='m-2'
//                   >
//                     Volver
//                   </Button>
//             </div>
//           </Box>
//           </StepContent>
//         </Step>
//       </Stepper>
//     </Box>
//         </DialogContent>
//         {
//           open === false ? "" : ""
//         }
//       </Dialog>
//     </div>
//   )
// }