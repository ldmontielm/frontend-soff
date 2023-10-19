"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { fetcherPost, urlProducts } from "../../services/products.services";
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
import { useToast } from "@/components/ui/use-toast"


const CreateProductFetch = async (url: string) => {
  return await fetcherPost(url, undefined)
}

export default function HeadTable() {
    const router = useRouter()
    const { toast } = useToast()
    return (
      <>
      <Button
        type="submit"
        className="w-full md:w-[180px]"
        onClick={async () => {
          const res = await CreateProductFetch(urlProducts)
          toast({variant: "default", title: "Registrando producto", description: "Ahora puedes registrar un producto."})
          router.push(`${Routes.CREATEPRODUCT}/${res.data.id}`)
          // if (response) {
          //   toast.success(`Registrando producto`)
          //   router.push(`${Routes.CREATEPRODUCT}/${response.id}`)
          // }
          // if(response === null){
          //   toast.error("No se pudo crear el producto, vuelve a intentar.")
          // }
        }}
      >
        Registrar producto
      </Button>   
      </>
    );
}

