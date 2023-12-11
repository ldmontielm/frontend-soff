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
import { Value } from "@radix-ui/react-select"
import useSWR, {useSWRConfig} from 'swr'
import { mutate } from "swr"
import { useRouter } from "next/navigation"
import { UserCre } from "../../models/users.models"
import { RoutesApi, Routes } from "@/models/routes.models"
import { updateUser } from "../../models/users.models"
import { fetcherPut} from "@/context/swr-context-provider/SwrContextProvider"
import { useToast } from "@/components/ui/use-toast"
import {PencilIcon } from "@heroicons/react/24/outline"


const formSchema = z.object({
  id:z.string(),
  name: z.string({required_error: 'El nombre es requerido'}).min(5, {message: 'El nombre debe tener al menos 5 caracteres'}).max(60, {message: 'El nombre debe tener un máximo de 60 caracteres'}).refine(value => /^[a-zA-Z\s]+$/.test(value), {message: 'El nombre debe contener solo letras y espacios, y tener al menos dos caracteres.'}),
  document_type: z.string({required_error: 'El tipo de documento es requerido', invalid_type_error: 'El tipo de documento debe contener letras'}).min(2, {message: 'El tipo de documento debe contener al menos 2 caracteres'}).max(6,{message:'No puede contener mas de 6 caracteres'}),
  document: z.string({required_error: 'El documento es requerido'}).min(8, {message: 'El número de documento debe contener al menos 8 caracteres'}).max(15,{message:'No puede contener mas de 6 caracteres'}).refine(value => /^\d+$/.test(value), {message: 'El número de identificación debe contener solo números.'}),
  phone: z.string({required_error: 'El teléfono es requerido'}).min(6,{message:'El Numero de telefono debe de tener minimo 8 caracteres'}).max(15,{message:'No puede contener mas de 10 caracteres'}).refine(value => /^\d+$/.test(value), {message: 'El campo debe contener solo números.'}),
  email: z.string({required_error: 'El correo es requerido'}).email({ message: 'El correo electrónico no es válido' }).min(6,{message:'El Numero de correo debe de tener minimo 6 caracteres'}),
  // .max(15,{message:'No puede contener mas de 60 caracteres'}),
  id_role: z.string({required_error: 'El rol es requerido'}).uuid()
})

interface Props{
  user: UserCre
  id_user: string
}


export default function UpdateTable({user, id_user}: Props) {
  
  const [open, setOpen]= useState(false)
  const router = useRouter()
  const [active, setActive] = useState(true)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id:user.id,
      name: user.name,
      document_type: user.document_type,
      document: user.document,
      phone: user.phone,
      email: user.email,
      id_role:user.role
    }
  })

  const { toast } = useToast()
  
  const CreateUserFetch = async (url: string, Value:updateUser) => {
    return await fetcherPut<updateUser>(url, Value)
}

const onSubmit = async(values: z.infer<typeof formSchema>)=>{
    values.id = user.id
    const res = await CreateUserFetch(`${RoutesApi.USERS}/update_user/${id_user}`,values)
    toast({variant: "default", title: "Usuario Actualizado",
    description:"Se ha Actualizado el usuario con exito"})
    mutate(`${RoutesApi.USERS}?status=${active}`)
    setOpen(false)
  }


const {data: role} = useSWR(`${RoutesApi.ROLES}?status=${true}`)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>  
        <Button variant='outline'><Pencil size={16} color="#6f6f6f" className="mr-2 w-full"/>Editar</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex justify-center pb-2">Editar usuario</DialogTitle>
          <DialogDescription>
          Ya puedes actualizar la información del usuario, <span className="capitalize font-semibold text-gray-600 pr-2 pl-2" >{user.name}</span>
          recuerda que todos los campos a continuación son requeridos.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}> 
            <FormField 
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre</FormLabel>
                  <FormControl>
                    <Input id="name" type="string" placeholder="" {...field} className="col-span-3" />
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
                        <SelectValue placeholder="Tipo de documento"/>
                      </SelectTrigger>
                      <SelectContent>
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
              name="document"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Numero de documento</FormLabel>
                  <FormControl>
                    <Input id="document" type="string" placeholder="" {...field} className="col-span-3" />
                  </FormControl>
                  <FormMessage />
              </FormItem>
              )}
            />
            
            <FormField 
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Numero de telefono</FormLabel>
                  <FormControl>
                    <Input id="phone" type="string" placeholder="" {...field} className="col-span-3" />
                  </FormControl>
                  <FormMessage />
              </FormItem>
              )}
            />

            <FormField 
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Correo</FormLabel>
                  <FormControl>
                    <Input id="email" type="string" placeholder="" {...field} className="col-span-3" />
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
        
            
            <DialogFooter className="">
              <Button 
              variant={"outline"}
              type="button"
              className="w-full mt-4"
              onClick={() => {
                setOpen(false)
              }}
              >Cancelar</Button>
              
              <Button className="mt-4 w-full" type="submit">Actualizar</Button>

            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}