"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { fetcherPost } from "@/context/swr-context-provider/SwrContextProvider";
import { Routes } from "@/models/routes.models";
import {useRouter} from "next/navigation"
import { useToast } from "@/components/ui/use-toast"
import { RoutesApi } from "@/models/routes.models";
import {Tooltip} from "@mui/material"

const CreateProductFetch = async (url: string) => {
  return await fetcherPost(url, undefined)
}

export default function HeadTable() {
    const router = useRouter()
    const { toast } = useToast()
    return (
      <>
          <Tooltip placement="top" title="Aquí puedes registrar un producto." arrow>
              <Button
                type="submit"
                className="w-full md:w-[180px]"
                onClick={async () => {
                  const res = await CreateProductFetch(`${RoutesApi.PRODUCTS}/add_products`)
                  toast({variant: "default", title: "Registrando producto", description: "Ahora puedes registrar un producto."})
                  router.push(`${Routes.CREATEPRODUCT}/${res.id}`)
                }}
              >
                Registrar producto
              </Button>   
        </Tooltip>
    </>
  );
}

