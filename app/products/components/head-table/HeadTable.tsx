"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { fetcherPost } from "@/context/swr-context-provider/SwrContextProvider";
import { Routes } from "@/models/routes.models";
import {useRouter} from "next/navigation"
import { useToast } from "@/components/ui/use-toast"
import { RoutesApi } from "@/models/routes.models";

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
          const res = await CreateProductFetch(`${RoutesApi.PRODUCTS}/add_products`)
          toast({variant: "default", title: "Registrando producto", description: "Ahora puedes registrar un producto."})
          router.push(`${Routes.CREATEPRODUCT}/${res.id}`)
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

