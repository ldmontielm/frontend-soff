"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { fetcherPost } from "@/context/swr-context-provider/SwrContextProvider";
import {useRouter} from "next/navigation"
import { Routes } from "@/models/routes.models";
import { useToast } from "@/components/ui/use-toast"
import { RoutesApi } from "@/models/routes.models";

const CreateSaleFetch = async (url: string) => {
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
          const res = await CreateSaleFetch(RoutesApi.SALES)
          toast({variant: "default", title: "Venta abierta", description: "Ya hemos abierto una nueva venta."})
          router.push(`${Routes.CREATESALE}/${res.id}`)

        }}
      >
        Registrar venta
      </Button>
    </>
  );
}
