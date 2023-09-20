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
import { Provider } from "../../models/provider.models";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormField, Form, FormItem, FormControl } from "@/components/ui/form";
import toast from "react-hot-toast";
import { deleteProvider } from "../../services/provider.services";
// import { DeleteOrder } from "@/app/sales/services/sale.services";
import { useRouter } from "next/navigation";
import { useContext } from "react"
import { useState } from 'react'
// import { OrderContext } from "../../context/orders-context/orderContext"
import { urlProvider } from "../../services/provider.services";
import useSWR, { mutate, useSWRConfig } from "swr";

const formSchema = z.object({
  id_provider: z.string().optional(),
});
interface Props {
  provider: Provider;
  id_provider: string
}

export default function ProviderDeleteForm({ provider, id_provider }: Props) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
    id_provider: "",
    },
  });
  const { mutate } = useSWRConfig();

  // Manejar la eliminación del proveedor
  const handleDeleteProvider = async () => {
    try {
      // Lógica para eliminar el proveedor (llama a deleteProvider correctamente)
      await deleteProvider(provider.id);

      // Actualizar la lista de proveedores después de eliminar con éxito
      mutate(urlProvider);

      toast.success("Proveedor eliminado correctamente");
      // Cerrar el diálogo de alerta después de eliminar
      setOpen(false);
    } catch (error) {
      // Manejar errores en caso de fallo en la eliminación
      toast.error("Error al eliminar el proveedor.");
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="group hover:bg-red-500"
          onClick={() => setOpen(true)} // Abrir el diálogo de alerta al hacer clic en el botón
        >
          <TrashIcon className="w-4 h-4 group-hover:text-white" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>¿Está completamente seguro?</AlertDialogTitle>
          <AlertDialogDescription>
            Esta acción no se puede deshacer. Esto eliminará permanentemente los
            datos del proveedor de nuestros servidores.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => setOpen(false)}>Cancelar</AlertDialogCancel> {/* Cerrar el diálogo de alerta */}
          <AlertDialogAction
            type="button"
            onClick={handleDeleteProvider} // Llamar a la función de eliminación
            className="bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90"
          >
            Continuar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
