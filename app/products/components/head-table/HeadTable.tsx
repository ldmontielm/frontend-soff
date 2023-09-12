"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { createProduct } from "../../services/products.services";
import { Routes } from "@/models/routes.models";
import toast from "react-hot-toast";
import {useRouter} from "next/navigation"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function HeadTable() {
    const router = useRouter()
    return (
      <>
      <Button
        type="submit"
        className="w-full md:w-[180px]"
        onClick={async () => {
          const response = await createProduct();
          if (response) {
            toast.success(`Producto #${response.id}`)
            router.push(`${Routes.CREATEPRODUCT}/${response.id}`)
          }
          if(response === null){
            toast.error("No se pudo crear el producto, vuelve a intentar.")
          }
        }}
      >
        Registrar producto
      </Button>   
      </>
    );
}

