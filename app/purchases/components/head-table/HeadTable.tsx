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
