'use client'
import React, { useState } from 'react'
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
import useSWR from 'swr'
import { convertDate } from '../../utils'
import { ArrowDownOnSquareIcon } from '@heroicons/react/24/outline'
import { Order, Sale } from '../../models/sale.models'
import { RoutesApi } from '@/models/routes.models'
import { Button } from '@/components/ui/button'
import { PDFViewer } from '@react-pdf/renderer';

interface Props {
  id: string,
  sale: Sale
}

interface OrderInvoice {
  product: string
  amount: number
  price: number
  total: number
}
export default function Receipt({id, sale}:Props) {
  const {data:orders} = useSWR<Order[]>(`${RoutesApi.SALES}/${id}/orders`)
  const formatted = new Intl.NumberFormat("en-US", {
    style: 'currency',
    currency: "USD",
    maximumFractionDigits: 0
  }).format(sale.total)

  const formattedDate = new Intl.DateTimeFormat(['ban', 'id']).format(Date.parse(sale.sale_date))

  const generateReceipt = () => {
    const doc = new jsPDF()
    doc.text('RECIBO DE FACTURA - MANDISA', 60, 20)
    doc.setFontSize(10)
    doc.text('NÚMERO DE FACTURA: ', 15, 35)
    doc.text(sale.invoice_number, 57, 35)
    doc.text('TOTAL:', 15, 40)
    doc.text(formatted, 30, 40)
    doc.text('CANTIDAD DE ORDENES:', 15, 45)
    doc.text(sale.amount_order.toString(), 60, 45)
    doc.text('TIPO DE VENTA:', 15, 50)
    doc.text(sale.type_sale.toUpperCase(), 45, 50)
    doc.text('MÉTODO DE PAGO:', 15, 55)
    doc.text(sale.payment_method.toUpperCase(), 51, 55)
    
    doc.text('CLIENTE:', 140, 35)
    doc.text(sale.client.toUpperCase(), 157, 35);
    doc.text('FECHA:', 140, 40)
    doc.text(formattedDate, 154, 40);
    
    // Datos de la tabla de productos
    const columns = ['Producto', 'Cantidad', 'Precio Unitario', 'Total'];
    const data:any[] = [];
    Array.isArray(orders) && orders.map((order) => {
      data.push([order.product, order.amount_product, order.price, order.total])
    })

    // Generar la tabla de productos
    autoTable(doc, {
      head: [columns],
      body: data,
      startY: 60
    });

    // Calcular el total
    // const total = data.reduce((sum, [, , , total]) => sum + total, 0);

    doc.save(`receipt-${id}.pdf`);
  }

  return (
    <div>
      <div onClick={() => generateReceipt()} className='flex items-center px-2 cursor-default rounded hover:bg-neutral-100 select-none text-sm py-1.5 transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50'>
          <ArrowDownOnSquareIcon className="w-4 h-4 mr-2"/> Descargar factura
      </div>
    </div>
  )
}
