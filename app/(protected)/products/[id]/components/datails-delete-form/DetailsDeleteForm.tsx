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
import { DetailsRecipe } from "../../../models/product.models";
import { fetcherDelete } from "@/context/swr-context-provider/SwrContextProvider";
import { RoutesApi } from "@/models/routes.models";
import useSWR, {mutate} from 'swr'

const DeleteDetailFetch = async (url: string) => {
  return await fetcherDelete(url)
}

interface Props {
  detail: DetailsRecipe;
  id_product: string
}

export default function DetailDeleteForm({ detail, id_product }: Props) {
  const {data} = useSWR(`${RoutesApi.PRODUCTS}/${id_product}/details`)

  return (
    <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button
        variant="outline"
        size="icon"
        className="group hover:bg-red-500"
      >
        <TrashIcon className="w-4 h-4 group-hover:text-white" />
      </Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>¿Está completamente seguro?</AlertDialogTitle>
        <AlertDialogDescription>
          Esta acción no se puede deshacer. Esto eliminará permanentemente los
          datos del detalle de nuestros servidores.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction type="button" onClick={async () => {
            const res = await DeleteDetailFetch(`${RoutesApi.PRODUCTS}/${detail.id}/delete_detail`)
            mutate(`${RoutesApi.PRODUCTS}/${id_product}/details`)
          }} 
          className="bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90">
          Eliminar
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
  );
}
