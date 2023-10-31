'use client'
import React from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { fetcherPost } from "@/context/swr-context-provider/SwrContextProvider";
import { useAuth } from "@/context/auth-context/AuthContextProvider";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { setCookie, getCookie, deleteCookie } from "cookies-next";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  code: z.string({ required_error: "" }),
});

interface RecoverPasswordResponse {
  apikey: string;
  id: string;
}

const formRequired = formSchema.required();

const recoverFetch = async (url: string, email: string, code: string) => {
  const res = await fetcherPost(url, undefined, {
    headers: {
      Accept: "application/json",
    },
    params: {
      email: email,
      code: code,
    },
  });
  return res;
};

export default function FormCOnfirm() {
  const { saveSession } = useAuth();
  const routes = useRouter();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formRequired>>({
    resolver: zodResolver(formRequired),
    defaultValues: {
      code: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formRequired>) {
    const email = getCookie("email");
    const res: RecoverPasswordResponse = await recoverFetch(
      "http://localhost:8000/auth/confirm-recover",
      email!,
      values.code
    );
    setCookie("apikey", res.apikey);
    deleteCookie("email");
    toast({
      variant: "default",
      title: "¡Código validado!",
      description: `Dentro de poco podrás cambiar tu contraseña.`,
    });
    routes.push("/auth/change-password");
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-5">
        <FormField
          control={form.control}
          name="code"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input required {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          Confirmar Código
        </Button>
        <div className="text-center">
          <Link href="/auth/recovery-password" className="text-sm">
            ¡No me ha llegado un código!{" "}
            <span className="font-semibold">Volver a intentar</span>
          </Link>
        </div>
      </form>
    </Form>
  );
}
