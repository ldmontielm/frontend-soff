'use client'
import React, {ChangeEvent, useState} from 'react'
import { urlSales, getSales } from '../../services/sale.services'
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
import { ArrowTrendingUpIcon, DocumentPlusIcon } from "@heroicons/react/24/outline"
import { Button } from '@/components/ui/button'
import { supabase } from '../../services/supabase.services'
import { useParams } from 'next/navigation'
import useSWR, {useSWRConfig} from 'swr'

export default function UploadFile({id}: {id:string}) {
  const [filename, setFilename] = useState("No seleccionó achivo")
  const [urlImage, setUrlImage] = useState("")
  const params = useParams()
  const {data: sales} = useSWR(urlSales, getSales)
  const { mutate } = useSWRConfig()
  const [open, setOpen] = useState(false)



  const handleUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files)  {
      let file = e.target.files[0]
      setFilename(file?.name)
      const { data, error } = await supabase.storage
        .from("soff-vouchers")
        .upload(`vouchers/${file?.name}`, file as File);
        if (data) {
          const { data:imageurl } = supabase
            .storage
            .from('soff-vouchers')
            .getPublicUrl(`vouchers/${file?.name}`)
          if(!imageurl){console.log("No hay url")}
          else{
               setUrlImage(imageurl.publicUrl)
            await fetch(`${urlSales}/${id}/confirm-pending`, {
              method: 'POST',
              body: JSON.stringify({
                filename: file?.name,
                link: imageurl.publicUrl,
                sale_id: id
              }),
              headers: {
                'Content-Type': 'application/json'
              }
            }).then((response) => response.json())
            .then((data) => console.log(data))
            setOpen(false)
            mutate(urlSales)
          }
        } else if (error) {
          console.log(error);
        }
    }
  };


  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant='ghost' onClick={() => setOpen(true)}>
          <ArrowTrendingUpIcon className="w-4 h-4 mr-2"/> <span>Marcar Pagada</span></Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Subir comprobante</DialogTitle>
        <DialogDescription>
          Por favor, para marcar como pedido necesitas subir el comprobante del pedido.
        </DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <Label htmlFor="vurchase">Comprobante de pago</Label>
        <div 
          className="flex flex-col w-full max-w-sm items-center gap-1.5 border border-2 border-dashed rounded cursor-pointer p-4 hover:border-blue-500"
          onClick={() => document.getElementById("vurchase")?.click()}>
          <DocumentPlusIcon className="h-10 w-10 stroke-1" />
          <Input 
            id="vurchase" 
            onChange={(e) => {
              handleUpload(e); // 👈 this will trigger when user selects the file.
            }}
            className="border-none hidden shadow-none" 
            type="file"/>
          <Label>Subir comprobante</Label>
          <p className='text-sm'>{filename}</p>
        </div>
        <p className={`p-2 border rounded border-green-500 bg-green-100/50 text-green-500 ${filename === "No seleccionó achivo" ? "hidden": ''}`}>{filename !== "No seleccionó achivo" ? "✅ Archivo Cargado": ""}</p>
        <p className={`p-2 border rounded border-green-500 bg-green-100/50 text-green-500 ${urlImage === "" ? "hidden": ''}`}>{urlImage !== "" ? "✅ Imagen subida": ""}</p>
      </div>
      </DialogContent>
    </Dialog>
  )
}
