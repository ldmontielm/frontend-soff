"use client";

import React from "react";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { TrashIcon } from "@heroicons/react/24/outline";
import { Order } from "@/app/(protected)/sales/models/sale.models";
import { fetcherDelete } from "@/context/swr-context-provider/SwrContextProvider";
import useSWR, {mutate} from 'swr'
import { RoutesApi } from "@/models/routes.models";
import {
  Tooltip
} from "@mui/material"

const DeleteOrderFetch = async (url: string) => {
  return await fetcherDelete(url)
}

interface Props {
  order: Order;
  id_sale: string
}

export default function OrderDeleteForm({ order, id_sale }: Props) {
  const {data} = useSWR(`${RoutesApi.SALES}/${id_sale}/orders`)

  return (
    <AlertDialog>
    <AlertDialogTrigger asChild>
      <Tooltip placement="top" title="Aqui puedes eliminar la orden" arrow>
        <Button
          variant="outline"
          size="icon"
          className="group hover:bg-red-500"
        >
          <TrashIcon className="w-4 h-4 group-hover:text-white" />
        </Button>
      </Tooltip>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>¿Está completamente seguro?</AlertDialogTitle>
        <AlertDialogDescription>
          Esta acción eliminará el producto <span className="font-bold">{order.product}</span> de las ordenes en cola permanentemente.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction type="button" onClick={async () => {
            const res = await DeleteOrderFetch(`${RoutesApi.SALES}/${order.id}/delete`)
            mutate(`${RoutesApi.SALES}/${id_sale}/orders`)
          }} 
          className="bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90">
          Eliminar
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
  );
}
