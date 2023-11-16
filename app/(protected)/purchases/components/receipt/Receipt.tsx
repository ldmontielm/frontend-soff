'use client'
import React from 'react'
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
import useSWR from 'swr'
import { convertDate } from '../../utils'
import { ArrowDownOnSquareIcon } from '@heroicons/react/24/outline'
import { Order } from '@/app/(protected)/purchases/models/purchase.models'
import { RoutesApi } from '@/models/routes.models'
import { useToast } from "@/components/ui/use-toast"

interface Props {
    id: string
  }
interface OrderInvoice {
  supply: string
  amount: number
  price: number
  subtotal: number
}
export default function Receipt({id}:Props) {
  const {data:orders} = useSWR<Order[]>(`${RoutesApi.PURCHASES}/${id}/orders`)
  const {data:purchase} = useSWR(`${RoutesApi.PURCHASES}/${id}`)
    const { toast } = useToast()
  const formatted = new Intl.NumberFormat("en-US", {
    style: 'currency',
    currency: "USD",
    maximumFractionDigits: 0
  }).format(purchase?.total)
  
  const generateReceipt = () => {
    const doc = new jsPDF()
    doc.text('COMPROBANTE DE COMPRA - MANDISA', 60, 20)
    doc.setFontSize(10)
    doc.text('NÚMERO DE FACTURA: ', 15, 35)
    doc.text(purchase.invoice_number, 57, 35)
    doc.text('TOTAL:', 15, 40)
    doc.text(formatted, 30, 40)
    doc.text('CANTIDAD DE ORDENES:', 15, 45)
    doc.text(purchase.amount_order.toString(), 60, 45)

    // Datos del cliente y fecha
    doc.text('PROVEEDOR:', 130, 35)
    doc.text(purchase.provider.toUpperCase(), 155, 35);
    doc.text('FECHA:', 130, 40 )
    doc.text(`${convertDate(purchase?.purchase_date)}`, 145, 40);
    // Datos de la tabla de productos
    const columns = ['Insumo', 'Cantidad', 'Precio Unitario', 'Subtotal'];
    const data:any[] = [];
    Array.isArray(orders) && orders.map((order) => {
      data.push([order.supply, order.amount_supplies, order.price_supplies, order.subtotal])
    })

    // Generar la tabla de productos
    autoTable(doc, {
      head: [columns],
      body: data,
      startY: 50
    });

    // Calcular el total
    // const total = data.reduce((sum, [, , , total]) => sum + total, 0);

    // Guardar o mostrar el PDF (puedes personalizar esta parte según tus necesidades)
    doc.save(`factura-${id}.pdf`);
  }

  return (
    <div>
      
      {/* <button onClick={() => generateReceipt()}>Descargar pdf</button> */}
      <div onClick={() => {generateReceipt()
      toast({variant: 'default',title: "Generando fcatura",description: "Se ha generado la factura de la compra.",})
      }} className='flex items-center px-2 cursor-default rounded hover:bg-neutral-100 select-none text-sm py-1.5 transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50'>
          <ArrowDownOnSquareIcon className="w-4 h-4 mr-2"/> Descargar factura
      </div>
    </div>
  )
  }
