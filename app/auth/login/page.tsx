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

const formSchema = z.object({
    username: z.string().email({message: "Ingresa una dirección de correo electrónico válida."}),
    password: z.string()
})

interface Credentials {
    username: string
    password: string
}

const loginFetch = async (url: string, arg:Credentials) => {
    const res = await fetcherPost<Credentials>(url, arg, {
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/x-www-form-urlencoded'
        }
    })
    return res
}

export default function page() {
    const {saveSession} = useAuth()
    const routes = useRouter()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            password: ""
        },
    })
    
    async function onSubmit(values: z.infer<typeof formSchema>) {
        const res = await loginFetch('http://localhost:8000/auth/login', values)
        saveSession(res)
        routes.push('/dashboard')
    }

  return (
    <div className="flex items-center justify-center py-10">
        <div className="w-full md:w-[400px] p-4">
            <div className="space-y-3">
                <h2 className="text-2xl font-bold text-neutral-900 text-center">¡Hola, Bienvenido de Nuevo! 👋</h2>
                <p className="text-sm text-neutral-500 text-center mb-5">Es un placer tenerte de nuevo por acá, te deseo suerte con las ventas de hoy</p>
            </div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="mt-5 space-y-6">
                    <FormField
                        control={form.control}
                        name="username"
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
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Contraseña</FormLabel>
                            <FormControl>
                                <Input placeholder="Ingrese su contraseña" type="password" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="text-right">
                        <Link href='/auth/recovery-password' className="text-sm">¿Has olvidado tu <span className="font-semibold">contraseña</span>?</Link>
                    </div>
                    <Button type="submit" className="w-full">Iniciar sesión</Button>
                </form>
            </Form>
        </div>
    </div>
  )
}
