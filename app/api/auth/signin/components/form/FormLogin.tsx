"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { Checkbox } from "@/components/ui/checkbox";
import { useSearchParams } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";


const formSchema = z.object({
  username: z
    .string()
    .email({ message: "Ingresa una dirección de correo electrónico válida." }),
  password: z.string(),
});

interface Credentials {
  username: string;
  password: string;
}




export default function FormLogin() {
  const routes = useRouter();
  const [eyes, setEyes] = useState(false);
  const searchParams = useSearchParams();
  const {toast} = useToast()
  const error = searchParams.get("error");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const ExecuteException = () => {
    toast({variant: 'destructive', title: "Credenciales invalidas", description: "Las credenciales son incorrectas, intenta nuevamente."})
    routes.push('/api/auth/signin')
    return <></>
  }


  
  async function onSubmit(values: z.infer<typeof formSchema>) {
    signIn("credentials", {
      username: values.username,
      password: values.password,
    });
    routes.push("/dashboard");
  }





  return (
    <Form {...form}>
      {error === null ? <></> : <ExecuteException />}
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
              <FormControl className="flex w-full max-w-sm items-center space-x-2">
                <Input
                  placeholder="Ingrese su contraseña"
                  type={eyes ? "text" : "password"}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex items-center space-x-2">
          <Checkbox
            id="terms"
            onCheckedChange={(e) => {
              setEyes(!eyes);
            }}
          />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Mostrar contraseñas
          </label>
        </div>
        <div className="text-right">
          <Link href="/api/auth/recovery-password" className="text-sm">
            ¿Has olvidado tu <span className="font-semibold">contraseña</span>?
          </Link>
        </div>
        <Button type="submit" className="w-full">
          Iniciar sesión
        </Button>
      </form>
    </Form>
  );
}
