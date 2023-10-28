"use client"
 
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
import { deleteCookie, getCookie, setCookie } from "cookies-next"
import { Checkbox } from "@/components/ui/checkbox"
import { useState } from "react"
import { useToast } from "@/components/ui/use-toast"

const formSchema = z.object({
    password: z.string({required_error: 'La contraseña es requerida'}).min(8, {message: 'La contraseña debe tener al menos 8 caracteres'}).max(20,{message:'No puede contener mas de 20 caracteres'}),
    confirmpassword: z.string(),
}).refine(data => data.password === data.confirmpassword, {
    message: 'Las contraseñas no coinciden.',
    path: ['confirmpassword']
})

const recoverFetch = async (url: string, apikey: string, password: string) => {
    const res = await fetcherPost(url, {
        password: password
    }, {
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/x-www-form-urlencoded'
        },
        params: {
            apikey: apikey
        }
    })
    return res
}


export default function page() {
    const {saveSession} = useAuth()
    const routes = useRouter()
    const [eyes, setEyes] = useState(false)
    const { toast } = useToast()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            password: "",
            confirmpassword: ''
        },
    })
    
    async function onSubmit(values: z.infer<typeof formSchema>) {
        const apikey =  getCookie('apikey')
        const res = await recoverFetch('http://localhost:8000/auth/change-password', apikey!, values.password)
        deleteCookie('apikey')
        toast({variant: "default", title: "¡Contraseña cambiada con éxito!", description: `Dentro de poco nos veremos adentro.`})
        setTimeout(() => {
            routes.push('/auth/login')
        }, 5000)
    }

    return (
        <div className="flex items-center justify-center py-10">
            <div className="w-full md:w-[400px] p-4">
                <div className="space-y-3">
                    <h2 className="text-2xl font-bold text-neutral-900 text-center">¡ya estamos aquí! 💎</h2>
                    <p className="text-sm text-neutral-500 text-center mb-5">Ingresa la nueva contraseña para tu cuenta y no se te olvide verificarla.</p>
                </div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-5">
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Contraseña</FormLabel>
                                <FormControl>
                                    <Input type={`${eyes ? "text" : "password"}`} placeholder="Ingrese su nueva contraseña" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="confirmpassword"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Confirmar Contraseña</FormLabel>
                                <FormControl>
                                    <Input type={`${eyes ? "text" : "password"}`} placeholder="Verifique su nueva contraseña" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                            <div className="flex items-center space-x-2">
                                <Checkbox id="terms" onCheckedChange={(e) => {
                                    setEyes(!eyes)
                                }} />
                                <label
                                    htmlFor="terms"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    Mostrar contraseñas
                                </label>
                            </div>
                        <Button type="submit" className="w-full">Cambiar contraseña</Button>
                    </form>
                </Form>
            </div>
        </div>
    )
}
