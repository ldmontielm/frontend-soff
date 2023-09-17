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

import toast from "react-hot-toast"
import React, {useState} from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button";
import * as z from 'zod'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Value } from "@radix-ui/react-select"
import useSWR, {useSWRConfig} from 'swr'
import { getRole } from "@/app/roles/services/roles.services"
import { urlRoles } from "@/app/roles/services/roles.services"
import {createUser, urlUser, getUsers } from "../../services/users.services"
import { useRouter } from "next/navigation"

const formSchema = z.object({
  name: z.string().min(2, { message: 'El nombre debe de tener mas de dos caracteres' }),
  document_type: z.string().min(2, { message: 'El tipo de documento debe de tener mas de dos caracteres' }),
  document: z.string().min(2, { message: 'El documento debe de tener mas de dos caracteres' }),
  phone: z.string().min(2, { message: 'El numero de telefono debe de tener mas de dos caracteres' }),
  email: z.string().email({ message: 'El email no es valido' }),
  password: z.string(),
  // password: z.string().regex(/^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[@$!%?&#])[A-Za-z0-9@$!%?&#]{8,}$/g, {message: 'Contraseña Invalida'}),
  id_role : z.string().uuid()
})

export default function HeadTable() {
  const [open, setOpen]= useState(false)
  const router = useRouter()
  const { data:user} = useSWR(`${urlUser}/get-users`, getUsers)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      document_type: "",
      document: "",
      phone: "",
      email: "",
      password: "",
      id_role: ""
    }
  })
  const { mutate } = useSWRConfig()

function onSubmit(values: z.infer<typeof formSchema>){
    toast.promise(createUser(values),{
      loading: "La informacion esta cargando",
      success: "Usuario registrado correctamente",
      error: "El usuario no se pudo registrar"
    })
    setOpen(false)
    mutate(`${urlUser}/get-users`)
  }
  const {data: role, isLoading, isValidating, error} = useSWR(`${urlRoles}/get-role`, getRole)
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="default">Agregar Usuario</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Agregar Usuario</DialogTitle>
          <DialogDescription>
          Ahora puedes registrar a un usuario, recuerda que todos los campos a continuación son requeridos.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
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
                <Input placeholder="Ingrese el tipo de documento" {...field} />
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
              <FormLabel>Numero de telefono</FormLabel>
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
                <Input placeholder="Ingrese la contraseña" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
            )}
            />

          <FormField
            control={form.control}
            name ="password"
            render={({ field }) => (
              <FormItem>
              <FormLabel>Contraseña</FormLabel>
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


          <Button className="mt-4 w-full" type="submit">Registrar</Button>
          </form>
        </Form>

        <DialogFooter>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}