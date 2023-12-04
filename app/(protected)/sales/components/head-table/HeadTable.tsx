"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { fetcherPost } from "@/context/swr-context-provider/SwrContextProvider";
import {useRouter} from "next/navigation"
import { Routes } from "@/models/routes.models";
import { useToast } from "@/components/ui/use-toast"
import { RoutesApi } from "@/models/routes.models";
import { ToastAction } from "@/components/ui/toast";
import {
  Tooltip
} from "@mui/material"

const CreateSaleFetch = async (url: string) => {
  return await fetcherPost(url)
}

export default function HeadTable() {
  const router = useRouter()
  const { toast } = useToast()

  return (
    <>
      <Tooltip placement="top" title="Aqui podrás registrar ventas nuevas" arrow>
        <Button
          type="submit"
          className="w-full md:w-[180px]"
          onClick={async () => {
            const res = await CreateSaleFetch(RoutesApi.SALES)
            toast({
              title: "Venta abierta",
              description: "Ya hemos creado una nueva venta",
              action: (
            <ToastAction altText="Goto schedule to undo">OK</ToastAction>
              ),
            })
            router.push(`${Routes.CREATESALE}/${res.id}`)
          }}
        >
          Registrar venta
        </Button>
      </Tooltip>
    </>
  );
}
