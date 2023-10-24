'use client'
import React, {ChangeEvent, useState} from 'react'
import { fetcherPost } from '@/context/swr-context-provider/SwrContextProvider'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowTrendingUpIcon, DocumentPlusIcon, DocumentIcon, PhotoIcon, XMarkIcon } from "@heroicons/react/24/outline"
import { supabase } from '../../services/supabase.services'
import useSWR, {mutate} from 'swr'
import { Button } from '@/components/ui/button'
import { VoucherConfirm } from '../../models/sale.models'
import { getValidationErrors } from '@/utilities'
import { useToast } from "@/components/ui/use-toast"
import { RoutesApi } from '@/models/routes.models'


export default function UploadFile({id}: {id:string}) {
  const [filename, setFilename] = useState("No seleccionó achivo")
  const {data: sales} = useSWR(RoutesApi.SALES)
  const [isLoading, setIsLoading] = useState(false)
  const [open, setOpen] = useState(false)
  const [file, setFile] = useState<File>()
  const { toast } = useToast()

  const ConfirmSaleFetch = async (url: string, voucherConfirm: VoucherConfirm) => {
    return await fetcherPost<VoucherConfirm>(url, voucherConfirm)
  }

  const uploadFile = (e: ChangeEvent<HTMLInputElement>) => {
    if(e.target.files !== null) {
      const objectFile = e.target.files[0] 

      if(objectFile.type.includes("image/jpeg") || objectFile.type.includes("application/pdf")){
        setFile(objectFile)
        setFilename(objectFile.name)
      }else{
        toast({variant: 'destructive', title: "No se permite este tipo de archivos", description: "Como comprobante de venta no aceptamos este tipo de archivo. Solo se permiten .pdf, .jpeg y .jpg"})
      }
    }
  }

  const handleUpload = async () => {
    if (file !== undefined)  {

      const { data, error } = await supabase.storage.from("soff-vouchers").upload(`vouchers/${file.name}`, file as File);
      
      setIsLoading(true)
      console.log(isLoading)
      if(isLoading){
        toast({variant: "destructive", title: "Subiendo comprobante...", description: "Estamos subiendo el comprobante"})
      }
        

      if(error){
        setIsLoading(false)
        console.log(isLoading)
        toast({variant: "destructive", title: getValidationErrors("Duplicate").title, description: getValidationErrors("Duplicate").message})
      }else {
        setIsLoading(false)
        console.log(isLoading)
        const { data:imageurl } = supabase.storage.from('soff-vouchers').getPublicUrl(`vouchers/${file?.name}`)
        if(!imageurl){
          toast({variant: "destructive", title: "No se obtuvo un link", description: "No pudimos obtener el link del comprobante de pago."})
        }else {
          const voucherConfirm = {
                  filename: file?.name,
                  link: imageurl.publicUrl,
                  sale_id: id
          }
          const res = await ConfirmSaleFetch(`${RoutesApi.SALES}/${id}/confirm-pending`, voucherConfirm)
          toast({variant: "default", title: "Venta confirmada", description: "Ya hemos confirmado la venta correctamente."})


          setOpen(false)
          mutate(RoutesApi.SALES)
        }
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
              <div className="flex flex-col w-full max-w-sm items-center gap-1.5 border border-2 border-dashed rounded cursor-pointer p-4 hover:border-blue-500 hover:bg-blue-100/50 group" onClick={() => document.getElementById("vurchase")?.click()}>
                  <DocumentPlusIcon className="h-10 w-10 stroke-1 group-hover:text-blue-500" />
                  <Input id="vurchase" 
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
        ) : (
          <div>
            <div className='w-full flex items-center  justify-between gap-2 p-3'>
              <div className='flex items-center gap-2'>
                {
                  file.type === 'application/pdf' ? (
                    <div className='w-10 h-10 rounded-full flex items-center justify-center bg-red-500'>
                      <DocumentIcon className='w-4 h-4 text-white' />
                    </div>
                  ) : (
                    <div className='w-10 h-10 rounded-full flex items-center justify-center bg-blue-500'>
                      <PhotoIcon className='w-4 h-4 text-white' />
                    </div>
                  )
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
        )
      }
      <Button disabled={file === undefined } onClick={() => handleUpload()}>Subir recibo</Button>
      </DialogContent>
    </Dialog>
  )
}