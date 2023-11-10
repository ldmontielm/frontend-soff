"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { fetcherPost } from "@/context/swr-context-provider/SwrContextProvider";
import {useRouter} from "next/navigation"
import { Routes } from "@/models/routes.models";
import { useToast } from "@/components/ui/use-toast"
import { ToastAction } from "@/components/ui/toast"
import { RoutesApi } from "@/models/routes.models";
import {
  Tooltip
} from "@mui/material"


const CreatePurchaseFetch = async (url:string)=>{
  return await fetcherPost(url, undefined)
}

export default function HeadTable() {
  const router = useRouter()
  const { toast } = useToast()
  return (
    <>
      <Tooltip placement="top" title="Aqui podrás registrar compras nuevas" arrow>
        <Button
          type="submit"
          className="w-full md:w-[180px]"
          onClick={async () => {
            const res = await CreatePurchaseFetch(RoutesApi.PURCHASES)
            toast({
              title: "Compra creada ",
              description: "Se ha creado una nueva compra",
              action: (
            <ToastAction altText="Goto schedule to undo">OK</ToastAction>
            ),
          })
            router.push(`${Routes.CREATEPURCHASE}/${res.id}`)
          }}
        >
          Registrar compra
        </Button>   
      </Tooltip>
    </>
  );
}
