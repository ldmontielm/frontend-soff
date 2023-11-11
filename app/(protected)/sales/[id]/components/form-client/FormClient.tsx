"use client"
 
import * as z from "zod"
import React, { useState } from "react";
import { useForm } from "react-hook-form"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea";
import { useLocalStorage } from "@/hooks";

const formSchema = z.object({
  name: z.string({required_error: 'Campo requerido'}).min(2, {message: 'El nombre debe tener más de dos carácteres.'}),
  email: z.string({required_error: 'Campo requerido'}).email({message: 'Dirección de correo invalida.'}),
  direction: z.string({required_error: 'Campo requerido'}),
  phone: z.string({required_error: 'Campo requerido'}).regex(/([3]{1})([0-2]{1})([0-9]{1})[0-9]{7}/g, {message: 'Número de teléfono incorrecto.'}).max(10, {message: 'Un número solo puedo contener 10 digitos'})
})


export default function FormClient() {
  const [open, setOpen] = useState(false)
  const {setItem} = useLocalStorage('client')
  const formSale = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      direction: '',
      phone: ''
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setItem(values)
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" onClick={() => setOpen(true)} className="w-full">Añadir información del cliente</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when youre done.
          </DialogDescription>
        </DialogHeader>
        <Form {...formSale}>
          <form onSubmit={formSale.handleSubmit(onSubmit)}>
          <div className="space-y-4">
             <FormField
               control={formSale.control}
               name="name"
               render={({ field }) => (
                 <FormItem>
                   <FormLabel>Nombre</FormLabel>
                   <FormControl>
                     <Input placeholder="nombre" {...field} />
                   </FormControl>
                   <FormMessage />
                 </FormItem>
               )}
             />
             <FormField
               control={formSale.control}
               name="email"
               render={({ field }) => (
                 <FormItem>
                   <FormLabel>Correo</FormLabel>
                   <FormControl>
                     <Input placeholder="correo" {...field} />
                   </FormControl>
                   <FormMessage />
                 </FormItem>
               )}
             />

             <FormField
               control={formSale.control}
               name="phone"
               render={({ field }) => (
                 <FormItem>
                   <FormLabel>Teléfono</FormLabel>
                   <FormControl>
                     <Input placeholder="telefono" {...field} />
                   </FormControl>
                   <FormMessage />
                 </FormItem>
               )}
             />
            <FormField
               control={formSale.control}
               name="direction"
               render={({ field }) => (
                 <FormItem>
                   <FormLabel>Dirección</FormLabel>
                   <FormControl>
                    <Textarea placeholder="Escribe aquí tu dirección" {...field} />
                   </FormControl>
                   <FormMessage />
                 </FormItem>
               )}
             />
           </div>
           <DialogFooter className="mt-2">
            <Button type="submit">Añadir cliente</Button>
            <Button variant='outline' onClick={() => setOpen(false)}>Cancelar</Button>
          </DialogFooter>
          </form>
        </Form>
       
      </DialogContent>
    </Dialog>
  );
}
