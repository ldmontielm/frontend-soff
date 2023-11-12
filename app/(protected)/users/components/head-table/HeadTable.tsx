'use client'
import {
  Dialog,
  DialogFooter,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import React, {useState} from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import * as z from 'zod'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import  useSWR from 'swr'
import { mutate } from "swr"
import { createUser } from "../../models/users.models"
import { useToast } from "@/components/ui/use-toast"
import { Routes, RoutesApi } from "@/models/routes.models";
import { fetcherPost } from "@/context/swr-context-provider/SwrContextProvider";
import toast from "react-hot-toast"
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"
import { ArrowLeft } from "lucide-react"
import { motion } from "framer-motion"
import { Tooltip } from "@mui/material"

const formSchema = z.object({
  name: z.string({required_error: 'El nombre es requerido'}).min(5, {message: 'El nombre debe tener al menos 5 caracteres'}).max(60, {message: 'El nombre debe tener un máximo de 60 caracteres'}).refine(value => /^[a-zA-Z\s]+$/.test(value), {message: 'El nombre debe contener solo letras y espacios, y tener al menos dos caracteres.'}),
  document_type: z.string({required_error: 'El tipo de documento es requerido', invalid_type_error: 'El tipo de documento debe contener letras'}).min(2, {message: 'El tipo de documento debe contener al menos 2 caracteres'}).max(6,{message:'No puede contener mas de 6 caracteres'}),
  document: z.string({required_error: 'El documento es requerido'}).min(8, {message: 'El número de documento debe contener al menos 8 caracteres'}).max(15,{message:'No puede contener mas de 6 caracteres'}).refine(value => /^\d+$/.test(value), {message: 'El número de identificación debe contener solo números.'}),
  phone: z.string({required_error: 'El teléfono es requerido'}).min(6,{message:'El Numero de telefono debe de tener minimo 8 caracteres'}).max(15,{message:'No puede contener mas de 10 caracteres'}).refine(value => /^\d+$/.test(value), {message: 'El campo debe contener solo números.'}),
  email: z.string({required_error: 'El correo es requerido'}).email({ message: 'El correo electrónico no es válido' }).min(6,{message:'El Numero de correo debe de tener minimo 6 caracteres'}),
  // .max(15,{message:'No puede contener mas de 60 caracteres'}),
  password: z.string({required_error: 'La contraseña es requerida'}).min(8, {message: 'La contraseña debe tener al menos 8 caracteres'}).max(20,{message:'No puede contener mas de 20 caracteres'}),
  confirmPassword: z.string().min(8, {message: 'La contraseña debe tener al menos 8 caracteres'}).max(20,{message:'No puede contener mas de 20 caracteres'}),
  id_role: z.string({required_error: 'El rol es requerido'}).uuid()
}).refine(data => data.password === data.confirmPassword, {
  message: 'Las contraseñas no coinciden',
  path: ['confirmPassword'], // Indicamos que el error se aplique al campo 'confirmPassword'
});


export default function HeadTable() {
  const [formStep, setFormStep] = React.useState(0)
  const [active, setActive] = useState(true)
  const {data: role} = useSWR(`${RoutesApi.ROLES}/get-role/?status=${true}`)
  const [open, setOpen]= useState(false)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      document_type: "",
      document: "",
      phone: "",
      email: "",
      password: "",
      confirmPassword:"",
      id_role: ""
    }
  })

  const { toast } = useToast()
  const CreateUserFetch = async (url: string, value:createUser) => {
    return await fetcherPost<createUser>(url, value)
}

  const onSubmit = async(values: z.infer<typeof formSchema>)=>{
    const res = await CreateUserFetch(`${RoutesApi.USERS}/post_user`,values)
    setFormStep(1)
    toast({variant: "default", title: "Usuario Registrado",
    description:"Se ha registrado el usuario con exito"})
    form.reset()
    setOpen(false)
    mutate(`${RoutesApi.USERS}/get-users/?status=${active}`)
  }
  
  return (

      <Dialog open={open} onOpenChange={setOpen} >
        <DialogTrigger asChild>
        <Tooltip title="Agregar un nuevo usuario" arrow placement="top">
            <Button>
              Registrar Usuario
            </Button>
        </Tooltip>

        </DialogTrigger>
        <DialogContent className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <DialogHeader>
            <DialogTitle>Agregar Usuario</DialogTitle>
            <DialogDescription>
            Ahora puedes registrar a un usuario, recuerda que todos los campos a continuación son requeridos.
            </DialogDescription>
          </DialogHeader>

          
          <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} 
          className=" relative space-y-3 roverflow-x-h">
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

                <FormField
                control={form.control}
                name ="name"
                render={({ field }) => (
                  <FormItem>
                  <FormLabel>Nombre</FormLabel>
                  <FormControl>
                    <Input placeholder="Ingrese el nombre" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
                )}
                />
                
                <FormField
                control={form.control}
                name ="document_type"
                render={({ field }) => (
                  <FormItem>
                  <FormLabel>Tipo de documento</FormLabel>
                  <FormControl>
                  <Select  onValueChange={field.onChange}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Tipo de documento" />
                      </SelectTrigger>
                      <SelectContent >
                        <SelectItem value="CC" >Cédula de ciudadanía</SelectItem>
                        <SelectItem value="TI">Tarjeta de identidad</SelectItem>
                        <SelectItem value="CE">Cédula de extranjería</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
                )}
                />

                <FormField
                control={form.control}
                name ="document"
                render={({ field }) => (
                  <FormItem>
                  <FormLabel>Numero de documento</FormLabel>
                  <FormControl>
                    <Input placeholder="Ingrese el numero de documento" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
                )}
                />

                <FormField
                control={form.control}
                name ="phone"
                render={({ field }) => (
                  <FormItem>
                  <FormLabel>Numero de teléfono</FormLabel>
                  <FormControl>
                    <Input placeholder="Ingrese el numero de telefono" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
                )}
                />

              <FormField
                control={form.control}
                name ="email"
                render={({ field }) => (
                  <FormItem>
                  <FormLabel>Correo</FormLabel>
                  <FormControl>
                    <Input placeholder="Ingrese el correo" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
                )}
                />
                
                <FormField
                control={form.control}
                name="id_role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Rol</FormLabel>
                    <Select onValueChange={field.onChange}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Seleciones un rol" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent placeholder="Seleciones un rol">
                        {
                        Array.isArray(role) && role.map((roles) => (
                          <SelectItem key={roles.id} value={roles.id}>{roles.name}</SelectItem>
                          ))
                        }
                        </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </motion.div>

            <motion.div className={
              cn( {
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
              <FormField
                control={form.control}
                name ="password"
                render={({ field }) => (
                  <FormItem>
                  <FormLabel>Contraseña</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Ingrese el contraseña" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
                )}
                />

              <FormField
                control={form.control}
                name ="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                  <FormLabel>Validación</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Vuelva a escribir la contraseña" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
                )}
                />
                
            </motion.div>

            <div className="flex gap-2">
              <Button className={
                cn("mt-4 w-full",{hidden: formStep == 0,})} 
                type="submit">
                Registrar
              </Button>

              <Button className={
                cn("mt-4 w-full",{hidden: formStep == 1,})
              } type="button" 
              // variant={"ghost"} 
              onClick={()=>{
                
                form.trigger(['name','document_type', 'document', 'phone','email','id_role'])

                const nameState = form.getFieldState('name')
                const document_typeState = form.getFieldState('document_type')
                const documentState = form.getFieldState('document')
                const phoneState = form.getFieldState('phone')
                const emailState = form.getFieldState('email')
                const id_roleState = form.getFieldState('id_role')

                if(!nameState.isDirty || nameState.invalid) return; 
                if(!document_typeState.isDirty || document_typeState.invalid) return; 
                if(!documentState.isDirty || documentState.invalid) return; 
                if(!phoneState.isDirty || phoneState.invalid) return; 
                if(!emailState.isDirty || emailState.invalid) return; 
                if(!id_roleState.isDirty || id_roleState.invalid) return; 


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
                cn("mt-4 w-full",{hidden: formStep == 0,})} 
                >
                Volver <ArrowLeft className="h-4 w-4 ml-2"/>
              </Button>

            </div>
            </form>
          </Form>
          <DialogFooter>
          </DialogFooter>
        </DialogContent>
      </Dialog>

  )
}
