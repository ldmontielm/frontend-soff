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
import { Supply } from "../../models/supply.models";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormField, Form, FormItem, FormControl } from "@/components/ui/form";
import toast from "react-hot-toast";

import { useToast } from "@/components/ui/use-toast"
import { Routes, RoutesApi } from "@/models/routes.models";
// import { deleteSupply } from "../../services/supply.services";
import { useRouter } from "next/navigation";
import { useContext } from "react"
import { useState } from 'react'
import { urlSupply } from "../../services/supply.services";
import useSWR, { mutate, useSWRConfig } from "swr";
import { fetcherDelete } from "@/context/swr-context-provider/SwrContextProvider";



const DeleteSupplyFetch = async (url: string) => {
  return await fetcherDelete(url)
}

// const formSchema = z.object({
//   id_supply: z.string().optional(),
// });
interface Props {
  supply: Supply;
  id_supply: string
}

export default function SupplyDeleteForm({ supply, id_supply }: Props) {
  const {data} = useSWR(`${RoutesApi.SUPPLIES}/${id_supply}`)
  const { toast } = useToast()


  // // Manejar la eliminación del proveedor
  // const handleDeleteSupply = async () => {
  //   try {
  //     // Lógica para eliminar el proveedor (llama a deleteProvider correctamente)
  //     await deleteSupply(supply.id);

  //     // Actualizar la lista de proveedores después de eliminar con éxito
  //     mutate(urlSupply);

  //     toast.success("Insumo eliminado correctamente");
  //     // Cerrar el diálogo de alerta después de eliminar
  //     setOpen(false);
  //   } catch (error) {
  //     // Manejar errores en caso de fallo en la eliminación
  //     toast.error("Error al eliminar el Insumo.");
  //   }
  // };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="ghost"
          className="w-full"
        >
          <TrashIcon className="w-4 h-4 mr-2 group-hover:text-white" />
          <span className="mr-4">Eliminar</span>
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>¿Está completamente seguro?</AlertDialogTitle>
          <AlertDialogDescription>
            Esta acción no se puede deshacer. Esto eliminará permanentemente los
            datos del insumo <span className="font-bold">{supply.name}</span> de nuestros servidores.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel> {/* Cerrar el diálogo de alerta */}
          <AlertDialogAction type="button" onClick={async () => {
            await DeleteSupplyFetch(`${RoutesApi.SUPPLIES}/delete_supply/${id_supply}`)
            toast({variant: 'default', title: "Insumo eliminado correctamente", description: "Se ha eliminado correctamente el insumo."})
            mutate(`${RoutesApi.SUPPLIES}?status=${true}`)

          }} 
          className="bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90">
          Eliminar
        </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}