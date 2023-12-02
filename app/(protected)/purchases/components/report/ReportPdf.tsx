'use client'
import React, { useState, useEffect } from 'react'
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
import useSWR from 'swr'
import { Button } from '@/components/ui/button'
import { convertDate } from '../../utils'
import { NewspaperIcon } from '@heroicons/react/24/outline'
import { Purchase } from '@/app/(protected)/purchases/models/purchase.models'
import { RoutesApi } from '@/models/routes.models'
import {
  Tooltip
} from "@mui/material"
import { useToast } from "@/components/ui/use-toast"

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
export default function ReportPdf() {
  const {data:purchases} = useSWR<Purchase[]>(`${RoutesApi.PURCHASES}`)
  const [currentDate, setCurrentDate] = useState('');
  const { toast } = useToast()

  useEffect(() => {
    const currentDate = getCurrentDate();
    setCurrentDate(currentDate);
  }, []);

  
  const generateReceipt = () => {
    const doc = new jsPDF()

    doc.text('REPORTE DE COMPRAS MANDISA', 60, 20)
    doc.setFontSize(10)
    doc.text('FECHA:', 15, 35)
    doc.text(currentDate, 30, 35)
    doc.text('UBICACIÓN: NAVARRA/BELLO', 15, 40)
    doc.text('NIT: 71227771-4', 130, 35)
    doc.text('CONTACTO:', 130, 40)
    doc.text('3146486791', 154, 40)


    // Datos de la tabla de productos
    const columns = ['Factura', 'Fecha', 'Ordenes', 'Proveedor', 'Total'];
    const data:any[] = [];
    Array.isArray(purchases) && purchases.map((purchase) => {
      data.push([purchase.invoice_number, convertDate(purchase?.purchase_date), purchase.amount_order, purchase.provider, purchase.total.toLocaleString()])
    })

    // Generar la tabla de productos
    autoTable(doc, {
        theme: 'striped',
        head: [columns],
        body: data,
        startY: 50
    });

    // Guardar o mostrar el PDF (puedes personalizar esta parte según tus necesidades)
    doc.save(`reporte${currentDate}.pdf`);
  }

  return (
    <div>
        <Tooltip placement="top" title="Se generará un reporte en pdf." arrow>
          <Button
            variant='outline'
            className="flex items-center w-full md:w-full gap-2"
            onClick={async () => {
              generateReceipt()
              toast({variant: 'default',title: "Generando reporte pdf",description: "Se ha generado un nuevo informe de compras.",})}}>
            <NewspaperIcon className='w-4 h-4'/>
            <span>Generar en PDF</span>
          </Button>
        </Tooltip>
    </div>
  )
  }