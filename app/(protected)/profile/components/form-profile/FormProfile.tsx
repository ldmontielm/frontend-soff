"use client"
import React from 'react'
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from 'react-hook-form'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'
import { useAuth } from '@/context/auth-context/AuthContextProvider'


const formSchema = z.object({
    name: z.string({required_error: 'Campo requerido'}),
    document_type: z.string(),
    document: z.string(),
    phone: z.string(),
    email: z.string(),
    status: z.boolean(),
    role: z.string()
})

export default function FormProfile() {
    const {user} = useAuth()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          name: "",
          document_type: "",
          document: "",
          phone: "",
          email: user.email,
          status: true,
          role: ""
        },
      })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Nombre</FormLabel>
                            <FormControl>
                                <Input placeholder="shadcn" onBlur={field.onBlur} name={field.name} defaultValue={user.name} onChange={field.onChange} />
                            </FormControl>
                            <FormDescription>
                                This is your public display name.
                            </FormDescription>
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
                            <FormControl >
                                <Input placeholder="shadcn" onBlur={field.onBlur} name={field.name} defaultValue={user.email} onChange={field.onChange} />
                            </FormControl>
                            <FormDescription>
                                This is your public display name.
                            </FormDescription>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="document_type"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Tipo de Documento</FormLabel>
                            <FormControl >
                                <Input placeholder="shadcn" disabled onBlur={field.onBlur} name={field.name} defaultValue={user.document_type} onChange={field.onChange} />
                            </FormControl>
                            <FormDescription>
                                This is your public display name.
                            </FormDescription>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="document"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Documento</FormLabel>
                            <FormControl >
                                <Input placeholder="shadcn" disabled onBlur={field.onBlur} name={field.name} defaultValue={user.document} onChange={field.onChange} />
                            </FormControl>
                            <FormDescription>
                                This is your public display name.
                            </FormDescription>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Teléfono</FormLabel>
                            <FormControl >
                                <Input placeholder="shadcn" disabled onBlur={field.onBlur} name={field.name} defaultValue={user.phone} onChange={field.onChange} />
                            </FormControl>
                            <FormDescription>
                                This is your public display name.
                            </FormDescription>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="role"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Rol</FormLabel>
                            <FormControl >
                                <Input placeholder="shadcn" disabled onBlur={field.onBlur} name={field.name} defaultValue={user.role} onChange={field.onChange} />
                            </FormControl>
                            <FormDescription>
                                This is your public display name.
                            </FormDescription>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className='flex items-center gap-2'>
                    <Button type="submit" className='bg-green-600'>Guardar</Button>
                    <Button type="submit" variant='destructive'>Desactivar cuenta</Button>
                </div>
            </form>
        </Form>
    )
}