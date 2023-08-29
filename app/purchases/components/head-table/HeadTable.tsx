"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createPurchase } from "../../services/purchase.services";
import {useRouter} from "next/navigation"
import { Routes } from "@/models/routes.models";
import { ToastAction } from "@/components/ui/toast"
import toast from "react-hot-toast";


export default function HeadTable() {
  const router = useRouter()
  return (
    <>
      <div className="w-full space-y-2 md:space-y-0 space-x-0 md:space-x-2">
        <Input
          type="email"
          placeholder="Buscar compra por campos..."
          className="w-full"
        />
      </div>
      <Button
        type="submit"
        className="w-full md:w-[180px]"
        onClick={async () => {
          const response = await createPurchase();
          if (response) {
            toast.success(`Compra #${response.id}`)
            router.push(`${Routes.CREATEPURCHASE}/${response.id}`)
          }
          if(response === null){
            toast.error("No se pudo crear la compra, vuelve a intentar.")
          }
        }}
      >
        Registrar compra
      </Button>
    </>
  );
}
