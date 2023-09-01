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
import useSWR from 'swr'
import { getRole, urlRole, createUser } from "../../services/users.services"
import { useRouter } from "next/navigation"

const formSchema = z.object({
  name: z.string().min(2, { message: 'El nombre debe de tener mas de dos caracteres' }),
  email: z.string().email({ message: 'El email no es valido' }),
  password: z.string(),
  // password: z.string().regex(/^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[@$!%?&#])[A-Za-z0-9@$!%?&#]{8,}$/g, {message: 'Contraseña Invalida'}),
  id_role : z.string().uuid()
})

export default function HeadTable() {
  const [open, setOpen]= useState(false)
  const router = useRouter()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      id_role: ""
    }
  })

  function onSubmit(values: z.infer<typeof formSchema>){
    console.log(values)
    toast.promise(createUser(values),{
      loading: "La informacion esta cargando",
      success: "Usuario registrado correctamente",
      error: "El usuario no se pudo registrar"
    })
    setOpen(false)
    router.push('/users')
  }
  const {data: role, isLoading, isValidating, error} = useSWR(urlRole, getRole)
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
                    <SelectValue placeholder="Select a verified email to display" />
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


          <Button type="submit">Registrar</Button>
          </form>
        </Form>

        <DialogFooter>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

{/* <div className="">
<Label htmlFor="name" className="text-right">
  Nombre
</Label>
<Input id="name" value="Pedro Duarte" className="col-span-3" />
</div> */}