"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { fetcherPost, urlSales } from "../../services/sale.services";
import {useRouter} from "next/navigation"
import { Routes } from "@/models/routes.models";
import { useToast } from "@/components/ui/use-toast"


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
          const res = await CreateSaleFetch(urlSales)
          toast({variant: "default", title: "Venta abierta", description: "Ya hemos abierto una nueva venta."})
          router.push(`${Routes.CREATESALE}/${res.data.id}`)

        }}
      >
        Registrar venta
      </Button>
    </>
  );
}
