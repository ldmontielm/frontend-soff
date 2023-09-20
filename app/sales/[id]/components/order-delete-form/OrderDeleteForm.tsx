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
import { Order } from "@/app/sales/models/sale.models";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormField, Form, FormItem, FormControl } from "@/components/ui/form";
import toast from "react-hot-toast";
import { DeleteOrder, urlSales, getOrdersBySaleId } from "@/app/sales/services/sale.services";
import { useRouter } from "next/navigation";
import { useContext } from "react"
import { OrderContext } from "../../context/orders-context/orderContext"
import { OrderContextInterface } from "@/app/sales/models/sale.models"
import useSWR, {useSWRConfig} from 'swr'
const formSchema = z.object({
  id_order: z.string().optional(),
});
interface Props {
  order: Order;
  id_sale: string | string[]
}

export default function OrderDeleteForm({ order, id_sale }: Props) {
  const router = useRouter()
  const {data} = useSWR(`${urlSales}/${id_sale}/orders`, getOrdersBySaleId)
  const { mutate } = useSWRConfig()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id_order: "",
    },
  });

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
        <AlertDialogAction type="button" onClick={() => {
            DeleteOrder(order.id)
            mutate(`${urlSales}/${id_sale}/orders`)
          }} className="bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90">
          Continue
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
  );
}
