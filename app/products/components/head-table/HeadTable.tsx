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
    //     <Dialog>
    //   <DialogTrigger asChild>
    //     <Button variant="outline">Edit Profile</Button>
    //   </DialogTrigger>
    //   <DialogContent className="sm:max-w-[425px]">
    //     <DialogHeader>
    //       <DialogTitle>Edit profile</DialogTitle>
    //       <DialogDescription>
    //         Make changes to your profile here. Click save when you're done.
    //       </DialogDescription>
    //     </DialogHeader>
    //     <div className="grid gap-4 py-4">
    //       <div className="grid grid-cols-4 items-center gap-4">
    //         <Label htmlFor="name" className="text-right">
    //           Name
    //         </Label>
    //         <Input id="name" value="Pedro Duarte" className="col-span-3" />
    //       </div>
    //       <div className="grid grid-cols-4 items-center gap-4">
    //         <Label htmlFor="username" className="text-right">
    //           Username
    //         </Label>
    //         <Input id="username" value="@peduarte" className="col-span-3" />
    //       </div>
    //     </div>
    //     <DialogFooter>
    //       <Button type="submit">Save changes</Button>
    //     </DialogFooter>
    //   </DialogContent>
    // </Dialog>
    )
}

