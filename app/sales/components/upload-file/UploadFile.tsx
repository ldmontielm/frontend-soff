'use client'
import React, {ChangeEvent, useState} from 'react'
import { urlSales, getSales } from '../../services/sale.services'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowTrendingUpIcon, DocumentPlusIcon, DocumentIcon,XMarkIcon } from "@heroicons/react/24/outline"
import { supabase } from '../../services/supabase.services'
import { useParams } from 'next/navigation'
import useSWR, {useSWRConfig} from 'swr'
import { Progress } from "@/components/ui/progress"
import { Button } from '@/components/ui/button'

export default function UploadFile({id}: {id:string}) {
  const [filename, setFilename] = useState("No seleccionó achivo")
  const [urlImage, setUrlImage] = useState("")
  const params = useParams()
  const {data: sales} = useSWR(urlSales, getSales)
  const { mutate } = useSWRConfig()
  const [open, setOpen] = useState(false)
  const [file, setFile] = useState<File>()

  const uploadFile = (e: ChangeEvent<HTMLInputElement>) => {
    if(e.target.files !== null) {
      const objectFile = e.target.files[0] 
      setFile(objectFile)
      setFilename(objectFile.name)
    }
  }



  const handleUpload = async () => {
    if (file !== undefined)  {
      const { data, error } = await supabase.storage
        .from("soff-vouchers")
        .upload(`vouchers/${file.name}`, file as File);
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
        <div className='flex items-center px-2 cursor-default rounded hover:bg-neutral-100 select-none text-sm py-1.5 transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50' onClick={() => setOpen(true)}>
          <ArrowTrendingUpIcon className="w-4 h-4 mr-2"/> Confirmar pedido
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Confirmar pedido</DialogTitle>
        <DialogDescription>
          Por favor, para marcar el pedido necesitas subir el comprobante de pago.
        </DialogDescription>
      </DialogHeader>
      {
        file === undefined ? (
        <div className="grid gap-4 py-4">
              <div 
              className="flex flex-col w-full max-w-sm items-center gap-1.5 border border-2 border-dashed rounded cursor-pointer p-4 hover:border-blue-500 hover:bg-blue-100/50 group"
              onClick={() => document.getElementById("vurchase")?.click()}>
                <DocumentPlusIcon className="h-10 w-10 stroke-1 group-hover:text-blue-500" />
                <Input 
                  id="vurchase" 
                  onChange={(e) => {
                    uploadFile(e); // 👈 this will trigger when user selects the file.
                  }}
                  className="border-none hidden shadow-none" 
                  type="file"
                  accept=".pdf, image/*"
                  />
                <Label className='group-hover:text-blue-500'>Subir comprobante</Label>
              </div>
        </div>
        ) : <></>
      }
      {file !== undefined ? (
        <div>
          <div className='w-full flex items-center  justify-between gap-2 p-3'>
            <div className='flex items-center gap-2'>
              {
                file.type === 'application/pdf' ? (
                  <div className='w-10 h-10 rounded-full flex items-center justify-center bg-red-500'>
                    <DocumentIcon className='w-4 h-4 text-white' />
                  </div>
                ) : ""
              }
              <div className='flex flex-col'>
                <p className='text-[12px] font-semibold text-gray-700'>{file.name}</p>
                <p className='text-[12px] font-medium text-gray-400'>Tamaño {((file.size / 1024) / 1024).toFixed(3)} MB</p>
              </div>
            </div>
            <Button size='icon' variant='ghost' onClick={() => {
              setFile(undefined)
              setFilename("")
            }}>
              <XMarkIcon className='w-4 h-4' />
            </Button>
          </div>
        </div>
      ): <></> }
      <Button disabled={file === undefined } onClick={() => handleUpload()}>Subir recibo</Button>
      </DialogContent>
    </Dialog>
  )
}