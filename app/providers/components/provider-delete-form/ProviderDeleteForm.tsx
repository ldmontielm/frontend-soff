"use client";

import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { TrashIcon } from "@heroicons/react/24/outline";
import { Provider, ProviderDelete } from "../../models/provider.models";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormField, Form, FormItem, FormControl } from "@/components/ui/form";
import toast from "react-hot-toast";
// import { deleteProvider } from "../../services/provider.services";
import { useRouter } from "next/navigation";
import { useContext } from "react"
import { useState } from 'react'
import { Routes, RoutesApi } from "@/models/routes.models";
import { fetcherDelete } from "@/context/swr-context-provider/SwrContextProvider";
import { useToast } from "@/components/ui/use-toast"
// import { urlProvider } from "../../services/provider.services";
import useSWR, { mutate, useSWRConfig } from "swr";

const DeleteProviderFetch = async (url: string) => {
  return await fetcherDelete(url)
}


// const formSchema = z.object({
//   id_provider: z.string().optional(),
// });
interface Props {
  provider: Provider;
  id_provider: string
}
export default function ProviderDeleteForm({ provider, id_provider }: Props) {
  const {data} = useSWR(`${RoutesApi.PROVIDERS}/${id_provider}`)


  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="group hover:bg-red-500"
          // onClick={() => setOpen(true)} // Abrir el diálogo de alerta al hacer clic en el botón
        >
          <TrashIcon className="w-4 h-4 group-hover:text-white" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>¿Está completamente seguro?</AlertDialogTitle>
          <AlertDialogDescription>
            Esta acción no se puede deshacer. Esto eliminará permanentemente los
            datos del proveedor <span className="font-bold">{provider.name}</span> de nuestros servidores.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel> {/* Cerrar el diálogo de alerta */}
          <AlertDialogAction type="button" onClick={async () => {
            await DeleteProviderFetch(`${RoutesApi.PROVIDERS}/delete_provider/${provider.id}`)
            mutate(`${RoutesApi.PROVIDERS}`)
          }} 
          className="bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90">
          Eliminar
        </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
