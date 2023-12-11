'use client'
import React, { useState, useEffect } from 'react'
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
import useSWR from 'swr'
import { Button } from '@/components/ui/button'
import { convertDate } from '../../utils'
import { NewspaperIcon } from '@heroicons/react/24/outline'
import { Sale } from '@/app/(protected)/sales/models/sale.models'
import { RoutesApi } from '@/models/routes.models'
import {
  Tooltip
} from "@mui/material"
import { useToast } from "@/components/ui/use-toast"
import { FileDigit } from 'lucide-react'



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
  const {data:sales} = useSWR<Sale[]>(`${RoutesApi.SALES}`)
  const [currentDate, setCurrentDate] = useState('');
  const { toast } = useToast()

  useEffect(() => {
    const currentDate = getCurrentDate();
    setCurrentDate(currentDate);
  }, []);

  
  const generateReceipt = () => {
    const doc = new jsPDF()

    doc.text('REPORTE DE VENTAS MANDISA', 60, 20)
    doc.setFontSize(10)
    doc.text('FECHA:', 15, 35)
    doc.text(currentDate, 30, 35)
    doc.text('UBICACIÓN: NAVARRA/BELLO', 15, 40)
    doc.text('NIT: 71227771-4', 130, 35)
    doc.text('CONTACTO:', 130, 40)
    doc.text('3146486791', 154, 40)


    // Datos de la tabla de productos
    const columns = ['Factura', 'Fecha', 'Ordenes', 'Método', 'Cliente', 'Tipo', 'Estado', 'Total'];
    const data:any[] = [];
    Array.isArray(sales) && sales.map((sale) => {
      data.push([sale.invoice_number, convertDate(sale?.sale_date), sale.amount_order, sale.payment_method, sale.client, sale.type_sale, sale.status, sale.total])
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
              toast({variant: 'default',title: "Generando reporte pdf",description: "Se ha generado un nuevo informe de ventas.",})}}>
            <FileDigit size={16} color='#6f6f6f'  />
            <span>Generar en PDF</span>
          </Button>
        </Tooltip>
    </div>
  )
  }