"use client";

import React from "react";
import {AlertDialog, AlertDialogAction,AlertDialogCancel,AlertDialogContent, AlertDialogDescription,AlertDialogFooter,AlertDialogHeader,AlertDialogTitle,AlertDialogTrigger,} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { TrashIcon } from "@heroicons/react/24/outline";
import { Order } from "@/app/purchases/models/purchase.models";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { fetcherDelete } from "@/context/swr-context-provider/SwrContextProvider";
import useSWR, {mutate} from 'swr'
import { RoutesApi } from "@/models/routes.models";

const DeleteOrderFetch = async (url: string) => {
  return await fetcherDelete(url)
}

interface Props {
  order: Order;
  id_purchase: string
}

export default function OrderDeleteForm({ order, id_purchase }: Props) {
  const {data} = useSWR(`${RoutesApi.PURCHASES}/${id_purchase}/orders`)

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
          datos de la orden de nuestros servidores.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction type="button" onClick={async () => {
            const res = await DeleteOrderFetch(`${RoutesApi.PURCHASES}/${order.id_order}/delete`)
            mutate(`${RoutesApi.PURCHASES}/${id_purchase}/orders`)
          }} 
          className="bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90">
          Eliminar
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
  );
}
