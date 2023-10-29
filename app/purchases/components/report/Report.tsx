'use client'
import React, { useState, useEffect } from 'react'
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
import useSWR from 'swr'
import { Button } from '@/components/ui/button'
import { convertDate } from '../../utils'
import { DocumentChartBarIcon } from '@heroicons/react/24/outline'
import { Purchase } from '@/app/purchases/models/purchase.models'
import { RoutesApi } from '@/models/routes.models'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { useToast } from "@/components/ui/use-toast"
import { ToastAction } from "@/components/ui/toast"

export function getCurrentDate() {
    const currentDate = new Date();
    const formatted = new Intl.DateTimeFormat(['ban', 'id']).format(currentDate)
    return formatted 
}

interface PurchaseInvoice {
  invoice_number: string
  purchase_date: string
  amount_order: number
  provider: string
  total: number
}
export default function Report() {
  const {data:purchases} = useSWR<Purchase[]>(`${RoutesApi.PURCHASES}`)
  const [currentDate, setCurrentDate] = useState('');
  const { toast } = useToast()

  useEffect(() => {
    const currentDate = getCurrentDate();
    setCurrentDate(currentDate);
  }, []);

  
  const generateReceipt = () => {
    const doc = new jsPDF()

    doc.text('REPORTE DE COMPRAS MANDISA', 15, 28).setFontSize(10);
   
    doc.text(`Fecha: ${currentDate}`, 150, 20).setFontSize(10);
    doc.text('Navarra/Bello/Antioquía', 150, 25).setFontSize(10);
    doc.text('NIT 71227771-4', 150, 30).setFontSize(10);
    doc.text('(+57) 3146486791', 150, 35)


    // Datos de la tabla de productos
    const columns = ['Factura', 'Fecha', 'Ordenes', 'Proveedor', 'Total'];
    const data:any[] = [];
    Array.isArray(purchases) && purchases.map((purchase) => {
      data.push([purchase.invoice_number, convertDate(purchase?.purchase_date), purchase.amount_order, purchase.provider, purchase.total])
    })

    // Generar la tabla de productos
    autoTable(doc, {
        theme: 'striped',
        head: [columns],
        body: data,
        startY: 50
    });

    // Guardar o mostrar el PDF (puedes personalizar esta parte según tus necesidades)
    doc.save(`reporte.pdf`);
  }

  return (
    <div>
        {/* <Button onClick={() => generateReceipt()} variant='outline' className='flex items-center w-full md:w-fit gap-2'>
            <DocumentChartBarIcon className='w-4 h-4' />
            <span>Reporte</span>
        </Button> */}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant='outline'
                className="flex items-center w-full md:w-fit gap-2"
                onClick={async () => {
                  generateReceipt()
                  toast({
                    title: "Generando reporte",
                    description: "Se ha generado un nuevo informe de compras.",
                    action: (
                  <ToastAction altText="Goto schedule to undo">OK</ToastAction>
                  ),})}}>
                <DocumentChartBarIcon className='w-4 h-4' />
                <span>Reporte</span>
              </Button>   
          </TooltipTrigger>
          <TooltipContent className="bg-gray-500">
            <p className="text-xs font-semibold">Aquí puedes generar un informe de todas las compras.</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
  }

