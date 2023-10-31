'use client'
import React from 'react'
 
import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { fetcherPost } from "@/context/swr-context-provider/SwrContextProvider"
import { useAuth } from "@/context/auth-context/AuthContextProvider"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { setCookie } from "cookies-next"
import { useToast } from "@/components/ui/use-toast"


const formSchema = z.object({
    email: z.string({required_error: 'Por favor, completa este campo.'}).email({message: "Ingresa una dirección de correo electrónico válida."}),
})



const recoverFetch = async (url: string, email: string) => {
    const res = await fetcherPost(url, undefined, {
        headers: {
            Accept: 'application/json'
        },
        params: {
            email: email
        }
    })
    return res
}


export default function FormREcovery() {
    const {saveSession} = useAuth()
    const routes = useRouter()
    const { toast } = useToast()
    
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
        },
    })
    
    async function onSubmit(values: z.infer<typeof formSchema>) {
        const res = await recoverFetch('http://localhost:8000/auth/recover-password', values.email)
        setCookie('email', values.email)
        toast({variant: "default", title: "¡Código de confirmación enviado!", description: <p>Hemos enviado un código de confirmación al correo <span className="font-semibold">{values.email}</span></p>})
        routes.push('/auth/confirm-recover')
    }
  return (
    <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-5">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Correo</FormLabel>
                                <FormControl>
                                    <Input placeholder="Ingrese su correo" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className="w-full">Enviar Código</Button>
                        <div className="text-center">
                            <Link href='/auth/login' className="text-sm">¡Ya me acuerdo! <span className="font-semibold">Iniciar sesión</span></Link>
                        </div>
                    </form>
                </Form>
  )
}
