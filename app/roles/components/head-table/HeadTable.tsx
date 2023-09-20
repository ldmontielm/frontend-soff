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
import { createRole, getRole } from "@/app/roles/services/roles.services"
import { createPermissionRole } from "../../models/roles.models"
import { urlRoles } from "@/app/roles/services/roles.services"
import { getPermissions } from "@/app/roles/services/roles.services"
import { useRouter } from "next/navigation"

const formSchema = z.object({
  name: z.string().min(2, { message: 'El nombre debe de tener mas de dos caracteres' }),
})

export default function HeadTable() {


  const [open, setOpen]= useState(false)
  const router = useRouter()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    }
  })
  const { mutate } = useSWRConfig()


function onSubmit(values: z.infer<typeof formSchema>){
    toast.promise(createRole(values),{
      loading: "La informacion esta cargando",
      success: "Usuario registrado correctamente",
      error: "El usuario no se pudo registrar"
    })
    setOpen(false)
    mutate(`${urlRoles}/get-role`)
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="default">Agregar Rol</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Agregar Role</DialogTitle>
          <DialogDescription>
          Ahora puedes registrar a un Role, recuerda que todos los campos a continuación son requeridos.
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
          <Button className="mt-4 w-full" type="submit">Registrar</Button>
          </form>
        </Form>
        <DialogFooter>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}